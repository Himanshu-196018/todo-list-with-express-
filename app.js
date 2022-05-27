const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded( { extended:true } ));
app.use(express.static("public"));

const li_items = ["Buy food", "Cook food", "Eat food"];

app.get("/", function(req, res) {
    let day = date();
    res.render("list", {day: day, item: li_items});
})

app.post("/", function(req, res) {
    let item = req.body.list_item;
    li_items.push(item);
    res.redirect("/");
});

app.get("/about", function(req, res) {
    res.render("about");
})

app.listen(3000, function() {
    console.log("app is running on server 3000");
})