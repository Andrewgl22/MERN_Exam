const mongoose = require('mongoose');

const pirateSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"Name is required"]
    },
    treasure: Number,
        
    position: {
        type:String,
        required:true
    },

    catchPhrase: String
})

const Pirate = mongoose.model("Pirate", pirateSchema)

module.exports=Pirate;