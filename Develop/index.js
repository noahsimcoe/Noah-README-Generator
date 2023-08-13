// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = () => inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "what is your name?"
    },
    {
        name: "age",
        type: "input",
        message: "what is your age?"
    },
    {
        name: "eyes",
        type: "input",
        message: "what is your eye color?"
    },
    {
        name: "state",
        type: "input",
        message: "what state do you live in?"
    },
]);

// TODO: Create a function to write README file
const generateHTML = ({ name, age, eyes, state}) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>Noah's Professional README Generator</title>
    </head>
    <body>
        <div class="bg-gray container-fluid">
            <h1>Hello, my name is ${name}!</h1>
            <p>I am ${age} years old.</p>
            <h3><span class="badge bg-primary">Fun Facts about me</span></h3>
            <ul>
                <li>My eyes are ${eyes}</li>
                <li>I live in the state of ${state}</li>
            </ul>
        </div>
    </body>
    </html>`
}

// console.log's the answers as an object with keys/values
questions()
    .then((answers) => {
        fs.writeFileSync('index.html', generateHTML(answers));
    })
    .then(() =>
        console.log("Success! Your index.html has been written.")
    )
    .catch(err => console.log(err));

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
