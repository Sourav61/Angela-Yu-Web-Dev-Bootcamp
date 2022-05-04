const express = require("express");
const https = require("https");
const app = express();

app.get("/", function (req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid={API_KEY}&units=metric"
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

            const temp = weatherData.main.temp;
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

    // res.send("Server is up and running.");
})



app.listen(3002, function () {
    console.log("Server is running on port 3002!")
})
