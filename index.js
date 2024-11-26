const express = require('express');
const path = require('path');
const Bank = require('./models/bank');

const app = express();
const bank = new Bank();

// Pre-populate with some sample accounts
bank.addAccount('1001', 5000);
bank.addAccount('1002', 3000);
bank.addAccount('1003', 1500);
bank.addAccount('1004', 2500);

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));  // Parses application/x-www-form-urlencoded
app.use(express.json());  // Parses application/json

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Routes

// Home page: Display accounts and account management options
app.get('/', (req, res) => {
    const accounts = bank.getAllAccounts();  // Get the list of accounts
    res.sendFile(path.join(__dirname, 'views', 'index.html'), {
        accounts: JSON.stringify(accounts)  // Send accounts data as a JSON string
    });
});

// Add a new account (POST request)
app.post('/addAccount', (req, res) => {
    const { accountNumber, balance } = req.body;
    bank.addAccount(accountNumber, parseFloat(balance));
    res.redirect('/');
});

// Transfer funds (POST request)
app.post('/transfer', (req, res) => {
    const { fromAccount, toAccount, amount } = req.body;
    const result = bank.transferFunds(fromAccount, toAccount, parseFloat(amount));
    res.redirect('/');
});

// Check balance (GET request)
app.get('/checkBalance', (req, res) => {
    const { accountNumber } = req.query;
    const result = bank.checkBalance(accountNumber);
    res.send(result);
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});









