var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');
require('dotenv').config();


app.use((req, res, next) => {
   console.log(req.method + " " + req.path + " - " + req.ip)

   
    next();
});

bGround.log("Hello World");
console.log("Hello World");


app.use("/public", express.static(__dirname + "/public"));



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
  });


// app.get("/json", (req, res) => {
//     res.json({"message": "Hello json"});
// });

app.get("/json", (req, res) => {
    var jsonResponse = { "message": "Hello json"};
    
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        jsonResponse.message = jsonResponse.message.toUpperCase()
    }
  
     res.json(jsonResponse);
});


function getTheCurrentTimeString() {
    return new Date().toString();
}


app.get("/now", (req, res, next) => {
    req.time = getTheCurrentTimeString();
    next();
}, (req, res) => {
    res.json({time: req.time});
});



















 module.exports = app;