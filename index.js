const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
// const generateMarkdown = require("./utils/generateMarkdown");

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
      choices: ["MIT","Other","GPLv2","Apache", "GPLv2"]
    },
    {
      type: "input",
      message: "How can you contribute to this project?",
      name: "contributing",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "How do you run tests?",
      name: "tests",
    },
  ])
  // setting up layout of README in variables using template literals.
  .then((answers) => {
let title= `# ${answers.title}`;
let description = `## Description: \n${answers.description}`;
let install = `## Install: \n${answers.install}`;
let usage = `## Usage: \n${answers.usage}`;
let license = `## Licenses \n${answers.license}`;
let contributing = `## Contributing \n${answers.contributing}`;
let github = answers.github;
let email = answers.email;
let questions = 
`## Questions
If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [${github}](https://github.com/${answers.github}?tab=repositories).`
let table =`
## Table of Contents 

* [Installation](#install)

* [Usage](#usage)

* [License](#licenses)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)`
let tests = `
## Tests
${answers.tests}`


// Writes README file
    fs.writeFile(
      "README.md",
      `${title}\n${description}\n${table}\n${install}\n
${usage}\n${license}\n${contributing}\n${questions}\n${tests}`,
      (err) => (err ? console.error(err) : console.log("Commit logged!"))
    );
  });
