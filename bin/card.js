#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Christoph Höller /'),
  handle: chalk.cyan('choeller'),
  work: chalk.white('CEO of beyond interfaces GmbH & Co. KG, Trainer & Software Consultant'),
  twitter: chalk.cyan('https://twitter.com/chris_hoeller'),
  github: chalk.cyan('https://github.com/choeller'),
  xing: chalk.cyan('https://www.xing.com/profile/Christoph_Hoeller'),
  web: chalk.cyan('http://christoph-hoeller.net/'),
  location: chalk.cyan('Cologne, Germany'),
  contact: chalk.cyan('mail@christoph-hoeller.net'),
  stack: chalk.cyan('Angular, Vue.js, TypeScript, Node.js, Java, Spring, Docker, Kubernetes'),
  npx: chalk.white('npx choeller'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelXING: chalk.white.bold('      XING:'),
  labelStack: chalk.white.bold('Tech-Stack:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelContact: chalk.white.bold('   Contact:'),
  labelLocation: chalk.white.bold('  Location:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.contact}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const xing = `${data.labelXING}  ${data.xing}`
const techStack = `${data.labelStack}  ${data.stack}`
const webing = `${data.labelWeb}  ${data.web}`
const contact = `${data.labelContact}  ${data.contact}`
const location = `${data.labelLocation}  ${data.location}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + 
working + newline + 
techStack + newline + 
twittering + newline + 
githubing + newline + 
xing + newline + 
webing + newline + newline +
carding

console.log(chalk.green(boxen(output, options)))
