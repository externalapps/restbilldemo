import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Sidebar from './components/Sidebar';
import HomeDashboard from './components/HomeDashboard';
import BillingModule from './components/BillingModule';
import QuotationsPage from './components/QuotationsPage';
import KitchenDisplay from './components/KitchenDisplay';
import ReportsPage from './components/ReportsPage';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="flex h-screen bg-gray-50">
          {/* Sidebar */}
          <Sidebar />
          
          {/* Main Content */}
          <div className="flex-1 ml-64 overflow-auto flex flex-col">
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<HomeDashboard />} />
                <Route path="/billing" element={<BillingModule />} />
                <Route path="/quotations" element={<QuotationsPage />} />
                <Route path="/kitchen" element={<KitchenDisplay />} />
                <Route path="/reports" element={<ReportsPage />} />
              </Routes>
            </div>
            
            {/* Main Footer */}
            <footer className="bg-white border-t border-gray-200 py-4 px-6 text-center">
              <div className="text-sm text-gray-600">
                <p>© 2014 - 2025 BeyondX Informatics Analytics Pvt Ltd. All rights reserved.</p>
                <p className="mt-1">BeyondX POS Easy Billing - Professional Restaurant Management Solution</p>
              </div>
            </footer>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
