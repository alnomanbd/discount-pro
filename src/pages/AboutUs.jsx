// src/components/AboutUsPage.js
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="w-full mx-auto px-8 ">
        {/* Section 1: Introduction */}
        <section className="mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-600">
            Hi, I'm <strong>Your Name</strong>. I'm a passionate full-stack developer with a love for building
            web applications that make a difference. I specialize in front-end development with modern JavaScript frameworks
            like React, Vue, and Angular, but I'm also skilled in back-end technologies such as Node.js, Express, and MongoDB.
            I enjoy solving complex problems and learning new technologies to stay ahead of the curve.
          </p>
        </section>

        {/* Section 2: Projects */}
        <section className="mb-10">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Other Projects</h3>
          <p className="text-lg text-gray-600">
            Over the years, I've worked on several exciting projects. Here are some of my favorite ones:
          </p>
          <ul className="mt-4 space-y-4">
            <li>
              <h4 className="text-xl font-bold text-gray-800">Project Name 1</h4>
              <p className="text-gray-600">
                A web application built using React and Firebase. This project allows users to track their daily tasks
                and collaborate with others in real-time. (GitHub: <a href="https://github.com/yourusername/project1" className="text-blue-600">GitHub Link</a>)
              </p>
            </li>
            <li>
              <h4 className="text-xl font-bold text-gray-800">Project Name 2</h4>
              <p className="text-gray-600">
                A REST API built with Node.js and Express. This project is designed to handle complex data processing
                and store information securely in a MongoDB database. (GitHub: <a href="https://github.com/yourusername/project2" className="text-blue-600">GitHub Link</a>)
              </p>
            </li>
            <li>
              <h4 className="text-xl font-bold text-gray-800">Project Name 3</h4>
              <p className="text-gray-600">
                A mobile app using React Native that helps users track their fitness journey. It integrates with third-party
                APIs to provide real-time health data and metrics. (GitHub: <a href="https://github.com/yourusername/project3" className="text-blue-600">GitHub Link</a>)
              </p>
            </li>
          </ul>
        </section>

        {/* Section 3: Skills */}
        <section className="mb-10">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-bold text-gray-800">Front-End</h4>
              <ul className="text-gray-600">
                <li>React</li>
                <li>Vue.js</li>
                <li>HTML, CSS, and JavaScript</li>
                <li>Responsive Design (Tailwind CSS, Bootstrap)</li>
                <li>State Management (Redux, Context API)</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-800">Back-End</h4>
              <ul className="text-gray-600">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Firebase</li>
                <li>RESTful APIs</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-800">Other Skills</h4>
              <ul className="text-gray-600">
                <li>Git & GitHub</li>
                <li>Agile Methodology</li>
                <li>Testing (Jest, Mocha)</li>
                <li>CI/CD (GitHub Actions, Jenkins)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Contact Info (Optional) */}
        <section>
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Contact Me</h3>
          <p className="text-lg text-gray-600">
            Feel free to reach out if you'd like to discuss any projects, collaborations, or opportunities. You can find me on:
          </p>
          <div className="flex space-x-6 mt-4">
            <a href="https://github.com/yourusername" className="text-gray-600 hover:text-black">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/yourusername/" className="text-blue-600 hover:text-blue-800">
              <FaLinkedin size={30} />
            </a>
            <a href="https://twitter.com/yourusername" className="text-blue-400 hover:text-blue-600">
              <FaTwitter size={30} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
