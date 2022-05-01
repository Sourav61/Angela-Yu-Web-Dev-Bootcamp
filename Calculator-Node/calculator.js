// jshint esversion:6

const express = require("express");

const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    console.log("path", __dirname);
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    res.send("<h1><em>The output is: </em></h1>" + (num1 + num2));
    console.log("res", req.body);
})

app.listen(3002, function () {
    console.log("Hello");
})