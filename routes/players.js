// Import packages
const express = require("express");
const router = express.Router();
var playerModel = require("../models/player");

// Root Route
router.get("/", function (req, res) {
  playerModel.find({}, (err, items) => {
    if (err) {
      console.log(err);
    } else {
      res.render("players", { items: items });
    }
  }).sort({ order: 'asc' });
});

router.post("/", async function (req, res) {

  // Get Player values
  var name = req.body.name;
  const orderNumber = await playerModel.countDocuments() + 1;

  // Create player object
  var newPlayer = {
    name: name,
    playing: true,
    odds: "0/0",
	order: orderNumber
  };

  // After player is added, refresh page
  playerModel.create(newPlayer, function (err, newCreated) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/players");
    }
  });
});

router.put("/", function (req, res) {
  res.render('/players')

  //Update player numbers in DB and display players page
	
});

// Exports routes
module.exports = router;
