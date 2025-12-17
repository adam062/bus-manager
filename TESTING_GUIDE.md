# 🧪 Testing Guide - Bus Transport Manager

## 📋 Pre-Testing Checklist
- [ ] Open `index.html` in a modern browser
- [ ] Open browser console (F12) to check for errors
- [ ] Ensure JavaScript is enabled
- [ ] Clear LocalStorage if testing from scratch

---

## 🔐 Authentication Testing

### Test 1: Admin Login
**Steps:**
1. Open the application
2. Enter username: `admin`
3. Enter password: `admin123`
4. Click Login

**Expected Result:**
- ✅ Successfully logged in
- ✅ Redirected to dashboard
- ✅ Admin role displayed
- ✅ Admin-specific buttons visible

### Test 2: Invalid Login
**Steps:**
1. Enter username: `wronguser`
2. Enter password: `wrongpass`
3. Click Login

**Expected Result:**
- ✅ Error message displayed
- ✅ Stays on login screen
- ✅ Form not cleared

### Test 3: Password Visibility Toggle
**Steps:**
1. Enter any password
2. Click the eye icon

**Expected Result:**
- ✅ Password becomes visible
- ✅ Icon changes to eye-slash
- ✅ Click again to hide

---

## 🌍 Language & Theme Testing

### Test 4: Language Toggle
**Steps:**
1. Login as admin
2. Click language icon (🌐) in header

**Expected Result:**
- ✅ UI switches to Arabic
- ✅ Text direction changes to RTL
- ✅ All text translated
- ✅ Click again to switch back to English

### Test 5: Theme Toggle
**Steps:**
1. Click theme icon (🌙) in header

**Expected Result:**
- ✅ Theme switches to dark mode
- ✅ Colors change appropriately
- ✅ Icon changes to sun (☀️)
- ✅ Click again to switch back to light mode

### Test 6: Persistence
**Steps:**
1. Change language to Arabic
2. Change theme to dark
3. Refresh the page
4. Login again

**Expected Result:**
- ✅ Language remains Arabic
- ✅ Theme remains dark
- ✅ Preferences saved

---

## 👨‍💼 Admin Features Testing

### Test 7: Add New User
**Steps:**
1. Login as admin
2. Click "User Management"
3. Click "Add User" (+)
4. Fill in:
   - Username: `testuser`
   - Password: `test123`
   - Role: User
   - Initial Balance: 50
5. Click "Add"

**Expected Result:**
- ✅ User created successfully
- ✅ Toast notification shown
- ✅ User appears in list
- ✅ Initial balance transaction created
- ✅ Rides calculated (50 ÷ 5 = 10 rides)

### Test 8: View User Details
**Steps:**
1. In User Management
2. Click on "testuser"

**Expected Result:**
- ✅ Modal opens
- ✅ Shows username, role, balance, rides
- ✅ Shows payment status
- ✅ Action buttons visible

### Test 9: Toggle Payment Status
**Steps:**
1. Open user details for "testuser"
2. Click "Toggle Payment Status"

**Expected Result:**
- ✅ Status changes from Paid to Unpaid (or vice versa)
- ✅ Modal updates immediately
- ✅ User list updates
- ✅ Toast notification shown

### Test 10: Add Extra Money
**Steps:**
1. Go to Dashboard
2. Click "Add Extra Money"
3. Select "testuser"
4. Enter amount: 20
5. Enter reason: "Bonus"
6. Click "Add"

**Expected Result:**
- ✅ Balance increases by 20
- ✅ Transaction recorded
- ✅ Toast notification shown
- ✅ Dashboard updates

### Test 11: Withdraw Money
**Steps:**
1. Click "Withdraw"
2. Select "testuser"
3. Enter amount: 10
4. Enter reason: "Refund"
5. Click "Withdraw"

**Expected Result:**
- ✅ Balance decreases by 10
- ✅ Transaction recorded
- ✅ Toast notification shown
- ✅ Dashboard updates

### Test 12: Set Daily Cost
**Steps:**
1. Go to Settings
2. Click "Set Daily Cost"
3. Enter: 7.50
4. Click "Save"

**Expected Result:**
- ✅ Daily cost updated
- ✅ Statistics show new cost
- ✅ Toast notification shown
- ✅ Future top-ups use new cost

### Test 13: Cancel Day
**Steps:**
1. Go to Settings
2. Click "Cancel Day"
3. Select today's date
4. Enter reason: "Public Holiday"
5. Click "Cancel Day"

**Expected Result:**
- ✅ Day added to cancelled list
- ✅ Toast notification shown
- ✅ Visible in Cancelled Days screen

### Test 14: Delete User
**Steps:**
1. Go to User Management
2. Click on "testuser"
3. Click "Delete User"
4. Confirm deletion

**Expected Result:**
- ✅ Confirmation dialog appears
- ✅ User removed from list
- ✅ User's transactions removed
- ✅ Statistics updated
- ✅ Toast notification shown

---

## 👤 User Features Testing

### Test 15: Create and Login as User
**Steps:**
1. Login as admin
2. Create user: username=`john`, password=`john123`, balance=100
3. Logout
4. Login as `john`

**Expected Result:**
- ✅ User dashboard shown
- ✅ No admin buttons visible
- ✅ Balance shows 100
- ✅ Rides calculated correctly

### Test 16: Top-up Balance
**Steps:**
1. Login as user
2. Click "Top-up"
3. Enter amount: 25
4. Enter reason: "Monthly payment"
5. Click "Top-up"

**Expected Result:**
- ✅ Balance increases by 25
- ✅ Rides recalculated
- ✅ Transaction recorded
- ✅ Toast notification shown

### Test 17: Low Rides Warning
**Steps:**
1. Login as admin
2. Create user with balance: 10 (2 rides at 5 per ride)
3. Logout and login as that user

**Expected Result:**
- ✅ Warning alert visible
- ✅ Message: "Warning: You have 2 or fewer rides remaining!"
- ✅ Alert styled in warning color

### Test 18: Change Password
**Steps:**
1. Login as user
2. Go to Settings
3. Click "Change Password"
4. Enter current password
5. Enter new password: `newpass123`
6. Confirm password: `newpass123`
7. Click "Change"

**Expected Result:**
- ✅ Password updated
- ✅ Toast notification shown
- ✅ Can login with new password

### Test 19: Change Profile Picture
**Steps:**
1. Go to Settings
2. Click "Change Profile Picture"
3. Select an avatar

**Expected Result:**
- ✅ Avatar modal opens
- ✅ 10 avatars displayed
- ✅ Click updates avatar
- ✅ Dashboard shows new avatar
- ✅ Toast notification shown

### Test 20: View Transaction History
**Steps:**
1. Login as user with transactions
2. Click "History" in bottom nav

**Expected Result:**
- ✅ All user transactions shown
- ✅ Sorted by date (newest first)
- ✅ Shows type, amount, date, reason
- ✅ Color-coded by type

### Test 21: Filter Transactions
**Steps:**
1. In Transaction History
2. Select filter: "Top-up"

**Expected Result:**
- ✅ Only top-up transactions shown
- ✅ Other types hidden
- ✅ Select "All Types" to show all

### Test 22: View Cancelled Days
**Steps:**
1. Click "Cancelled" in bottom nav

**Expected Result:**
- ✅ All cancelled days shown
- ✅ Shows date and reason
- ✅ Sorted by date
- ✅ Empty state if none

---

## 📱 Responsive Design Testing

### Test 23: Mobile View (< 640px)
**Steps:**
1. Resize browser to 375px width
2. Navigate through all screens

**Expected Result:**
- ✅ Single column layout
- ✅ Bottom navigation visible
- ✅ All buttons accessible
- ✅ Text readable
- ✅ No horizontal scroll

### Test 24: Tablet View (640px - 1024px)
**Steps:**
1. Resize browser to 768px width
2. Navigate through all screens

**Expected Result:**
- ✅ Two-column grids
- ✅ Bottom navigation visible
- ✅ Optimized spacing
- ✅ Cards properly sized

### Test 25: Desktop View (> 1024px)
**Steps:**
1. Resize browser to 1920px width
2. Navigate through all screens

**Expected Result:**
- ✅ Multi-column layouts
- ✅ Bottom navigation hidden
- ✅ Maximum width container
- ✅ Proper spacing

---

## 🔄 Navigation Testing

### Test 26: Bottom Navigation
**Steps:**
1. Login as user
2. Click each bottom nav item

**Expected Result:**
- ✅ Home → Dashboard
- ✅ History → Transaction History
- ✅ Cancelled → Cancelled Days
- ✅ Settings → Settings
- ✅ Active state indicator works

### Test 27: Back Buttons
**Steps:**
1. Navigate to Transaction History
2. Click back button

**Expected Result:**
- ✅ Returns to Dashboard
- ✅ Bottom nav updates
- ✅ Screen transitions smoothly

---

## 💾 Data Persistence Testing

### Test 28: Data Saving
**Steps:**
1. Login as admin
2. Create a user
3. Add a transaction
4. Refresh the page
5. Login again

**Expected Result:**
- ✅ User still exists
- ✅ Transaction still exists
- ✅ All data preserved

### Test 29: Multiple Sessions
**Steps:**
1. Open app in two browser tabs
2. Login as admin in both
3. Add user in tab 1
4. Refresh tab 2

**Expected Result:**
- ✅ Tab 2 shows new user after refresh
- ✅ Data synchronized via LocalStorage

---

## 🎨 UI/UX Testing

### Test 30: Modal Interactions
**Steps:**
1. Open any modal
2. Try these actions:
   - Click backdrop
   - Click X button
   - Press Escape (if supported)

**Expected Result:**
- ✅ Modal closes on backdrop click
- ✅ Modal closes on X click
- ✅ Smooth animations

### Test 31: Form Validation
**Steps:**
1. Open "Add User" modal
2. Try to submit empty form

**Expected Result:**
- ✅ Required fields highlighted
- ✅ Form doesn't submit
- ✅ Browser validation messages

### Test 32: Toast Notifications
**Steps:**
1. Perform any action (e.g., add user)

**Expected Result:**
- ✅ Toast appears at bottom
- ✅ Shows success message
- ✅ Auto-dismisses after 3 seconds
- ✅ Smooth animation

---

## 🐛 Edge Cases Testing

### Test 33: Negative Balance Prevention
**Steps:**
1. Create user with balance: 5
2. Try to withdraw: 10

**Expected Result:**
- ✅ Error message shown
- ✅ Transaction not created
- ✅ Balance unchanged

### Test 34: Duplicate Username
**Steps:**
1. Create user: `duplicate`
2. Try to create another user: `duplicate`

**Expected Result:**
- ✅ Error message shown
- ✅ User not created

### Test 35: Empty Transaction Reason
**Steps:**
1. Top-up without entering reason

**Expected Result:**
- ✅ Transaction created
- ✅ Reason field optional
- ✅ No error

---

## ✅ Testing Checklist Summary

- [ ] All authentication tests passed
- [ ] Language and theme switching works
- [ ] Admin features functional
- [ ] User features functional
- [ ] Responsive design verified
- [ ] Navigation working correctly
- [ ] Data persistence confirmed
- [ ] UI/UX elements polished
- [ ] Edge cases handled
- [ ] No console errors

---

**Testing Complete! 🎉**

If all tests pass, the application is ready for production use!
