// use command line generator to dynamically create readme file
// when node index.js is execute, generete the CLI to ask the following and write to README.md file:

// 1 - WHEN I enter my project titl, THEN this is displayed as the title of the README

//2 - WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

//3 - WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license 
// the application is covered under

//4 - WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

//5 - WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

//6 - WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


const inquirer = require("inquirer");
const fs = require("fs");

// takes required inputs to create readme file
inquirer.prompt([
    {
        type: 'input',
        message: 'Enter the title of your readme file: \n\n',
        name: 'title'
    },

    {
        type: 'input',
        message: 'Enter information about your readme file: \n\n',
        name: 'descriptionInformation'
    },

    {
        type: 'input',
        message: 'Enter step by step installation instructions (Note: separate each individual step with a period): \n\n',
        name: 'installationInstructions'
    },

    {
        type: 'input',
        message: 'Enter step by step usage instructions (Note: separate each individual step with a period): \n\n',
        name: 'usageInstructions'
    },

    {
        type: 'input',
        message: 'Enter contribution instructions for your readme file: \n\n',
        name: 'contributionInstructions'
    },

    {
        type: 'input',
        message: 'Enter step-by-step testing instructions. (Note: separate each individual step with a period): \n\n',
        name: 'testingInstructions'
    },

    // LICENSE SECTION

    {
        message: "choose your license: \n\n",
        name: "license",
        type: "list",
        choices: [
          {
            name: "BSD - 3",
            value:
              "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
          },
          {
            name: "ZERO",
            value:
              "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
          },
          {
            name: "ECLIPSE",
            value:
              "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
          },
          {
            name: "GNU",
            value: 
            "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
          },

          {
            name: "MIT",
            value: 
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
          },

          {
            name: "Perl",
            value: 
            "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
          },



        ]},

        // QUESTIONS SECTION

        {
            type: 'input',
            message: 'Enter your Github username under the Question section: \n\n',
            name: 'username'
        },

        {
            type: 'input',
            message: 'Enter your Github email address: \n\n',
            name: 'email'
        }

]).then((response) => { 

    // TABLE OF CONTENTS
    fs.writeFileSync("README.md", "## " + "Table of Contents\n\n\n")
    // backslash tells jevascript the square brackets are literals
    fs.appendFileSync('README.md', "1. " + `\[${response.title}\](#${response.title.toLowerCase().replaceAll(' ', '-')})\n\n`)
    fs.appendFileSync('README.md', "2. " + "[Description](#description)\n\n")
    fs.appendFileSync('README.md', "2. " + "[Installation](#installation)\n\n")
    fs.appendFileSync('README.md', "2. " + "[Usage](#usage)\n\n")
    fs.appendFileSync('README.md', "2. " + "[Contribution](#contribution)\n\n")
    fs.appendFileSync('README.md', "2. " + "[Testing](#testing)\n\n")
    fs.appendFileSync('README.md', "2. " + "[License](#license)\n\n")
    fs.appendFileSync('README.md', "2. " + "[Questions?](#questions)\n\n")


    // TITLE
    fs.appendFileSync("README.md", "# " + response.title + "\n\n\n");

    // DESCRIPTION
    fs.appendFileSync("README.md", '### ' + "Description" + "\n\n");
    fs.appendFileSync("README.md", response.descriptionInformation + "\n\n");

    // INSTALLATION
    fs.appendFileSync("README.md", '### '  + "Installation" + "\n\n");
    // create a separate line for each installation instruction ending with a period.
    fs.appendFileSync("README.md", response.installationInstructions.replaceAll('.', '\n\n') + "\n\n");

    // USAGE
    fs.appendFileSync("README.md", '### ' + "Usage" + "\n\n");
    fs.appendFileSync("README.md", response.usageInstructions.replaceAll('.', '\n\n') + "\n\n");

    //CONTRIBUTION
    fs.appendFileSync("README.md", '### ' + "Contribution" + "\n\n");
    fs.appendFileSync("README.md", response.contributionInstructions.replaceAll('.', '\n\n') + "\n\n");

    // TESTING
    fs.appendFileSync("README.md", '### ' + "Testing" + "\n\n");
    fs.appendFileSync("README.md", response.testingInstructions.replaceAll('.', '\n\n') + "\n\n");

    // LICENSE
    fs.appendFileSync("README.md", '### ' + "License" + "\n\n");
    fs.appendFileSync("README.md", response.license + "\n\n");

    // QUESTIONS
    fs.appendFileSync("README.md", '### ' + "Questions?" + "\n\n");
    fs.appendFileSync("README.md", `Github link: https://github.com/${response.username}` + "\n\n");
    fs.appendFileSync("README.md", "For questions email me at: " + response.email + "\n\n");

})
.catch((error) => (console.log(error)))
