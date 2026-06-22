const express = require('express');
const { showcourses, addCourse, showCourse, updateCourse, deleteCourse } = require('../controller/coursecontroller');

const router = express.Router()

router.get("/showcourses",showcourses)
router.post("/addCourse",addCourse)
router.get("/showCourse/:id",showCourse)
router.put("/updateCourse/:id",updateCourse)
router.delete("/deleteCourse/:id",deleteCourse)

module.exports = router