import React from "react";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="h-full w-screen bg-black space-y-4 flex flex-col">
      <div className="flex justify-center py-10">
        <h1 className="text-yellow-500 text-5xl font-extrabold">
          ABOUT<span className="text-white text-5xl font-extrabold">ME</span>
        </h1>
      </div>
      <h1 className="self-center m-8 px-4 text-white text-xl font-bold mb-6">
        PERSONAL INFO
      </h1>
      <div className="py-6 px-4 rounded-md flex flex-col sm:flex-row justify-around space-y-4">
        <div className="flex flex-col justify-center space-y-4">
          <div className="flex text-white text-xl space-x-4">
            <h1>Name :</h1>
            <span className="text-gray-500 text-xl">Lokesh Kaloni</span>
          </div>
          <div className="flex text-white text-xl space-x-4">
            <h1>Age :</h1>
            <span className="text-gray-500 text-xl">23</span>
          </div>
          <div className="flex text-white text-xl space-x-4">
            <h1>Freelance :</h1>
            <span className="text-gray-500 text-xl">Available</span>
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <div className="flex text-white text-xl space-x-4">
            <h1>Nationality :</h1>
            <span className="text-gray-500 text-xl">Indian</span>
          </div>
          <div className="flex text-white text-xl space-x-4">
            <h1>Email :</h1>
            <span className="text-gray-500 text-xl">
              lokeshkaloni@gmail.com
            </span>
          </div>
          <div className="flex text-white text-xl space-x-4">
            <h1>Languages :</h1>
            <span className="text-gray-500 text-xl">English,Hindi</span>
          </div>
        </div>
      </div>
      <Link
        className="px-4 py-2 w-34 rounded-full self-center border text-white border-yellow-500 hover:bg-gray-900"
        to="/resume"
      >
        Download CV
      </Link>
      <h1 className="self-center mt-16 px-4 text-white text-xl font-bold mb-6">
        MY SKILLS
      </h1>
      <ul className="self-center text-white flex flex-col items-center list-disc">
        <li>HTML</li>
        <li>JAVASCRIPT</li>
        <li>CSS</li>
        <li>TAILWINDCSS</li>
        <li>REACT</li>
      </ul>
      <h1 className="self-center mt-16 px-4 text-white text-xl font-bold mb-6">
        EXPERIENCE AND EDUCATION
      </h1>
      <div className="flex flex-col text-white self-center px-2 py-6 flex-wrap">
        <div className="px-6 py-2 border rounded-md h-22">
          <h1 className="text-yellow-500">Web Developer</h1>
          <span>
            I'am a india based web-designer and front-end developer focused on
            crafting clean and user friendly experiences,i am passionate about
            building excellent software that improves the lives of those around
            me.
          </span>
        </div>
        <div className="px-6 py-2 border rounded-md h-22">
          <h1 className="text-yellow-500">UI/UX designer</h1>
          <span>
            i, intend to make UI's which are user friendly and easy to use i am
            passionate about building impressive UI's that improves the
            productivity of those working on it.
          </span>
        </div>
      </div>
      <h1 className="self-center mt-16 px-4 text-white  mb-6">
        visit-instagram
        <a
          className="text-indigo-400 hover:text-indigo-700"
          target="_blank"
          href="https://www.instagram.com/kalonilokesh/"
        >
          @kalonilokesh
        </a>
      </h1>
    </div>
  );
}
export default AboutMe;
