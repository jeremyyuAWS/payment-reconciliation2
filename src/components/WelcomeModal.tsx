import React from 'react';
import { Brain, X, Sparkles, Bot, Zap, ChevronRight, BarChart3, Clock, Shield, DollarSign, FileText, Lightbulb } from 'lucide-react';

interface WelcomeModalProps {
  onStart: () => void;
  onDismiss: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onStart, onDismiss }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-indigo-600 mr-3" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Welcome to Payment Reconciliation Agent</h2>
                <p className="text-gray-500 mt-1">Your AI-powered financial assistant</p>
              </div>
            </div>
            <button 
              onClick={onDismiss}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Main Content */}
          <div className="mt-6">
            <div className="prose prose-indigo max-w-none">
              <p className="text-gray-600">
                Experience the power of AI in financial reconciliation. Our advanced system transforms how you manage payments and invoices:
              </p>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* AI Features */}
                <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                  <h3 className="text-lg font-semibold text-indigo-900 flex items-center mb-3">
                    <Bot className="h-5 w-5 mr-2" />
                    AI-Powered Features
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Sparkles className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" />
                      <span className="text-indigo-800">Intelligent payment matching with 95% accuracy using machine learning algorithms</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" />
                      <span className="text-indigo-800">Natural language query processing for intuitive data exploration</span>
                    </li>
                    <li className="flex items-start">
                      <Brain className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" />
                      <span className="text-indigo-800">Automated anomaly detection and fraud prevention alerts</span>
                    </li>
                    <li className="flex items-start">
                      <BarChart3 className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" />
                      <span className="text-indigo-800">Predictive analytics for cash flow forecasting</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" />
                      <span className="text-indigo-800">Self-learning system that improves with usage</span>
                    </li>
                  </ul>
                </div>

                {/* Key Benefits */}
                <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                  <h3 className="text-lg font-semibold text-green-900 flex items-center mb-3">
                    <ChevronRight className="h-5 w-5 mr-2" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-green-800">Reduce manual reconciliation time by 80%, saving hours each week</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-green-800">Identify discrepancies and errors automatically with 99% accuracy</span>
                    </li>
                    <li className="flex items-start">
                      <BarChart3 className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-green-800">Get real-time insights into your financial data with interactive dashboards</span>
                    </li>
                    <li className="flex items-start">
                      <DollarSign className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-green-800">Improve cash flow management through faster reconciliation</span>
                    </li>
                    <li className="flex items-start">
                      <FileText className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span className="text-green-800">Generate audit-ready reports with complete reconciliation trails</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* AI Assistant Preview */}
              <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-100">
                <h3 className="text-lg font-semibold text-blue-900 flex items-center mb-3">
                  <Bot className="h-5 w-5 mr-2" />
                  Meet Your AI Assistant
                </h3>
                <p className="text-blue-800 mb-3">
                  Ask questions in natural language and get instant answers. Our AI understands financial terminology and context.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-sm text-gray-800 font-medium">"Show me all unreconciled payments"</p>
                    <p className="text-xs text-gray-500 mt-1">Instantly filters and displays all payments that need attention</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-sm text-gray-800 font-medium">"Why wasn't invoice #1003 reconciled?"</p>
                    <p className="text-xs text-gray-500 mt-1">Provides detailed explanation of reconciliation issues</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-sm text-gray-800 font-medium">"Which customers made duplicate payments?"</p>
                    <p className="text-xs text-gray-500 mt-1">Identifies patterns and potential duplicate transactions</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-sm text-gray-800 font-medium">"Show me payments with amount mismatches"</p>
                    <p className="text-xs text-gray-500 mt-1">Highlights discrepancies between invoices and payments</p>
                  </div>
                </div>
              </div>
              
              {/* New Features Highlight */}
              <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-100">
                <h3 className="text-lg font-semibold text-amber-900 flex items-center mb-3">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  New Features
                </h3>
                <p className="text-amber-800 mb-3">
                  We've added powerful new capabilities to enhance your reconciliation workflow:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-white p-3 rounded border border-amber-200">
                    <h4 className="font-medium text-amber-900">Custom Rules Engine</h4>
                    <p className="text-xs text-gray-600 mt-1">Configure your own matching rules and thresholds</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-amber-200">
                    <h4 className="font-medium text-amber-900">Batch Processing</h4>
                    <p className="text-xs text-gray-600 mt-1">Handle multiple files simultaneously for efficiency</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-amber-200">
                    <h4 className="font-medium text-amber-900">API Integrations</h4>
                    <p className="text-xs text-gray-600 mt-1">Connect with QuickBooks, Xero, and other systems</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-amber-200">
                    <h4 className="font-medium text-amber-900">Advanced Analytics</h4>
                    <p className="text-xs text-gray-600 mt-1">Deeper insights with transaction flow charts</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-amber-200">
                    <h4 className="font-medium text-amber-900">Performance Monitoring</h4>
                    <p className="text-xs text-gray-600 mt-1">Track system metrics and optimization</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-amber-200">
                    <h4 className="font-medium text-amber-900">Testing Tools</h4>
                    <p className="text-xs text-gray-600 mt-1">Validate your reconciliation rules and data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 sm:mb-0">
              Explore our AI-powered platform and revolutionize your financial reconciliation process
            </p>
            <div className="flex space-x-3">
              <button
                onClick={onDismiss}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Skip Tour
              </button>
              <button
                onClick={onStart}
                className="px-4 py-2 bg-indigo-600 border border-transparent rounded-md text-white hover:bg-indigo-700 transition-colors flex items-center"
              >
                Start Guided Tour
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
