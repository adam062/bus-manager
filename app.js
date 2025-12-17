// ===== Application State =====
const AppState = {
    currentUser: null,
    currentLanguage: 'en',
    currentTheme: 'light',
    users: [],
    transactions: [],
    cancelledDays: [],
    dailyCost: 5.00,
    avatars: [
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Jasmine',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Max',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucy',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Bella',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Luna',
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Leo'
    ]
};

// ===== Translations =====
const translations = {
    en: {
        appName: 'Bus Manager',
        welcomeTitle: 'Welcome to Bus Manager',
        welcomeSubtitle: 'Manage your transport efficiently',
        username: 'Username',
        password: 'Password',
        login: 'Login',
        logout: 'Logout',
        home: 'Home',
        history: 'History',
        cancelled: 'Cancelled',
        settings: 'Settings',
        currentBalance: 'Current Balance',
        ridesRemaining: 'Rides Remaining',
        paymentStatus: 'Payment Status',
        paid: 'Paid',
        unpaid: 'Unpaid',
        lowRidesWarning: 'Warning: You have 2 or fewer rides remaining!',
        recentTransactions: 'Recent Transactions',
        viewAll: 'View All',
        transactionHistory: 'Transaction History',
        allTypes: 'All Types',
        topUp: 'Top-up',
        rideUsed: 'Ride Used',
        extra: 'Extra',
        discount: 'Discount',
        withdraw: 'Withdraw',
        userManagement: 'User Management',
        addUser: 'Add User',
        addNewUser: 'Add New User',
        role: 'Role',
        user: 'User',
        admin: 'Admin',
        guest: 'Guest',
        initialBalance: 'Initial Balance',
        cancel: 'Cancel',
        add: 'Add',
        topUpBalance: 'Top-up Balance',
        amount: 'Amount',
        reason: 'Reason',
        addExtraMoney: 'Add Extra Money',
        selectUser: 'Select User',
        withdrawMoney: 'Withdraw Money',
        changePassword: 'Change Password',
        currentPassword: 'Current Password',
        newPassword: 'New Password',
        confirmPassword: 'Confirm Password',
        change: 'Change',
        accountSettings: 'Account Settings',
        changeProfilePicture: 'Change Profile Picture',
        adminSettings: 'Admin Settings',
        setDailyCost: 'Set Daily Cost',
        dailyCost: 'Daily Cost',
        save: 'Save',
        cancelDay: 'Cancel Day',
        date: 'Date',
        cancelledDays: 'Cancelled Days',
        quickStats: 'Quick Statistics',
        totalUsers: 'Total Users',
        totalBalance: 'Total Balance',
        balance: 'Balance',
        rides: 'Rides',
        togglePayment: 'Toggle Payment Status',
        deleteUser: 'Delete User',
        selectAvatar: 'Select Avatar',
        noTransactions: 'No transactions yet',
        noCancelledDays: 'No cancelled days',
        noUsers: 'No users found'
    },
    ar: {
        appName: 'مدير الحافلات',
        welcomeTitle: 'مرحباً بك في مدير الحافلات',
        welcomeSubtitle: 'إدارة النقل بكفاءة',
        username: 'اسم المستخدم',
        password: 'كلمة المرور',
        login: 'تسجيل الدخول',
        logout: 'تسجيل الخروج',
        home: 'الرئيسية',
        history: 'السجل',
        cancelled: 'الملغاة',
        settings: 'الإعدادات',
        currentBalance: 'الرصيد الحالي',
        ridesRemaining: 'الرحلات المتبقية',
        paymentStatus: 'حالة الدفع',
        paid: 'مدفوع',
        unpaid: 'غير مدفوع',
        lowRidesWarning: 'تحذير: لديك رحلتان أو أقل متبقية!',
        recentTransactions: 'المعاملات الأخيرة',
        viewAll: 'عرض الكل',
        transactionHistory: 'سجل المعاملات',
        allTypes: 'جميع الأنواع',
        topUp: 'شحن',
        rideUsed: 'رحلة مستخدمة',
        extra: 'إضافي',
        discount: 'خصم',
        withdraw: 'سحب',
        userManagement: 'إدارة المستخدمين',
        addUser: 'إضافة مستخدم',
        addNewUser: 'إضافة مستخدم جديد',
        role: 'الدور',
        user: 'مستخدم',
        admin: 'مدير',
        guest: 'ضيف',
        initialBalance: 'الرصيد الأولي',
        cancel: 'إلغاء',
        add: 'إضافة',
        topUpBalance: 'شحن الرصيد',
        amount: 'المبلغ',
        reason: 'السبب',
        addExtraMoney: 'إضافة مبلغ إضافي',
        selectUser: 'اختر المستخدم',
        withdrawMoney: 'سحب المال',
        changePassword: 'تغيير كلمة المرور',
        currentPassword: 'كلمة المرور الحالية',
        newPassword: 'كلمة المرور الجديدة',
        confirmPassword: 'تأكيد كلمة المرور',
        change: 'تغيير',
        accountSettings: 'إعدادات الحساب',
        changeProfilePicture: 'تغيير الصورة الشخصية',
        adminSettings: 'إعدادات المدير',
        setDailyCost: 'تعيين التكلفة اليومية',
        dailyCost: 'التكلفة اليومية',
        save: 'حفظ',
        cancelDay: 'إلغاء يوم',
        date: 'التاريخ',
        cancelledDays: 'الأيام الملغاة',
        quickStats: 'إحصائيات سريعة',
        totalUsers: 'إجمالي المستخدمين',
        totalBalance: 'الرصيد الإجمالي',
        balance: 'الرصيد',
        rides: 'الرحلات',
        togglePayment: 'تبديل حالة الدفع',
        deleteUser: 'حذف المستخدم',
        selectAvatar: 'اختر الصورة الرمزية',
        noTransactions: 'لا توجد معاملات بعد',
        noCancelledDays: 'لا توجد أيام ملغاة',
        noUsers: 'لم يتم العثور على مستخدمين'
    }
};

// ===== Utility Functions =====
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function formatCurrency(amount) {
    return parseFloat(amount).toFixed(2);
}

function formatDate(date) {
    const d = new Date(date);
    return d.toLocaleDateString(AppState.currentLanguage === 'ar' ? 'ar-EG' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function formatDateTime(date) {
    const d = new Date(date);
    return d.toLocaleString(AppState.currentLanguage === 'ar' ? 'ar-EG' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function translate(key) {
    return translations[AppState.currentLanguage][key] || key;
}

function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

function showLoading() {
    document.getElementById('loadingSpinner').classList.remove('hidden');
}

function hideLoading() {
    document.getElementById('loadingSpinner').classList.add('hidden');
}

// ===== Storage Functions =====
function saveToStorage() {
    localStorage.setItem('busManagerData', JSON.stringify({
        users: AppState.users,
        transactions: AppState.transactions,
        cancelledDays: AppState.cancelledDays,
        dailyCost: AppState.dailyCost,
        currentLanguage: AppState.currentLanguage,
        currentTheme: AppState.currentTheme
    }));
}

function loadFromStorage() {
    const data = localStorage.getItem('busManagerData');
    if (data) {
        const parsed = JSON.parse(data);
        AppState.users = parsed.users || [];
        AppState.transactions = parsed.transactions || [];
        AppState.cancelledDays = parsed.cancelledDays || [];
        AppState.dailyCost = parsed.dailyCost || 5.00;
        AppState.currentLanguage = parsed.currentLanguage || 'en';
        AppState.currentTheme = parsed.currentTheme || 'light';
    }

    // Create default admin if no users exist
    if (AppState.users.length === 0) {
        AppState.users.push({
            id: generateId(),
            username: 'admin',
            password: 'admin123',
            role: 'admin',
            balance: 0,
            rides: 0,
            isPaid: true,
            avatar: AppState.avatars[0],
            createdAt: new Date().toISOString()
        });
        saveToStorage();
    }
}

// ===== User Management =====
function createUser(username, password, role, initialBalance = 0) {
    const user = {
        id: generateId(),
        username,
        password,
        role,
        balance: parseFloat(initialBalance),
        rides: 0,
        isPaid: true,
        avatar: AppState.avatars[Math.floor(Math.random() * AppState.avatars.length)],
        createdAt: new Date().toISOString()
    };
    AppState.users.push(user);

    if (initialBalance > 0) {
        addTransaction(user.id, 'topup', initialBalance, 0, 'Initial balance');
    }

    saveToStorage();
    return user;
}

function deleteUser(userId) {
    const index = AppState.users.findIndex(u => u.id === userId);
    if (index !== -1) {
        AppState.users.splice(index, 1);
        // Remove user's transactions
        AppState.transactions = AppState.transactions.filter(t => t.userId !== userId);
        saveToStorage();
        return true;
    }
    return false;
}

function updateUser(userId, updates) {
    const user = AppState.users.find(u => u.id === userId);
    if (user) {
        Object.assign(user, updates);
        saveToStorage();
        return user;
    }
    return null;
}

function getUserById(userId) {
    return AppState.users.find(u => u.id === userId);
}

function authenticateUser(username, password) {
    return AppState.users.find(u => u.username === username && u.password === password);
}

// ===== Transaction Management =====
function addTransaction(userId, type, amount, rides, reason = '') {
    const user = getUserById(userId);
    if (!user) return null;

    const transaction = {
        id: generateId(),
        userId,
        type,
        amount: parseFloat(amount),
        rides: parseInt(rides),
        reason,
        balanceBefore: user.balance,
        balanceAfter: user.balance,
        ridesBefore: user.rides,
        ridesAfter: user.rides,
        timestamp: new Date().toISOString()
    };

    // Update user balance and rides based on transaction type
    switch (type) {
        case 'topup':
            user.balance += parseFloat(amount);
            user.rides += Math.floor(parseFloat(amount) / AppState.dailyCost);
            break;
        case 'ride':
            user.rides -= 1;
            break;
        case 'extra':
            user.balance += parseFloat(amount);
            break;
        case 'discount':
            user.balance -= parseFloat(amount);
            break;
        case 'withdraw':
            user.balance -= parseFloat(amount);
            break;
    }

    transaction.balanceAfter = user.balance;
    transaction.ridesAfter = user.rides;

    AppState.transactions.unshift(transaction);
    saveToStorage();
    return transaction;
}

function getTransactionsByUser(userId, filter = 'all') {
    let transactions = AppState.transactions.filter(t => t.userId === userId);
    if (filter !== 'all') {
        transactions = transactions.filter(t => t.type === filter);
    }
    return transactions;
}

function getAllTransactions(filter = 'all') {
    if (filter === 'all') {
        return AppState.transactions;
    }
    return AppState.transactions.filter(t => t.type === filter);
}

// ===== Cancelled Days Management =====
function cancelDay(date, reason) {
    const cancelledDay = {
        id: generateId(),
        date,
        reason,
        createdAt: new Date().toISOString()
    };
    AppState.cancelledDays.unshift(cancelledDay);
    saveToStorage();
    return cancelledDay;
}

// ===== Daily Ride Deduction (Simulated) =====
function deductDailyRide(userId) {
    const user = getUserById(userId);
    if (user && user.rides > 0) {
        addTransaction(userId, 'ride', 0, 1, 'Daily ride deduction');
        return true;
    }
    return false;
}

// ===== UI Functions =====
function updateLanguage() {
    document.documentElement.lang = AppState.currentLanguage;
    document.documentElement.dir = AppState.currentLanguage === 'ar' ? 'rtl' : 'ltr';

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translate(key);
        } else if (element.tagName === 'OPTION') {
            element.textContent = translate(key);
        } else {
            element.textContent = translate(key);
        }
    });
}

function updateTheme() {
    document.body.setAttribute('data-theme', AppState.currentTheme);
    const themeIcon = document.querySelector('#themeToggle i');
    if (themeIcon) {
        themeIcon.className = AppState.currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');

    // Update bottom nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-screen') === screenId) {
            item.classList.add('active');
        }
    });

    // Hide bottom nav on login screen
    const bottomNav = document.getElementById('bottomNav');
    if (screenId === 'loginScreen') {
        bottomNav.classList.add('hidden');
    } else {
        bottomNav.classList.remove('hidden');
    }
}

function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function renderDashboard() {
    if (!AppState.currentUser) return;

    const user = getUserById(AppState.currentUser.id);

    // Update user info
    document.getElementById('userName').textContent = user.username;
    document.getElementById('userRole').textContent = translate(user.role);
    document.getElementById('userAvatar').src = user.avatar;

    // Update balance cards
    document.getElementById('currentBalance').textContent = formatCurrency(user.balance);
    document.getElementById('ridesRemaining').textContent = user.rides;

    // Update payment status
    const statusBadge = document.getElementById('paymentStatusBadge');
    statusBadge.className = `status-badge ${user.isPaid ? 'paid' : 'unpaid'}`;
    statusBadge.innerHTML = `
        <i class="fas ${user.isPaid ? 'fa-check-circle' : 'fa-times-circle'}"></i>
        <span data-i18n="${user.isPaid ? 'paid' : 'unpaid'}">${translate(user.isPaid ? 'paid' : 'unpaid')}</span>
    `;

    // Show warning if rides <= 2
    const warningAlert = document.getElementById('warningAlert');
    if (user.rides <= 2 && user.rides > 0) {
        warningAlert.classList.remove('hidden');
    } else {
        warningAlert.classList.add('hidden');
    }

    // Render action buttons based on role
    renderActionButtons();

    // Render admin stats if admin
    if (user.role === 'admin') {
        renderAdminStats();
    }

    // Render recent transactions
    renderRecentTransactions();
}

function renderActionButtons() {
    const user = AppState.currentUser;
    const container = document.getElementById('actionButtons');

    let buttons = [];

    if (user.role === 'admin') {
        buttons = [
            { icon: 'fa-users', text: 'userManagement', action: 'showUserManagement' },
            { icon: 'fa-plus-circle', text: 'addExtraMoney', action: 'showExtraMoneyModal' },
            { icon: 'fa-minus-circle', text: 'withdraw', action: 'showWithdrawModal' },
            { icon: 'fa-dollar-sign', text: 'setDailyCost', action: 'showDailyCostModal' }
        ];
    } else {
        buttons = [
            { icon: 'fa-wallet', text: 'topUp', action: 'showTopupModal' }
        ];
    }

    container.innerHTML = buttons.map(btn => `
        <button class="action-btn" onclick="${btn.action}()">
            <i class="fas ${btn.icon}"></i>
            <span data-i18n="${btn.text}">${translate(btn.text)}</span>
        </button>
    `).join('');
}

function renderAdminStats() {
    const adminStats = document.getElementById('adminStats');
    adminStats.classList.remove('hidden');

    const totalUsers = AppState.users.filter(u => u.role !== 'admin').length;
    const totalBalance = AppState.users.reduce((sum, u) => sum + u.balance, 0);

    document.getElementById('totalUsers').textContent = totalUsers;
    document.getElementById('totalBalance').textContent = formatCurrency(totalBalance);
    document.getElementById('dailyCost').textContent = formatCurrency(AppState.dailyCost);
}

function renderRecentTransactions() {
    const user = AppState.currentUser;
    const transactions = user.role === 'admin'
        ? getAllTransactions().slice(0, 5)
        : getTransactionsByUser(user.id).slice(0, 5);

    const container = document.getElementById('recentTransactionsList');

    if (transactions.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-receipt"></i>
                <p data-i18n="noTransactions">${translate('noTransactions')}</p>
            </div>
        `;
        return;
    }

    container.innerHTML = transactions.map(t => renderTransactionItem(t)).join('');
}

function renderTransactionItem(transaction) {
    const user = getUserById(transaction.userId);
    const icons = {
        topup: 'fa-arrow-up',
        ride: 'fa-bus',
        extra: 'fa-gift',
        discount: 'fa-tag',
        withdraw: 'fa-arrow-down'
    };

    const isPositive = ['topup', 'extra'].includes(transaction.type);
    const amountDisplay = transaction.type === 'ride'
        ? `-1 ${translate('rides')}`
        : `${isPositive ? '+' : '-'}${formatCurrency(Math.abs(transaction.amount))}`;

    return `
        <div class="transaction-item">
            <div class="transaction-icon ${transaction.type}">
                <i class="fas ${icons[transaction.type]}"></i>
            </div>
            <div class="transaction-details">
                <div class="transaction-type">${translate(transaction.type === 'topup' ? 'topUp' : transaction.type)}</div>
                <div class="transaction-date">${formatDateTime(transaction.timestamp)}</div>
                ${transaction.reason ? `<div class="transaction-reason">${transaction.reason}</div>` : ''}
                ${AppState.currentUser.role === 'admin' && user ? `<div class="transaction-reason">${user.username}</div>` : ''}
            </div>
            <div class="transaction-amount ${isPositive ? 'positive' : 'negative'}">
                ${amountDisplay}
            </div>
        </div>
    `;
}

function renderAllTransactions(filter = 'all') {
    const user = AppState.currentUser;
    const transactions = user.role === 'admin'
        ? getAllTransactions(filter)
        : getTransactionsByUser(user.id, filter);

    const container = document.getElementById('allTransactionsList');

    if (transactions.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-receipt"></i>
                <p data-i18n="noTransactions">${translate('noTransactions')}</p>
            </div>
        `;
        return;
    }

    container.innerHTML = transactions.map(t => renderTransactionItem(t)).join('');
}

function renderUsersList() {
    const users = AppState.users.filter(u => u.role !== 'admin');
    const container = document.getElementById('usersList');

    if (users.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-users"></i>
                <p data-i18n="noUsers">${translate('noUsers')}</p>
            </div>
        `;
        return;
    }

    container.innerHTML = users.map(user => `
        <div class="user-card" onclick="showUserDetails('${user.id}')">
            <div class="user-card-avatar">
                <img src="${user.avatar}" alt="${user.username}">
            </div>
            <div class="user-card-info">
                <div class="user-card-name">${user.username}</div>
                <div class="user-card-meta">
                    <span>${translate(user.role)}</span>
                    <span>${user.rides} ${translate('rides')}</span>
                    <span class="${user.isPaid ? 'text-success' : 'text-danger'}">${translate(user.isPaid ? 'paid' : 'unpaid')}</span>
                </div>
            </div>
            <div class="user-card-balance">${formatCurrency(user.balance)}</div>
        </div>
    `).join('');
}

function renderCancelledDays() {
    const container = document.getElementById('cancelledDaysList');

    if (AppState.cancelledDays.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-calendar-times"></i>
                <p data-i18n="noCancelledDays">${translate('noCancelledDays')}</p>
            </div>
        `;
        return;
    }

    container.innerHTML = AppState.cancelledDays.map(day => `
        <div class="cancelled-day-item">
            <div class="cancelled-day-date">
                <i class="fas fa-calendar-times"></i>
                ${formatDate(day.date)}
            </div>
            <div class="cancelled-day-reason">${day.reason}</div>
        </div>
    `).join('');
}

function renderAvatarGrid() {
    const container = document.getElementById('avatarGrid');
    container.innerHTML = AppState.avatars.map(avatar => `
        <div class="avatar-option" onclick="selectAvatar('${avatar}')">
            <img src="${avatar}" alt="Avatar">
        </div>
    `).join('');
}

function populateUserSelects() {
    const users = AppState.users.filter(u => u.role !== 'admin');
    const selects = ['extraUser', 'withdrawUser'];

    selects.forEach(selectId => {
        const select = document.getElementById(selectId);
        if (select) {
            select.innerHTML = users.map(u => `
                <option value="${u.id}">${u.username}</option>
            `).join('');
        }
    });
}

// ===== Action Functions =====
function showUserManagement() {
    showScreen('userManagementScreen');
    renderUsersList();
}

function showTopupModal() {
    openModal('topupModal');
}

function showExtraMoneyModal() {
    populateUserSelects();
    openModal('extraMoneyModal');
}

function showWithdrawModal() {
    populateUserSelects();
    openModal('withdrawModal');
}

function showDailyCostModal() {
    document.getElementById('newDailyCost').value = AppState.dailyCost;
    openModal('dailyCostModal');
}

function showUserDetails(userId) {
    const user = getUserById(userId);
    if (!user) return;

    document.getElementById('userDetailsName').textContent = user.username;
    document.getElementById('detailUsername').textContent = user.username;
    document.getElementById('detailRole').textContent = translate(user.role);
    document.getElementById('detailBalance').textContent = formatCurrency(user.balance);
    document.getElementById('detailRides').textContent = user.rides;
    document.getElementById('detailPaymentStatus').textContent = translate(user.isPaid ? 'paid' : 'unpaid');

    // Store current user ID for actions
    document.getElementById('userDetailsModal').setAttribute('data-user-id', userId);

    openModal('userDetailsModal');
}

function selectAvatar(avatarUrl) {
    updateUser(AppState.currentUser.id, { avatar: avatarUrl });
    AppState.currentUser.avatar = avatarUrl;
    renderDashboard();
    closeModal('avatarModal');
    showToast(translate('changeProfilePicture') + ' ✓');
}

// ===== Event Handlers =====
function handleLogin(e) {
    e.preventDefault();

    console.log('Login form submitted'); // Debug log

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('loginError');

    console.log('Username:', username, 'Password:', password); // Debug log

    const user = authenticateUser(username, password);

    console.log('User found:', user); // Debug log

    if (user) {
        AppState.currentUser = user;
        showScreen('dashboardScreen');
        renderDashboard();
        errorElement.classList.remove('show');
        e.target.reset();
    } else {
        errorElement.textContent = 'Invalid username or password';
        errorElement.classList.add('show');
    }
}

function handleLogout() {
    AppState.currentUser = null;
    showScreen('loginScreen');
    document.getElementById('loginForm').reset();
}

function handleAddUser(e) {
    e.preventDefault();

    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newUserPassword').value;
    const role = document.getElementById('newUserRole').value;
    const balance = document.getElementById('newUserBalance').value;

    // Check if username already exists
    if (AppState.users.find(u => u.username === username)) {
        showToast('Username already exists!');
        return;
    }

    createUser(username, password, role, balance);
    closeModal('addUserModal');
    renderUsersList();
    renderAdminStats();
    showToast('User added successfully!');
    e.target.reset();
}

function handleTopup(e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById('topupAmount').value);
    const reason = document.getElementById('topupReason').value;

    if (amount <= 0) {
        showToast('Amount must be greater than 0');
        return;
    }

    addTransaction(AppState.currentUser.id, 'topup', amount, 0, reason);
    closeModal('topupModal');
    renderDashboard();
    showToast('Balance topped up successfully!');
    e.target.reset();
}

function handleExtraMoney(e) {
    e.preventDefault();

    const userId = document.getElementById('extraUser').value;
    const amount = parseFloat(document.getElementById('extraAmount').value);
    const reason = document.getElementById('extraReason').value;

    addTransaction(userId, 'extra', amount, 0, reason);
    closeModal('extraMoneyModal');
    renderDashboard();
    renderUsersList();
    showToast('Extra money added successfully!');
    e.target.reset();
}

function handleWithdraw(e) {
    e.preventDefault();

    const userId = document.getElementById('withdrawUser').value;
    const amount = parseFloat(document.getElementById('withdrawAmount').value);
    const reason = document.getElementById('withdrawReason').value;

    const user = getUserById(userId);
    if (user.balance < amount) {
        showToast('Insufficient balance!');
        return;
    }

    addTransaction(userId, 'withdraw', amount, 0, reason);
    closeModal('withdrawModal');
    renderDashboard();
    renderUsersList();
    showToast('Money withdrawn successfully!');
    e.target.reset();
}

function handleChangePassword(e) {
    e.preventDefault();

    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (AppState.currentUser.password !== currentPassword) {
        showToast('Current password is incorrect!');
        return;
    }

    if (newPassword !== confirmPassword) {
        showToast('Passwords do not match!');
        return;
    }

    if (newPassword.length < 4) {
        showToast('Password must be at least 4 characters!');
        return;
    }

    updateUser(AppState.currentUser.id, { password: newPassword });
    AppState.currentUser.password = newPassword;
    closeModal('changePasswordModal');
    showToast('Password changed successfully!');
    e.target.reset();
}

function handleSetDailyCost(e) {
    e.preventDefault();

    const newCost = parseFloat(document.getElementById('newDailyCost').value);

    if (newCost <= 0) {
        showToast('Daily cost must be greater than 0');
        return;
    }

    AppState.dailyCost = newCost;
    saveToStorage();
    closeModal('dailyCostModal');
    renderAdminStats();
    showToast('Daily cost updated successfully!');
}

function handleCancelDay(e) {
    e.preventDefault();

    const date = document.getElementById('cancelDate').value;
    const reason = document.getElementById('cancelReason').value;

    cancelDay(date, reason);
    closeModal('cancelDayModal');
    renderCancelledDays();
    showToast('Day cancelled successfully!');
    e.target.reset();
}

function handleTogglePaymentStatus() {
    const modal = document.getElementById('userDetailsModal');
    const userId = modal.getAttribute('data-user-id');
    const user = getUserById(userId);

    if (user) {
        updateUser(userId, { isPaid: !user.isPaid });
        showUserDetails(userId);
        renderUsersList();
        showToast('Payment status updated!');
    }
}

function handleDeleteUser() {
    const modal = document.getElementById('userDetailsModal');
    const userId = modal.getAttribute('data-user-id');

    if (confirm('Are you sure you want to delete this user?')) {
        deleteUser(userId);
        closeModal('userDetailsModal');
        renderUsersList();
        renderAdminStats();
        showToast('User deleted successfully!');
    }
}

function handleTransactionFilter(e) {
    const filter = e.target.value;
    renderAllTransactions(filter);
}

// ===== Initialization =====
function initializeApp() {
    console.log('App initializing...'); // Debug log

    loadFromStorage();
    updateTheme();
    updateLanguage();

    console.log('Users loaded:', AppState.users); // Debug log

    // Login form
    const loginForm = document.getElementById('loginForm');
    console.log('Login form found:', loginForm); // Debug log

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
        console.log('Login handler attached'); // Debug log
    } else {
        console.error('Login form not found!');
    }

    // Logout button
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);

    // Language toggle
    document.getElementById('langToggle').addEventListener('click', () => {
        AppState.currentLanguage = AppState.currentLanguage === 'en' ? 'ar' : 'en';
        saveToStorage();
        updateLanguage();
        if (AppState.currentUser) {
            renderDashboard();
            renderAllTransactions();
            renderUsersList();
            renderCancelledDays();
        }
    });

    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', () => {
        AppState.currentTheme = AppState.currentTheme === 'light' ? 'dark' : 'light';
        saveToStorage();
        updateTheme();
    });

    // Password visibility toggle
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const input = e.target.closest('.password-input').querySelector('input');
            const icon = e.target.closest('button').querySelector('i');
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.replace('fa-eye', 'fa-eye-slash');
            } else {
                input.type = 'password';
                icon.classList.replace('fa-eye-slash', 'fa-eye');
            }
        });
    });

    // Bottom navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const screenId = item.getAttribute('data-screen');
            showScreen(screenId);

            if (screenId === 'transactionsScreen') {
                renderAllTransactions();
            } else if (screenId === 'cancelledDaysScreen') {
                renderCancelledDays();
            } else if (screenId === 'dashboardScreen') {
                renderDashboard();
            }
        });
    });

    // Back buttons
    document.getElementById('backFromTransactions').addEventListener('click', () => {
        showScreen('dashboardScreen');
    });

    document.getElementById('backFromUserManagement').addEventListener('click', () => {
        showScreen('dashboardScreen');
    });

    document.getElementById('backFromSettings').addEventListener('click', () => {
        showScreen('dashboardScreen');
    });

    document.getElementById('backFromCancelledDays').addEventListener('click', () => {
        showScreen('dashboardScreen');
    });

    // View all transactions
    document.getElementById('viewAllTransactions').addEventListener('click', () => {
        showScreen('transactionsScreen');
        renderAllTransactions();
    });

    // Transaction filter
    document.getElementById('transactionFilter').addEventListener('change', handleTransactionFilter);

    // Add user button and form
    document.getElementById('addUserBtn').addEventListener('click', () => {
        openModal('addUserModal');
    });
    document.getElementById('addUserForm').addEventListener('submit', handleAddUser);

    // Top-up form
    document.getElementById('topupForm').addEventListener('submit', handleTopup);

    // Extra money form
    document.getElementById('extraMoneyForm').addEventListener('submit', handleExtraMoney);

    // Withdraw form
    document.getElementById('withdrawForm').addEventListener('submit', handleWithdraw);

    // Change password
    document.getElementById('changePasswordBtn').addEventListener('click', () => {
        openModal('changePasswordModal');
    });
    document.getElementById('changePasswordForm').addEventListener('submit', handleChangePassword);

    // Change profile picture
    document.getElementById('changeProfilePicBtn').addEventListener('click', () => {
        renderAvatarGrid();
        openModal('avatarModal');
    });

    document.getElementById('changeAvatarBtn').addEventListener('click', () => {
        renderAvatarGrid();
        openModal('avatarModal');
    });

    // Daily cost
    document.getElementById('setDailyCostBtn').addEventListener('click', showDailyCostModal);
    document.getElementById('dailyCostForm').addEventListener('submit', handleSetDailyCost);

    // Cancel day
    document.getElementById('cancelDayBtn').addEventListener('click', () => {
        openModal('cancelDayModal');
    });
    document.getElementById('cancelDayForm').addEventListener('submit', handleCancelDay);

    // User details modal actions
    document.getElementById('togglePaymentStatus').addEventListener('click', handleTogglePaymentStatus);
    document.getElementById('deleteUserBtn').addEventListener('click', handleDeleteUser);

    // Modal close buttons
    document.querySelectorAll('.modal-close, [data-modal]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (e.target.hasAttribute('data-modal')) {
                const modalId = e.target.getAttribute('data-modal');
                closeModal(modalId);
            } else {
                const modal = e.target.closest('.modal');
                if (modal) {
                    modal.classList.remove('active');
                }
            }
        });
    });

    // Close modal on backdrop click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });

    // Admin settings visibility
    const adminSettingsSection = document.getElementById('adminSettingsSection');
    if (adminSettingsSection) {
        // Will be shown/hidden based on user role in renderDashboard
    }

    // Set today's date as default for cancel day
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('cancelDate').value = today;

    // Show login screen initially
    showScreen('loginScreen');
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
