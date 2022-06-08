//Create a user prototype
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: String,
    name: {
        type: String,
        required: true
    },
    surname : String,
    age : Number,
    Occupation:{ 
        type : [String],
        required : true
    }

}, {timestamps: true});
module.exports = User = mongoose.model('User', userSchema) ;