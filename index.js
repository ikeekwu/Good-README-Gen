const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("./node_modules/axios");

inquirer
    .prompt([
        {
            type: "input",
            name: "user",
            message: "What is your username?"
        },
        {
            type: "input",
            name: "name",
            message: "What is the product name?"

        },
        {
            type: "input",
            name: "details",
            message: "What's your project all about?"
        },
        {
            type: "input",
            name: "toc",
            message: "Create your table of contents!?"
        },
        {
            type: "input",
            name: "Installation",
            message: "How to get this environment running?"
        },
        {
            type: "input",
            name: "Usage",
            message: "What is the utility of your product?"
        },
        {
            type: "input",
            name: "collaborators",
            message: "List people who you worked on this project with!"
        },
        {
            type: "input" ,
            name: "Licensing",
            message: "What license would you like to apply to this?"
        }
    ])
        .then(function(response) {
            axios.get(`https://api.github.com/users/${response.user}`)
                .then(function(res) {
                
                    let md = `\n ![](${profilePic})

                    \n ${res.data.avatar_url}\n
                    \n ${res.data.email} \n

                    \n # ${response.name} \n
                    \n ${response.detail} \n
                    \n # Table of contents: \n
                    \n ${response.toc} \n
                    \n # Install: \n
                    \n ${response.Installation} \n
                    \n # Usage: \n
                    \n ${response.Usage} \n
                    \n # Collaborators \n 
                    \n ${response.collaborators} \n
                    \n #Licenses: \n
                    \n ${response.Licensing} \n
                `

                    fs.writeFile("README.md", md, function (err) {
                        if (err) throw err;
                        console.log("Markdown complete!")
                    });
            });
        });









