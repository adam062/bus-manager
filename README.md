# 🚌 Bus Transport Manager

A comprehensive mobile-first web application for managing group transport with multi-language support, light/dark mode, and role-based access control.

## ✨ Features

### 🌍 Multi-Language Support
- **English** and **Arabic** with RTL support
- Easy language toggle button in header
- All UI elements fully translated

### 🎨 Theme Support
- **Light Mode** and **Dark Mode**
- Smooth transitions between themes
- Persistent theme preference

### 👥 User Roles

#### Admin
- Add/remove users
- Set user access permissions
- Modify daily ride cost
- Confirm payment or mark unpaid
- Add extra money to user accounts
- Withdraw from user balances
- Cancel days with reasons
- View full transaction history for all users
- Access comprehensive statistics

#### User
- View current balance and remaining rides
- See payment status (paid/unpaid)
- View cancelled days with reasons
- Top-up balance
- Change password
- Change profile picture
- Receive warnings when rides ≤ 2
- View personal transaction history

#### Guest
- Special user type for one-time rides
- Managed by Admin only

### 💰 Transaction System
- **Top-up**: Add money to balance
- **Ride Used**: Daily ride deduction
- **Extra**: Admin-only bonus money
- **Discount**: Apply discounts
- **Withdraw**: Remove money from balance

### 📊 Transaction History
Each transaction includes:
- Date and time
- Transaction type
- Amount/rides affected
- Reason (optional)
- Updated balance
- User information (for admin view)

### 🎯 Key Functionality
- **Daily Ride Deduction**: Automatic tracking of ride usage
- **Monthly Settlement**: Balance and ride management
- **Low Ride Warning**: Alert when rides ≤ 2
- **Payment Status Tracking**: Monitor paid/unpaid users
- **Cancelled Days**: Track and display cancelled service days
- **Avatar Selection**: Choose from 10 unique avatars

## 🚀 Getting Started

### Installation
1. Download all files to a folder
2. Open `index.html` in a modern web browser

### Default Admin Credentials
- **Username**: `admin`
- **Password**: `admin123`

⚠️ **Important**: Change the default admin password after first login!

## 📱 Mobile-First Design
- Optimized for mobile devices
- Responsive layout adapts to all screen sizes
- Touch-friendly interface
- Bottom navigation for easy access
- Swipe-friendly modals

## 🎨 Design Features
- **Primary Color**: Blue (#2563eb)
- **Clean & Minimal**: Modern, uncluttered interface
- **Smooth Animations**: Polished user experience
- **Accessibility**: Keyboard navigation support
- **Print-Friendly**: Optimized print styles

## 💾 Data Storage
- All data stored in browser's LocalStorage
- Automatic save on every change
- Persistent across sessions
- No server required

## 🔧 Technical Stack
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables
- **Vanilla JavaScript**: No dependencies
- **Font Awesome**: Icon library
- **DiceBear API**: Avatar generation

## 📖 User Guide

### For Users
1. **Login**: Enter your username and password
2. **View Dashboard**: See your balance, rides, and payment status
3. **Top-up**: Click "Top-up" to add money to your account
4. **View History**: Check all your transactions
5. **Change Settings**: Update password or profile picture
6. **Check Cancelled Days**: View days when service was cancelled

### For Admins
1. **User Management**: Add, edit, or remove users
2. **Set Daily Cost**: Configure the cost per ride
3. **Add Extra Money**: Bonus money for specific users
4. **Withdraw**: Remove money from user accounts
5. **Cancel Days**: Mark days as cancelled with reasons
6. **Monitor**: View statistics and all transactions
7. **Payment Status**: Toggle paid/unpaid status for users

## 🔐 Security Notes
- Passwords stored in LocalStorage (for demo purposes)
- In production, implement proper authentication
- Use HTTPS for secure connections
- Consider backend integration for real-world use

## 🌟 Additional Features
- **Toast Notifications**: User-friendly feedback
- **Loading Indicators**: Visual feedback for actions
- **Empty States**: Helpful messages when no data
- **Confirmation Dialogs**: Prevent accidental deletions
- **Form Validation**: Ensure data integrity
- **Responsive Modals**: Clean popup interfaces

## 📊 Statistics (Admin Only)
- Total number of users
- Total balance across all users
- Current daily cost setting

## 🎯 Future Enhancements
- Export transaction history to CSV/PDF
- Email notifications
- SMS alerts for low balance
- Recurring payment setup
- Advanced reporting and analytics
- Multi-admin support
- Backup and restore functionality

## 🐛 Troubleshooting

### Data Not Saving
- Check browser LocalStorage is enabled
- Clear browser cache and reload
- Ensure JavaScript is enabled

### Display Issues
- Update to latest browser version
- Clear browser cache
- Check internet connection (for icons and avatars)

## 📄 License
This project is open source and available for personal and commercial use.

## 🤝 Support
For issues or questions, please refer to the documentation or contact your system administrator.

---

**Version**: 1.0.0  
**Last Updated**: December 2024  
**Developed with**: ❤️ for efficient transport management
