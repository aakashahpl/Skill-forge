import * as React from "react";

interface CourseModuleProps {
  title: string;
  description: string;
  assignment: string;
  rating: number;
  progress: boolean;
}
interface children {
  children: React.ReactNode
}

const CourseModule = ({ children }: children) => {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex overflow-hidden relative flex-col w-full min-h-[1024px] max-md:max-w-full ">
        {/* nav bar */}
        <div className="flex  gap-5 justify-between px-16 py-7 w-full font-medium  bg-zinc-800 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className=" text-md flex gap-5 justify-between my-auto  text-white max-md:flex-wrap">
            <div className="grow text-2xl whitespace-nowrap ">Course Craft</div>
            <div>Theory Module </div>
            <div>Multiple-choice</div>
            <div className="grow whitespace-nowrap">Code writing</div>
          </div>
          <div className="flex gap-2.5 text-sm whitespace-nowrap">
            <div className="grow justify-center px-6 py-4 text-black bg-white rounded-2xl max-md:px-5 text-xl">
              Get started{" "}
            </div>
            <div className="grow justify-center px-3 py-3.5 bg-red-500 rounded-2xl text-stone-300 text-xl">
              Test knowledge
            </div>
          </div>
        </div>
        <div className="relative w-full max-md:max-w-full">
          <div className="flex max-md:flex-col max-md:gap-0 ">
            {/* Side bar  */}
            <div className="flex flex-col w-[20%] max-md:w-full h-screen ">
              <div className="flex relative flex-col grow items-start px-16 pt-9 pb-20 w-full text-xl font-medium text-white whitespace-nowrap border-t border-solid bg-zinc-800 border-neutral-500 max-md:px-5 max-md:max-w-full">
                {/* arrow icon  */}
                <div className="mt-7">Frontend dev</div>
              </div>
            </div>
            <div className=" flex flex-col w-[80%]  max-md:w-full">
              <div className="flex relative flex-col grow px-12 pt-16 w-full bg-neutral-900 max-md:px-5 max-md:max-w-full">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModule;
