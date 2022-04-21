import React from "react";
import MyLink from "./MyLink";
import { ImHome } from "react-icons/im";
import { SiAboutdotme } from "react-icons/si";
import { MdContactPage } from "react-icons/Md";
import { GrProjects } from "react-icons/Gr";

function NavBar() {
  return (
    <div className="bg-gray-600 sticky top-0 justify-between px-8 py-1 w-screen flex">
      <MyLink to="/home">
        <ImHome />
      </MyLink>
      <MyLink to="/aboutme">
        <SiAboutdotme />
      </MyLink>
      <MyLink to="/myworks">
        <GrProjects />
      </MyLink>
      <MyLink to="/contactme">
        <MdContactPage />
      </MyLink>
    </div>
  );
}
export default NavBar;
