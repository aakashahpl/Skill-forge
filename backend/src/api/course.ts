import express from "express";
import courseModel from "../model/course";
import mongoose from "mongoose";
import generateCourseModules from "../middleware/gemini";

const Router2 = express.Router();

Router2.post("/save/:prompt", generateCourseModules, async (req: any, res) => {
    try {
        // console.log(req.courseModules);
        const courseData = JSON.parse(req.courseModules);
        console.log(courseData.course);
        const courseDetails = courseData.course;

        // Use a validation library like Joi or express-validator for more robust validation 
        // if (!courseDetails || !courseDetails.title || !courseDetails.modules || !courseDetails.modules.length) {
        //     return res.status(400).json({ error: "Course details are incomplete." }); 
        // }

        // // 2. Create a New Course Document
        const newCourse = new courseModel(
            courseDetails
        );

        // // 3. Save the Document 
        const savedCourse = await newCourse.save();

        // // 4. Send Success Response
        res.status(201).json(savedCourse);

    } catch (error: any) {

        res.json({ message: error.message })
    }
});




export default Router2;