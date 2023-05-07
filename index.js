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

type: 'list',
name: 'license',
message: 'Choose a license you would like to add to your project',
choices: ['MIT', 'APACHE2.0', 'Boost1.0', 'None']

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

.then((data) => {

const readMePage = generateMarkdown(data);

fs.writeFile('README.md', readMePage, (err) =>

err ? console.log(err) : console.log('Successfully created README.md!')

);

});

