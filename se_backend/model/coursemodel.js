const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    coursename:String,
    instructor:String,
    category:String,
    duration:Number,
    level:String,
    thumbnail:String
},{timestamps:true})

const courseModel = mongoose.model("course",courseSchema)

module.exports = courseModel