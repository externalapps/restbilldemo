import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state for the application
const initialState = {
  cart: [],
  orders: [],
  kitchenOrders: [],
  dailySales: {
    totalOrders: 25,
    totalSales: 8250
  },
  currentTable: 1,
  orderCounter: 1
};

// Action types for state management
const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_CART_QUANTITY: 'UPDATE_CART_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  GENERATE_BILL: 'GENERATE_BILL',
  MARK_ORDER_DONE: 'MARK_ORDER_DONE',
  UPDATE_DAILY_SALES: 'UPDATE_DAILY_SALES'
};

// Reducer function for state updates
function appReducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };

    case actionTypes.UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cart: []
      };

    case actionTypes.GENERATE_BILL:
      const newOrder = {
        id: state.orderCounter,
        tableNo: state.currentTable,
        items: state.cart,
        total: state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        timestamp: new Date().toISOString(),
        status: 'pending'
      };
      
      return {
        ...state,
        orders: [...state.orders, newOrder],
        kitchenOrders: [...state.kitchenOrders, newOrder],
        orderCounter: state.orderCounter + 1,
        currentTable: state.currentTable + 1,
        cart: []
      };

    case actionTypes.MARK_ORDER_DONE:
      return {
        ...state,
        kitchenOrders: state.kitchenOrders.filter(order => order.id !== action.payload)
      };

    case actionTypes.UPDATE_DAILY_SALES:
      return {
        ...state,
        dailySales: action.payload
      };

    default:
      return state;
  }
}

// Create context
const AppContext = createContext();

// Provider component
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load data from localStorage on app start (simulates database persistence)
  useEffect(() => {
    const savedState = localStorage.getItem('restaurantPOSState');
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState);
        // Only restore certain parts of the state
        if (parsedState.orders) {
          dispatch({ type: 'RESTORE_STATE', payload: parsedState });
        }
      } catch (error) {
        console.error('Error loading saved state:', error);
      }
    }
  }, []);

  // Save state to localStorage when it changes (simulates database persistence)
  useEffect(() => {
    localStorage.setItem('restaurantPOSState', JSON.stringify({
      orders: state.orders,
      dailySales: state.dailySales,
      orderCounter: state.orderCounter
    }));
  }, [state.orders, state.dailySales, state.orderCounter]);

  // Action creators
  const actions = {
    addToCart: (item) => dispatch({ type: actionTypes.ADD_TO_CART, payload: item }),
    removeFromCart: (itemId) => dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: itemId }),
    updateCartQuantity: (id, quantity) => dispatch({ type: actionTypes.UPDATE_CART_QUANTITY, payload: { id, quantity } }),
    clearCart: () => dispatch({ type: actionTypes.CLEAR_CART }),
    generateBill: () => dispatch({ type: actionTypes.GENERATE_BILL }),
    markOrderDone: (orderId) => dispatch({ type: actionTypes.MARK_ORDER_DONE, payload: orderId }),
    updateDailySales: (salesData) => dispatch({ type: actionTypes.UPDATE_DAILY_SALES, payload: salesData })
  };

  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to use the context
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
