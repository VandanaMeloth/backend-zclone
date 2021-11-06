const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    id:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    city_id:{
        type:Number,
        require:true
    },
    location_id:{
        type:Number,
        require:true
    },
    country_namae:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('location', locationSchema, 'location');