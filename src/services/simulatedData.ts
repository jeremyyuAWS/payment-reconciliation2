import { Invoice, Payment, LedgerEntry, ReconciliationResult } from '../types';
import { invoices as sampleInvoices, payments as samplePayments, ledgerEntries as sampleLedgerEntries } from '../data/sampleData';
import { reconcilePayments } from '../utils/reconciliationEngine';

// Helper function to simulate network delay
function simulateDelay<T>(result: T, ms: number = 500): Promise<T> {
  return new Promise(resolve => setTimeout(() => resolve(result), ms));
}

// Helper function to get a random date in 2025 in YYYY-MM-DD format
function getRandomDate(): string {
  const start = new Date(2025, 0, 1).getTime();
  const end = new Date(2025, 11, 31).getTime();
  const randomTime = start + Math.random() * (end - start);
  const d = new Date(randomTime);
  return d.toISOString().split('T')[0];
}

// Helper function to get a random amount between min and max
function getRandomAmount(min: number, max: number): number {
  return parseFloat((min + Math.random() * (max - min)).toFixed(2));
}

// Helper function to select a random element from an array
function randomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Generate extra invoices
function generateExtraInvoices(count: number): Invoice[] {
  const customerNames = ['Simulated Corp', 'Demo Inc', 'Test LLC', 'Example Co', 'Mock Partners'];
  const statuses: Array<'Open' | 'Paid' | 'Overdue'> = ['Open', 'Paid', 'Overdue'];
  const extraInvoices: Invoice[] = [];

  for (let i = 0; i < count; i++) {
    const invoice: Invoice = {
      invoice_id: `SIM-INV-${Math.floor(Math.random() * 9000) + 1000}`,
      customer_name: randomElement(customerNames),
      amount_due: getRandomAmount(500, 5000),
      due_date: getRandomDate(),
      status: randomElement(statuses)
    };
    extraInvoices.push(invoice);
  }
  return extraInvoices;
}

// Generate extra payments referencing invoices
function generateExtraPayments(count: number, invoices: Invoice[]): Payment[] {
  const paymentMethods: Payment["method"][] = ['ACH', 'Wire', 'Check', 'Credit Card'];
  const extraPayments: Payment[] = [];

  for (let i = 0; i < count; i++) {
    // Select a random invoice to reference
    const invoice = randomElement(invoices);
    // Decide payment amount: mostly exact match, sometimes partial
    const isExact = Math.random() < 0.7;
    let amount = invoice.amount_due;
    if (!isExact) {
      // partial payment between 30% and 90% of invoice amount
      amount = parseFloat((invoice.amount_due * (0.3 + Math.random() * 0.6)).toFixed(2));
    }
    const payment: Payment = {
      payment_id: `SIM-PAY-${Math.floor(Math.random() * 9000) + 1000}`,
      payer_name: invoice.customer_name,
      amount,
      payment_date: getRandomDate(),
      method: randomElement(paymentMethods),
      reference_note: invoice.invoice_id
    };
    extraPayments.push(payment);
  }
  return extraPayments;
}

// Generate extra ledger entries for extra payments
function generateExtraLedgerEntries(extraPayments: Payment[], invoices: Invoice[]): LedgerEntry[] {
  const extraLedgerEntries: LedgerEntry[] = [];

  extraPayments.forEach(payment => {
    // Find the invoice corresponding to the payment reference
    const invoice = invoices.find(inv => inv.invoice_id === payment.reference_note);
    if (invoice) {
      const ledgerEntry: LedgerEntry = {
        ledger_entry_id: `SIM-LED-${Math.floor(Math.random() * 9000) + 1000}`,
        invoice_id: invoice.invoice_id,
        payment_id: payment.payment_id,
        amount: payment.amount,
        entry_date: payment.payment_date
      };
      extraLedgerEntries.push(ledgerEntry);
    }
  });

  return extraLedgerEntries;
}

// Generate a consistent simulated data set
function generateSimulatedDataSet(): { invoices: Invoice[]; payments: Payment[]; ledgerEntries: LedgerEntry[] } {
  // Generate extra records
  const extraInvoiceCount = 3;
  const extraPaymentCount = 3;

  const extraInvoices = generateExtraInvoices(extraInvoiceCount);
  const combinedInvoices = [...sampleInvoices, ...extraInvoices];

  const extraPayments = generateExtraPayments(extraPaymentCount, combinedInvoices);
  const combinedPayments = [...samplePayments, ...extraPayments];

  const extraLedgerEntries = generateExtraLedgerEntries(extraPayments, combinedInvoices);
  const combinedLedgerEntries = [...sampleLedgerEntries, ...extraLedgerEntries];

  return {
    invoices: combinedInvoices,
    payments: combinedPayments,
    ledgerEntries: combinedLedgerEntries
  };
}

// Exported asynchronous functions
export async function getSimulatedInvoices(): Promise<Invoice[]> {
  const { invoices } = generateSimulatedDataSet();
  return simulateDelay(invoices, 500);
}

export async function getSimulatedPayments(): Promise<Payment[]> {
  const { payments, invoices } = generateSimulatedDataSet();
  // Ensure payments reference valid invoices from the combined set
  return simulateDelay(payments, 500);
}

export async function getSimulatedLedgerEntries(): Promise<LedgerEntry[]> {
  const { ledgerEntries } = generateSimulatedDataSet();
  return simulateDelay(ledgerEntries, 500);
}

export async function getSimulatedReconciliationResults(): Promise<ReconciliationResult[]> {
  const { invoices, payments, ledgerEntries } = generateSimulatedDataSet();
  const results = reconcilePayments(payments, invoices, ledgerEntries);
  return simulateDelay(results, 700);
}
