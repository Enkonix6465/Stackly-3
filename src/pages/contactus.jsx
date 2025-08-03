import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useScrollToTop } from "../hooks/useScrollToTop";
import formSection from "../assets/formSection.jpg";
import getInTouchVideo from "../assets/getInTouch.mp4";
import globe from "../assets/globe.jpeg";

function ContactUs() {
  const [messageSent, setMessageSent] = useState(false);
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Scroll to top when component mounts
  useScrollToTop();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    // Reset the notification after 3 seconds
    setTimeout(() => {
      setMessageSent(false);
    }, 3000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterSubscribed(true);
    // Reset the notification after 3 seconds
    setTimeout(() => {
      setNewsletterSubscribed(false);
    }, 3000);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <Header />
      {/* Section 1 */}
      <section className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={getInTouchVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ease-out animate-fade-in-up"
            style={{ color: "#14B8A6" }}
          >
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-white/90 transition-all duration-1000 ease-out delay-300 animate-fade-in-up-delay-1">
            Get in touch with our wellness experts and start your journey to
            better health today.
          </p>
        </div>
      </section>

             {/* Section 2 */}
       <section className={`w-full py-16 px-4 ${isDarkMode ? 'bg-black' : 'bg-white'} text-white flex flex-col items-center justify-center`}>
        <div className="text-center max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Card */}
            <div className="bg-teal-500 rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0s', animationDuration: '1s' }}>
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-lg font-semibold">(+1) 555-123-4567</p>
                </div>
              </div>
              <p className="text-white/80 text-sm">
                Speak directly with our wellness experts. We're available Monday
                through Friday, 9 AM to 6 PM EST for personalized consultations
                and support.
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-teal-500 rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.3s', animationDuration: '1s' }}>
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-lg font-semibold">stackly.com</p>
                </div>
              </div>
              <p className="text-white text-sm">
                Send us your questions anytime. Our team responds within 24
                hours with personalized wellness advice and program
                recommendations.
              </p>
            </div>

            {/* Location Card */}
            <div className="bg-teal-500 rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.6s', animationDuration: '1s' }}>
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                  <p className="text-lg font-semibold">Wellness Center NYC</p>
                </div>
              </div>
              <p className="text-white/80 text-sm">
                Located in the heart of Manhattan. Schedule an in-person
                consultation at our state-of-the-art wellness facility with
                certified health coaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="w-full py-16 px-4 bg-teal-700">
        <div className="max-w-7xl mx-auto">
            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white leading-tight mb-8">
                Get In Touch
              </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-[600px]">
            {/* Left Column - Image */}
            <div className="flex flex-col">
              {/* Image - fills remaining height */}
              <div className="flex-1 rounded-xl overflow-hidden">
                <img
                  src={formSection}
                  alt="Contact Form Section"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

                                                   {/* Right Column - Contact Form */}
              <div className={`${isDarkMode ? 'bg-black' : 'bg-teal-50'} rounded-xl p-8 shadow-lg`}>
               <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-teal-500 mb-2">
                      First Name
                    </label>
                                         <input
                     required
                       type="text"
                       className={`w-full px-4 py-3 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent ${isDarkMode ? 'text-black placeholder-black' : ''}`}
                       placeholder="Enter your first name"
                     />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-teal-500 mb-2">
                      Last Name
                    </label>
                                         <input
                     required
                       type="text"
                       className={`w-full px-4 py-3 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent ${isDarkMode ? 'text-black placeholder-black' : ''}`}
                       placeholder="Enter your last name"
                     />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-teal-500 mb-2">
                    Email
                  </label>
                                     <input
                   required
                     type="email"
                     className={`w-full px-4 py-3 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent ${isDarkMode ? 'text-black placeholder-black' : ''}`}
                     placeholder="Enter your email address"
                   />
                </div>

                <div>
                  <label className="block text-sm font-medium text-teal-500 mb-2">
                    Phone
                  </label>
                                     <input
                   required
                     type="tel"
                     className={`w-full px-4 py-3 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent ${isDarkMode ? 'text-black placeholder-black' : ''}`}
                     placeholder="Enter your phone number"
                   />
                </div>

                <div>
                  <label className="block text-sm font-medium text-teal-500 mb-2">
                    Message
                  </label>
                                     <textarea
                   required
                     rows="4"
                     className={`w-full px-4 py-3 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent ${isDarkMode ? 'text-black placeholder-black' : ''}`}
                     placeholder="Tell us about your wellness goals..."
                   ></textarea>
                </div>

                                 <button
                   type="submit"
                   className="w-full bg-teal-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
                 >
                   Send Message
                 </button>
                 
                 {/* Success Notification */}
                 {messageSent && (
                   <div className="mt-2 p-1 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
                     <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                     </svg>
                     <span className="font-medium">Message sent successfully! We'll get back to you soon.</span>
                   </div>
                 )}
               </form>
             </div>
          </div>
        </div>
      </section>

             {/* Section 4 */}
       <section className={`w-full py-16 px-4 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-teal-500 mb-4">Find Us</h2>
          </div>

          {/* Three Cards on Top */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Business Hours Card */}
            <div className="bg-teal-50 border-2 border-teal-500 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-teal-500">
                  Business Hours
                </h4>
              </div>
              <div className="space-y-2 text-teal-500/80">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Getting Here Card */}
            <div className="bg-teal-50 border-2 border-teal-500 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20v1h2.23l2-2H14l2 2h2v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm5.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-7h-5V6h5v4z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-teal-500">
                  Getting Here
                </h4>
              </div>
              <div className="space-y-3 text-teal-500/80">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20v1h2.23l2-2H14l2 2h2v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm5.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-7h-5V6h5v4z" />
                  </svg>
                  <span>Subway: 4, 5, 6 trains</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20v1h2.23l2-2H14l2 2h2v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm5.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-7h-5V6h5v4z" />
                  </svg>
                  <span>Bus: M1, M2, M3</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20v1h2.23l2-2H14l2 2h2v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm5.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-7h-5V6h5v4z" />
                  </svg>
                  <span>Parking available</span>
                </div>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-teal-50 border-2 border-teal-500 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-teal-500">
                  Contact Info
                </h4>
              </div>
              <div className="space-y-3 text-teal-500/80">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span>(+1) 555-123-4567</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span>hello@wellness.com</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>Wellness Center NYC</span>
                </div>
              </div>
            </div>
          </div>

                     {/* Full Width Map */}
           <div className="bg-teal-50 border-2 border-teal-500 rounded-xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425882353772!3d40.74076297144166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0x2595e5b0b5b0b5b0!2sManhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wellness Center NYC Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="w-full py-16 px-4 bg-teal-700">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-white mb-12">
            Frequently Asked Questions
          </h1>
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
 
             {/* Right Column - Image */}
             <div className="flex items-center justify-center h-full">
               <div className="relative w-full h-full">
                 <img
                   src={globe}
                   alt="Wellness Globe"
                   className="w-full h-full object-cover rounded-xl shadow-2xl"
                 />
                 <div className="absolute inset-0 bg-teal-500/10 rounded-xl"></div>
               </div>
             </div>
 
             {/* Left Column - FAQ Items */}
             <div className="space-y-4 h-full text-justify">
                             {/* FAQ Item 1 */}
               <div className={`${isDarkMode ? 'bg-black' : 'bg-white'} rounded-xl shadow-lg overflow-hidden`}>
                 <button
                   onClick={() => toggleFAQ(0)}
                   className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-teal-50'}`}
                 >
                   <h3 className="text-lg font-bold text-teal-700">
                     What wellness programs do you offer?
                   </h3>
                   <svg
                     className={`w-5 h-5 text-teal-500 transition-transform duration-300 ${
                       openFAQ === 0 ? 'rotate-180' : ''
                     }`}
                     fill="currentColor"
                     viewBox="0 0 24 24"
                   >
                     <path d="M7 10l5 5 5-5z" />
                   </svg>
                 </button>
                 <div 
                   className={`overflow-hidden transition-all duration-500 ease-in-out ${
                     openFAQ === 0 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                   }`}
                 >
                   <div className="px-6 pb-4">
                     <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                       We offer comprehensive wellness programs including nutrition
                       coaching, fitness training, mindfulness sessions, stress
                       management, and sleep optimization. Each program is
                       personalized to meet your specific health goals and
                       lifestyle needs.
                     </p>
                   </div>
                 </div>
               </div>

               {/* FAQ Item 2 */}
               <div className={`${isDarkMode ? 'bg-black' : 'bg-white'} rounded-xl shadow-lg overflow-hidden`}>
                 <button
                   onClick={() => toggleFAQ(1)}
                   className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-teal-50'}`}
                 >
                   <h3 className="text-lg font-bold text-teal-700">
                     How long does it take to see results?
                   </h3>
                   <svg
                     className={`w-5 h-5 text-teal-500 transition-transform duration-300 ${
                       openFAQ === 1 ? 'rotate-180' : ''
                     }`}
                     fill="currentColor"
                     viewBox="0 0 24 24"
                   >
                     <path d="M7 10l5 5 5-5z" />
                   </svg>
                 </button>
                 <div 
                   className={`overflow-hidden transition-all duration-500 ease-in-out ${
                     openFAQ === 1 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                   }`}
                 >
                   <div className="px-6 pb-4">
                     <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                       Most clients begin to see positive changes within 2-4 weeks
                       of starting our wellness programs. However, sustainable
                       health improvements typically develop over 8-12 weeks with
                       consistent participation and lifestyle modifications.
                     </p>
                   </div>
                 </div>
               </div>

               {/* FAQ Item 3 */}
               <div className={`${isDarkMode ? 'bg-black' : 'bg-white'} rounded-xl shadow-lg overflow-hidden`}>
                 <button
                   onClick={() => toggleFAQ(2)}
                   className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-teal-50'}`}
                 >
                   <h3 className="text-lg font-bold text-teal-700">
                     What is included in a wellness consultation?
                   </h3>
                   <svg
                     className={`w-5 h-5 text-teal-500 transition-transform duration-300 ${
                       openFAQ === 2 ? 'rotate-180' : ''
                     }`}
                     fill="currentColor"
                     viewBox="0 0 24 24"
                   >
                     <path d="M7 10l5 5 5-5z" />
                   </svg>
                 </button>
                 <div 
                   className={`overflow-hidden transition-all duration-500 ease-in-out ${
                     openFAQ === 2 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                   }`}
                 >
                   <div className="px-6 pb-4">
                     <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                       Our wellness consultations include a comprehensive health
                       assessment, personalized goal setting, nutrition analysis,
                       fitness evaluation, stress assessment, and a customized
                       wellness plan tailored to your specific needs and lifestyle.
                     </p>
                   </div>
                 </div>
               </div>

               {/* FAQ Item 4 */}
               <div className={`${isDarkMode ? 'bg-black' : 'bg-white'} rounded-xl shadow-lg overflow-hidden`}>
                 <button
                   onClick={() => toggleFAQ(3)}
                   className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-teal-50'}`}
                 >
                   <h3 className="text-lg font-bold text-teal-700">
                     Do you offer virtual wellness sessions?
                   </h3>
                   <svg
                     className={`w-5 h-5 text-teal-500 transition-transform duration-300 ${
                       openFAQ === 3 ? 'rotate-180' : ''
                     }`}
                     fill="currentColor"
                     viewBox="0 0 24 24"
                   >
                     <path d="M7 10l5 5 5-5z" />
                   </svg>
                 </button>
                 <div 
                   className={`overflow-hidden transition-all duration-500 ease-in-out ${
                     openFAQ === 3 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                   }`}
                 >
                   <div className="px-6 pb-4">
                     <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                       Yes, we offer virtual wellness sessions for clients who
                       prefer remote consultations. Our online platform provides
                       the same quality of care with flexible scheduling options
                       and secure video conferencing technology.
                     </p>
                   </div>
                 </div>
               </div>

               {/* FAQ Item 5 */}
               <div className={`${isDarkMode ? 'bg-black' : 'bg-white'} rounded-xl shadow-lg overflow-hidden`}>
                 <button
                   onClick={() => toggleFAQ(4)}
                   className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-teal-50'}`}
                 >
                   <h3 className="text-lg font-bold text-teal-700">
                     How do I get started with your wellness programs?
                   </h3>
                   <svg
                     className={`w-5 h-5 text-teal-500 transition-transform duration-300 ${
                       openFAQ === 4 ? 'rotate-180' : ''
                     }`}
                     fill="currentColor"
                     viewBox="0 0 24 24"
                   >
                     <path d="M7 10l5 5 5-5z" />
                   </svg>
                 </button>
                 <div 
                   className={`overflow-hidden transition-all duration-500 ease-in-out ${
                     openFAQ === 4 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                   }`}
                 >
                   <div className="px-6 pb-4">
                     <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                       Getting started is easy! Simply contact us through our
                       website, phone, or email to schedule your initial
                       consultation. We'll discuss your health goals and create
                       a personalized wellness plan just for you.
                     </p>
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

             {/* Section 6 */}
       <section className={`w-full py-16 px-4 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-4">
              Stay Connected
            </h2>
                         <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-white' : 'text-black'}`}>
               Subscribe to our wellness newsletter for exclusive tips, health
               insights, and special offers delivered straight to your inbox.
             </p>
          </div>

          <form className="space-y-6" onSubmit={handleNewsletterSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                required
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-6 py-4 border-2 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-black placeholder-black"
                />
              </div>
              <div>
                <input
                required
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 border-2 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-black placeholder-black"
                />
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                required
                  type="checkbox"
                  className="w-5 h-5 text-teal-500 border-2 border-teal-200 rounded focus:ring-teal-500"
                />
                                 <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>
                   I agree to receive wellness updates and special offers
                 </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-teal-500 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Subscribe to Newsletter
            </button>
            
            {/* Newsletter Subscription Notification */}
            {newsletterSubscribed && (
              <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Message sent!</span>
              </div>
            )}
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ContactUs;