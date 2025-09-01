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
      'Computer/PC (₹25,000) - Windows 10/11, 8GB RAM, 256GB SSD',
      'Thermal Printer (₹8,000) - 80mm thermal receipt printer',
      'Cash Drawer (₹2,500) - Electronic cash drawer'
    ],
    hardwareTotal: '₹35,500',
    software: ['Basic Billing System', 'Menu Management', 'Daily Sales Reports', 'Customer Database', 'Basic User Management', 'Receipt Generation', 'Tax Calculation (GST)', 'PDF Bill Generation', 'Email Support'],
    cost: '₹75,000',
    totalCost: '₹1,10,500',
    description: 'Perfect for small restaurants and cafes starting their digital journey'
  },
  {
    id: 'medium',
    name: 'Professional Plan',
    hardware: [
      'Computer/PC (₹35,000) - Windows 11, 16GB RAM, 512GB SSD, i5 Processor',
      'Thermal Printer (₹12,000) - High-speed 80mm thermal printer',
      'Cash Drawer (₹3,500) - Heavy-duty electronic cash drawer',
      'Receipt Paper (₹2,000) - Thermal paper rolls (1 year supply)'
    ],
    hardwareTotal: '₹52,500',
    software: ['Advanced Billing System', 'Menu Management with Categories', 'Inventory Tracking', 'Detailed Analytics & Reports', 'Table Management', 'Staff Management', 'Customer Loyalty Program', 'Multi-payment Support', 'PDF Bill Generation', 'Cloud Backup', 'Phone & Email Support', 'Basic Training'],
    cost: '₹1,25,000',
    totalCost: '₹1,77,500',
    description: 'Ideal for growing restaurants with multiple tables and staff'
  },
  {
    id: 'high',
    name: 'Enterprise Plan',
    hardware: [
      'Computer/PC (₹50,000) - Windows 11 Pro, 32GB RAM, 1TB SSD, i7 Processor',
      'Thermal Printer (₹15,000) - Commercial-grade thermal printer',
      'Cash Drawer (₹5,000) - Commercial cash drawer with lock',
      'Kitchen Display (₹25,000) - 15" kitchen order display system',
      'Receipt Paper (₹3,000) - Thermal paper rolls (2 year supply)',
      'Network Equipment (₹15,000) - Router, switches, cables'
    ],
    hardwareTotal: '₹1,13,000',
    software: ['Complete POS System', 'Advanced Inventory Management', 'Multi-location Support', 'Advanced Analytics & AI Insights', 'Customer Relationship Management', 'Staff Performance Tracking', 'Advanced Reporting Suite', 'API Integration', 'Mobile App for Staff', 'PDF Bill Generation', 'Cloud Hosting (1 year)', 'Premium Support (24/7)', 'Comprehensive Training', 'Customization Services'],
    cost: '₹2,50,000',
    totalCost: '₹3,63,000',
    description: 'For large restaurants, chains, and fine dining establishments'
  }
];
