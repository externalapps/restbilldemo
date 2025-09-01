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
          <div className="flex-1 ml-64 overflow-auto">
            <Routes>
              <Route path="/" element={<HomeDashboard />} />
              <Route path="/billing" element={<BillingModule />} />
              <Route path="/quotations" element={<QuotationsPage />} />
              <Route path="/kitchen" element={<KitchenDisplay />} />
              <Route path="/reports" element={<ReportsPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
