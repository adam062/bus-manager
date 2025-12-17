# 🚌 Share Bus Manager with Your Friends

## 🎯 Quick Setup (5 minutes)

### Step 1: Set Up Firebase (One-time setup by you)

1. **Create Firebase Project**
   - Go to https://console.firebase.google.com/
   - Click "Add project"
   - Name it "bus-manager" (or anything you like)
   - Disable Google Analytics (not needed)
   - Click "Create project"

2. **Register Web App**
   - Click the Web icon (`</>`)
   - Name it "Bus Manager Web"
   - Check "Also set up Firebase Hosting" (optional)
   - Click "Register app"
   - **COPY the config code** that appears

3. **Enable Firestore Database**
   - Go to "Build" → "Firestore Database"
   - Click "Create database"
   - Choose "Start in test mode"
   - Select your location
   - Click "Enable"

4. **Enable Authentication**
   - Go to "Build" → "Authentication"
   - Click "Get started"
   - Enable "Email/Password"
   - Click "Save"

5. **Update Your Code**
   - Open `firebase-config.js` in your project
   - Replace the placeholder config with YOUR config from Step 2
   - Save the file

### Step 2: Deploy to Firebase Hosting (Make it accessible online)

1. **Install Firebase CLI** (one-time)
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase in your project**
   ```bash
   cd c:\Users\ADAM\Documents\augment-projects\bus-manager
   firebase init
   ```
   - Select: **Hosting**
   - Choose your Firebase project
   - Public directory: `.` (just press Enter)
   - Single-page app: **No**
   - Don't overwrite index.html: **No**

4. **Deploy**
   ```bash
   firebase deploy
   ```

5. **Get Your URL**
   - After deployment, you'll get a URL like:
   - `https://bus-manager-xxxxx.web.app`
   - Share this URL with your friends!

---

## 📱 For Your Friends

### How to Access

1. **Open the link** you received (e.g., https://bus-manager-xxxxx.web.app)
2. **Login** with the username and password provided by the admin
3. **Start using** the app!

### First Time Login

- The admin will create an account for you
- You'll receive:
  - Username: `[your-username]`
  - Password: `[temporary-password]`
- **Change your password** immediately after first login!

### What You Can Do

✅ View your balance and remaining rides  
✅ Top-up your balance  
✅ View transaction history  
✅ Check cancelled days  
✅ Change your password  
✅ Change your profile picture  

### How to Top-up

1. Click the **"Top-up"** button
2. Enter the amount
3. Add a reason (optional)
4. Click **"Top-up"**
5. Your balance and rides will update automatically

### Need Help?

- Check the **QUICK_START.md** file for detailed instructions
- Contact your admin if you have issues
- Make sure you have internet connection

---

## 🔐 Security Tips

### For Admin (You)

1. **Change default admin password** immediately
2. **Use strong passwords** for all users
3. **Update Firebase security rules** after 30 days (test mode expires)
4. **Don't share your Firebase config** publicly

### For Users (Your Friends)

1. **Change password** after first login
2. **Don't share** your login credentials
3. **Logout** when using shared devices
4. **Keep your password** secure

---

## 🌟 Benefits of Using Firebase

✅ **Real-time sync** - All users see updates instantly  
✅ **Always accessible** - Works from any device with internet  
✅ **No server needed** - Firebase handles everything  
✅ **Free tier** - Generous free usage limits  
✅ **Reliable** - Google's infrastructure  
✅ **Automatic backups** - Your data is safe  

---

## 📊 Firebase Free Tier Limits

- **Firestore**: 1 GB storage, 50K reads/day, 20K writes/day
- **Hosting**: 10 GB storage, 360 MB/day transfer
- **Authentication**: Unlimited users

**This is more than enough for a small group of friends!**

---

## 🆘 Troubleshooting

### "Permission denied" error
- Make sure Firestore is enabled
- Check that Authentication is enabled
- Verify Firebase config is correct

### Can't access the website
- Check your internet connection
- Make sure you deployed successfully
- Try the URL in incognito mode

### Data not saving
- Check browser console for errors
- Verify Firebase config is correct
- Make sure Firestore rules are set correctly

---

## 📞 Support

For detailed setup instructions, see **FIREBASE_SETUP.md**  
For user guide, see **QUICK_START.md**  
For features list, see **README.md**

---

**Enjoy managing your bus transport with friends! 🚌✨**

