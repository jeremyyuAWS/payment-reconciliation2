import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Activity, Settings, BarChart2 } from 'lucide-react';
import { ReconciliationResult } from './types';
import { getSimulatedReconciliationResults } from './services/simulatedData';

// Import components
import ReconciliationDashboard from './components/ReconciliationDashboard';
import PerformanceMonitorPanel from './components/PerformanceOptimization/PerformanceMonitorPanel';
import TestingDashboard from './components/Testing/TestingDashboard';
import { AdvancedAnalyticsDashboard } from './components/AdvancedAnalytics';

const ReconciliationApp: React.FC = () => {
  const [results, setResults] = useState<ReconciliationResult[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Fetch initial simulated data on component mount
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const simulatedResults = await getSimulatedReconciliationResults();
        setResults(simulatedResults);
      } catch (error) {
        console.error("Error fetching simulated reconciliation results:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchInitialData();
  }, []);
  
  const getActivePage = () => {
    switch (location.pathname) {
      case '/analytics':
        return 'analytics';
      case '/performance':
        return 'performance';
      case '/testing':
        return 'testing';
      default:
        return 'dashboard';
    }
  };
  
  const handleNavigation = (page: string) => {
    switch (page) {
      case 'analytics':
        navigate('/analytics');
        break;
      case 'performance':
        navigate('/performance');
        break;
      case 'testing':
        navigate('/testing');
        break;
      default:
        navigate('/');
    }
  };

  const handleResultsUpdate = (newResults: ReconciliationResult[]) => {
    setResults(newResults);
  };
  
  const refreshSimulatedData = async () => {
    try {
      setLoading(true);
      const simulatedResults = await getSimulatedReconciliationResults();
      setResults(simulatedResults);
    } catch (error) {
      console.error("Error refreshing simulated reconciliation results:", error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-700 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold">Payment Reconciliation Agent</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex space-x-1">
              <button
                onClick={() => handleNavigation('dashboard')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  getActivePage() === 'dashboard' 
                    ? 'bg-indigo-800 text-white' 
                    : 'text-indigo-100 hover:bg-indigo-600'
                }`}
              >
                Dashboard
              </button>
              
              <button
                onClick={() => handleNavigation('performance')}
                className={`performance-button px-3 py-2 rounded-md text-sm font-medium ${
                  getActivePage() === 'performance' 
                    ? 'bg-indigo-800 text-white' 
                    : 'text-indigo-100 hover:bg-indigo-600'
                }`}
              >
                <span className="flex items-center">
                  <Settings className="h-4 w-4 mr-1.5" />
                  Performance
                </span>
              </button>
              
              <button
                onClick={() => handleNavigation('testing')}
                className={`testing-button px-3 py-2 rounded-md text-sm font-medium ${
                  getActivePage() === 'testing' 
                    ? 'bg-indigo-800 text-white' 
                    : 'text-indigo-100 hover:bg-indigo-600'
                }`}
              >
                <span className="flex items-center">
                  <Activity className="h-4 w-4 mr-1.5" />
                  Testing
                </span>
              </button>
              
              <button
                onClick={() => handleNavigation('analytics')}
                className={`advanced-analytics-button px-3 py-2 rounded-md text-sm font-medium ${
                  getActivePage() === 'analytics' 
                    ? 'bg-indigo-800 text-white' 
                    : 'text-indigo-100 hover:bg-indigo-600'
                }`}
              >
                <span className="flex items-center">
                  <BarChart2 className="h-4 w-4 mr-1.5" />
                  Analytics
                </span>
              </button>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {loading && (
          <div className="flex justify-center items-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-700"></div>
          </div>
        )}
        <Routes>
          <Route path="/" element={
            <ReconciliationDashboard 
              onResultsUpdate={handleResultsUpdate} 
              initialResults={results}
              refreshData={refreshSimulatedData}
              isLoading={loading}
            />
          } />
          <Route path="/performance" element={
            <PerformanceMonitorPanel 
              onBack={() => handleNavigation('dashboard')} 
              results={results}
            />
          } />
          <Route path="/testing" element={
            <TestingDashboard 
              onBack={() => handleNavigation('dashboard')} 
              results={results}
            />
          } />
          <Route path="/analytics" element={
            <AdvancedAnalyticsDashboard 
              results={results} 
              onBack={() => handleNavigation('dashboard')}
              refreshData={refreshSimulatedData}
              isLoading={loading}
            />
          } />
        </Routes>
      </main>
    </div>
  );
};

export default ReconciliationApp;
