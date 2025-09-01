import React from 'react';
import { useAppContext } from '../context/AppContext';
import { 
  Receipt, 
  TrendingUp, 
  Clock, 
  Users,
  Monitor,
  BarChart3
} from 'lucide-react';

const HomeDashboard = () => {
  const { state } = useAppContext();

  const stats = [
    {
      title: 'Total Orders Today',
      value: state.dailySales.totalOrders,
      icon: Receipt,
      color: 'bg-blue-500',
      change: '+12%'
    },
    {
      title: 'Total Sales Today',
      value: `₹${state.dailySales.totalSales.toLocaleString()}`,
      icon: TrendingUp,
      color: 'bg-green-500',
      change: '+8%'
    },
    {
      title: 'Active Orders',
      value: state.kitchenOrders.length,
      icon: Clock,
      color: 'bg-orange-500',
      change: 'Live'
    },
    {
      title: 'Tables Served',
      value: state.currentTable - 1,
      icon: Users,
      color: 'bg-purple-500',
      change: 'Today'
    }
  ];

  const recentOrders = state.orders.slice(-5).reverse();

  return (
    <div className="p-6">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome to Restaurant POS
        </h1>
        <p className="text-gray-600">
          Professional point of sale system for modern restaurants
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="mt-4">
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full btn-primary text-left flex items-center">
              <Receipt className="w-5 h-5 mr-3" />
              Start New Order
            </button>
            <button className="w-full btn-secondary text-left flex items-center">
              <Monitor className="w-5 h-5 mr-3" />
              View Kitchen Orders
            </button>
            <button className="w-full btn-secondary text-left flex items-center">
              <BarChart3 className="w-5 h-5 mr-3" />
              View Reports
            </button>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Today's Overview</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Time:</span>
              <span className="font-medium">{new Date().toLocaleTimeString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">System Status:</span>
              <span className="text-green-600 font-medium">Online</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Last Sync:</span>
              <span className="font-medium">Just now</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Orders</h3>
        {recentOrders.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 px-4 font-medium text-gray-600">Order #</th>
                  <th className="text-left py-2 px-4 font-medium text-gray-600">Table</th>
                  <th className="text-left py-2 px-4 font-medium text-gray-600">Items</th>
                  <th className="text-left py-2 px-4 font-medium text-gray-600">Total</th>
                  <th className="text-left py-2 px-4 font-medium text-gray-600">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-100">
                    <td className="py-2 px-4 font-medium">#{order.id}</td>
                    <td className="py-2 px-4">Table {order.tableNo}</td>
                    <td className="py-2 px-4">{order.items.length} items</td>
                    <td className="py-2 px-4 font-medium">₹{order.total}</td>
                    <td className="py-2 px-4 text-sm text-gray-500">
                      {new Date(order.timestamp).toLocaleTimeString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <Receipt className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p>No orders yet today</p>
            <p className="text-sm">Start by creating a new order</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeDashboard;
