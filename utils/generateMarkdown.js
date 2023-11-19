// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') return ''
  const badges = {
    Apache: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    Mozilla: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  return badges[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') return ''
  return `
## License

This application is covered by the ${license} license.
  `
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1)
}

function renderTableOfContents(data) {
  let chapter = 1
  let tableOfContents = ``
  for (section in data) {
    if (section === 'title') continue
    if (section == 'email') continue
    if (section === 'license' && data.license === 'none') continue
    tableOfContents += `
${chapter}. [${capitalize(section)}](#${section})`
    chapter++
  }
  return tableOfContents
}

function renderQuestionsSection(username,email) {
  return `
## Questions

If you have any questions, contact me via github: https://github.com/${username} or email me at ${email}
  `
}

// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba -r eference for licences and badges

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //build content of the README here
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

${renderTableOfContents(data)}

## Description

${data.description}

## Installation

${data.installation}

## Usage

${data.usage}

## Contribution

${data.contribution}

${renderLicenseSection(data.license)}
## Test

${data.test}

${renderQuestionsSection(data.questions, data.email)}
`;
}

module.exports = generateMarkdown;
