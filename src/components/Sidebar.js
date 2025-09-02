import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Receipt, 
  FileText, 
  Monitor, 
  BarChart3
} from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="fixed left-0 top-0 h-full w-24 bg-white border-r border-gray-200 shadow-lg z-50">
      {/* Logo */}
      <div className="p-4 border-b border-gray-200">
        <button
          onClick={handleLogoClick}
          className="w-12 h-12 rounded-lg flex items-center justify-center overflow-hidden hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <img src="/resbilllogo.png" alt="BeyondX Logo" className="w-full h-full object-cover" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex flex-col items-center p-3 rounded-lg transition-colors ${
              isActive
                ? 'bg-orange-100 text-orange-600 border-r-2 border-orange-500'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
            }`
          }
        >
          <Home className="w-6 h-6 mb-1" />
          <span className="text-xs font-medium">Dashboard</span>
        </NavLink>

        <NavLink
          to="/billing"
          className={({ isActive }) =>
            `flex flex-col items-center p-3 rounded-lg transition-colors ${
              isActive
                ? 'bg-orange-100 text-orange-600 border-r-2 border-orange-500'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
            }`
          }
        >
          <Receipt className="w-6 h-6 mb-1" />
          <span className="text-xs font-medium">Billing</span>
        </NavLink>

        <NavLink
          to="/kitchen"
          className={({ isActive }) =>
            `flex flex-col items-center p-3 rounded-lg transition-colors ${
              isActive
                ? 'bg-orange-100 text-orange-600 border-r-2 border-orange-500'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
            }`
          }
        >
          <Monitor className="w-6 h-6 mb-1" />
          <span className="text-xs font-medium">Kitchen</span>
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `flex flex-col items-center p-3 rounded-lg transition-colors ${
              isActive
                ? 'bg-orange-100 text-orange-600 border-r-2 border-orange-500'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
            }`
          }
        >
          <BarChart3 className="w-6 h-6 mb-1" />
          <span className="text-xs font-medium">Reports</span>
        </NavLink>

        <NavLink
          to="/quotations"
          className={({ isActive }) =>
            `flex flex-col items-center p-3 rounded-lg transition-colors ${
              isActive
                ? 'bg-orange-100 text-orange-600 border-r-2 border-orange-500'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
            }`
          }
        >
          <FileText className="w-6 h-6 mb-1" />
          <span className="text-xs font-medium">Quotations</span>
        </NavLink>
      </nav>

      {/* Brand Name */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <div className="text-xs font-bold text-gray-800 mb-1">BeyondX</div>
        <div className="text-xs text-gray-600">POS</div>
        <div className="text-xs text-gray-500 mt-1">Easy Billing</div>
      </div>
    </div>
  );
};

export default Sidebar;
