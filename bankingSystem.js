// Task 1: Create a function to handle deposits into a bank account
let balance = 1000; // Initial balance in the account

function deposit(amount) {
    balance += amount; // Add money to the account
    console.log(`Deposited $${amount}. New balance: $${balance}`);
}

// Task 2: Implement a function to handle withdrawals from a bank account
function withdraw(amount) {
    if (amount <= balance) {
        balance -= amount; // Subtract money from the account
        console.log(`Withdrew $${amount}. New balance: $${balance}`);
    } else {
        console.log("Insufficient funds for this withdrawal.");
    }
}

// Task 3: Develop a function to check the current balance of the account
function checkBalance() {
    console.log(`Current balance: $${balance}`);
}

// Example usage
deposit(500);  // Depositing $500
withdraw(200); // Withdrawing $200
checkBalance(); // Checking the balance
