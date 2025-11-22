// ============================================
// SIGNUP FUNCTIONALITY
// ============================================

// Get signup form
const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        validateSignup();
    });
}

function validateSignup() {
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    let isValid = true;
    
    // Clear previous errors
    clearSignupErrors();
    
    // Name validation
    if (name.length < 2) {
        showError('name-error', 'Name must be at least 2 characters long');
        isValid = false;
    }
    
    // Email validation
    if (!isValidEmail(email)) {
        showError('signup-email-error', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Password validation
    if (password.length < 6) {
        showError('signup-password-error', 'Password must be at least 6 characters long');
        isValid = false;
    }
    
    // Confirm password validation
    if (password !== confirmPassword) {
        showError('confirm-password-error', 'Passwords do not match');
        isValid = false;
    }
    
    if (isValid) {
        // Check if email already exists
        const users = getUsers();
        if (users.find(user => user.email === email)) {
            showError('signup-email-error', 'Email already registered');
            return false;
        }
        
        // Save user data
        const user = {
            name: name,
            email: email,
            password: password // In production, hash this password!
        };
        
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Show success message
        const successDiv = document.getElementById('signup-success');
        successDiv.textContent = 'Account created successfully! Redirecting to login...';
        successDiv.style.display = 'block';
        successDiv.style.background = '#4caf50';
        successDiv.style.color = 'white';
        successDiv.style.padding = '12px';
        successDiv.style.borderRadius = '8px';
        successDiv.style.marginBottom = '15px';
        successDiv.style.textAlign = 'center';
        
        // Redirect to login
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    }
    
    return false;
}

function clearSignupErrors() {
    document.getElementById('name-error').textContent = '';
    document.getElementById('signup-email-error').textContent = '';
    document.getElementById('signup-password-error').textContent = '';
    document.getElementById('confirm-password-error').textContent = '';
}

// ============================================
// LOGIN FUNCTIONALITY
// ============================================

// Get login form
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        validateLogin();
    });
}

function validateLogin() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    
    let isValid = true;
    
    // Clear previous errors
    clearLoginErrors();
    
    // Email validation
    if (!isValidEmail(email)) {
        showError('login-email-error', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Password validation
    if (password.length === 0) {
        showError('login-password-error', 'Please enter your password');
        isValid = false;
    }
    
    if (isValid) {
        // Check credentials
        const users = getUsers();
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            // Login successful
            localStorage.setItem('currentUser', JSON.stringify(user));
            
            // Show success message
            const successDiv = document.getElementById('login-success');
            successDiv.textContent = 'Login successful! Redirecting...';
            successDiv.style.display = 'block';
            successDiv.style.background = '#4caf50';
            successDiv.style.color = 'white';
            successDiv.style.padding = '12px';
            successDiv.style.borderRadius = '8px';
            successDiv.style.marginBottom = '15px';
            successDiv.style.textAlign = 'center';
            
            // Redirect to home or dashboard
            setTimeout(() => {
                window.location.href = 'index.html'; // Change to your desired page
            }, 1500);
        } else {
            showError('login-email-error', 'Invalid email or password');
            showError('login-password-error', 'Invalid email or password');
        }
    }
    
    return false;
}

function clearLoginErrors() {
    document.getElementById('login-email-error').textContent = '';
    document.getElementById('login-password-error').textContent = '';
}

// ============================================
// HELPER FUNCTIONS
// ============================================

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.color = '#f44336';
        errorElement.style.fontSize = '13px';
        errorElement.style.marginTop = '5px';
        errorElement.style.display = 'block';
    }
}

function getUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

// ============================================
// PASSWORD STRENGTH INDICATOR
// ============================================

const signupPassword = document.getElementById('signup-password');
if (signupPassword) {
    signupPassword.addEventListener('input', function() {
        const password = this.value;
        const strengthBar = document.getElementById('password-strength-bar');
        const strengthContainer = document.getElementById('password-strength');
        
        if (password.length === 0) {
            strengthContainer.style.display = 'none';
            return;
        }
        
        strengthContainer.style.display = 'block';
        
        let strength = 0;
        if (password.length >= 6) strength++;
        if (password.length >= 10) strength++;
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
        if (/\d/.test(password)) strength++;
        if (/[^a-zA-Z0-9]/.test(password)) strength++;
        
        const percentage = (strength / 5) * 100;
        strengthBar.style.width = percentage + '%';
        
        if (strength <= 2) {
            strengthBar.style.background = '#f44336';
        } else if (strength <= 3) {
            strengthBar.style.background = '#ff9800';
        } else {
            strengthBar.style.background = '#4caf50';
        }
    });
}

// ============================================
// NAVIGATION BETWEEN LOGIN/SIGNUP
// ============================================

const showSignupLink = document.getElementById('show-signup');
if (showSignupLink) {
    showSignupLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'signup.html';
    });
}

const showLoginLink = document.getElementById('show-login');
if (showLoginLink) {
    showLoginLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'login.html';
    });
}

// ============================================
// CHECK IF USER IS LOGGED IN
// ============================================

function isUserLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
}

function getCurrentUser() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

// ============================================
// UPDATE HEADER IF USER IS LOGGED IN
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const currentUser = getCurrentUser();
    const authIcons = document.querySelector('.auth-icons');
    
    if (currentUser && authIcons) {
        authIcons.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="color: white; font-size: 14px;">Welcome, ${currentUser.name}</span>
                <button onclick="logout()" style="background: #f44336; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; font-size: 14px;">Logout</button>
            </div>
        `;
    }
});