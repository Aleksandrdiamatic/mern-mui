const {Schema, model, Types} = require('mongoose')
const mongoose = require("mongoose");

const schema = new Schema({
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    links:[{type:Types.ObjectId, ref:'Link'}]
})

module.exports =  mongoose.model("User", schema)