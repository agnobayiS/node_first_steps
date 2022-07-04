import chalk from 'chalk'; 
// const greet = require('./greet');

// console.log(greet('Xola'))
//import the greet module that is in the current folder
import greet from './greet.js'

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)
