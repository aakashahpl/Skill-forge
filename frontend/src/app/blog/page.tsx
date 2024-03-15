'use client';
import Quiz from "@/components/ui/quiz";
import { Content } from "next/font/google";
import * as React from "react";
import { CopyBlock, dracula } from 'react-code-blocks';

const testCode = `
// select relevant elements
const form = document.querySelector("form");
const input = document.querySelector("input");
messageList = document.querySelector("ul");

// establish socket.io connection
const socket = io();

// handle sending message to server & input reset
function sendMessage(e) {
  // prevent form submission refreshing page
  e.preventDefault();
  // send input value to server as type 'message'
  socket.emit("message", input.value);
  // reset input value
  input.value = "";
}
               `

interface CourseModuleProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  introContent: React.ReactNode;
  basicsContent: React.ReactNode;
}

const Text = ({
  title,
  description
}: { title: string, description: string }) => {
  return (
    <div className="    text-wrap">
      <h1 className="text-[#f3f4f6] text-5xl py-7">{title}</h1>
      <p className="text-[#d1d5dbb3] text-3xl py-7 text-justify">{description}</p>
    </div>
  );
};

const CodeBlock = ({
  title,
  description
}: { title: string, description: string }) => {
  return (
    <section className="   flex justify-center">
      <div className="   w-[50%] text-wrap">
        <h1 className="text-[#f3f4f6] text-5xl py-5">{title}</h1>
        <p className="text-[#d1d5dbb3] text-3xl py-2 text-justify">{description}</p>
      </div>
    </section>
  );
};

const SkillForge: React.FC = () => {
  return (
    <div className="flex flex-col font-medium    ">
      <div className="flex overflow-hidden relative flex-col w-full">

        {/* nav bar  */}
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
        {/* nav bar ends */}


        {/* blog starts */}
        <section className="flex justify-center">
          <div className="w-[50%] text-wrap">
            <Text title={"Maintaining & Operating Socket.IO"} description={"As explained above, getting started with Socket.IO is relatively simple  all you need is a Node.js server to run it on. If you want to get started with a realtime app for a limited number of users, Socket.IO is a good option. Problems come when working at scale. Say, for example, you want to build a CRM-like app that enables communications between businesses. Socket.IO is built on asynchronous networking libraries and will cause load on your server. Maintaining connections to users as well as sending and receiving messages adds strain, and if clients start sending significant amounts of data via Socket.IO, it streams data in chunks, freeing up resources when the data chunk is transmitted. So when your application attracts more users and your server reaches its maximum load you will need to split connections over multiple servers, or risk losing important informati"} />
            <div className=" text-2xl py-7">
              <CopyBlock
                text={testCode}
                language={'Python'}
                showLineNumbers={true}
                theme={dracula}
              />
            </div>
            <Quiz data={data[0].quiz} />

          </div>
        </section>
      </div>
    </div>
  );
};

const data =
  [
    {
      "content": "For loops iterate over a sequence of elements, such as a list or tuple. The syntax for a for loop is as follows:\n\n```python\nfor element in sequence:\n  # code to execute\n```",
      "quiz": [
        {
          "question": "What is the purpose of a for loop?",
          "options": [
            "To execute a block of code repeatedly",
            "To iterate through a list of elements",
            "Both (a) and (b)",
            "None of the above"
          ],
          "correct": "Both (a) and (b)"
        },

        {
          "question": "What is the purpose of a for loop?",
          "options": [
            "To execute a block of code repeatedly",
            "To iterate through a list of elements",
            "Both (a) and (b)",
            "None of the above"
          ],
          "correct": "Both (a) and (b)"
        }
      ]
    },
    {
      "content": "While loops execute a block of code repeatedly as long as a condition is true. The syntax for a while loop is as follows:\n\n```python\nwhile condition:\n  # code to execute\n```",
      "quiz": [
        {
          "question": "What is the condition in a while loop evaluated against?",
          "options": [
            "True or False",
            "0 or 1",
            "None of the above"
          ],
          "correct": "True or False"
        }
      ]
    },
    {
      "content": "Do-while loops are similar to while loops, but they execute the code block at least once before checking the condition. The syntax for a do-while loop is as follows:\n\n```python\ndo:\n  # code to execute\nwhile condition:\n  # continue executing\n```",
      "quiz": [
        {
          "question": "What is the main difference between a while loop and a do-while loop?",
          "options": [
            "Do-while loops execute the code block at least once, while while loops do not",
            "While loops execute the code block at least once, while do-while loops do not",
            "There is no difference between the two loop types",
            "None of the above"
          ],
          "correct": "Do-while loops execute the code block at least once, while while loops do not"
        }
      ]
    }
  ]
export default SkillForge;