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

inquirer
  .prompt([
    { type: "input",
      message: "What is the title of your project?", 
      name: "title" },
    {
      type: "input",
      message: "Give me a short description of this project.",
      name: "description",
    },
    {
      type: "input",
      message: "How will you install this project?",
      name: "install",
    },
    {
        type: "input",
        message: "Tell me about it's usage.",
        name: "usage",
      },
      {
        type: "checkbox",
        message: "Choose your license",
        name: "license",
        choices: ["MIT","ISC","PUBLIC"]
      },
  ])
  .then((answers) => {
let title= `# ${answers.title}`
let description = `## Description: \n${answers.description}`
let install = `## Install: \n${answers.install}`
let usage = `## Usage: \n${answers.usage}`

    fs.writeFile(
      "README.md",
      `${title}\n${description}\n${install}\n${usage}`,
      (err) => (err ? console.error(err) : console.log("Commit logged!"))
    );
  });


// for (i = 0; i < questions.length; i++) {
//     console.log(questions[i]);
// }

// function to write README file

// fs.writeFile('README.md', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );

// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {
//     inquirer
//     .prompt([
//         {}
//     ])

// }

// // function call to initialize program
// init();

