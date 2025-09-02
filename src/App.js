import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Home from './components/Home';
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
        <Routes>
          {/* Home Page - No Sidebar */}
          <Route path="/" element={<Home />} />
          
          {/* Dashboard and other pages - With Sidebar */}
          <Route path="/dashboard" element={
            <div className="flex h-screen">
              <Sidebar />
              <div className="flex-1 ml-24 overflow-auto">
                <HomeDashboard />
              </div>
            </div>
          } />
          
          {/* Billing Module */}
          <Route path="/billing" element={
            <div className="flex h-screen">
              <Sidebar />
              <div className="flex-1 ml-24 overflow-auto">
                <BillingModule />
              </div>
            </div>
          } />
          
          {/* Kitchen Display */}
          <Route path="/kitchen" element={
            <div className="flex h-screen">
              <Sidebar />
              <div className="flex-1 ml-24 overflow-auto">
                <KitchenDisplay />
              </div>
            </div>
          } />
          
          {/* Quotations Page */}
          <Route path="/quotations" element={
            <div className="flex h-screen">
              <Sidebar />
              <div className="flex-1 ml-24 overflow-auto">
                <QuotationsPage />
              </div>
            </div>
          } />
          
          {/* Reports Page */}
          <Route path="/reports" element={
            <div className="flex h-screen">
              <Sidebar />
              <div className="flex-1 ml-24 overflow-auto">
                <ReportsPage />
              </div>
            </div>
          } />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
