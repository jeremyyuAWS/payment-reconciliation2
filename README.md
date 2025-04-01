# 💳 Payment Reconciliation Agent (Demo App)

An AI-powered demo application that automatically reconciles payments with invoices and ledger records. It uses synthetic US-based financial data to identify and explain discrepancies such as duplicate payments, over/underpayments, and missing ledger entries.

---

## 🧠 What It Does

This demo showcases a **Payment Reconciliation Agent** that:
- Matches **incoming payments** to **outstanding invoices**
- Cross-verifies matched transactions against the **general ledger**
- Detects and explains common reconciliation issues:
  - Duplicate payments
  - Missing payments
  - Mismatched amounts
  - Unknown payers
- Responds to **natural language queries** (e.g., "Why wasn't INV-1003 reconciled?")

---

## 🎯 Demo Use Case

Finance teams often spend hours manually reconciling payment records with internal accounting systems. This demo illustrates how AI can automate and simplify that process.

**Target Users:**
- Finance & Accounting Teams
- Controllers and Auditors
- AI/ML Product Buyers
- SaaS Decision Makers

---

## 📁 Demo Data

All data is **synthetic** and designed for the **US market**. The app uses three main tables:

### `invoices.csv`
| invoice_id | customer_name | amount_due | due_date   | status |
|------------|----------------|------------|------------|--------|
| INV-1001   | Acme Corp       | 1200.00    | 2025-02-15 | Open   |

### `payments.csv`
| payment_id | payer_name | amount | payment_date | method | reference_note |
|------------|------------|--------|--------------|--------|----------------|
| PAY-501    | Acme Corp  | 1200.00 | 2025-02-15   | ACH    | INV-1001       |

### `ledger.csv`
| ledger_entry_id | invoice_id | payment_id | amount  | entry_date |
|------------------|------------|------------|---------|------------|
| LED-001          | INV-1001   | PAY-501    | 1200.00 | 2025-02-15 |

> Additional anomalies (duplicate payments, partial payments, etc.) are built in to simulate real-world edge cases.

---

## 🖥️ Tech Stack

| Layer          | Tech                     |
|----------------|--------------------------|
| Frontend       | React + Tailwind CSS     |
| Data Matching  | Custom JS matching engine|
| Data Storage   | Static TypeScript objects|
| State Management| React Hooks (useState)  |

---

## 🚀 How It Works

1. **Data Load**: Invoices, payments, and ledger entries are loaded from static data.
2. **Matching Engine**:
   - Matches payments to invoices using amount, payer name, and reference note.
   - Verifies matched records against the ledger.
3. **Discrepancy Engine**:
   - Flags and classifies unmatched or inconsistent entries.
   - Uses fuzzy logic to handle naming mismatches.
4. **Explainability Agent**:
   - Accepts natural language questions.
   - Generates reasoning steps and decisions for reconciliation status.

---

## 💬 Example Prompts

> These work in the built-in Q&A assistant:

- "Show me unreconciled payments"
- "Why wasn't INV-1003 matched?"
- "Which customers made duplicate payments?"

---

## 📸 UI Features

**Reconciliation Dashboard**
- Matched vs Unmatched statistics
- Filters by date, customer, status
- Top issues breakdown
- Interactive data visualization

**Transaction Detail**
- Matching logic per transaction
- Flags and error type
- Decision trace showing step-by-step reconciliation reasoning
- Animated transitions between states

**Q&A Panel**
- Conversational interface for querying reconciliation results
- Natural language processing for complex queries
- Contextual suggestions based on current data

**Guided Experience**
- Interactive onboarding tour
- Contextual help tooltips
- Progressive feature introduction

---

## 📦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/payment-reconciliation-agent.git
cd payment-reconciliation-agent

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit: http://localhost:5173

---

## 🔄 Simulated Data Service

The application now includes a robust simulated data service that provides realistic financial data for demonstration purposes:

- **Dynamic Data Generation**: Creates varied invoices, payments, and ledger entries with realistic patterns
- **Consistent Data Sets**: Ensures data consistency across different API calls
- **Network Simulation**: Includes simulated network delays for realistic API behavior
- **Edge Cases**: Automatically generates common reconciliation challenges like partial payments and mismatched references

### Extending for Real API Integration

The simulated data service is designed with future API integration in mind:

```typescript
// Current simulated API call
const invoices = await getSimulatedInvoices();

// Future real API integration (same interface)
const invoices = await getInvoices(); // Real API call with identical return type
```

This architecture allows for seamless switching between simulated and real data sources without changing component code.

## 🎨 UI Improvements

### Enhanced Welcome Modal

The welcome modal has been upgraded to provide:

- **AI Capability Showcase**: Detailed explanation of the AI-powered features
- **Benefits Visualization**: Clear presentation of key reconciliation benefits
- **Assistant Preview**: Examples of natural language queries the system can handle
- **Personalized Experience**: User preference saving for returning visitors

### Guided Tour

A new guided tour feature helps users navigate the application:

- **Interactive Walkthrough**: Step-by-step introduction to key features
- **Contextual Help**: Tooltips explaining complex reconciliation concepts
- **Progressive Disclosure**: Introduces features in a logical sequence
- **Skip & Resume**: Options to skip or resume the tour at any time

## 🛠️ Future Enhancements

- **Data Import/Export**: Add CSV upload functionality to work with custom data
- **Analytics Dashboard**: Add charts showing reconciliation trends
- **Machine Learning**: Integrate actual ML models for more sophisticated matching
- **User Authentication**: Add multi-user support with role-based permissions
- **API Integration**: Connect to accounting software via API
- **Bulk Actions**: Support bulk reconciliation approvals
- **Custom Rules**: Allow users to define custom matching rules

---

## 📚 Learn More

This demo is inspired by real-world financial reconciliation challenges. For more information on automated reconciliation, check out:

- [The Future of Finance Automation](https://example.com)
- [AI in Accounts Receivable](https://example.com)
- [Best Practices for Payment Reconciliation](https://example.com)

---

## 📄 License

[MIT](LICENSE)
