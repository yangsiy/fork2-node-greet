#!/usr/bin/env node

var greet = require("../");
var parseArgs = require("minimist");
var res = parseArgs(process.argv.slice(2));
console.log(greet(res._[0], res.drunk));