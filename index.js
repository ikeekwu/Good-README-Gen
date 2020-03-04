const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');



inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What would you like to title your markdown file?'
    }
]).catch( (answers) => {

    var fileName = answers.str.toLowerCase().split('').join('') + '.md';

    fs.writeFileSync(`${fileName}`)
    
    return console.log(err)

});




