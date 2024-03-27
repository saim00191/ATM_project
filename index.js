#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let PinCode = 9087;
let Balance = Math.floor(Math.random() * 20000);
console.log(chalk.bold("PinCode Is : 9087"));
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "UserID",
        message: "Enter Your ID : "
    }
]);
let { UserID } = answers;
if (UserID === PinCode) {
    console.log(chalk.green("Welcome To ATM"));
    let Operations = await inquirer.prompt([
        {
            type: "list",
            name: "TransactionType",
            choices: ["Fast Cash", "Withdraw", "Check Balance"]
        }
    ]);
    let { TransactionType } = Operations;
    if (TransactionType === "Fast Cash") {
        let FastCash = await inquirer.prompt([
            {
                type: "list",
                name: "amount",
                message: "Select Your Amount : ",
                choices: [1000, 3000, 5000, 10000, 20000]
            }
        ]);
        if (Balance > FastCash.amount) {
            let RemaningBalance = Balance - FastCash.amount;
            console.log(chalk.bold("Previous Balance : ", Balance));
            console.log(chalk.green("Transaction SuccessFull."));
            console.log(chalk.bold(`Your Remaning Balance is ${RemaningBalance}.`));
        }
        else {
            console.log(chalk.bold("Current Balance :", Balance));
            console.log(chalk.red("You don't have enough money in your account to complete your transaction."));
        }
    }
    else if (TransactionType === "Withdraw") {
        let Withdraw = await inquirer.prompt([
            {
                type: "number",
                name: "amount",
                message: "Enter Your Amount : "
            }
        ]);
        if (Balance > Withdraw.amount) {
            let RemaningBalance = Balance - Withdraw.amount;
            console.log(chalk.bold("Previous Balance : ", Balance));
            console.log(chalk.green("Transaction SuccessFull."));
            console.log(chalk.bold(`Your Remaning Balance is ${RemaningBalance}.`));
        }
        else {
            console.log(chalk.bold("Current Balance :", Balance));
            console.log(chalk.red("You don't have enough money in your account to complete your transaction."));
        }
    }
    else if (TransactionType === "Check Balance") {
        console.log(chalk.bold(`Your Current Balance is ${Balance}.`));
    }
}
else {
    console.log(chalk.red("Incorrect PinCode"));
}
console.log(chalk.green("THANK YOU!!"));
