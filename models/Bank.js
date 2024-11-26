const LinkedList = require('./LinkedList');  // Import the LinkedList class

class Bank {
    constructor() {
        this.accounts = new LinkedList();  // Initialize the LinkedList to store accounts
    }

    // Add an account to the bank
    addAccount(accountNumber, balance) {
        this.accounts.addAccount(accountNumber, balance);
    }

    // Get all accounts in the bank
    getAllAccounts() {
        return this.accounts.getAllAccounts();
    }

    // Check the balance of a specific account
    checkBalance(accountNumber) {
        const account = this.accounts.getAccount(accountNumber);
        if (account) {
            return `Account Number: ${account.accountNumber} - Balance: $${account.balance}`;
        } else {
            return 'Account not found.';
        }
    }

    // Transfer funds between two accounts
    transferFunds(fromAccountNumber, toAccountNumber, amount) {
        return this.accounts.transferFunds(fromAccountNumber, toAccountNumber, amount);
    }
}

module.exports = Bank;






