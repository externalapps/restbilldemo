import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { 
  TrendingUp, 
  Receipt, 
  Users,
  Calendar,
  BarChart3,
  Download
} from 'lucide-react';

const ReportsPage = () => {
  const { state } = useAppContext();
  const [selectedPeriod, setSelectedPeriod] = useState('today');
  const [selectedReport, setSelectedReport] = useState('sales');

  // Mock data for demonstration - in real app this would come from database
  const mockData = {
    today: {
      totalOrders: 25,
      totalSales: 8250,
      averageOrderValue: 330,
      topItems: [
        { name: 'Chicken Biryani', quantity: 8, revenue: 1600 },
        { name: 'Butter Chicken', quantity: 6, revenue: 1320 },
        { name: 'South Indian Thali', quantity: 5, revenue: 600 },
        { name: 'Veg Biryani', quantity: 4, revenue: 600 },
        { name: 'Tea', quantity: 12, revenue: 180 }
      ],
      categoryBreakdown: [
        { category: 'Breakfast', orders: 8, revenue: 320 },
        { category: 'Lunch Veg', orders: 6, revenue: 720 },
        { category: 'Lunch Non-Veg', orders: 8, revenue: 1680 },
        { category: 'Snacks', orders: 3, revenue: 75 },
        { category: 'Beverages', orders: 12, revenue: 455 }
      ],
      hourlyData: [
        { hour: '8-10', orders: 3, revenue: 120 },
        { hour: '10-12', orders: 5, revenue: 180 },
        { hour: '12-14', orders: 8, revenue: 2400 },
        { hour: '14-16', orders: 2, revenue: 150 },
        { hour: '16-18', orders: 4, revenue: 800 },
        { hour: '18-20', orders: 6, revenue: 2100 },
        { hour: '20-22', orders: 4, revenue: 1200 }
      ]
    }
  };

  const currentData = mockData[selectedPeriod];

  const exportReport = () => {
    // In real app, this would generate and download a CSV/PDF report
    alert('Report export functionality would be implemented here');
  };

  const renderSalesReport = () => (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">{currentData.totalOrders}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Receipt className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
            <span className="text-green-600">+12% from yesterday</span>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Sales</p>
              <p className="text-2xl font-bold text-gray-900">₹{currentData.totalSales.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
            <span className="text-green-600">+8% from yesterday</span>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Order Value</p>
              <p className="text-2xl font-bold text-gray-900">₹{currentData.averageOrderValue}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
            <span className="text-green-600">+5% from yesterday</span>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Tables Served</p>
              <p className="text-2xl font-bold text-gray-900">{state?.currentTable ? state.currentTable - 1 : 0}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
            <span className="text-green-600">+15% from yesterday</span>
          </div>
        </div>
      </div>

      {/* Top Selling Items */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Selling Items</h3>
        <div className="space-y-3">
          {currentData.topItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.quantity} orders</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-800">₹{item.revenue}</p>
                <p className="text-sm text-gray-500">₹{item.revenue / item.quantity} avg</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Category Breakdown</h3>
          <div className="space-y-3">
            {currentData.categoryBreakdown.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-700">{category.category}</span>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-500">{category.orders} orders</span>
                  <span className="font-medium text-gray-800">₹{category.revenue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Hourly Performance</h3>
          <div className="space-y-3">
            {currentData.hourlyData.map((hour, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-700">{hour.hour}</span>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-500">{hour.orders} orders</span>
                  <span className="font-medium text-gray-800">₹{hour.revenue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderOrdersReport = () => (
    <div className="space-y-6">
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-4 font-medium text-gray-600">Order #</th>
                <th className="text-left py-2 px-4 font-medium text-gray-600">Table</th>
                <th className="text-left py-2 px-4 font-medium text-gray-600">Items</th>
                <th className="text-left py-2 px-4 font-medium text-gray-600">Total</th>
                <th className="text-left py-2 px-4 font-medium text-gray-600">Time</th>
                <th className="text-left py-2 px-4 font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {state?.orders && state.orders.length > 0 ? (
                state.orders.slice(-10).reverse().map((order) => (
                  <tr key={order.id} className="border-b border-gray-100">
                    <td className="py-2 px-4 font-medium">#{order.id}</td>
                    <td className="py-2 px-4">Table {order.tableNo}</td>
                    <td className="py-2 px-4">{order.items.length} items</td>
                    <td className="py-2 px-4 font-medium">₹{order.total}</td>
                    <td className="py-2 px-4 text-sm text-gray-500">
                      {new Date(order.timestamp).toLocaleTimeString()}
                    </td>
                    <td className="py-2 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        state.kitchenOrders && state.kitchenOrders.find(k => k.id === order.id) 
                          ? 'bg-orange-100 text-orange-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {state.kitchenOrders && state.kitchenOrders.find(k => k.id === order.id) ? 'In Kitchen' : 'Completed'}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-8 text-center text-gray-500">
                    <Receipt className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                    <p>No orders yet</p>
                    <p className="text-sm">Orders will appear here once you start billing</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div 
      className="w-full h-full relative"
      style={{
        backgroundImage: `url('/Reports.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        width: '100%'
      }}
    >
      {/* Content */}
      <div className="relative z-10 p-4 lg:p-6">
        {/* Header */}
        <div className="mb-6 lg:mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8), -0.5px -0.5px 1px rgba(0,0,0,0.8), 0.5px -0.5px 1px rgba(0,0,0,0.8), -0.5px 0.5px 1px rgba(0,0,0,0.8)' }}>
            Reports & Analytics
          </h1>
          <p className="text-lg lg:text-xl text-white font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8), -0.5px -0.5px 1px rgba(0,0,0,0.8), 0.5px -0.5px 1px rgba(0,0,0,0.8), -0.5px 0.5px 1px rgba(0,0,0,0.8)' }}>
            Comprehensive insights into your restaurant performance
          </p>
        </div>

      {/* Report Controls */}
      <div className="card p-6 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gray-600" />
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-gray-600" />
              <select
                value={selectedReport}
                onChange={(e) => setSelectedReport(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="sales">Sales Report</option>
                <option value="orders">Orders Report</option>
              </select>
            </div>
          </div>

          <button
            onClick={exportReport}
            className="btn-secondary flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Report Content */}
      {selectedReport === 'sales' ? renderSalesReport() : renderOrdersReport()}

      {/* Report Footer */}
      <div className="card p-6 mt-6 bg-gray-50">
        <div className="text-center text-sm text-gray-600">
          <p>Report generated on {new Date().toLocaleString()}</p>
          <p className="mt-1">Data is updated in real-time from your POS system</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ReportsPage;
