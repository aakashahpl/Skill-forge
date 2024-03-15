'use client'
import axios from "axios";
import React, { useState } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MessageSquareCode, Sparkles } from 'lucide-react';

const CreateCourseModule: React.FC = () => {
  const [courseName, setCourseName] = useState('');

  let reqOptions = {
    url: `http://localhost:3001/course/save/${courseName}`,
    method: "POST",
  }

  const handleCreateCourse = async () => {
    let response = await axios.request(reqOptions);
    console.log(response.data)
    // Logic to create the course with the provided courseName
    console.log(`Creating course: ${courseName}`);
    // Reset the courseName field after creating the course
    setCourseName('');
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="h-[300px] w-[300px] justify-center items-center px-14 pt-28 text-2xl text-center text-white rounded-md aspect-square bg-zinc-800 max-md:px-5 max-md:mt-10">
          <div className=" flex flex-row">
            <span>
              <Sparkles size={40} className=' text-left' />
            </span>
            <span className=' text-neutral-300'>
              Create a new course
            </span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <span className='text-2xl text-neutral-300'>
              Create a new course
            </span>
          </DialogTitle>
          <DialogDescription >
            <span className=' text-xl text-gray-400'>
              Enter the name of the course and click "Create" to proceed.
            </span>
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center">
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            placeholder="Enter course name"
            className="w-full px-4 py-2 my-4 text-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleCreateCourse}
            className="px-6 py-3 text-lg text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
          >
            Create
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const CreateCourseModule_: React.FC = () => (

  <Dialog>
    <DialogTrigger>

      <div className="h-[300px] w-[300px] justify-center items-center px-14 pt-28 text-xl text-center text-white rounded-md aspect-square bg-zinc-800 max-md:px-5 max-md:mt-10">
        Create a new course
      </div>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

const CourseModule: React.FC<{ title: string }> = ({ title }) => (
  <div className="h-[300px] w-[300px] justify-center items-center p-3  text-xl text-center  rounded-md aspect-square  max-md:px-5 bg-zinc-800 max-md:mt-10">
    <div className="h-[80%] w-full  mb-4 rounded-md bg-slate-800 relative " />
    <MessageSquareCode className=' absolute ' />
    <div className="flex flex-col justify-between h-[20%]">
      <div className="text-lg font-semibold text-gray-400">{title}</div>
    </div>
  </div>
);

const sampleCourseTitles = [
  "Introduction to React",
  "JavaScript Basics",
  "User Interface Design",
];

const Page = () => {
  return (
    <div className='text-white grid grid-cols-5 gap-y-  h-screen'>
      {sampleCourseTitles.map((title, index) => (
        <CourseModule key={index} title={title} />
      ))}
      <div className="h-[300px] w-[300px]">
        <CreateCourseModule />
      </div>

    </div>
  );
};

export default Page;

