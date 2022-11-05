var mongoose = require('mongoose'); 

// Player Schema
var playerSchema = new mongoose.Schema({ 
    name: String, 
    playing: Boolean,
    odds: String,
    order: Number
}); 
  
module.exports = new mongoose.model('Player', playerSchema); 