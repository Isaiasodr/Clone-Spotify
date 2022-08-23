const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", exphbs.engine());

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port);
