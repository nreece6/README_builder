// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
inquirer
    .prompt([

{

type: 'input',
name: 'title',
message: 'What is the title of your project?',

},

{

type: 'input',
name: 'description',
message: 'Enter a description of your project.',

},

{

type: 'input',
name: 'install',
message: 'Enter installation instructions for your application.',

},

{

type: 'input',
name: 'usage',
message: 'Enter relevant usage information.',

},

{

type: 'input',
name: 'contribution',
message: 'Enter contribution guidelines',

},

{

type: 'input',
name: 'tests',
message: 'Enter any test instructions.',

},

{

type: 'input',
name: 'license',
message: 'Enter your LinkedIn URL.',

},

{

type: 'input',
name: 'github',
message: 'Enter your GitHub account.',
        
},

{

type: 'input',
name: 'email',
message: 'Enter your email address.',
    
},

])

.then((answers) => {

const readMePage = generateMarkdown(answers);

fs.writeFile('README.md', readMePage, (err) =>

err ? console.log(err) : console.log('Successfully created index.html!')

);

});