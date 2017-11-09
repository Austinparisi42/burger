var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		console.log(data, "inside controller");
		var dataObject = {
			burgers: data
		}
		res.render("index", dataObject);
	});
  });

router.post("/", function(req, res) {
	burger.create(function(data) {
		var newBurger = {
			
		}
	}


	// 	[
	// // 	"name", "devoured"
	// // ], [
	// // 	req.body.name
	// // ], function(result) {
	// // 	res.render("index", burger);
	});
});



module.exports = router;