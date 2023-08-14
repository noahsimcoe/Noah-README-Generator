// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[${license}](https://choosealicense.com/licenses/${license}/)`
  } else {
    return " ";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ username, email, projectName, description, license, dependencies, test, usage, contributing }) {
  return `# ${projectName}

  ${renderLicenseBadge(license)}

  ## Description
  ${description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questiosn](#questions)

  ## Installation
  To install necessary dependencies, run the following command:
  ${dependencies}

  ## Usage
  ${usage}

  ## License
  This project is licensed under the ${license} license. More can be viewed about this license by clicking here ${renderLicenseLink(license)}.

  ## Contributing
  ${contributing}

  ## Tests
  To run tests, run the following command:
  ${test}


  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [${username}](http://github.com/${username}).
`;
}

module.exports = generateMarkdown;
