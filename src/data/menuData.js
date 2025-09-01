// Menu data structure - can be replaced with database integration later
export const menuData = {
  breakfast: [
    { id: 'b1', name: 'Idli', price: 30, category: 'breakfast' },
    { id: 'b2', name: 'Vada', price: 35, category: 'breakfast' },
    { id: 'b3', name: 'Dosa (Plain)', price: 40, category: 'breakfast' },
    { id: 'b4', name: 'Dosa (Masala)', price: 50, category: 'breakfast' },
    { id: 'b5', name: 'Upma', price: 35, category: 'breakfast' },
    { id: 'b6', name: 'Pongal', price: 45, category: 'breakfast' },
    { id: 'b7', name: 'Poori', price: 50, category: 'breakfast' },
    { id: 'b8', name: 'Paratha', price: 50, category: 'breakfast' }
  ],
  lunchVeg: [
    { id: 'lv1', name: 'South Indian Thali', price: 120, category: 'lunchVeg' },
    { id: 'lv2', name: 'North Indian Thali', price: 150, category: 'lunchVeg' },
    { id: 'lv3', name: 'Veg Biryani', price: 150, category: 'lunchVeg' },
    { id: 'lv4', name: 'Paneer Butter Masala', price: 180, category: 'lunchVeg' },
    { id: 'lv5', name: 'Dal Fry', price: 120, category: 'lunchVeg' },
    { id: 'lv6', name: 'Veg Fried Rice', price: 130, category: 'lunchVeg' }
  ],
  lunchNonVeg: [
    { id: 'lnv1', name: 'Chicken Biryani', price: 200, category: 'lunchNonVeg' },
    { id: 'lnv2', name: 'Mutton Biryani', price: 280, category: 'lunchNonVeg' },
    { id: 'lnv3', name: 'Butter Chicken', price: 220, category: 'lunchNonVeg' },
    { id: 'lnv4', name: 'Chicken Curry', price: 180, category: 'lunchNonVeg' },
    { id: 'lnv5', name: 'Fish Fry', price: 220, category: 'lunchNonVeg' }
  ],
  snacks: [
    { id: 's1', name: 'Samosa', price: 20, category: 'snacks' },
    { id: 's2', name: 'Pakoda', price: 40, category: 'snacks' },
    { id: 's3', name: 'Sandwich', price: 60, category: 'snacks' },
    { id: 's4', name: 'Veg Puff', price: 25, category: 'snacks' }
  ],
  beverages: [
    { id: 'bev1', name: 'Tea', price: 15, category: 'beverages' },
    { id: 'bev2', name: 'Coffee', price: 20, category: 'beverages' },
    { id: 'bev3', name: 'Soft Drink', price: 30, category: 'beverages' },
    { id: 'bev4', name: 'Fresh Lime Soda', price: 40, category: 'beverages' },
    { id: 'bev5', name: 'Lassi', price: 50, category: 'beverages' }
  ]
};

// Quotation plans data - Hardware NOT included, clients purchase separately
export const quotationPlans = [
  {
    id: 'basic',
    name: 'Basic Plan',
    hardware: [
      {
        name: 'Computer/PC',
        price: '₹25,000',
        specs: 'Windows 10/11, 8GB RAM, 256GB SSD',
        compatibility: 'Compatible with Windows 10/11 systems',
        amazonLink: 'https://www.amazon.in/dp/B0C1J9QK9L',
        description: 'Entry-level desktop PC perfect for POS operations'
      },
      {
        name: 'Thermal Printer',
        price: '₹8,000',
        specs: '80mm thermal receipt printer, USB connectivity',
        compatibility: 'USB connectivity for receipt printing',
        amazonLink: 'https://www.amazon.in/dp/B07F6V7X8Y',
        description: 'High-quality thermal printer for restaurant receipts'
      },
      {
        name: 'Cash Drawer',
        price: '₹2,500',
        specs: 'Electronic cash drawer with RJ11 connector',
        compatibility: 'Seamlessly integrated with thermal printer',
        amazonLink: 'https://www.amazon.in/dp/B07F6V7X8Z',
        description: 'Secure cash drawer for restaurant operations'
      }
    ],
    hardwareTotal: '₹35,500',
    software: ['Billing System', 'Menu Management', 'Receipt Printing', 'GST Calculation', 'Daily Sales Reports'],
    cost: '75,000',
    totalCost: '₹1,10,500',
    description: 'Perfect for small restaurants and cafes starting their digital journey'
  },
  {
    id: 'medium',
    name: 'Professional Plan',
    hardware: [
      {
        name: 'Computer/PC',
        price: '₹35,000',
        specs: 'Windows 11, 16GB RAM, 512GB SSD, i5 Processor',
        compatibility: 'Compatible with Windows 11 systems',
        amazonLink: 'https://www.amazon.in/dp/B0C1J9QK9M',
        description: 'Mid-range desktop PC for smooth POS operations'
      },
      {
        name: 'Thermal Printer',
        price: '₹12,000',
        specs: 'High-speed 80mm thermal printer, USB/Ethernet',
        compatibility: 'USB/Ethernet connectivity for receipt printing',
        amazonLink: 'https://www.amazon.in/dp/B07F6V7X8W',
        description: 'Fast thermal printer for busy restaurants'
      },
      {
        name: 'Cash Drawer',
        price: '₹3,500',
        specs: 'Heavy-duty electronic cash drawer with RJ11',
        compatibility: 'Seamlessly integrated with thermal printer',
        amazonLink: 'https://www.amazon.in/dp/B07F6V7X8V',
        description: 'Durable cash drawer for high-volume operations'
      },
      {
        name: 'Receipt Paper',
        price: '₹2,000',
        specs: 'Thermal paper rolls (1 year supply), 80mm width',
        compatibility: 'Perfect fit for our thermal printers',
        amazonLink: 'https://www.amazon.in/dp/B07F6V7X8U',
        description: 'High-quality thermal paper for clear receipts'
      }
    ],
    hardwareTotal: '₹52,500',
    software: ['Billing System', 'Menu Management', 'Table Selection', 'Receipt Printing', 'GST Calculation', 'Kitchen Orders Display', 'Daily Sales Reports', 'Menu Item Add/Edit/Delete', 'Order History'],
    cost: '1,25,000',
    totalCost: '₹1,77,500',
    description: 'Ideal for growing restaurants with multiple tables and staff'
  },
  {
    id: 'high',
    name: 'Enterprise Plan',
    hardware: [
      {
        name: 'Computer/PC',
        price: '₹50,000',
        specs: 'Windows 11 Pro, 32GB RAM, 1TB SSD, i7 Processor',
        compatibility: 'Compatible with Windows 11 Pro systems',
        amazonLink: 'https://www.amazon.in/dp/B0C1J9QK9N',
        description: 'High-performance desktop PC for enterprise POS'
      },
      {
        name: 'Thermal Printer',
        price: '₹15,000',
        specs: 'Commercial-grade thermal printer, USB/Ethernet/WiFi',
        compatibility: 'USB/Ethernet/WiFi connectivity for receipt printing',
        amazonLink: 'https://www.amazon.in/dp/B07F6V7X8T',
        description: 'Professional thermal printer for large operations'
      },
      {
        name: 'Cash Drawer',
        price: '₹5,000',
        specs: 'Commercial cash drawer with lock, RJ11 connector',
        compatibility: 'Seamlessly integrated with thermal printer',
        amazonLink: 'https://www.amazon.in/dp/B07F6V7X8S',
        description: 'Secure commercial cash drawer with locking mechanism'
      },
      {
        name: 'Kitchen Display',
        price: '₹25,000',
        specs: '15" kitchen order display system, touch screen',
        compatibility: 'Fully integrated with our kitchen management system',
        amazonLink: 'https://www.amazon.in/dp/B07F6V7X8R',
        description: 'Professional kitchen display for order management'
      },
      {
        name: 'Receipt Paper',
        price: '₹3,000',
        specs: 'Thermal paper rolls (2 year supply), 80mm width',
        compatibility: 'Perfect fit for our thermal printers',
        amazonLink: 'https://www.amazon.in/dp/B07F6V7X8Q',
        description: 'Bulk thermal paper supply for enterprise operations'
      },
      {
        name: 'Network Equipment',
        price: '₹15,000',
        specs: 'Router, switches, cables for multi-device setup',
        compatibility: 'Optimized for our multi-device POS system',
        amazonLink: 'https://www.amazon.in/dp/B07F6V7X8P',
        description: 'Professional networking equipment for restaurant chains'
      }
    ],
    hardwareTotal: '₹1,13,000',
    software: ['Billing System', 'Menu Management', 'Table Selection', 'Receipt Printing', 'GST Calculation', 'Kitchen Orders Display', 'Daily Sales Reports', 'Menu Item Add/Edit/Delete', 'Order History', 'Analytics & Projections'],
    cost: '2,50,000',
    totalCost: '₹3,63,000',
    description: 'For large restaurants, chains, and fine dining establishments'
  }
];
