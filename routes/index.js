const express = require('express');
var router = express.Router();

// Root Route
router.get("/", function(req, res){
	res.render("landing");
});

// Root Route
router.get("/pickteams", function(req, res){
	res.render("pickteams");
});

// Exports routes
module.exports = router;