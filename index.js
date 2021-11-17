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
        message: 'Enter the title of your readme file\n',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter the title for your Description section\n',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter information about your readme file under Description heading\n',
        name: 'descriptionInformation'
    },
    {
        type: 'input',
        message: 'Enter the title for your Installation section\n',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter installation instructions for your readme file\n',
        name: 'installationInstructions'
    },
    {
        type: 'input',
        message: 'Enter the title for your Usage section\n',
        name: 'usage'
    },

    {
        type: 'input',
        message: 'Enter usage instructions for your readme file\n',
        name: 'usageInstructions'
    },

    {
        type: 'input',
        message: 'Enter the title for your Contribution section\n',
        name: 'contribution'
    },

    {
        type: 'input',
        message: 'Enter contribution instructions for your readme file\n',
        name: 'contributionInstructions'
    },

    {
        type: 'input',
        message: 'Enter the title for your Testing section\n',
        name: 'testing'
    },

    {
        type: 'input',
        message: 'Enter testing instructions for your readme file\n',
        name: 'testingInstructions'
    },

    // LICENSE SECTION

    {
        type: 'input',
        message: 'Enter the title for your license section\n',
        name: 'licenseTitle'
    },


    {
        message: "choose your license",
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
        ],
    }







]).then((response) => { 
    // TITLE
    fs.writeFileSync("README.md", JSON.stringify('**' + response.title + '**') + "\n\n\n");

    // DESCRIPTION
    fs.appendFileSync("README.md", JSON.stringify('**' + response.description + ":**") + "\n\n");
    fs.appendFileSync("README.md", JSON.stringify(response.descriptionInformation) + "\n\n");

    // INSTALLATION
    fs.appendFileSync("README.md", JSON.stringify("**" + response.installation + ":**") + "\n\n");
    fs.appendFileSync("README.md", JSON.stringify(response.installationInstructions) + "\n\n");

    // USAGE
    fs.appendFileSync("README.md", JSON.stringify("**" + response.usage + ":**") + "\n\n");
    fs.appendFileSync("README.md", JSON.stringify(response.usageInstructions) + "\n\n");

    //CONTRIBUTION
    fs.appendFileSync("README.md", JSON.stringify("**" + response.contribution + "**") + "\n\n");
    fs.appendFileSync("README.md", JSON.stringify(response.contributionInstructions) + "\n\n");

    // TESTING
    fs.appendFileSync("README.md", JSON.stringify("**" + response.testing + "**") + "\n\n");
    fs.appendFileSync("README.md", JSON.stringify(response.testingInstructions) + "\n\n");

    // LICENSE
    fs.appendFileSync("README.md", JSON.stringify("**" + response.licenseTitle + "**") + "\n\n");
    fs.appendFileSync("README.md", JSON.stringify(response.license) + "\n\n");



})
.catch((error) => (console.log(error)))
