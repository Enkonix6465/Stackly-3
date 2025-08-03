import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp, FaSpa, FaAppleAlt, FaBrain, FaDumbbell, FaBed, FaUserTie } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark mode functionality
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.detail);
    };

    window.addEventListener('darkModeChanged', handleDarkModeChange);
    return () => window.removeEventListener('darkModeChanged', handleDarkModeChange);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000); // Hide message after 3s
  };

  return (
    <footer className={`${isDarkMode ? 'bg-black border-gray-700 text-gray-300' : 'bg-white border-gray-200 text-gray-700'} border-t pt-10 pb-4 px-4 md:px-0`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 pb-8">
                 {/* Brand & Tagline */}
         <div className="flex flex-col items-start space-y-3">
           <img src="/src/assets/logo.png" alt="Logo" className="h-28 w-28 object-contain" />
           <span className="font-bold text-lg text-green-700">Health & Wellness</span>
           <span className="text-sm  text-white">Empowering healthy lifestyles every day.</span>
         </div>
        {/* Quick Navigation */}
        <div>
          <h3 className="font-semibold mb-3 text-[#26A0A2]">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/home1" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
            <li><Link to="/blog" className="hover:text-blue-600">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact Us</Link></li>
            <li><Link to="/services" className="hover:text-blue-600">Services</Link></li>
          </ul>
        </div>
                 {/* Explore Services */}
         <div>
           <h3 className="font-semibold mb-3 text-[#26A0A2]">Explore Services</h3>
           <ul className="space-y-2">
             <li><Link to="/yoga" className="hover:text-blue-600">Yoga & Meditation</Link></li>
             <li><Link to="/diet-nutrition" className="hover:text-blue-600">Diet & Nutrition</Link></li>
             <li><Link to="/mental-wellness" className="hover:text-blue-600">Mental Wellness</Link></li>
             <li><Link to="/fitness-programs" className="hover:text-blue-600">Fitness Programs</Link></li>
             <li><Link to="/sleep-therapy" className="hover:text-blue-600">Sleep Therapy</Link></li>
             <li><Link to="/lifestyle-coaching" className="hover:text-blue-600">Lifestyle Coaching</Link></li>
           </ul>
         </div>
                 {/* Contact Info */}
         <div>
           <h3 className="font-semibold mb-3 text-[#26A0A2]">Contact Us</h3>
           <ul className="space-y-2 text-sm">
             <li><span className="font-medium">Address:</span> 123 Wellness Ave, Healthy City</li>
             <li><span className="font-medium">Phone:</span> (123) 456-7890</li>
             <li><span className="font-medium">Email:</span> <a href="mailto:support@healthsite.com" className="hover:text-blue-600">support@healthsite.com</a></li>
             <li><span className="font-medium">Hours:</span> Mon–Fri, 9 AM – 6 PM</li>
           </ul>
           {/* Social Media Icons */}
           <div className="mt-4">
             <h4 className="font-medium mb-2 text-sm text-[#26A0A2]">Follow Us</h4>
             <div className="flex space-x-3">
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`transition-colors ${
                 isDarkMode ? 'text-white hover:text-pink-500' : 'text-gray-700 hover:text-pink-500'
               }`}><FaInstagram size={18} /></a>
               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`transition-colors ${
                 isDarkMode ? 'text-white hover:text-blue-700' : 'text-gray-700 hover:text-blue-700'
               }`}><FaFacebookF size={18} /></a>
               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`transition-colors ${
                 isDarkMode ? 'text-white hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'
               }`}><FaLinkedinIn size={18} /></a>
               <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={`transition-colors ${
                 isDarkMode ? 'text-white hover:text-red-600' : 'text-gray-700 hover:text-red-600'
               }`}><FaYoutube size={18} /></a>
               <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className={`transition-colors ${
                 isDarkMode ? 'text-white hover:text-green-600' : 'text-gray-700 hover:text-green-600'
               }`}><FaWhatsapp size={18} /></a>
             </div>
           </div>
         </div>
        {/* Newsletter Signup */}
        <div>
          <h3 className="font-semibold mb-3 text-[#26A0A2]">Newsletter</h3>
          <p className="text-sm mb-2">Get weekly wellness tips and updates in your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-2 w-full" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400 flex-1 min-w-0"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          {subscribed && (
            <div className="mt-2 text-green-600 text-sm font-semibold">Thanks for subscribing!</div>
          )}
        </div>
      </div>
             {/* Legal Links */}
       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center border-t border-gray-100 pt-4 gap-4">
         <div className="flex flex-wrap gap-4 text-sm">
           <a href="#" className="hover:text-blue-600">Privacy Policy</a>
           <a href="#" className="hover:text-blue-600">Terms & Conditions</a>
           <a href="#" className="hover:text-blue-600">Disclaimer</a>
         </div>
       </div>
      {/* Copyright */}
      <div className="max-w-7xl mx-auto text-center text-xs text-gray-400 pt-4">
        © 2025 Health & Wellness. All rights reserved.
      </div>
    </footer>
  );
} 