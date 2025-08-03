import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home1";
import Home2 from "./pages/home2";
import Welcome from "./welcome";
import AdminDashboard from "./admin-dashboard";
import About from "./pages/aboutus";
import Services from "./pages/services";
import Blog from "./pages/blog";
import Article from "./pages/artical";
import ContactUs from "./pages/contactus";
import YogaMeditation from "./pages/servicespages/YogaMeditation";
import DietNutrition from "./pages/servicespages/DietNutrition";
import MentalWellness from "./pages/servicespages/MentalWellness";
import FitnessPrograms from "./pages/servicespages/FitnessPrograms";
import SleepTherapy from "./pages/servicespages/Sleep Therapy";
import LifestyleCoaching from "./pages/servicespages/Lifestyle Coaching";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/home1" element={<Home />} />
      <Route path="/home2" element={<Home2 />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/yoga-meditation" element={<YogaMeditation />} />
      <Route path="/yoga" element={<YogaMeditation />} />
      <Route path="/diet-nutrition" element={<DietNutrition />} />
      <Route path="/mental-wellness" element={<MentalWellness />} />
      <Route path="/fitness-programs" element={<FitnessPrograms />} />
      <Route path="/sleep-therapy" element={<SleepTherapy />} />
      <Route path="/lifestyle-coaching" element={<LifestyleCoaching />} />
    </Routes>
  );
}

export default App; 