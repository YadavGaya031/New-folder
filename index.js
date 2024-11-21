const express = require('express');
const app = express();
const path = require('path');

app.set(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname,"public")));
app.set('view engine', 'ejs');

app.get("/",function(req,res) {
    res.render("index");
})

app.get("/login",function(req,res) {
    res.render("login")
})
app.listen(3000);