var mongoose = require("mongoose");
var playerModel = require("./models/player");

console.log("hello")

//Create a bit of data to use
var data = [
	{
		name: "Dan", 
		playing: true,
		odds: "0/0",
        order: 1
	},
	{
		name: "Kenny", 
		playing: true,
		odds: "0/0",
        order: 2
	},
    {
		name: "Noddy", 
		playing: true,
		odds: "0/0",
        order: 3
	},
    {
		name: "Tom", 
		playing: true,
		odds: "0/0",
        order: 4
	},
    {
		name: "Bean", 
		playing: true,
		odds: "0/0",
        order: 5
	},
    {
		name: "PP", 
		playing: true,
		odds: "0/0",
        order: 6
	},
]

function seedDB(){
	// Remove everything from database
	playerModel.remove({}, function(err){
		if(err){
			console.log(err);
		}
		console.log("Cleared players from database");

		//Add some festivals
		data.forEach(function(seed){
			playerModel.create(seed, function(err, player){
				if(err){
					console.log(err);
				} else {
					console.log("Added a player");
				}
			});
		});
	});

}

//Export function
module.exports = seedDB;