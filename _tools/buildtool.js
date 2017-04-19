'use strict';

let buildCommand = require('./lib/buildCommand.js');
let cliOptions = process.argv.slice(2);

console.log('Start building');
buildCommand.execute(cliOptions);
console.log('Building has been sucessfull');