const express = require("express");

const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    // express callback response by calling burger.selectAllBurger
    burger.all(function (burgerData) {
        // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
        res.render("index", { burger_data: burgerData });
    });
});


module.exports = router;