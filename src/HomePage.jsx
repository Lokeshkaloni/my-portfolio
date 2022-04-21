import react from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Homepage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-black space-y-4">
      <img
        src="https://instagram.fdel1-3.fna.fbcdn.net/v/t51.2885-15/279035992_724263248584247_4712528805270631967_n.jpg?stp=dst-jpg_e15_fr_s1080x1080&cb=9ad74b5e-8af86364&_nc_ht=instagram.fdel1-3.fna.fbcdn.net&_nc_cat=111&_nc_ohc=GsohA6ZGFgsAX9fKYUT&edm=ABJHkxYAAAAA&ccb=7-4&ig_cache_key=MjgyMTM3NjQyMzUxMjUyODI1Nw%3D%3D.2-ccb7-4&oh=00_AT-Hr1raYkNHtVWg3kLK_rKY0kPZQxejL1lXr4tlBO0Ptg&oe=6269024D&_nc_sid=fa978c"
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
