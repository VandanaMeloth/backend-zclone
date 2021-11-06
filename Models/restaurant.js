const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    id:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    location_id:{
        type:Number,
        require:true
    },
    city_id:{
        type:Number,
        require:true
    },
    min_price:{
        type:Number,
        require:true
    },
    cuisine_id:{
        type:Array,
        require:true
    },
    cuisine:{
        type:Array,
        require:true
    },
    mealtype_id:{
        type:Number,
        require:true
    }
})

module.exports = mongoose.model('Restaurant', RestaurantSchema, 'restaurant');