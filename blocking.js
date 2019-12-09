var fs = require("fs");
var data = fs.readFileSync('textFile.txt');

console.log(data.toString());
console.log("Program Ended");