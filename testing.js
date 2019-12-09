var fs=require('fs');
let file = fs.readFile('textFile.txt',(err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });
console.log("file: ", file);