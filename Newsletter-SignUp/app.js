const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function (req, res) {

    var firstName = req?.body?.fName;
    var lastName = req?.body?.lName;
    var email = req?.body?.email;

    console.log(firstName, lastName, email);

    const data =
    {
        "members": [
            {
                "email_address": email,
                "status": "subscribed",
                "merge_fields": {
                    "FNAME": firstName,
                    "LNAME": lastName
                },
            }
        ]
    }

    const jsonData = JSON.stringify(data);

    const url = "https://us17.api.mailchimp.com/3.0/lists/7cbc798901"

    const options = {
        method: "POST",
        auth: "Sourav:bed805efbc8f1793cbc5d1f1d780f5da-us17"
    }

    const request = https.request(url, options, function (response) {
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failiure.html");
        }

        response.on("data", function (data) {
            console.log("JD", JSON.parse(data))
        })
    })

    request.write(jsonData);
    request.end();

})

app.post("/failiure", function (req, res) {
    res.redirect("/");
})

app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running at port 3003")
})

// App Id
// bed805efbc8f1793cbc5d1f1d780f5da-us17

// List Id
// 7cbc798901