const express = require('express');
var router = express.Router();
const seedDB = require("../seedDB");

// Root Route
router.get("/", function(req, res){
	res.render("landing");
});

// Reset DB data
router.get("/resetDB", function(req, res){
	seedDB();
	res.render("landing");
});

// Exports routes
module.exports = router;