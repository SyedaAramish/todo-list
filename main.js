import inquirer from "inquirer";
import chalk from "chalk";
let todos = ["Fajr Namaz", "Coding", "College", "Zohr Namaz", "Academy", "Break", "Study"];
console.log(chalk.yellowBright.bold(" ----HEY! WELCOME TO TO DO LIST----"));
async function todolist(todos) {
    do {
        let newList = await inquirer.prompt({
            name: "operator",
            message: (chalk.black("Please select one")),
            type: "list",
            choices: ["Add", "Delete", "Update", "View"],
        });
        if (newList.operator === "Add") {
            let addtasks = await inquirer.prompt({
                name: "addtasks",
                type: "input",
                message: (chalk.black("Add the task")),
            });
            todos.push(addtasks.addtasks);
            todos.forEach(List => console.log(chalk.red(List)));
            // console.log(todos);
        }
        if (newList.operator === "Update") {
            let updatetasks = await inquirer.prompt({
                name: "updatelist",
                message: (chalk.black("Update your list")),
                type: "list",
                choices: todos.map(items => items)
            });
            let addtasks = await inquirer.prompt({
                name: "addtasks",
                type: "input",
                message: (chalk.black("Add the task")),
            });
            let newToDo = todos.filter(val => val !== updatetasks.updatelist);
            todos = [...newToDo, addtasks.addtasks];
            todos.forEach(List => console.log(chalk.red(List)));
            // console.log(todos);
        }
        if (newList.operator === "Delete") {
            let deletetasks = await inquirer.prompt({
                name: "deletelist",
                message: (chalk.black("Update your list")),
                type: "list",
                choices: todos.map(items => items)
            });
            let newToDo = todos.filter(val => val !== deletetasks.deletelist);
            todos = [...newToDo];
            todos.forEach(List => console.log(chalk.red(List)));
            // console.log(todos);
        }
        if (newList.operator === "View") {
            console.log(chalk.green("******** TO DO LIST ********"));
            todos.forEach(List => console.log(chalk.red(List)));
            console.log(chalk.green("--------- :) ---------"));
            break;
        }
    } while (true);
}
todolist(todos);
