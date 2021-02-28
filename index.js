const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const team = []

function getInfo() {
    function getManager() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the managers name?'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is their employee Id number'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is their email address?'
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is their office number?'
                },
            ]).then(answers => {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
                team.push(manager);
                console.log(manager)
                addMember();
            })
            
    };

    function getEngineer() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is this engineers name?'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is their employee Id number'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is their email address?'
                },
                {
                    type: 'input',
                    name: 'gitHub',
                    message: 'What is their Github username?'
                }
            ]).then(answers => {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
                team.push(engineer);
                console.log(engineer)
                addMember();
            })
            
    };

    function getIntern() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is this interns name?'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is their Id number'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is their email address?'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What school are they attending.'
                }
            ]).then(answers => {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                team.push(intern);
                console.log(intern)
                addMember();
            })
            
    };



    function addMember() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'add',
                    message: 'Would you like to add another team member?',
                    choices: ["Engineer", "Intern", "Finished"]
                }
            ]).then(answers => {
                if (answers.add === "Engineer") {
                    getEngineer()
                } else if (answers.add === "Intern") {
                    getIntern();
                } else {
                    console.log(team)
                }
            })
    };

    getManager();
}


getInfo();