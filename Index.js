const inquirer = require('inquirer');
const fs = require('fs');
const Intern = require('./lib/Intern');

const teamData= [];

const tmPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'tmName',
            message: 'What is the name of the Team Manager?',
            //validate
        },
        {
            type: 'number',
            name: 'tmId',
            message: 'What is the employee id of the Team Manager?',
            //validate
        },
        {
            type: 'input',
            name: 'tmEmail',
            message: 'What is their email address?',
            //validate
        },
        {
            type: 'number',
            name: 'office',
            message: 'What is their office number?',
            //validate
        } 
    ]
    ).then(function(tmRes){
        let tmName = tmRes.tmName;
        let tmId = tmRes.tmId;
        let tmEmail = tmRes.tmEmail;
        let office = tmRes.office;
        const manager = new Manager (tmName, tmId, tmEmail, office)
        teamData.push(manager);
        menuPrompt(); 
    })
    
}


const engPrompt = () => {
     inquirer.prompt([
        {
            type: 'input',
            name: 'eng-name',
            message: 'What is the name of the engineer?',
            //validate
        },
        {
            type: 'number',
            name: 'engId',
            message: 'What is the employee id of the engineer?',
            //validate
        },
        {
            type: 'input',
            name: 'engEmail',
            message: 'What is their email address?',
            //validate
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their github username?',
            //validate
        }
    ]
    ).then(function(engRes){
        let name = engRes.name;
        let engId = engRes.engId;
        let engEmail = engRes.engEmail;
        let github = engRes.github;
        const engineer = new Engineer (name, engId, engEmail, github)
        teamData.push(engineer);
        menuPrompt();
    })
    
}

const intPrompt = () => {
     inquirer.prompt([
        {
            type: 'input',
            name: 'intName',
            message: 'What is the name of the intern?',
            //validate
        },
        {
            type: 'number',
            name: 'intId',
            message: 'What is the employee id of the intern?',
            //validate
        },
        {
            type: 'input',
            name: 'intEmail',
            message: 'What is their email address?',
            //validate
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school are they attending?',
            //validate
        }
    ]
    ).then(function(intRes){
        let intName = intRes.intName;
        let intId = intRes.intId;
        let intEmail = intRes.intEmail;
        let school = intRes.school;
        const intern = new Intern(intName, intId, intEmail, school);
        teamData.push(intern);
        menuPrompt();
    })
    
}

const menuPrompt = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addTeamMember',
            message: 'Who else is a part of this team?',
            choices: ['engineer', 'intern', 'Everyone is here']
        }
    ]).then(function(res){
        if(res.addTeamMember === "engineer"){
            engPrompt();
        }

        if(res.addTeamMember === "intern"){
            intPrompt();
        }

        //create a print function for the data.
        if (res.addTeamMember === "Everyone is here") {
            console.log(teamData)
        }
    })
    
}

tmPrompt();