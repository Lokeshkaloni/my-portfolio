import react from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Homepage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-hero-pattern space-y-4 object-fill">
      <img
        src=".\images\IMG20210331135102.jpg"
        className="rounded-full object-cover h-52 w-52 border-gray-500 border-2"
      />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-yellow-500 text-3xl font-bold">
          I'M LOKESH KALONI
        </h1>
        <span className="text-white text-3xl font-bold">WEB DESIGNER</span>
      </div>
      <p className="text-white flex flex-col justify-center items-center text-center">
        <span>
          I'am a india based web-designer and front-end developer focused on
          crafting
        </span>
        <span>
          clean and user friendly experiences,i am passionate about building
          excellent
        </span>
        <span>software that improves the lives of those around me.</span>
      </p>
      <Link
        className="px-4 py-2 border text-white border-yellow-500 hover:bg-gray-900 rounded-full"
        to="/aboutme"
      >
        More About Me
      </Link>
    </div>
  );
}
export default Homepage;
