// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = {
  title: "String",
  content: "String",
};

const Article = mongoose.model("Article", articleSchema);

///////////////////////////////////// Request Targeting All Articles  //////////////////////////////////////

app
  .route("/articles")
  .get(function (req, res) {
    Article.find(function (err, articles) {
      if (err) res.send(err);

      res.send(articles);
    });
  })

  .post(function (req, res) {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });
    newArticle.save(function (err) {
      if (!err) res.send("Successfully added a new article");
      else res.send(err);
    });
  })

  .delete(function (req, res) {
    Article.deleteMany(function (err) {
      if (!err) res.send("Successfully deleted all articles.");
      else res.send(err);
    });
  });

///////////////////////////////////// Request Targeting A Specific Article  //////////////////////////////////////

app
  .route("/articles/:articleTitle")
  .get(function (req, res) {
    Article.findOne(
      { title: req.params.articleTitle },
      function (err, foundArticle) {
        if (foundArticle) {
          res.send(foundArticle);
        } else res.send("No matching article with that title was found!!");
      }
    );
  })
  .put(function (req, res) {
    Article.updateOne(
      { title: req.params.articleTitle },
      { title: req.body.title, content: req.body.content },
      function (err) {
        if (!err) res.send("Successfully updated Article!");
        else res.send(err);
      }
    );
  })
  .patch(function (req, res) {
    Article.updateOne(
      { title: req.params.articleTitle },
      { $set: req.body },
      function (err) {
        if (!err) res.send("Successfully updated article");
        else res.send(err);
      }
    );
  })
  .delete(function (req, res) {
    Article.deleteOne({ title: req.params.articleTitle }, function (err) {
      if (!err) res.send("Successfully deleted the corresponding article.");
      else res.send(err);
    });
  });

app.listen(3010, function () {
  console.log("Server started at port 3010");
});
