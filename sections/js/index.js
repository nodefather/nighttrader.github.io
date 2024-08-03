// Import JavaScript files for each section of your project
import './user-profile-section.js';
import './deposit-section.js';
import './wallet-section.js';
import './exchange-section.js';
import './withdraw-section.js';

// Import corresponding CSS files
import '../css/user-profile-section.css';
import '../css/deposit-section.css';
import '../css/wallet-section.css';
import '../css/exchange-section.css';
import '../css/withdraw-section.css';

// Initialize any JavaScript that needs to run when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeUserProfile();
    initializeDepositSection();
    initializeWalletSection();
    initializeExchangeSection();
    initializeWithdrawSection();
});

// Example function to initialize components
function initializeUserProfile() {
    console.log('User Profile Section Initialized');
}

function initializeDepositSection() {
    console.log('Deposit Section Initialized');
}

function initializeWalletSection() {
    console.log('Wallet Section Initialized');
}

function initializeExchangeSection() {
    console.log('Exchange Section Initialized');
}

function initializeWithdrawSection() {
    console.log('Withdraw Section Initialized');
}
