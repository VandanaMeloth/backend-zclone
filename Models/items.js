const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuItemsSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    restaurantId:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    ingridients:{
        type:Array,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    qty:{
        type:Number,
        require:true
    }
})

module.exports = mongoose.model('item', menuItemsSchema, 'items');