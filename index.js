import inquirer from 'inquirer'
console.log(inquirer)
import fs from "fs"

import generateHTML from './generateHTML.js'
console.log(generateHTML)

inquirer.prompt([
    {
        type: "input",
        message: "What's your name?",
        name: "name"
    },
    {
        type: "input",
        message: "What's your location?",
        name: "location"
    },
    {
        type: "input",
        message: "Tell me about yourself.",
        name: "bio"
    },
    {
        type: "input",
        message: "What's your linkedIn URL?",
        name: "linkedinURL"
    },
    {
        type: "input",
        message: "What's your Github URL?",
        name: "githubURL"
    }
])
    .then(answers => {
        console.log(answers)
        //generate HTML string
       const html = generateHTML(answers)
       console.log(html)
        //Write/save the file
        fs.writeFile('./portfolio.html', html, error => {
            if (error) throw error

            console.log ('HTML saved!')
        })
    })
    .catch(error => console.log(error))