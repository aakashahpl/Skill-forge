'use client'
import { Skeleton } from "@/components/ui/skeleton";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Padauk } from "next/font/google";
import * as React from "react";

interface CourseModuleProps {
  title: string;
  description: string;
  assignment: string;
  rating: number;
  progress: boolean;
}

const CourseModule: React.FC<CourseModuleProps> = ({
  title,
  description,
  assignment,
  rating,
  progress,
}) => {

  return (
    <div className=" px-4 py-4 rounded-xl bg-zinc-800 max-md:max-w-full mb-12 w-[80%] h-[20.7rem]" >
      <div className=" justify-start flex max-md:flex-col ">
        {/* image  */}
        <div className="  shrink-0  rounded-xl  bg-zinc-500 w-[300px] h-[300px]  " />
        {/* text and button */}
        <div className="  flex flex-col ml-5  max-md:ml-0 max-md:w-full w-full">
          <div className=" flex flex-col justify-between grow whitespace-nowrap max-md:mt-8 max-md:max-w-full">
            {/* top sec  */}
            <div className="  flex gap-5 justify-between items-start px-0.5 w-full text-white max-md:flex-wrap ">
              <div className="flex flex-col mt-2 text-sm  max-w-[40%] text-wrap">
                <div className="font-medium text-2xl text-neutral-100">{title}</div>
                <div className=" text-[1rem]">
                  <div className="mt-4 text-neutral-300">{description}</div>
                  <div className="mt-2.5">{assignment}</div>
                </div>
              </div>
              {/* quiz section */}
              <div className="flex gap-1.5 text-base font-medium ">
                <div className="grow my-auto">Time required to complete</div>
                <div className="grow justify-center px-4 py-2 bg-red-500 rounded-2xl text-xl ">
                  {"4"} <span>Hours</span>
                </div>
              </div>
            </div>
            {/* bottom  */}

            <div className="  flex gap-5 justify-between px-px text-sm font-medium max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className=" text-xl justify-center self-start px-6 py-2.5 text-black rounded-full bg-zinc-300 max-md:px-5">
                Progress
              </div>
              <div className=" text-xl justify-center items-center px-16 py-3 text-white bg-red-500 rounded-3xl max-md:px-5">
                Start topic
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CourseCardProps {
  title: string;
  rating: number;
}

const courseModules: CourseModuleProps[] = [
  {
    title: "Course Module 1",
    description: "Introduction to topic",
    assignment: "Practice assignment",
    rating: 8.6,
    progress: true,
  },
  {
    title: "Course Module 2",
    description: "Introduction to topic",
    assignment: "Practice assignment",
    rating: 8.6,
    progress: false,
  },
  {
    title: "Course Module 3",
    description: "Introduction to topic",
    assignment: "Practice assignment",
    rating: 8.6,
    progress: false,
  },
];

const App: React.FC = () => {
  const [courseModule, setCourseModules] = React.useState<CourseModuleProps[]>([])
  const genAI = new GoogleGenerativeAI("AIzaSyAC6CWSxzL9GgDdIoBrYd830ZhRb_eQT9w");
  async function run() {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Make me a course on mongodb. suggest multiple modules on the Course along with the estimated time required to complete the course. Start with the basics first. Return me the output in JSON in the following format.
        Example output:
        [
            {
                "title": "Python Basics",
                "description": "Learn the basics of Python programming"
                "time-required": "2 hours"
            },
            {
                "title": "Python Advanced",
                "description": "Learn advanced Python programming"
                "time-required": "10 hours"
            }
            ...MORE MODULES...
        ]`

    const result: any = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const jsonWithoutBackticks = text.replace(/^```json|```$/g, '');
    // Parse the JSON data
    const parsedData = JSON.parse(jsonWithoutBackticks);
    // Store the array of objects in a variable
    // Output the variable containing the array of objects
    console.log(parsedData);
    setCourseModules(parsedData)
    console.log(courseModule);
  }
  React.useEffect(() => {
    run()
  }, [])

  if (courseModule.length === 0) {
    return <div>
      <Skeleton className="w-[80%] h-[20.7rem] rounded-xl mb-12 " />
      <Skeleton className="w-[80%] h-[20.7rem] rounded-xl mb-12 " />
      <Skeleton className="w-[80%] h-[20.7rem] rounded-xl mb-12 " />
    </div>
  }


  return (
    <div>
      {
        courseModule.map((module, index) => (
          <CourseModule
            key={index}
            title={module.title}
            description={module.description}
            assignment={module.assignment}
            rating={module.rating}
            progress={module.progress}
          />
        ))
      }
    </div >
  );
};

export default App;