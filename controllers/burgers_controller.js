// Dependencies
var express = require("express");
var burger = require("../models/burger.js");

// Creating a router
var router = express.Router();
router.get("/", function (req, res) {
    burger.all(function(data) {
        var burgers = {
            burgers: data
        };
        console.log(burgers);
        res.render("index", burgers);
    });
});
// New Burger
router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        res.json({ id: result.insertId });
    });
});
// Burger has  been devoured
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", (req, res) => {
    console.log("controller fire");
    const condition = `id = ${req.params.id}`;
    burger.delete(condition, (result) => {
        console.log(`RESULT = ${result}`);
        console.log(result);
        
        if (result.affectedRows == 0){
            return res.status(404).end();
        }
        else{
            console.log("deleted")
            return res.status(200).end();
        }  
    })
});


module.exports = router;