var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');
require('dotenv').config();


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
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        res.json(
            { "message": "HELLO JSON"}
        )
    }else{
        res.json(
            { "message": "Hello Json"}
        )
    }
});





















 module.exports = app;