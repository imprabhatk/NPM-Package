console.log("Moment Start");
const moment = require("moment");

const day = moment().format('dddd');
const day1 = moment().format('MMM Do YY');
const day2 = moment().subtract(10, 'days').calendar();
const day3 = moment.locale();

console.log(day);
console.log(day1);
console.log(day2);
console.log(day3);
console.log("Moment End");

console.log("Samver Start");
const samver = require("semver");
console.log(samver.valid("1.5.2"));
console.log("Samver End");

console.log("Color Start");
var colors = require('colors');
console.log('OMG Rainbows!'.rainbow);