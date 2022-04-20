import react from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBAr";

function MainLayout() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
export default MainLayout;
