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
    return `This project is licensed under the ${license} license, click [here](https://choosealicense.com/licenses/${license}/) to learn more about this license.`
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
  - [Questions](#questions)

  ## Installation
  To install necessary dependencies, run the following command:
      <br><div style="background:grey">${dependencies}</div></br>

  ## Usage
  ${usage}

  ## License
  ${renderLicenseLink(license)}

  ## Contributing
  ${contributing}

  ## Tests
  To run tests, run the following command:
      <br><div style = "background:grey">${test}</div></br>

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at [${username}](http://github.com/${username}).
`;
}

module.exports = generateMarkdown;
