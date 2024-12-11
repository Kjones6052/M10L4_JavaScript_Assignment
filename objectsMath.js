// This file contains all the code to complete all the tasks under the section 'Exploring Objects and Math in JavaScript'

console.log("Part 2:"); // displaying starting point 


// Task 1: constructor for Account(accountNumber, balance, owner)

function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

// Task 2: functions for deposit & withdrawal

// deposit
Account.prototype.deposit = function(depositAmount) {
    this.balance = this.balance + depositAmount;
    console.log(`Deposit received, account balance updated: $${this.balance}`);
}

// withdrawal
Account.prototype.withdrawal = function(withdrawalAmount) {
    this.balance = this.balance - withdrawalAmount;
    console.log(`Deposit received, account balance updated: $${this.balance}`);
}

// Task 3: function to calculate compound interest
// formula: total = initBal * (1 + rate)
function calculateCompoundInterest(Account, interestRate) {
    let newBalance = Account.balance * (1 + interestRate);
    let result =  newBalance - Account.balance;
    console.log(`Total amount earned in compound interest: $${result}`)
}


// Implementing call of functions for verification of results
let account1 = new Account(1, 10000, "Coding Temple"); // creating Account object
account1.deposit(750); // use deposit function
account1.withdrawal(225); // use withdrawal function
calculateCompoundInterest(account1, 0.04); // use compound interest function
