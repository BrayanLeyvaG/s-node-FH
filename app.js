const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    name: "Brayan Leyva",
    topic: "Journey",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    name: "Brayan Leyva",
    topic: "Journey",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    name: "Brayan Leyva",
    topic: "Journey",
  });
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
