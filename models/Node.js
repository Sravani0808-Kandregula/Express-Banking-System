class Node {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;  // Unique identifier for the account
        this.balance = balance;  // Account balance
        this.next = null;  // Points to the next node
    }
}

module.exports = Node;
