const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
    // res.send("Server is up and running.");
})

app.post("/", function (req, res) {
    console.log(req.body.cityName);
    console.log("Post received");
    const query = req.body.cityName;
    const apiKey = "09b567d098796859509b0f3595116430";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
    https.get(url, function (response) {
        console.log("resp", response.statusCode);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            // const object = {
            //     name: "Sourav",
            //     caste: "Pahwa"
            // }
            // // console.log(JSON.stringify(object));

            const city = weatherData.name;

            const temp = weatherData?.main?.temp;
            // console.log(temp);

            const description = weatherData.weather[0].description;

            const icon = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png";
            console.log(description);
            res.write("<h1>The temerature in " + city + " is " + temp + " degrees Celcicus.</h1>");
            res.write("<p>The weather is currently " + description + "</p>");
            res.write("<img src=" + icon + ">");
            res.send();
        })
    })
})



app.listen(3002, function () {
    console.log("Server is running on port 3002!")
})
