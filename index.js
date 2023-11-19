// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
//an array of question objects
const questions = [
    {
        type: 'input',
        message: 'What is title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Describe your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation steps?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage of this application?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose the license',
        name: 'license',
        choices: ['MIT', 'Mozilla', 'Apache'],
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'How you can test this application?',
        name: 'test',
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

// TODO: Create a function to initialize app
function init() {
    //use Inquirer npm package to prompt the user with questions
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            // pass answers to generateMarkdown function argument
            const readmeContent = generateMarkdown(answers)
            //call/execute writeToFile func, and pass the readme path & content of the readme to this func
            writeToFile('./utils/README.md', readmeContent)
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log(error);
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });

}

// Function call to initialize app
init();


//install npm package
//index: prompt user, collect answers from users, use those answers to write into a readme file using the help of the generateMarkdown file