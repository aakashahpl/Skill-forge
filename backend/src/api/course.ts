import express from "express";
import courseModel from "../model/course";
import mongoose from "mongoose";
import generateCourseModules from "../middleware/gemini";

const Router2 = express.Router();

Router2.post("/save/:prompt",generateCourseModules, async (req:any, res) => {
    try {
        // console.log(req.courseModules);
        const courseData = JSON.parse(req.courseModules);
        console.log(courseData.course);
        const  courseDetails  = courseData.course; 
        
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
        res.status(201).json( savedCourse );

    } catch (error:any) {
      
        res.json({message:error.message})
    }
});

Router2.get("/getAll", async (req, res) => {
    try {
        const allCourses = await courseModel.find({}, { title: 1, _id: 1 });

        res.json(allCourses);

    } catch (error) {
        console.error("Error fetching courses:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


Router2.get("/fetch/:_id", async (req, res) => {
    try {
        const courseId = req.params._id; 

        // Validate the courseId using Mongoose's ObjectId type
        if (!mongoose.isValidObjectId(courseId)) {
            return res.status(400).json({ error: "Invalid course ID" });
        }

        const course = await courseModel.findById(courseId);

        if (!course) {
            return res.status(404).json({ error: "Course not found" });
        }

        res.json(course);

    } catch (error) {
        console.error("Error fetching course:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});




export default Router2;