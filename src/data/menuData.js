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
        name: 'Desktop PC – NXTGN Core i5 Desktop',
        price: '₹24,999',
        specs: '8GB RAM, 256GB SSD, Windows 11',
        compatibility: 'Compatible with Windows 11 systems',
        amazonLink: 'https://www.amazon.in/NXTGN-Generation-Desktop-Software-Pre-Installed/dp/B0DSLMP8JC?utm_source=chatgpt.com',
        description: 'Entry-level desktop PC perfect for POS operations'
      },
      {
        name: 'Thermal Printer – ATPOS AT-402',
        price: '₹5,499',
        specs: 'Thermal Receipt Printer (Bluetooth + USB)',
        compatibility: 'Bluetooth + USB connectivity for receipt printing',
        amazonLink: 'https://www.amazon.in/ATPOS-Thermal-Bluetooth-High-Speed-Printing/dp/B0F26NP7Y1?utm_source=chatgpt.com',
        description: 'High-quality thermal printer for restaurant receipts'
      },
      {
        name: 'Cash Drawer – Rugtek CR-410',
        price: '₹4,699',
        specs: 'Cash Drawer (RJ11, Key Lock)',
        compatibility: 'Seamlessly integrated with thermal printer',
        amazonLink: 'https://www.amazon.in/Rugtek-CR410-B/dp/B08FRF2CMF?utm_source=chatgpt.com',
        description: 'Secure cash drawer for restaurant operations'
      },
      {
        name: 'Receipt Paper – Generic Thermal Paper Roll',
        price: '₹2,000',
        specs: 'Thermal paper rolls (80mm, 50 rolls)',
        compatibility: 'Perfect fit for our thermal printers',
        amazonLink: 'https://www.amazon.in/s?k=thermal+paper+roll+80mm',
        description: 'High-quality thermal paper for clear receipts (NOT included - purchase separately)'
      }
    ],
    hardwareTotal: '₹37,197',
    software: ['Billing System', 'Menu Management', 'Receipt Printing', 'GST Calculation', 'Daily Sales Reports'],
    cost: '75,000',
    totalCost: '₹1,12,197',
    description: 'Perfect for small restaurants and cafes starting their digital journey. Note: Receipt paper sold separately.'
  },
  {
    id: 'medium',
    name: 'Professional Plan',
    hardware: [
      {
        name: 'Desktop PC – NXTGN Core i5 Desktop',
        price: '₹34,999',
        specs: '16GB RAM, 512GB SSD, Windows 11 Pro',
        compatibility: 'Compatible with Windows 11 Pro systems',
        amazonLink: 'https://www.amazon.in/NXTGN-Generation-Desktop-Software-Pre-Installed/dp/B0DSLMP8JC?utm_source=chatgpt.com',
        description: 'Mid-range desktop PC for smooth POS operations'
      },
      {
        name: 'Thermal Printer – ATPOS AT-402',
        price: '₹5,499',
        specs: 'Thermal Receipt Printer (Bluetooth + USB)',
        compatibility: 'Bluetooth + USB connectivity for receipt printing',
        amazonLink: 'https://www.amazon.in/ATPOS-Thermal-Bluetooth-High-Speed-Printing/dp/B0F26NP7Y1?utm_source=chatgpt.com',
        description: 'Fast thermal printer for busy restaurants'
      },
      {
        name: 'Cash Drawer – Rugtek CR-410',
        price: '₹4,699',
        specs: 'Cash Drawer (RJ11, Key Lock)',
        compatibility: 'Seamlessly integrated with thermal printer',
        amazonLink: 'https://www.amazon.in/Rugtek-CR410-B/dp/B08FRF2CMF?utm_source=chatgpt.com',
        description: 'Durable cash drawer for high-volume operations'
      },
      {
        name: 'Receipt Paper – Generic Thermal Paper Roll',
        price: '₹2,000',
        specs: 'Thermal paper rolls (80mm, 50 rolls)',
        compatibility: 'Perfect fit for our thermal printers',
        amazonLink: 'https://www.amazon.in/s?k=thermal+paper+roll+80mm',
        description: 'High-quality thermal paper for clear receipts (INCLUDED in this plan)'
      }
    ],
    hardwareTotal: '₹47,197',
    software: ['Billing System', 'Menu Management', 'Table Selection', 'Receipt Printing', 'GST Calculation', 'Kitchen Orders Display', 'Daily Sales Reports', 'Menu Item Add/Edit/Delete', 'Order History'],
    cost: '1,25,000',
    totalCost: '₹1,72,197',
    description: 'Ideal for growing restaurants with multiple tables and staff. Includes receipt paper supply.'
  },
  {
    id: 'high',
    name: 'Enterprise Plan',
    hardware: [
      {
        name: 'Desktop PC – NXTGN Core i7 Desktop',
        price: '₹38,600',
        specs: '32GB RAM, 1TB SSD, Windows 11 Pro',
        compatibility: 'Compatible with Windows 11 Pro systems',
        amazonLink: 'https://www.amazon.in/NXTGN-Generation-Desktop-Software-Pre-Installed/dp/B0DSLMP8JC?utm_source=chatgpt.com',
        description: 'High-performance desktop PC for enterprise POS'
      },
      {
        name: 'Thermal Printer – ATPOS AT-402',
        price: '₹5,499',
        specs: 'Thermal Receipt Printer (Bluetooth + USB)',
        compatibility: 'Bluetooth + USB connectivity for receipt printing',
        amazonLink: 'https://www.amazon.in/ATPOS-Thermal-Bluetooth-High-Speed-Printing/dp/B0F26NP7Y1?utm_source=chatgpt.com',
        description: 'Professional thermal printer for large operations'
      },
      {
        name: 'Cash Drawer – Rugtek CR-410',
        price: '₹4,699',
        specs: 'Cash Drawer (RJ11, Key Lock)',
        compatibility: 'Seamlessly integrated with thermal printer',
        amazonLink: 'https://www.amazon.in/Rugtek-CR410-B/dp/B08FRF2CMF?utm_source=chatgpt.com',
        description: 'Secure commercial cash drawer with locking mechanism'
      },
      {
        name: 'Kitchen Display – MagicRaven Portable Touchscreen',
        price: '₹20,999',
        specs: '15.6" Portable Touchscreen Monitor (Full HD, HDMI)',
        compatibility: 'Fully integrated with our kitchen management system',
        amazonLink: 'https://www.amazon.in/MagicRaven-Portable-Touchscreen-Lightweight-Speakers/dp/B0DY78Q2YN?utm_source=chatgpt.com',
        description: 'Professional kitchen display for order management'
      },
      {
        name: 'Receipt Paper – Generic Thermal Paper Roll',
        price: '₹3,000',
        specs: 'Thermal paper rolls (80mm, 100 rolls)',
        compatibility: 'Perfect fit for our thermal printers',
        amazonLink: 'https://www.amazon.in/s?k=thermal+paper+roll+80mm',
        description: 'Bulk thermal paper supply for enterprise operations (INCLUDED in this plan)'
      },
      {
        name: 'Network Equipment – D-Link R03 Wireless Router',
        price: '₹1,299',
        specs: 'Wireless Router (300 Mbps, Single Band)',
        compatibility: 'Optimized for our multi-device POS system',
        amazonLink: 'https://www.flipkart.com/d-link-r-03-wireless-router-2-4-ghz-300-mbps-wifi-speed-single-band-external-antenna-ethernet-cable-broadband/p/itmc6bca86e0475a?pid=RTRGAT28HZMHM5BY',
        description: 'Professional networking equipment for restaurant chains'
      }
    ],
    hardwareTotal: '₹73,996',
    software: ['Billing System', 'Menu Management', 'Table Selection', 'Receipt Printing', 'GST Calculation', 'Kitchen Orders Display', 'Daily Sales Reports', 'Menu Item Add/Edit/Delete', 'Order History', 'Analytics & Projections'],
    cost: '2,50,000',
    totalCost: '₹3,23,996',
    description: 'For large restaurants, chains, and fine dining establishments. Includes receipt paper supply.'
  }
];
