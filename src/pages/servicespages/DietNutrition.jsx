import React, { useState, useEffect } from 'react';
import Header from '../../Header.jsx';
import Footer from '../../footer.jsx';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import AOS from 'aos';
import '../../aos-custom.css';
import dietHeroVideo from '../../assets/Diethero.mp4';
import dietBenefitsBg from '../../assets/Dietbenefits.jpg';
import dietSteps from '../../assets/Dietsteps.jpg';
import dietServe from '../../assets/Dietserve.jpg';

const DietNutrition = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Scroll to top when component mounts
  useScrollToTop();

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
  }, []);

  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById('key-benefits');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Listen for dark mode changes from Header
  useEffect(() => {
    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.detail);
    };

    window.addEventListener('darkModeChanged', handleDarkModeChange);
    return () => {
      window.removeEventListener('darkModeChanged', handleDarkModeChange);
    };
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    document.querySelectorAll('img').forEach(img => {
      img.addEventListener('load', () => AOS.refresh());
    });
  }, []);

  const benefits = [
    "Improves energy levels and vitality",
    "Helps maintain healthy weight",
    "Enhances mental clarity and focus",
    "Promotes better digestion",
    "Supports immune system function",
    "Boosts metabolism and performance"
  ];

  const programs = [
    {
      title: "Personalized Meal Planning",
      description: "Custom nutrition plans tailored to your goals and lifestyle"
    },
    {
      title: "Weight Management Programs",
      description: "Sustainable approaches to achieving and maintaining healthy weight"
    },
    {
      title: "Sports Nutrition Coaching",
      description: "Optimize performance with targeted nutrition strategies"
    },
    {
      title: "Medical Nutrition Therapy",
      description: "Specialized nutrition support for health conditions"
    },
    {
      title: "Detox and Cleanse Programs",
      description: "Gentle cleansing approaches for better health"
    },
    {
      title: "Mindful Eating Workshops",
      description: "Develop healthy relationships with food and eating habits"
    }
  ];

  const howItWorks = [
    "Complete a comprehensive nutrition assessment",
    "Receive your personalized meal plan",
    "Access nutrition guidance and recipes",
    "Track your progress with expert support",
    "Adjust your plan based on results and feedback"
  ];

  const features = [
    "Personalized meal plans",
    "Nutrition tracking tools",
    "Recipe database access",
    "Expert consultation support"
  ];

  return (
    <div className={`min-h-screen w-full overflow-x-hidden transition-colors duration-300 flex flex-col ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <Header />
      
      {/* Hero Section */}
      <section className="w-full h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden max-w-full">
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={dietHeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="relative z-1 text-center max-w-4xl px-4 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight text-center" data-aos="fade-up">
            Discover <span className='text-teal-500'>Diet & Nutrition</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            Transform your health with personalized nutrition guidance and sustainable eating habits for optimal wellness.
          </p>
          <button 
            onClick={scrollToBenefits}
            className="bg-white text-[#26A0A2] font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:bg-gray-100 transition text-base sm:text-lg md:text-xl transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">
            Start Your Journey
          </button>
        </div>
      </section>

             {/* Key Benefits Section */}
       <section id="key-benefits" className={`w-full text-justify py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
        <div className="max-w-7xl mx-auto w-full overflow-hidden">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200" data-aos-once="false">
                         <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
               Key <span className='text-[#26A0A2]'>Benefits</span>
             </h2>
             <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Transform your life with the proven benefits of proper nutrition and healthy eating habits
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
            {/* Left Cards */}
            <div className="space-y-4 sm:space-y-6" data-aos="fade-right" data-aos-delay="300" data-aos-once="false">
                             <div 
                 className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                 data-aos="fade-right"
                 data-aos-delay="400"
                 data-aos-once="false"
               >
                 <div className="flex items-center space-x-4 mb-4">
                   <div className="w-12 h-12 bg-[#26A0A2] rounded-full flex items-center justify-center flex-shrink-0">
                     <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                   </div>
                   <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                     Improves Energy
                   </h3>
                 </div>
                 <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Boost your daily energy levels and vitality through balanced nutrition and proper meal timing designed to fuel your body optimally.
                </p>
              </div>
              
                             <div 
                 className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                 data-aos="fade-right"
                 data-aos-delay="500"
                 data-aos-once="false"
               >
                 <div className="flex items-center space-x-4 mb-4">
                   <div className="w-12 h-12 bg-[#26A0A2] rounded-full flex items-center justify-center flex-shrink-0">
                     <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                   </div>
                   <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                     Healthy Weight
                   </h3>
                 </div>
                 <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Achieve and maintain a healthy weight through sustainable nutrition strategies that work with your body's natural metabolism.
                </p>
              </div>
            </div>

            {/* Center Image */}
            <div className="flex flex-col items-center text-center" data-aos="zoom-in" data-aos-delay="600" data-aos-once="false">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl mb-4 sm:mb-6">
                <img 
                  src={dietBenefitsBg} 
                  alt="Diet Benefits" 
                  className="w-full h-full object-cover"
                />
              </div>
                             <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                 Transform Your Health
               </h3>
               <p className={`text-lg max-w-md ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Experience the profound benefits of proper nutrition that will enhance your physical health, mental clarity, and overall well-being.
              </p>
            </div>

            {/* Right Cards */}
            <div className="space-y-4 sm:space-y-6" data-aos="fade-left" data-aos-delay="300" data-aos-once="false">
                             <div 
                 className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                 data-aos="fade-left"
                 data-aos-delay="400"
                 data-aos-once="false"
               >
                 <div className="flex items-center space-x-4 mb-4">
                   <div className="w-12 h-12 bg-[#26A0A2] rounded-full flex items-center justify-center flex-shrink-0">
                     <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                   </div>
                   <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                     Better Digestion
                   </h3>
                 </div>
                 <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Improve your digestive health with nutrition plans that support gut health and promote optimal nutrient absorption.
                </p>
              </div>
              
                             <div 
                 className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                 data-aos="fade-left"
                 data-aos-delay="500"
                 data-aos-once="false"
               >
                 <div className="flex items-center space-x-4 mb-4">
                   <div className="w-12 h-12 bg-[#26A0A2] rounded-full flex items-center justify-center flex-shrink-0">
                     <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                     </svg>
                   </div>
                   <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                     Boosts Metabolism
                   </h3>
                 </div>
                 <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Enhance your metabolic function through targeted nutrition strategies that optimize your body's natural fat-burning processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

             {/* Programs Section */}
       <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden`}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={dietServe} 
            alt="Diet Programs Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#26A0A2] bg-opacity-70"></div>
        </div>
        
                 <div className="max-w-7xl mx-auto relative z-1 w-full overflow-hidden">
          <div className="mb-12" data-aos="fade-up">
                         <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white`}>
               Programs we <span className="text-white">serve</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {programs.map((program, index) => (
                             <div 
                 key={index}
                 className={`transform transition-all duration-300 hover:scale-105 rounded-2xl p-6 shadow-lg ${isDarkMode ? 'bg-gray-800 bg-opacity-90 backdrop-blur-sm' : 'bg-white bg-opacity-90 backdrop-blur-sm'}`}
                 data-aos="fade-up"
                 data-aos-delay={index * 100}
                 data-aos-once="false"
               >
                 <div className="mb-4">
                   <span className="text-2xl font-bold text-[#26A0A2]">
                     {String(index + 1).padStart(2, '0')}
                   </span>
                 </div>
                 <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                   {program.title}
                 </h3>
                 <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

             {/* How It Works Section */}
       <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto w-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left Side - Content */}
            <div className="flex flex-col space-y-8" data-aos="fade-right" data-aos-once="false">
              <div>
                                 <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                   How It <span className='text-[#26A0A2]'>Works</span>
                 </h2>
                 <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Get started with your nutrition journey in just a few simple steps
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                {howItWorks.map((step, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-4"
                    data-aos="fade-right"
                    data-aos-delay={index * 100}
                    data-aos-once="false"
                  >
                                         <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg bg-[#26A0A2]`}>
                       {index + 1}
                     </div>
                     <div className="flex-1">
                       <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                         Step {index + 1}
                       </h3>
                       <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button 
                  onClick={scrollToPricing}
                  className="bg-[#26A0A2] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#20c997] transition-colors duration-300 transform hover:scale-105">
                  Start Your Journey
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center lg:justify-end items-start" data-aos="fade-left" data-aos-once="false">
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="relative">
                  <img 
                    src={dietSteps} 
                    alt="Diet Steps" 
                    className="w-full object-cover rounded-2xl shadow-2xl"
                    style={{ height: '600px', maxHeight: 'none' }}
                  />
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-400 rounded-full opacity-80"></div>
                  <div className="absolute top-1/2 -right-6 w-4 h-4 bg-blue-400 rounded-full opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full text-justify py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-gradient-to-br from-[#26A0A2] to-[#20c997]">
        <div className="max-w-7xl mx-auto w-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left Side - Content */}
            <div className="flex flex-col space-y-8" data-aos="fade-right" data-aos-once="false">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
                  <span className='text-white'>Features</span> Included
                </h2>
                <p className="text-lg sm:text-xl mb-8 text-white">
                  Everything you need for a complete nutrition experience
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-white">
                  Our comprehensive nutrition platform provides you with all the tools and resources needed to achieve your health and wellness goals. From personalized meal plans to expert guidance, we've got everything covered.
                </p>
                <p className="text-base leading-relaxed text-white">
                  Whether you're looking to lose weight, gain muscle, or simply improve your overall health, our features are designed to support your journey at every step, making healthy eating accessible and enjoyable.
                </p>
                <p className="text-base leading-relaxed text-white">
                  Our platform integrates cutting-edge nutrition science with practical meal planning, ensuring you have access to the best strategies for your health goals. With real-time progress tracking and adaptive recommendations, your nutrition journey becomes more effective and sustainable.
                </p>
                <p className="text-base leading-relaxed text-white">
                  Join thousands of users who have transformed their health through our comprehensive nutrition approach. Experience the difference that personalized meal planning, expert guidance, and ongoing support can make in your health and wellness journey.
                </p>
              </div>
            </div>

            {/* Right Side - Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" data-aos="fade-left" data-aos-once="false">
              {features.map((feature, index) => (
                                 <div 
                   key={index}
                   className={`p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-gray-800 bg-opacity-95 backdrop-blur-sm' : 'bg-white bg-opacity-95 backdrop-blur-sm'}`}
                   data-aos="fade-up"
                   data-aos-delay={index * 100}
                   data-aos-once="false"
                 >
                   <div className="mb-4">
                     <div className="w-12 h-12 bg-[#26A0A2] rounded-full flex items-center justify-center mb-3 shadow-lg">
                       <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                       {feature}
                     </h3>
                   </div>
                   <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Access to {feature.toLowerCase()} for enhanced nutrition experience and comprehensive support.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

             {/* Final CTA Section */}
       <section id="pricing-section" className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto text-center w-full overflow-hidden">
                     <div className={`rounded-3xl p-8 sm:p-12 ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up">
             <h2 
               className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}
               data-aos="fade-down"
               data-aos-delay="50"
               data-aos-once="false"
             >
               Start Your Nutrition Journey Today
             </h2>
             <p 
               className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-white' : 'text-black'}`}
               data-aos="fade-up"
               data-aos-delay="100"
               data-aos-once="false"
             >
              Get access to personalized nutrition plans and wellness tools to improve your health and vitality.
            </p>
            
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Basic Plan */}
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-[#26A0A2] transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Basic</h3>
                <div className="text-4xl font-bold text-[#26A0A2] mb-4">
                  $29<span className="text-lg text-gray-600">/month</span>
                </div>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="250" data-aos-once="false">
                    <svg className="w-5 h-5 text-[#26A0A2] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Basic meal planning
                  </li>
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="300" data-aos-once="false">
                    <svg className="w-5 h-5 text-[#26A0A2] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Recipe database access
                  </li>
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="350" data-aos-once="false">
                    <svg className="w-5 h-5 text-[#26A0A2] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Mobile app access
                  </li>
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="400" data-aos-once="false">
                    <svg className="w-5 h-5 text-[#26A0A2] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Weekly progress reports
                  </li>
                </ul>
                <button 
                  className="w-full bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300 transform hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay="450"
                  data-aos-once="false"
                >
                  Choose Basic
                </button>
              </div>

              {/* Premium Plan */}
              <div className="bg-gradient-to-br from-[#26A0A2] to-[#20c997] rounded-2xl p-6 border-2 border-[#26A0A2] transform scale-105">
                <div 
                  className="bg-white text-[#26A0A2] text-sm font-bold px-3 py-1 rounded-full inline-block mb-4 animate-pulse"
                  data-aos="bounce"
                  data-aos-delay="250"
                  data-aos-once="false"
                >
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold text-white mb-2" data-aos="fade-down" data-aos-delay="250" data-aos-once="false">Premium</h3>
                <div className="text-4xl font-bold text-white mb-4" data-aos="zoom-in" data-aos-delay="300" data-aos-once="false">
                  $59<span className="text-lg text-gray-100">/month</span>
                </div>
                <ul className="text-left space-y-3 mb-6 text-white">
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="350" data-aos-once="false">
                    <svg className="w-5 h-5 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Everything in Basic
                  </li>
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="400" data-aos-once="false">
                    <svg className="w-5 h-5 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Personalized meal plans
                  </li>
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="450" data-aos-once="false">
                    <svg className="w-5 h-5 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Expert consultation
                  </li>
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="500" data-aos-once="false">
                    <svg className="w-5 h-5 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Nutrition tracking tools
                  </li>
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="550" data-aos-once="false">
                    <svg className="w-5 h-5 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Priority support
                  </li>
                </ul>
                <button 
                  className="w-full bg-white text-[#26A0A2] font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-once="false"
                >
                  Choose Premium
                </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-[#26A0A2] transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-2" data-aos="fade-down" data-aos-delay="350" data-aos-once="false">Pro</h3>
                <div className="text-4xl font-bold text-[#26A0A2] mb-4" data-aos="zoom-in" data-aos-delay="400" data-aos-once="false">
                  $99<span className="text-lg text-gray-600">/month</span>
                </div>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="450" data-aos-once="false">
                    <svg className="w-5 h-5 text-[#26A0A2] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Everything in Premium
                  </li>
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="500" data-aos-once="false">
                    <svg className="w-5 h-5 text-[#26A0A2] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    1-on-1 coaching sessions
                  </li>
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="550" data-aos-once="false">
                    <svg className="w-5 h-5 text-[#26A0A2] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Custom meal plans
                  </li>
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="600" data-aos-once="false">
                    <svg className="w-5 h-5 text-[#26A0A2] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Weekend workshops access
                  </li>
                  <li className="flex items-center" data-aos="fade-right" data-aos-delay="650" data-aos-once="false">
                    <svg className="w-5 h-5 text-[#26A0A2] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    VIP community access
                  </li>
                </ul>
                <button 
                  className="w-full bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300 transform hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay="700"
                  data-aos-once="false"
                >
                  Choose Pro
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DietNutrition;