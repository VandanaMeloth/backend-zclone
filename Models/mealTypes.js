const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MealTypeSchema = new Schema({
    id:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    mealtype:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('mealType', MealTypeSchema, 'mealtype');