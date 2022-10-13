// Initalize the required files
const fs = require('fs');
const inquirer = require('inquirer');
const genHTML = require('./src/generateHTML');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// Declare a trio of arrays for each of the classes to be used.
const manager = [];
const engineers = [];
const interns = [];
// Arrays of inquirer questions
const Questions = [
    {
        type: 'input',
        message: 'Enter the employees name:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter the employees employee ID:',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Enter the employees email:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter the managers office number:',
        name: 'officeNumber',
    },
];
// The recursive list
const menuQuestion = [
    {
        type: 'list',
        message: "Which team member would you like to add?",
        choices: ["Engineer", "Intern", "Finish Building"],
        name: 'role',
    },
];
// Single question objects to be popped and pushed
const engineerQuestion = 
    {
        type: 'input',
        message: 'Enter the github username of the engineer:',
        name: 'github',
    };


const internQuestion = 
    {
        type: 'input',
        message: 'Enter the school of study for the intern:',
        name: 'school',
    };

// Function to create the index file and pass it data.
function writeToFile(fileName, manager, engineers, interns){
    fs.writeFile(fileName, genHTML(manager, engineers, interns), (err) =>
    err ? console.log(err) : console.log('Team list page created successfully!'));  
}

//Initialize, gets the data of the manager, runs the engineer/intern loop
function init(){
    const loop = true;
    inquirer
        .prompt(Questions)
        .then((answers) => {
            manager.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
            fillroster();
        });
    
}
// The loop to fill up the arrays for engineers and interns until the user concludes their team building
function fillroster(){
    inquirer
        .prompt(menuQuestion)
        .then((answer) => {
            if (answer.role == 'Engineer'){                
                  Questions.pop();
                  Questions.push(engineerQuestion);
                  inquirer.prompt(Questions).then((answers) => {
                  engineers.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
                  fillroster();
                  });
            }
            else if(answer.role == 'Intern'){
                  Questions.pop();
                  Questions.push(internQuestion);
                  inquirer.prompt(Questions).then((answers) => {
                  interns.push(new Intern(answers.name, answers.id, answers.email, answers.school));
                  fillroster();
                 });
                }
            else {
                writeToFile('./dist/index.html', manager, engineers, interns);
                
            }
        });
    }

    

// To start it all
init();
