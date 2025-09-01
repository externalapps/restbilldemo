# Restaurant POS System

A professional, modern restaurant point-of-sale system built with React and Tailwind CSS. This system provides comprehensive functionality for restaurant management including billing, kitchen display, quotations, and detailed reporting.

## Features

### 🏠 Home Dashboard
- Welcome screen with restaurant branding
- Real-time statistics and overview
- Quick action buttons
- Recent orders display

### 💰 Billing Module
- **Indian Restaurant Menu**: Complete menu with categorized items
  - Breakfast/Tiffin items
  - Lunch/Meals (Veg & Non-Veg)
  - Snacks and Beverages
- Shopping cart functionality
- Real-time order summary
- Thermal receipt preview (80mm width simulation)
- GST calculation (5%)
- Print simulation to thermal printer

### 📋 Quotations System
- Three-tier POS system plans:
  - **Basic Plan** (₹25,000): Essential hardware and software
  - **Medium Plan** (₹45,000): Advanced features with customer display
  - **High-End Plan** (₹75,000): Complete system with kitchen display
- Professional comparison table
- Plan selection with confirmation popup

### 👨‍🍳 Kitchen Display
- Real-time order monitoring
- Priority-based order management
- Color-coded urgency system:
  - 🟢 Green: Normal (0-15 minutes)
  - 🟠 Orange: Moderate (15-30 minutes)
  - 🔴 Red: Urgent (30+ minutes)
- Order completion tracking
- Kitchen instructions and best practices

### 📊 Reports & Analytics
- Daily sales reports
- Order analytics
- Top-selling items
- Category breakdown
- Hourly performance metrics
- Export functionality (placeholder)

## Technical Features

- **Responsive Design**: Works on desktop and tablet
- **State Management**: React Context API with localStorage persistence
- **Modular Architecture**: Extensible component structure
- **Offline Capable**: Data stored locally for offline operation
- **Professional UI**: Modern design with Tailwind CSS
- **Icon Integration**: Lucide React icons for consistent design

## Menu Items

### Breakfast/Tiffin
- Idli (₹30), Vada (₹35), Dosa variants (₹40-50)
- Upma (₹35), Pongal (₹45), Poori/Paratha (₹50)

### Lunch/Meals
- **Veg**: South Indian Thali (₹120), North Indian Thali (₹150), Veg Biryani (₹150)
- **Non-Veg**: Chicken Biryani (₹200), Mutton Biryani (₹280), Butter Chicken (₹220)

### Snacks & Beverages
- Samosa (₹20), Pakoda (₹40), Sandwich (₹60)
- Tea (₹15), Coffee (₹20), Soft Drinks (₹30), Lassi (₹50)

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/          # React components
│   ├── Sidebar.js      # Navigation sidebar
│   ├── HomeDashboard.js # Main dashboard
│   ├── BillingModule.js # Billing and menu
│   ├── QuotationsPage.js # POS system quotes
│   ├── KitchenDisplay.js # Kitchen order management
│   └── ReportsPage.js  # Analytics and reports
├── context/            # State management
│   └── AppContext.js   # Main application context
├── data/               # Static data
│   └── menuData.js     # Menu items and quotations
├── App.js              # Main application component
├── index.js            # Application entry point
└── index.css           # Global styles and Tailwind
```

## Future Enhancements

The system is designed to be easily extensible for:

- **Database Integration**: Replace localStorage with real database
- **Printer Integration**: Connect to actual thermal printers
- **Payment Processing**: Integrate payment gateways
- **Inventory Management**: Track stock levels
- **Customer Management**: Loyalty programs and customer data
- **Multi-location Support**: Manage multiple restaurant locations
- **Mobile App**: React Native companion app
- **Offline Desktop App**: Electron-based desktop application

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This project is built for demonstration and commercial use. All rights reserved.

---

**Built with React + Tailwind CSS** | Professional Restaurant POS System
