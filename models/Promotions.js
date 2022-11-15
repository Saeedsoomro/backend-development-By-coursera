const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;
const Schema = mongoose.Schema;

const promotionSchema = new Schema({
    name:{
        required: true ,
        type:String 
    },
    image:{
        type:String,
        required: true
    },
    label:{
      type: String,
      default: '',  
    },
    price:{
        type:Currency,
        required: true,
        min: 0 
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

var Promotions  = mongoose.model('Promtoion', promotionSchema)

module.exports = Promotions;