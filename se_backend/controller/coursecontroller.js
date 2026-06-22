const courseModel = require("../model/coursemodel")


exports.addCourse = async(req,resp)=>{
    const new_course = new courseModel(req.body)
    const result = await new_course.save()
    resp.status(200).json(result)
}

exports.showcourses = async(req,resp)=>{
    const courses = await courseModel.find()
    if ( courses != null) {
        resp.status(200).json(courses)
    } else {
        resp.status(404).json({message: 'no courses'})
    }
}

exports.showCourse = async(req,resp)=>{
    const course = await courseModel.findById(req.params.id)
    if ( course != null) {
        resp.status(200).json(course)
    } else {
        resp.status(404).json({message: 'no course'})
    }
}

exports.updateCourse = async(req,resp)=>{
    const course = await courseModel.findByIdAndUpdate(req.params.id,req.body)
    if ( course != null) {
        resp.status(200).json({message: 'updated'})
    } else {
        resp.status(404).json({message: 'no updated'})
    }
}

exports.deleteCourse = async(req,resp)=>{
    const course = await courseModel.findByIdAndDelete(req.params.id)
    if ( course != null) {
        resp.status(200).json({message: 'deleted'})
    } else {
        resp.status(404).json({message: 'no deleted'})
    }
}