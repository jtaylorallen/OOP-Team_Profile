// const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require ('inquirer');

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the employee's name?",
            name: "name"
        },

        {
            type: "input",
            message: "What is the employee's email?",
            name: "email"
        },

        {
            type: "list",
            message: "What is the employee's name?",
            name: "name"
        },

    ])