import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, ReconciliationResult, ReconciliationSummary } from '../types';
import { reconcilePayments, generateReconciliationSummary } from '../utils/reconciliationEngine';
import { invoices, payments, ledgerEntries } from '../data/sampleData';
import DashboardHeader from '../components/Dashboard/DashboardHeader';
import DashboardContent from '../components/Dashboard/DashboardContent';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState<ReconciliationResult[]>([]);
  const [summary, setSummary] = useState<ReconciliationSummary | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const processData = async () => {
      setIsLoading(true);
      
      try {
        // Simulate AI processing delay
        await new Promise(resolve => setTimeout(resolve, 1200));
        
        // Run reconciliation
        const reconciliationResults = reconcilePayments(payments, invoices, ledgerEntries);
        setResults(reconciliationResults);
        
        // Generate summary
        const summaryData = generateReconciliationSummary(reconciliationResults);
        setSummary(summaryData);
      } catch (error) {
        console.error('Error processing data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    processData();
  }, []);

  return (
    <div className="space-y-6">
      <DashboardHeader />
      <DashboardContent 
        results={results}
        summary={summary}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Dashboard;