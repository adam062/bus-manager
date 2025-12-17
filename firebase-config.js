// ===== Firebase Configuration =====
// IMPORTANT: Replace this with YOUR Firebase configuration
// Get this from Firebase Console > Project Settings > Your apps > Web app

const firebaseConfig = {
  apiKey: "AIzaSyDLWKJWktIx_a63PC4ZBwPmhFy6vHQeaws",
  authDomain: "bus-manager-13c96.firebaseapp.com",
  projectId: "bus-manager-13c96",
  storageBucket: "bus-manager-13c96.firebasestorage.app",
  messagingSenderId: "296539407958",
  appId: "1:296539407958:web:c5b92ea66b6f4525d4ddf7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Initialize Auth
const auth = firebase.auth();

// ===== Firebase Helper Functions =====

// Save user to Firestore
async function saveUserToFirebase(user) {
    try {
        await db.collection('users').doc(user.username).set(user);
        console.log('User saved to Firebase:', user.username);
    } catch (error) {
        console.error('Error saving user:', error);
        throw error;
    }
}

// Load all users from Firestore
async function loadUsersFromFirebase() {
    try {
        const snapshot = await db.collection('users').get();
        const users = [];
        snapshot.forEach(doc => {
            users.push(doc.data());
        });
        return users;
    } catch (error) {
        console.error('Error loading users:', error);
        return [];
    }
}

// Delete user from Firestore
async function deleteUserFromFirebase(username) {
    try {
        await db.collection('users').doc(username).delete();
        console.log('User deleted from Firebase:', username);
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

// Save transaction to Firestore
async function saveTransactionToFirebase(transaction) {
    try {
        await db.collection('transactions').add(transaction);
        console.log('Transaction saved to Firebase');
    } catch (error) {
        console.error('Error saving transaction:', error);
        throw error;
    }
}

// Load all transactions from Firestore
async function loadTransactionsFromFirebase() {
    try {
        const snapshot = await db.collection('transactions').orderBy('timestamp', 'desc').get();
        const transactions = [];
        snapshot.forEach(doc => {
            transactions.push({ id: doc.id, ...doc.data() });
        });
        return transactions;
    } catch (error) {
        console.error('Error loading transactions:', error);
        return [];
    }
}

// Save cancelled day to Firestore
async function saveCancelledDayToFirebase(cancelledDay) {
    try {
        await db.collection('cancelledDays').add(cancelledDay);
        console.log('Cancelled day saved to Firebase');
    } catch (error) {
        console.error('Error saving cancelled day:', error);
        throw error;
    }
}

// Load cancelled days from Firestore
async function loadCancelledDaysFromFirebase() {
    try {
        const snapshot = await db.collection('cancelledDays').orderBy('date', 'desc').get();
        const days = [];
        snapshot.forEach(doc => {
            days.push({ id: doc.id, ...doc.data() });
        });
        return days;
    } catch (error) {
        console.error('Error loading cancelled days:', error);
        return [];
    }
}

// Save settings to Firestore
async function saveSettingsToFirebase(settings) {
    try {
        await db.collection('settings').doc('app').set(settings);
        console.log('Settings saved to Firebase');
    } catch (error) {
        console.error('Error saving settings:', error);
        throw error;
    }
}

// Load settings from Firestore
async function loadSettingsFromFirebase() {
    try {
        const doc = await db.collection('settings').doc('app').get();
        if (doc.exists) {
            return doc.data();
        }
        return null;
    } catch (error) {
        console.error('Error loading settings:', error);
        return null;
    }
}

// Initialize default admin user if not exists
async function initializeDefaultAdmin() {
    try {
        const adminDoc = await db.collection('users').doc('admin').get();
        if (!adminDoc.exists) {
            const defaultAdmin = {
                username: 'admin',
                password: 'admin123', // In production, this should be hashed
                role: 'admin',
                balance: 0,
                isPaid: true,
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin',
                createdAt: new Date().toISOString()
            };
            await saveUserToFirebase(defaultAdmin);
            console.log('Default admin user created');
        }
    } catch (error) {
        console.error('Error initializing admin:', error);
    }
}

// Initialize default settings if not exists
async function initializeDefaultSettings() {
    try {
        const settings = await loadSettingsFromFirebase();
        if (!settings) {
            await saveSettingsToFirebase({
                dailyCost: 5.00,
                currentLanguage: 'en',
                currentTheme: 'light'
            });
            console.log('Default settings created');
        }
    } catch (error) {
        console.error('Error initializing settings:', error);
    }
}

console.log('Firebase configuration loaded');

