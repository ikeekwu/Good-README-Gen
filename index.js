const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("./node_modules/axios");

inquirer
    .prompt([
        {
            type: "type",
            name: "user",
            message: "What is your username?"
        },
        {
            type: "input",
            name: "title",
            message: "What is the product name?"

        },
        {
            type: "input",
            name: "details",
            message: "What's your project all about?"
        },
        {
            type: "input",
            name: "enviornment",
            message: "How do you get the enviornment running?"
        },
        {
            type: "input",
            name: "toc",
            message: "Create your table of contents!"
        },
        {
            type: "input",
            name: "output",
            message: ""
        },
        {
            type:,
            name:,
            message:
        },
        {
            type: ,
            name: ,
            message:
        },
        {
            type: ,
            name: ,
            message:
        }
    ])








