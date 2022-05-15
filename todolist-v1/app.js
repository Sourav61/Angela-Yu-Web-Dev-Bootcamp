const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {

    const day = date.getDate();

    res.render("list", {
        listTitle: day,
        newListItems: items
    })
});

app.post("/", function (req, res) {
    const item = req.body.newItem;
    console.log("re", req.body)

    if (req.body.list == "Work List") {
        if (item != "") {
            workItems.push(item);
        } else {
            console.log("alert")
        }
        res.redirect("/work");
    } else {
        if (item != "") {
            console.log(item);
            items.push(item);

        } else {
            console.log("alert")
        }
        res.redirect("/");
    }
    // res.render("list", {
    //     newItem: item
    // })
})

app.get("/work", function (req, res) {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    })
})

app.post("/work", function (req, res) {
    const item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.get("/about", function (req, res) {
    res.render("about");
})

app.listen(3004, function () {
    console.log("Server running on port 3004");
})