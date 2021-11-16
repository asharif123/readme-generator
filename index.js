// use command line generator to dynamically create readme file
// when node index.js is execute, generete the CLI to ask the following and write to README.md file:

// 1 - WHEN I enter my project titl, THEN this is displayed as the title of the README

//2 - WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

//3 - WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

//4 - WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license 
// the application is covered under

//5 - WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

//6 - WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

//7 - WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// Use DOM elements to store each input into readme file

const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: 'input',
        message: 'Enter the title of the readme file',
        name: 'title'
    }
]).then((response) => {
    fs.writeFileSync("README.md", JSON.stringify("#**" + response.title + "**"));
})
.catch((error) => (console.log(error)))
