const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    "What is the title of your project?",
    "Give me a short description of this project.",
    "How will you install this project?",
    "Tell me about it's usage.",
    "What licence are you using?",
    "Who contributed to this project? Input there github usernames.",
    "What is your GitHub username?",
    "What is your email address?"
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt([
        {}
    ])

}

// function call to initialize program
init();
