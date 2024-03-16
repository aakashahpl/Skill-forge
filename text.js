const data = ` 
{
  "topic": "Installing Node.js, running your first script, and exploring the basics",
  "content": [
    {
      "topic": "Introduction to Node.js",
      "content": "Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of the browser. It is open-source and cross-platform, meaning it can run on any operating system that supports JavaScript. Node.js is used to develop a wide variety of applications, including web servers, command-line tools, and mobile apps.",
      "quiz": [
        {
          "question": "What is Node.js?",
          "options": [
            "A web browser",
            "A JavaScript runtime environment",
            "A programming language",
            "A library for developing mobile apps"
          ],
          "correct": "A JavaScript runtime environment"
        }
      ],
      "code_example": []
    },
    {
      "topic": "Installing Node.js",
      "content": "To install Node.js, visit the Node.js website and download the latest version for your operating system. Once you have downloaded the installer, run it and follow the instructions on the screen.",
      "quiz": [
        {
          "question": "How do you install Node.js?",
          "options": [
            "Use the package manager for your operating system",
            "Download the installer from the Node.js website",
            "Clone the Node.js repository from GitHub",
            "Install it from the Microsoft Store"
          ],
          "correct": "Download the installer from the Node.js website"
        }
      ],
      "code_example": []
    },
    {
      "topic": "Running your first Node.js script",
      "content": "To run your first Node.js script, open a terminal window and type the following command:",
      "quiz": [
        {
          "question": "How do you run a Node.js script?",
          "options": [
            "node my-script.js",
            "npm run my-script",
            "npx my-script",
            "js my-script"
          ],
          "correct": "node my-script.js"
        }
      ],
      "code_example": [
        "console.log('Hello, world!')"
      ]
    },
    {
      "topic": "Exploring the basics of Node.js",
      "content": "Node.js has a number of built-in modules that you can use to develop your applications. These modules include:",
      "quiz": [
        {
          "question": "Which of the following is NOT a built-in Node.js module?",
          "options": [
            "fs",
            "http",
            "express",
            "path"
          ],
          "correct": "express"
        }
      ],
      "code_example": [
        "const fs = require('fs');",
        "fs.readFile('my-file.txt', 'utf8', (err, data) => {",
        "  if (err) throw err;",
        "  console.log(data);",
        "});"
      ]
    }
  ]
}
`


const regex = /\{([^{}]+)\}/;



function findInnerContent(str) {
  let count = 0;
  let start = -1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{') {
      count++;
      if (start === -1) {
        start = i;
      }
    } else if (str[i] === '}') {
      count--;
      if (count === 0) {
        return str.substring(start, i + 1);
      }
    }
  }
  return null;
}

const extractedContent = findInnerContent(data);
console.log(extractedContent);