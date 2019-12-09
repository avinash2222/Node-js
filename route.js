var express = require('express');
var app = express();
app.get('/Node',function(req,res)
{
    res.send("Tutorial on Node");
});
app.get('/Angular',function(req,res)
{
    res.send("Tutorial on Angular");
});
app.get('/',function(req,res){
    res.send('Welcome to Guru99 Tutorials');
});
app.listen(3000);
