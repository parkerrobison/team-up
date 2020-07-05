const inquirer = require('inquirer');
const fs = require('fs');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const generateCard = require('./src/card.js')
const generateBody = require('./src/body.js')
const teamData= [];

const tmPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'tmName',
            message: 'What is the name of the Team Manager?',
            validate: tmNameInput => {
                if (tmNameInput) {
                    return true;
                } else {
                    console.log('Please enter the team manager\'s name.')
                }
            }
        },
        {
            type: 'number',
            name: 'tmId',
            message: 'What is the employee id of the Team Manager?',
            validate: tmIdInput => {
                if (tmIdInput) {
                    return true;
                } else {
                    console.log('Please enter team manager\'s employee id.')
                }
            }
        },
        {
            type: 'input',
            name: 'tmEmail',
            message: 'What is their email address?',
            validate: tmEmailInput => {
                if (tmEmailInput) {
                    return true;
                } else {
                    console.log('Please enter the team manager\'s email.')
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is their office number?',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter the team manager\'s office number.')
                }
            }
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
        let m = generateTemplate();
        let body = generateBody(m);

        fs.writeFileSync('./dist/index.html', body, function(err) {
            if(err) {
                return console.log(err)
            }
            console.log("Your team data is created!")
         
        }) 

    })
}


const engPrompt = () => {
     inquirer.prompt([
        {
            type: 'input',
            name: 'engName',
            message: 'What is the name of the engineer?',
             validate: engNameInput => {
                if (engNameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the engineer.')
                }
            }
        },
        {
            type: 'number',
            name: 'engId',
            message: 'What is the employee id of the engineer?',
             validate: engIdInput => {
                if (engIdInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer\'s employee id.')
                }
            }
        },
        {
            type: 'input',
            name: 'engEmail',
            message: 'What is their email address?',
             validate: engEmailInput => {
                if (engEmailInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer\'s email address.')
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their github username?',
             validate: ghInput => {
                if (ghInput) {
                    return true;
                } else {
                    console.log('Please enter the engineer\'s github username.')
                }
            }
        }
    ]
    ).then(function(engRes){
        let engName = engRes.engName;
        let engId = engRes.engId;
        let engEmail = engRes.engEmail;
        let github = engRes.github;
        const engineer = new Engineer (engName, engId, engEmail, github)
        teamData.push(engineer);
        return menuPrompt();
    })
    
}

const intPrompt = () => {
     inquirer.prompt([
        {
            type: 'input',
            name: 'intName',
            message: 'What is the name of the intern?',
            validate: intNameInput => {
                if (intNameInput) {
                    return true;
                } else {
                    console.log('Please enter the intern\'s name.')
                }
            }
        },
        {
            type: 'number',
            name: 'intId',
            message: 'What is the employee id of the intern?',
             validate: intIdInput => {
                if (intIdInput) {
                    return true;
                } else {
                    console.log('Please enter the intern\'s employee id.')
                }
            }
        },
        {
            type: 'input',
            name: 'intEmail',
            message: 'What is their email address?',
             validate: intEmailInput => {
                if (intEmailInput) {
                    return true;
                } else {
                    console.log('Please enter the intern\'s email address.')
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school are they attending?',
             validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter the school the intern is attending.')
                }
            }
        }
    ]
    ).then(function(intRes){
        let intName = intRes.intName;
        let intId = intRes.intId;
        let intEmail = intRes.intEmail;
        let school = intRes.school;
        const intern = new Intern(intName, intId, intEmail, school);
        teamData.push(intern);
        return menuPrompt();
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
           return engPrompt();
            
        }
        
        if(res.addTeamMember === "intern"){
            return intPrompt();
            
        }

        if (res.addTeamMember === "Everyone is here") {
           return
        }
    })
}
    
const generateTemplate = function() {
    let cardHtml = ''
    teamData.forEach(employee => {
        cardHtml += generateCard(employee);
    })
    return cardHtml;
}

tmPrompt();