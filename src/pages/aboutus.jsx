import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useScrollToTop } from "../hooks/useScrollToTop";
import missionImg from "../assets/mission.jpeg";
import whoweareImg from "../assets/whoweare.jpeg";
import whatwethinkImg from "../assets/whatwethink.jpg";
import aboutusVideo from "../assets/aboutus.mp4";
import ourvaluesImg from "../assets/ourvalues.jpg";
import user1 from "../assets/user1.jpeg";
import user2 from "../assets/user2.jpeg";
import user3 from "../assets/user3.jpeg";

// Add custom CSS animations
const customStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .animate-fade-in-up {
    animation: fadeInUp 1s ease-out forwards;
  }

  .animate-fade-in-up-delay {
    animation: fadeInUp 1s ease-out 0.3s forwards;
    opacity: 0;
  }

  .animate-fade-in-up-delay-1 {
    animation: fadeInUp 1s ease-out 0.2s forwards;
    opacity: 0;
  }

  .animate-fade-in-up-delay-2 {
    animation: fadeInUp 1s ease-out 0.4s forwards;
    opacity: 0;
  }

  .animate-fade-in-up-delay-3 {
    animation: fadeInUp 1s ease-out 0.6s forwards;
    opacity: 0;
  }

  .animate-fade-in-left {
    animation: fadeInLeft 1s ease-out forwards;
  }

  .animate-fade-in-left-delay {
    animation: fadeInLeft 1s ease-out 0.3s forwards;
    opacity: 0;
  }

  .animate-fade-in-left-delay-2 {
    animation: fadeInLeft 1s ease-out 0.4s forwards;
    opacity: 0;
  }

  .animate-fade-in-left-delay-3 {
    animation: fadeInLeft 1s ease-out 0.6s forwards;
    opacity: 0;
  }

  .animate-fade-in-left-delay-4 {
    animation: fadeInLeft 1s ease-out 0.8s forwards;
    opacity: 0;
  }

  .animate-fade-in-right {
    animation: fadeInRight 1s ease-out 0.5s forwards;
    opacity: 0;
  }

  .animate-slide-in-left {
    animation: slideInLeft 1.2s ease-out forwards;
  }

  .animate-slide-in-right {
    animation: slideInRight 1.2s ease-out 0.3s forwards;
    opacity: 0;
  }

  .animate-scale-in {
    animation: scaleIn 0.8s ease-out forwards;
  }

  .scroll-animate {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
  }

  .scroll-animate.animate {
    opacity: 1;
    transform: translateY(0);
  }

  .scroll-animate-left {
    opacity: 0;
    transform: translateX(-30px);
    transition: all 0.8s ease-out;
  }

  .scroll-animate-left.animate {
    opacity: 1;
    transform: translateX(0);
  }

  .scroll-animate-right {
    opacity: 0;
    transform: translateX(30px);
    transition: all 0.8s ease-out;
  }

  .scroll-animate-right.animate {
    opacity: 1;
    transform: translateX(0);
  }

  .scroll-animate-scale {
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.8s ease-out;
  }

  .scroll-animate-scale.animate {
    opacity: 1;
    transform: scale(1);
  }

  .hover\\:scale-105:hover {
    transform: scale(1.05);
  }

  .hover\\:scale-110:hover {
    transform: scale(1.1);
  }

  .hover\\:-translate-y-2:hover {
    transform: translateY(-8px);
  }
`;

// Inject styles into document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = customStyles;
  document.head.appendChild(styleSheet);
}

function AboutHero() {
  const { elementRef, isVisible } = useScrollAnimation(0.1, 0);

  return (
    <section ref={elementRef} className="w-full h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={aboutusVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <span className={`text-white transition-all duration-1000 ease-out delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>About </span>
          <span className={`text-[#26A0A2] transition-all duration-1000 ease-out delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>Us</span>
        </h1>
        <p className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          Dedicated to transforming lives through comprehensive health and wellness solutions. 
          We believe everyone deserves access to personalized care that nurtures mind, body, and spirit.
        </p>
      </div>
    </section>
  );
}

function OurGrowthThroughYears({ isDarkMode }) {
  const { elementRef, isVisible } = useScrollAnimation(0.3, 200);
  
  const milestones = [
         {
       step: "01",
       title: "Foundation (2016)",
       description: "Started with a vision to transform wellness through personalized care and evidence-based practices. Established our first wellness center with a team of certified professionals.",
       color: "bg-[#26A0A2]"
     },
         {
       step: "02", 
       title: "First 1000 Clients (2018)",
       description: "Reached our first milestone of 1000 satisfied clients, proving the effectiveness of our holistic approach. Expanded our services to include nutrition, fitness, and mental wellness.",
       color: "bg-gray-600"
     },
     {
       step: "03",
       title: "Digital Transformation (2020)", 
       description: "Launched comprehensive online wellness platforms to reach more people globally. Introduced virtual consultations, digital wellness tracking, and mobile app for personalized care.",
       color: "bg-[#26A0A2]"
     },
     {
       step: "04",
       title: "10,000+ Lives Transformed (2022)",
       description: "Celebrated transforming over 10,000 lives with our holistic wellness programs. Recognized as a leading wellness destination with multiple awards and certifications.",
       color: "bg-gray-600"
     },
    {
      step: "05",
      title: "Industry Leader (2024)",
      description: "Established as a leading wellness destination with cutting-edge technology, expert team, and comprehensive programs. Continuing to innovate and expand our impact globally.",
      color: "bg-[#26A0A2]"
    }
  ];

  return (
    <section ref={elementRef} className={`w-full py-20 px-4 transition-colors duration-300 ${
      isDarkMode ? 'bg-black' : 'bg-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          } ${
            isDarkMode ? 'text-white' : 'text-[#26A0A2]'
          }`}>
            Our Growth Through Years
          </h2>
          <p className={`text-xl max-w-3xl mx-auto transition-all duration-1000 ease-out delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          } ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A journey of continuous growth, innovation, and commitment to transforming lives through wellness.
          </p>
        </div>
        
                 <div className="relative">
           <div className="space-y-16">
             {milestones.map((milestone, index) => {
                               const year = milestone.title.split('(')[1].replace(')', '');
                const isBlackCircle = year === '2016' || year === '2020' || year === '2024' || year === '2026';
               
                               return (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Content Banner */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'} ${index % 2 === 0 ? 'scroll-animate-left' : 'scroll-animate-right'}`}>
                      <div className={`p-8 rounded-2xl shadow-lg relative ${
                        isDarkMode 
                          ? (milestone.color === 'bg-[#26A0A2]' ? 'bg-[#26A0A2] text-white' : 'bg-black text-white')
                          : milestone.color
                      }`}>
                        <div className="flex items-center mb-4">
                          <h3 className={`text-2xl font-bold ${
                            isDarkMode ? 'text-white' : 'text-white'
                          }`}>{milestone.title.split('(')[0].trim()}</h3>
                        </div>
                        <p className={`leading-relaxed text-lg ${
                          isDarkMode ? 'text-gray-300' : 'text-white/90'
                        }`}>
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Timeline Circle with Number */}
                     <div className={`hidden lg:flex items-center justify-center w-20 h-20 rounded-full shadow-lg z-10 relative scroll-animate-scale ${
                       isDarkMode 
                         ? (isBlackCircle ? 'bg-black' : 'bg-[#26A0A2]')
                         : (isBlackCircle ? 'bg-gray-600' : 'bg-[#26A0A2]')
                     }`}>
                       <div className="text-xl font-bold text-white">{year}</div>
                     </div>
                    
                    {/* Spacer for mobile */}
                    <div className="lg:hidden flex-1"></div>
                  </div>
                );
             })}
           </div>
         </div>
      </div>
    </section>
  );
}

function MissionVision({ isDarkMode }) {
  return (
    <section className="w-full py-20 px-4 bg-[#26A0A2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative scroll-animate-left">
            <img 
              src={whoweareImg} 
              alt="Our Mission" 
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
         
          {/* Right: Content */}
          <div className="space-y-8 scroll-animate-right">
            <div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${
                isDarkMode ? 'text-black' : 'text-white'
              }`}>
                Our Mission & Vision
              </h2>
              <p className="text-lg text-justify text-white/90 leading-relaxed">
                We are committed to empowering individuals to achieve their optimal well-being through 
                evidence-based practices, personalized care, and a supportive community.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border-l-4 border-white">
                <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                <p className="text-white/90">
                  To provide accessible, comprehensive wellness solutions that transform lives 
                  and create lasting positive change in our community.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border-l-4 border-white">
                <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                <p className="text-white/90">
                  To be the leading wellness destination where individuals discover their path 
                  to holistic health and sustainable lifestyle transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurValues({ isDarkMode }) {
  const values = [
    {
      title: "Innovation",
      description: "We embrace cutting-edge wellness technology and evidence-based practices, always seeking better ways to deliver personalized health solutions.",
      teal: false
    },
    {
      title: "Integrity",
      description: "We act with honesty, transparency, and the highest ethical standards in all our wellness practices and client relationships.",
      teal: true
    },
    {
      title: "Flexibility",
      description: "We adapt quickly to individual needs and changing health goals, staying agile to meet evolving wellness requirements and lifestyle preferences.",
      teal: true
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we do, delivering outstanding wellness results and transformative experiences for our clients.",
      teal: false
    }
  ];

  return (
    <section className={`w-full py-20 px-4 transition-colors duration-300 ${
      isDarkMode ? 'bg-black' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 scroll-animate-left ${
            isDarkMode ? 'text-white' : 'text-[#26A0A2]'
          }`}>
            Our Values
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Left: Large Image Card */}
          <div className="scroll-animate-left">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-full">
              <img 
                src={ourvaluesImg} 
                alt="Our Values" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: 2x2 Grid of Value Cards */}
          <div className="grid text-justify grid-cols-2 gap-6 scroll-animate-right h-full">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`p-6 shadow-md scroll-animate-scale flex flex-col justify-center ${
                  value.teal 
                    ? 'bg-[#26A0A2] text-white' 
                    : 'bg-white text-gray-900'
                }`}
                style={{
                  borderTopLeftRadius: '35px',
                  borderBottomRightRadius: '35px'
                }}
              >
                <h3 className={`text-xl font-bold mb-3 ${
                  value.teal ? 'text-white' : 'text-[#26A0A2]'
                }`}>
                  {value.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  value.teal ? 'text-white/90' : 'text-gray-900'
                }`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeThink({ isDarkMode }) {
  return (
    <section className={`w-full py-12 px-4 transition-colors duration-300 ${
      isDarkMode ? 'bg-black' : 'bg-white'
    }`}>
      <div className="max-w-7xl text-justify mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Content */}
          <div className="flex flex-col justify-center space-y-4 scroll-animate-left">
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-3 leading-tight ${
                isDarkMode ? 'text-white' : 'text-[#26A0A2]'
              }`}>
                What We Think
              </h2>
              <p className={`text-base leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Our philosophy is rooted in the belief that true wellness encompasses mind, body, and spirit. 
                We think that everyone deserves access to personalized, evidence-based wellness solutions that 
                transform lives and create lasting positive change.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className={`p-4 rounded-xl border-l-4 border-[#26A0A2] hover:scale-105 transition-all duration-300 ${
                isDarkMode ? 'bg-gray-800' : 'bg-[#26A0A2]/5'
              }`}>
                <h3 className={`text-lg font-bold mb-1 ${
                  isDarkMode ? 'text-white' : 'text-[#26A0A2]'
                }`}>Holistic Approach</h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  We believe in addressing the complete person - not just symptoms, but the root causes 
                  of wellness challenges through comprehensive, integrated care.
                </p>
              </div>
              
              <div className={`p-4 rounded-xl border-l-4 border-[#26A0A2] animate-fade-in-left-delay-3 hover:scale-105 transition-all duration-300 ${
                isDarkMode ? 'bg-gray-800' : 'bg-[#26A0A2]/5'
              }`}>
                <h3 className={`text-lg font-bold mb-1 ${
                  isDarkMode ? 'text-white' : 'text-[#26A0A2]'
                }`}>Personalized Care</h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Every individual is unique, and we think wellness solutions should be tailored to 
                  personal needs, goals, and lifestyle preferences.
                </p>
              </div>
              
              <div className={`p-4 rounded-xl border-l-4 border-[#26A0A2] animate-fade-in-left-delay-4 hover:scale-105 transition-all duration-300 ${
                isDarkMode ? 'bg-gray-800' : 'bg-[#26A0A2]/5'
              }`}>
                <h3 className={`text-lg font-bold mb-1 ${
                  isDarkMode ? 'text-white' : 'text-[#26A0A2]'
                }`}>Evidence-Based Practice</h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  We think the best wellness outcomes come from combining cutting-edge research with 
                  time-tested holistic practices for optimal results.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden scroll-animate-right">
            <img 
              src={whatwethinkImg} 
              alt="What We Think" 
              className="w-full h-full object-fill hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatMakesUsUnique({ isDarkMode }) {
  const uniqueFeatures = [
    {
      title: "Holistic Wellness Integration",
      description: "We seamlessly integrate physical, mental, and spiritual wellness practices, creating a comprehensive approach that addresses the complete person rather than isolated symptoms.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      title: "AI-Powered Personalization",
      description: "Our advanced AI technology creates truly personalized wellness plans that adapt to your progress, preferences, and lifestyle changes in real-time for optimal results.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      title: "Expert-Led Community",
      description: "Access to certified wellness experts, nutritionists, and fitness professionals who provide ongoing support and guidance throughout your wellness transformation journey.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="w-full py-20 px-4 bg-[#26A0A2]">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 scroll-animate">
            What Makes Us Unique
          </h2>
        </div>

        {/* Three Cards Layout */}
        <div className="grid grid-cols-1 text-justify md:grid-cols-3 gap-8">
          {uniqueFeatures.map((feature, index) => (
            <div 
              key={index}
              className={`relative rounded-lg shadow-sm p-8 hover:shadow-md transition-all duration-300 scroll-animate-scale hover:scale-105 hover:-translate-y-2 ${
                isDarkMode ? 'bg-black' : 'bg-white'
              }`}
              style={{
                borderTopLeftRadius: '8px',
                borderBottomRightRadius: '8px',
                borderTop: `3px solid ${isDarkMode ? 'white' : 'white'}`,
                borderLeft: `3px solid ${isDarkMode ? 'white' : 'white'}`,
                borderBottom: `3px solid ${isDarkMode ? 'white' : 'white'}`,
                borderRight: `3px solid ${isDarkMode ? 'white' : 'white'}`
              }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[#26A0A2] rounded-lg flex items-center justify-center mb-6">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className={`leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The wellness programs here have completely transformed my life. I've never felt more energized and balanced. The personalized approach made all the difference!",
      name: "Jennifer Martinez",
      role: "Wellness Enthusiast",
      image: user1,
      rating: 5
    },
    {
      quote: "After struggling with stress and poor sleep for years, the mindfulness training and sleep therapy sessions have given me back my quality of life. I'm so grateful!",
      name: "David Thompson",
      role: "Corporate Executive",
      image: user2,
      rating: 5
    },
    {
      quote: "The nutrition guidance and fitness programs are exceptional. I've achieved my health goals and learned sustainable habits that I'll carry with me forever.",
      name: "Sarah Williams",
      role: "Fitness Enthusiast",
      image: user3,
      rating: 5
    },
    {
      quote: "The holistic approach to wellness here is truly remarkable. They address mind, body, and spirit in a way that feels natural and effective. Highly recommended!",
      name: "Michael Rodriguez",
      role: "Yoga Practitioner",
      image: user1,
      rating: 5
    },
    {
      quote: "I was skeptical at first, but the results speak for themselves. My energy levels have improved dramatically, and I feel more confident than ever before.",
      name: "Lisa Chen",
      role: "Health Coach",
      image: user2,
      rating: 5
    },
    {
      quote: "The community here is incredible. Everyone is supportive and the expert guidance has helped me overcome challenges I thought were impossible.",
      name: "Robert Johnson",
      role: "Wellness Seeker",
      image: user3,
      rating: 5
    }
  ];

  return (
    <section className="w-full py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who have transformed their lives through our wellness programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-[#26A0A2] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const [counts, setCounts] = useState({
    clients: 0,
    sessions: 0,
    satisfaction: 0,
    years: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            const duration = 2000;
            const steps = 60;
            const stepDuration = duration / steps;

            const targets = {
              clients: 5000,
              sessions: 15000,
              satisfaction: 98,
              years: 8
            };

            const intervals = {};

            Object.keys(targets).forEach(key => {
              let current = 0;
              const target = targets[key];
              const increment = target / steps;

              intervals[key] = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(intervals[key]);
                }
                
                setCounts(prev => ({
                  ...prev,
                  [key]: Math.floor(current)
                }));
              }, stepDuration);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const stats = [
    {
      number: counts.clients,
      suffix: "+",
      label: "Happy Clients",
      description: "Individuals who have transformed their lives with us"
    },
    {
      number: counts.sessions,
      suffix: "+",
      label: "Wellness Sessions",
      description: "Personalized sessions delivered by our experts"
    },
    {
      number: counts.satisfaction,
      suffix: "%",
      label: "Client Satisfaction",
      description: "Rated excellent by our community members"
    },
    {
      number: counts.years,
      suffix: "+",
      label: "Years of Excellence",
      description: "Dedicated to wellness and community health"
    }
  ];

  return (
    <section ref={sectionRef} className="w-full py-20 px-4 bg-[#26A0A2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 scroll-animate">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto scroll-animate">
            Real results from real people who have transformed their lives with our wellness programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 scroll-animate-scale"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}{stat.suffix}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
              <p className="text-white/80 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="w-full py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 scroll-animate">
          Ready to Start Your Wellness Journey?
        </h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed scroll-animate">
          Join thousands of people who have already transformed their lives with our comprehensive wellness programs. 
          Take the first step towards a healthier, happier you today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-animate">
          <button className="bg-[#26A0A2] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#0f766e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Start Your Journey
          </button>
          <button className="bg-transparent text-[#26A0A2] font-semibold px-8 py-4 rounded-xl border-2 border-[#26A0A2] hover:bg-[#26A0A2] hover:text-white transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Scroll to top when component mounts
  useScrollToTop();

  // Dark mode functionality
  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(darkMode);
  }, []);

  useEffect(() => {
    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.detail);
    };
    
    window.addEventListener('darkModeChanged', handleDarkModeChange);
    
    return () => {
      window.removeEventListener('darkModeChanged', handleDarkModeChange);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll(
      '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale'
    );
    
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <Header />
      <AboutHero />
      <OurGrowthThroughYears isDarkMode={isDarkMode} />
      <MissionVision isDarkMode={isDarkMode} />
      <WhatWeThink isDarkMode={isDarkMode} />
      <WhatMakesUsUnique isDarkMode={isDarkMode} />
      <OurValues isDarkMode={isDarkMode} />
      <Footer />
    </div>
  );
} 