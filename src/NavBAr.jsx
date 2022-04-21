import React from "react";
import MyLink from "./MyLink";
function NavBar() {
  return (
    <div className="bg-gray-600 sticky top-0 justify-between px-8 py-1 w-screen h-10 flex">
      <MyLink to="/home">ImHome</MyLink>
      <MyLink to="/aboutme">ABOUT ME</MyLink>
      <MyLink to="/myworks">MY WORKS</MyLink>
      <MyLink to="/contactme">CONTACT</MyLink>
    </div>
  );
}
export default NavBar;
