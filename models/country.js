var mongoose = require('mongoose'); 

// Create schema for uploadng image
var imageSchema = new mongoose.Schema({ 
    name: String, 
    odss: String,
    playing: Boolean, 
    img: 
    { 
        data: Buffer, 
        contentType: String 
    } 
}); 
  
module.exports = new mongoose.model('Image', imageSchema); 