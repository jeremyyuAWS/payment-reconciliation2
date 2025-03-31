import React from 'react';
import { ReconciliationResult, ReconciliationSummary } from '../../types';
import ReconciliationSummaryCard from '../ReconciliationSummaryCard';
import CustomerAnalysisChart from '../CustomerAnalysisChart';
import IssuesTrendChart from '../IssuesTrendChart';
import TransactionList from '../TransactionList';
import NaturalLanguageAssistant from '../NaturalLanguageAssistant';

interface DashboardContentProps {
  results: ReconciliationResult[];
  summary: ReconciliationSummary | null;
  isLoading: boolean;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ results, summary, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {summary && <ReconciliationSummaryCard summary={summary} />}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CustomerAnalysisChart results={results} />
        <IssuesTrendChart results={results} />
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-4 py-5 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Transactions</h2>
        </div>
        <TransactionList 
          results={results} 
          onSelectTransaction={() => {}}
        />
      </div>

      <NaturalLanguageAssistant results={results} />
    </div>
  );
};

export default DashboardContent;