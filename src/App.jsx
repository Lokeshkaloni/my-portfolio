import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Homepage from "./HomePage";
import MainLayout from "./MainLayout";
import MyWorks from "./MyWorks";
import Resume from "./Resume";

function App() {
  return (
    <Routes>
      <Route path="/resume" element={<Resume />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<Homepage />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="myworks" element={<MyWorks />} />
        <Route path="contactme" element={<ContactMe />} />
      </Route>
    </Routes>
  );
}

export default App;
