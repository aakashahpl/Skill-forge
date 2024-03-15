
import { GoogleGenerativeAI } from "@google/generative-ai";

async function generateCourseModules(req:any, res:any, next:any) {
    try {
        const genAI = new GoogleGenerativeAI(
            "AIzaSyAC6CWSxzL9GgDdIoBrYd830ZhRb_eQT9w"
        );
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = `${req.params.prompt}. suggest multiple modules on the Course along with the estimated time required to complete the course. Start with the basics first. Return me the output in JSON in the following format.
        course: 
        {
           title:{
               type:String,
               
           },
           modules: [
               {
                   title: {
                       type: String,
                       required: true,
                   },
                   description: {
                       type: String,
                       required: true,
                   },
                   timeRequired: {
                       type: String,
                       required: true,
                   },
               },
               ...MORE_MODULES
           ],
       },`;

        const result: any = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        const jsonWithoutBackticks = text.replace(/^```json|```$/g, "");
        // Parse the JSON data
        // console.log(jsonWithoutBackticks);
        // const parsedData = JSON.parse(jsonWithoutBackticks);

        // Store the array of objects in a variable

        // Output the variable containing the array of objects
        // console.log(parsedData);

        req.courseModules = jsonWithoutBackticks; 

        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.error("Error generating course modules:", error);
        next(error); // Pass the error to Express error handling
    }
}

export default generateCourseModules;