import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Receipt, 
  FileText, 
  Monitor, 
  BarChart3,
  Settings
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { path: '/', icon: Home, label: 'Dashboard' },
    { path: '/billing', icon: Receipt, label: 'Billing & Menu' },
    { path: '/kitchen', icon: Monitor, label: 'Kitchen Display' },
    { path: '/reports', icon: BarChart3, label: 'Reports' },
    { path: '/quotations', icon: FileText, label: 'Quotations' }
  ];

  return (
    <div className="bg-white shadow-lg w-64 min-h-screen fixed left-0 top-0 z-10">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
            <img src="/resbilllogo.png" alt="BeyondX Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">BeyondX POS</h1>
            <p className="text-sm text-gray-500">Easy Billing</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `sidebar-item ${isActive ? 'active' : ''}`
                  }
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>


    </div>
  );
};

export default Sidebar;
