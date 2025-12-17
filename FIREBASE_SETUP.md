# 🔥 Firebase Setup Guide

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or **"Create a project"**
3. Enter project name (e.g., "bus-manager")
4. Disable Google Analytics (optional, not needed for this app)
5. Click **"Create project"**

## Step 2: Register Your Web App

1. In your Firebase project, click the **Web icon** (`</>`) to add a web app
2. Enter app nickname (e.g., "Bus Manager Web")
3. **Check** "Also set up Firebase Hosting" (optional, for easy deployment)
4. Click **"Register app"**
5. **IMPORTANT**: Copy the Firebase configuration object that appears

It will look like this:
```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

## Step 3: Enable Firestore Database

1. In Firebase Console, go to **"Build"** → **"Firestore Database"**
2. Click **"Create database"**
3. Select **"Start in test mode"** (we'll secure it later)
4. Choose a location (select closest to your users)
5. Click **"Enable"**

## Step 4: Set Up Security Rules

1. In Firestore Database, go to **"Rules"** tab
2. Replace the rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
    
    // Transactions collection
    match /transactions/{transactionId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
    
    // Cancelled days collection
    match /cancelledDays/{dayId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
    
    // Settings collection
    match /settings/{settingId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
  }
}
```

3. Click **"Publish"**

## Step 5: Enable Authentication

1. Go to **"Build"** → **"Authentication"**
2. Click **"Get started"**
3. Click on **"Email/Password"** provider
4. **Enable** the first option (Email/Password)
5. Click **"Save"**

## Step 6: Configure Your App

1. Open `firebase-config.js` in your project
2. Replace the placeholder config with YOUR Firebase config from Step 2
3. Save the file

## Step 7: Test Your App

1. Open `index.html` in your browser
2. Try to login with default admin credentials:
   - Username: `admin`
   - Password: `admin123`
3. The app will automatically create the admin user in Firebase on first login

## 🚀 Deploy to Firebase Hosting (Optional)

If you want to host your app online for free:

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase in your project:
   ```bash
   firebase init
   ```
   - Select **"Hosting"**
   - Choose your Firebase project
   - Set public directory to `.` (current directory)
   - Configure as single-page app: **No**
   - Don't overwrite index.html

4. Deploy:
   ```bash
   firebase deploy
   ```

5. Your app will be live at: `https://your-project.firebaseapp.com`

## 📱 Share with Friends

After deployment, share the URL with your friends:
- They can access it from any device
- All data syncs in real-time
- No need to download anything!

## 🔒 Security Notes

**IMPORTANT**: The test mode security rules expire after 30 days. Before then, update your rules to be more secure.

For production, consider:
1. Implementing proper user roles in security rules
2. Adding rate limiting
3. Validating data structure
4. Using Firebase Authentication for login instead of custom auth

## 🆘 Troubleshooting

**"Permission denied" errors:**
- Check that Firestore rules are published
- Make sure Authentication is enabled
- Verify you're logged in

**Data not saving:**
- Check browser console for errors
- Verify Firebase config is correct
- Check internet connection

**Can't login:**
- Check that Authentication is enabled
- Verify Email/Password provider is enabled
- Check browser console for errors

---

**Need Help?** Check the [Firebase Documentation](https://firebase.google.com/docs)

