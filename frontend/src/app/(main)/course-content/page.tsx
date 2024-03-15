
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
    <div className=" px-4 py-4 mt-6 rounded-3xl bg-zinc-800 max-md:max-w-full">
      <div className=" justify-start flex   max-md:flex-col ">
        {/* image  */}
        <div className="  shrink-0  rounded-2xl  bg-zinc-500 w-[300px] h-[300px]  " />

        <div className="  flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
          <div className="  flex flex-col justify-between grow whitespace-nowrap max-md:mt-8 max-md:max-w-full">

            {/* top sec  */}
            <div className="  flex gap-5 justify-between items-start px-0.5 w-full text-white max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col mt-2 text-sm">
                <div className="font-medium text-2xl">{title}</div>
                <div className=" text-[1rem]">
                  <div className="mt-4">{description}</div>
                  <div className="mt-2.5">{assignment}</div>
                </div>
              </div>
              <div className="flex gap-1.5 text-base font-medium">
                <div className="grow my-auto">Quiz rating</div>
                <div className="grow justify-center px-5 py-3 bg-red-500 rounded-2xl max-md:pr-5">
                  {rating}
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

const App: React.FC = () => {
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

  return (
    <div className="">
      hi
      {courseModules.map((module, index) => (
        <CourseModule
          key={index}
          title={module.title}
          description={module.description}
          assignment={module.assignment}
          rating={module.rating}
          progress={module.progress}
        />
      ))}
    </div>
  );
};

export default App;