// const express = require('express')
// const app = express()
 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
 
// app.listen(3000)


const express = require('express');
const app = express();
 
app.get('/',  (req, res)=> res.send('Hello World'));
 
app.listen(3000,()=>{console.log("My app is listining at post 3000");});