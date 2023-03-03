// function to generate markdown for README

function generateMarkdown(data) {

    return `

# ${data.title}

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing-here-is-a-header)

* [Tests](#tests)

* [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}
// You can use this applicaiton by running node index.js.

## License

${data.license}
    
## Contributing Here Is A Header

${data.contributing}
// Fork and pull request.

## Tests

${data.tests}
// To run tests, run the following command:
// npm test

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](${data.githubLink}).
  
  `;
  }
  
  module.exports = generateMarkdown;