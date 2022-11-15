const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leaderSchema = new Schema({
    name:{
        required: true ,
        type:String 
    },
    image:{
        type:String,
        required: true
    },
    designation:{
      type: String,
      required: true,  
    },
    abbr:{
        type:String ,
        required: true 
    },
    description:{
        type: String,
        required:true 
    },
    featured:{
        type: Boolean,
        default: false
    }

})

var Leaders = mongoose.model('Leader', leaderSchema)

module.exports = Leaders;