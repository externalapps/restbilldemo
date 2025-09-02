import React from 'react';
import { useAppContext } from '../context/AppContext';
import { 
  Clock, 
  CheckCircle, 
  Utensils, 
  AlertCircle,
  Timer,
  ChefHat
} from 'lucide-react';

const KitchenDisplay = () => {
  const { state, actions } = useAppContext();

  const markOrderDone = (orderId) => {
    actions.markOrderDone(orderId);
  };

  const getOrderTime = (timestamp) => {
    const orderTime = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now - orderTime) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    
    const hours = Math.floor(diffInMinutes / 60);
    const minutes = diffInMinutes % 60;
    return `${hours}h ${minutes}m ago`;
  };

  const getOrderPriority = (timestamp) => {
    const orderTime = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now - orderTime) / (1000 * 60));
    
    if (diffInMinutes < 5) return 'high'; // Red - urgent (just received)
    if (diffInMinutes < 15) return 'medium'; // Orange - moderate (5-15 min)
    return 'low'; // Green - normal (15+ min)
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'border-red-500 bg-red-50';
      case 'medium':
        return 'border-orange-500 bg-orange-50';
      default:
        return 'border-green-500 bg-green-50';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high':
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      case 'medium':
        return <Timer className="w-5 h-5 text-orange-600" />;
      default:
        return <Clock className="w-5 h-5 text-green-600" />;
    }
  };

  return (
    <div 
      className="w-full h-full relative"
      style={{
        backgroundImage: `url('/Kitchen Display.png')`,
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
        <div className="mb-4 lg:mb-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)' }}>
            Kitchen Display
          </h1>
          <p className="text-lg lg:text-xl text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8), 1px -1px 2px rgba(0,0,0,0.8), -1px 1px 2px rgba(0,0,0,0.8)' }}>
            Monitor and manage active orders
          </p>
        </div>

        {/* Kitchen Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Utensils className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{state.kitchenOrders.length}</h3>
            <p className="text-gray-600">Active Orders</p>
          </div>

          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{state.orders.length - state.kitchenOrders.length}</h3>
            <p className="text-gray-600">Completed Orders</p>
          </div>

          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ChefHat className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{state.orders.length}</h3>
            <p className="text-gray-600">Total Orders Today</p>
          </div>
        </div>

        {/* Active Orders */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Active Orders</h2>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-gray-600">Urgent (0-5 min)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-gray-600">Moderate (5-15 min)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Normal (15+ min)</span>
              </div>
            </div>
          </div>

          {state.kitchenOrders.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">All Caught Up!</h3>
              <p className="text-gray-500">No active orders in the kitchen</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {state.kitchenOrders.map((order) => {
                const priority = getOrderPriority(order.timestamp);
                const priorityColor = getPriorityColor(priority);
                const PriorityIcon = getPriorityIcon(priority);

                return (
                  <div
                    key={order.id}
                    className={`card p-6 border-2 ${priorityColor} hover:shadow-lg transition-shadow duration-300`}
                  >
                    {/* Order Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                          #{order.id}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800">Table {order.tableNo}</h3>
                          <p className="text-sm text-gray-500">{getOrderTime(order.timestamp)}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {PriorityIcon}
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          priority === 'high' ? 'bg-red-100 text-red-700' :
                          priority === 'medium' ? 'bg-orange-100 text-orange-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {priority === 'high' ? 'URGENT' : priority === 'medium' ? 'MODERATE' : 'NORMAL'}
                        </span>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-700 mb-2">Order Items:</h4>
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between items-center text-sm">
                            <span className="text-gray-800">
                              {item.name} × {item.quantity}
                            </span>
                            <span className="font-medium text-gray-600">
                              ₹{item.price * item.quantity}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Order Total */}
                    <div className="border-t border-gray-200 pt-3 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">Total:</span>
                        <span className="text-lg font-bold text-primary-600">₹{order.total}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => markOrderDone(order.id)}
                      className="w-full btn-primary py-3 flex items-center justify-center space-x-2"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>Mark Order Done</span>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Kitchen Instructions */}
        <div className="card p-6 mt-6 bg-blue-50 border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Kitchen Instructions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
            <div>
              <p className="font-medium mb-2">Priority System:</p>
              <ul className="space-y-1">
                <li>• <span className="font-semibold">Red:</span> Urgent priority (0-5 minutes) - Handle immediately!</li>
                <li>• <span className="font-semibold">Orange:</span> Moderate priority (5-15 minutes) - Prepare soon</li>
                <li>• <span className="font-semibold">Green:</span> Normal priority (15+ minutes) - Standard timing</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">Best Practices:</p>
              <ul className="space-y-1">
                <li>• Always prioritize red (urgent) orders first</li>
                <li>• Mark orders as done when completed</li>
                <li>• Communicate with front desk if needed</li>
                <li>• Keep track of order timing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenDisplay;
