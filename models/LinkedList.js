const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;  // Initialize the list with no nodes
    }

    // Add a new account to the linked list
    addAccount(accountNumber, balance) {
        const newNode = new Node(accountNumber, balance);

        if (this.head === null) {
            this.head = newNode;  // If the list is empty, the new node becomes the head
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;  // Traverse to the last node
            }
            current.next = newNode;  // Add the new node to the end of the list
        }
    }

    // Get account by account number
    getAccount(accountNumber) {
        let current = this.head;
        while (current !== null) {
            if (current.accountNumber === accountNumber) {
                return current;  // Return the account node if found
            }
            current = current.next;
        }
        return null;  // If account is not found
    }

    // Get all accounts (for display purposes)
    getAllAccounts() {
        let current = this.head;
        let accounts = [];
        while (current !== null) {
            accounts.push({ accountNumber: current.accountNumber, balance: current.balance });
            current = current.next;
        }
        return accounts;
    }

    // Transfer funds from one account to another
    transferFunds(fromAccountNumber, toAccountNumber, amount) {
        const fromAccount = this.getAccount(fromAccountNumber);
        const toAccount = this.getAccount(toAccountNumber);

        if (!fromAccount || !toAccount) {
            return 'Account not found.';
        }

        if (fromAccount.balance < amount) {
            return 'Insufficient balance.';
        }

        fromAccount.balance -= amount;  // Deduct from sender
        toAccount.balance += amount;    // Add to receiver
        return 'Transfer successful.';
    }
}

module.exports = LinkedList;




