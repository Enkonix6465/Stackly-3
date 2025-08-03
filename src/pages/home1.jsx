import React, { useState, useEffect } from "react";
import homeheroVideo from "../assets/homehero.mp4";
import impactVideo from "../assets/impact.mp4";
import missionImg from "../assets/mission.jpeg";
import yogaImg from "../assets/yoga.jpeg";
import nutritionImg from "../assets/nutrition.jpeg";
import fitnessImg from "../assets/fitness.jpeg";
import sleepImg from "../assets/sleep.jpeg";
import badgeIcon from "../assets/logo.png";
import why1 from "../assets/why1.jpg";
import user1 from "../assets/user1.jpeg";
import user2 from "../assets/user2.jpeg";
import user3 from "../assets/user3.jpeg";
import homectaImg from "../assets/homecta.png";
import whoweareImg from "../assets/whoweare.png";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useScrollToTop } from "../hooks/useScrollToTop";

function Hero({ isDarkMode }) {
  const { elementRef, isVisible } = useScrollAnimation(0.1, 0);

  const scrollToWhoWeAre = () => {
    const whoWeAreSection = document.getElementById('who-we-are');
    if (whoWeAreSection) {
      whoWeAreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={elementRef} className="w-full h-screen relative overflow-hidden flex flex-col items-center justify-center px-4 text-center">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={homeheroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center">
        <h1 className={`text-6xl md:text-7xl font-extrabold text-white mb-8 drop-shadow transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          Your Wellness Journey
        </h1>
        <p className={`text-2xl md:text-3xl text-white mb-12 max-w-2xl mx-auto transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          Discover holistic health, expert guidance, and a supportive community. Your path to a healthier, happier you starts here.
        </p>
        <button 
          onClick={scrollToWhoWeAre}
          className={`font-semibold px-12 py-5 rounded-full shadow transition-all duration-1000 ease-out delay-500 transform hover:scale-105 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          } text-xl ${
            isDarkMode 
              ? 'bg-black text-white hover:bg-gray-800' 
              : 'bg-[#26A0A2] text-white hover:bg-charcoal'
          }`}>
          Start Your Journey
        </button>
      </div>
    </section>
  );
}

function WhoWeAre({ isDarkMode }) {
  const { elementRef, isVisible } = useScrollAnimation(0.3, 200);
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate('/about');
  };

  return (
    <section id="who-we-are" ref={elementRef} className="w-full py-20 px-4 bg-[#26A0A2]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Image - Slide from left */}
          <div className={`flex-1 transition-all duration-1000 ease-out transform ${
            isVisible ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-full opacity-0 scale-95'
          }`}>
            <div className="relative">
              <img 
                src={whoweareImg} 
                alt="Who We Are" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          {/* Right: Content - Slide from right */}
          <div className={`flex-1 lg:pl-8 transition-all duration-1000 ease-out delay-300 transform ${
            isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'
          }`}>
            <div className="mb-6">
              <span className={`inline-block bg-white/20 text-white font-semibold px-4 py-2 rounded-full text-sm mb-4 transition-all duration-700 delay-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                About Us
              </span>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight transition-all duration-700 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${
                isDarkMode ? 'text-black' : 'text-white'
              }`}>
                Who We Are
              </h2>
            </div>
            
            <p className="text-lg text-justify text-white/90 mb-8 leading-relaxed">
              We are a dedicated team of wellness professionals committed to transforming lives through comprehensive health and wellness solutions. Our mission is to empower individuals to achieve their optimal well-being through personalized care, expert guidance, and evidence-based practices.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#26A0A2] text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Expert Team</h4>
                  <p className="text-white/80 text-sm">Certified professionals with years of experience</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#26A0A2] text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Personalized Care</h4>
                  <p className="text-white/80 text-sm">Tailored wellness plans for individual needs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#26A0A2] text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Holistic Approach</h4>
                  <p className="text-white/80 text-sm">Mind, body, and spirit wellness integration</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-[#26A0A2] text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Proven Results</h4>
                  <p className="text-white/80 text-sm">Evidence-based methods with measurable outcomes</p>
                </div>
              </div>
            </div>
            
            <button 
              onClick={navigateToAbout}
              className={`font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                isDarkMode 
                  ? 'bg-black text-white hover:bg-gray-800' 
                  : 'bg-white text-[#26A0A2] hover:bg-gray-100'
              }`}>
              Learn More About Us →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}



function ServicesOverview({ isDarkMode }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
  }, []);

  const services = [
    {
      img: yogaImg,
      title: "Yoga & Meditation",
      tagline: "Balance mind and body with guided sessions.",
      details: "Join our expert-led yoga and meditation classes to improve flexibility, reduce stress, and enhance your overall well-being. Suitable for all levels."
    },
    {
      img: nutritionImg,
      title: "Diet & Nutrition",
      tagline: "Personalized nutrition plans for your goals.",
      details: "Get customized meal plans and nutrition advice from certified dietitians. Achieve your health goals with science-backed guidance."
    },
    {
      img: fitnessImg,
      title: "Fitness Programs",
      tagline: "Modern fitness routines for all levels.",
      details: "Access a variety of fitness programs, from strength training to cardio, designed to keep you motivated and fit."
    },
    {
      img: sleepImg,
      title: "Sleep Therapy",
      tagline: "Improve sleep quality with expert help.",
      details: "Overcome sleep issues with our therapy sessions and expert tips for restful, rejuvenating sleep every night."
    }
  ];

  return (
    <section ref={sectionRef} className={`w-full py-16 px-4 transition-colors duration-300 ${
      isDarkMode ? 'bg-black' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold text-center text-[#26A0A2] mb-10 transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          Our Top Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className={`relative group w-full h-[360px] bg-[#26A0A2] rounded-[10px] overflow-hidden shadow-md transition-all duration-1000 ease-out hover:shadow-2xl hover:-translate-y-2 cursor-pointer flex flex-col ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${i * 200}ms` 
              }}
            >
              {/* Image always visible */}
              <div className="w-full h-[250px] bg-cover bg-center" style={{ backgroundImage: `url(${s.img})` }} />
              {/* Title (default) in white area */}
              <div className="flex-1 w-full min-h-[60px] flex items-center justify-center">
                 <h3 className="text-lg font-bold text-white uppercase tracking-wide text-center mt-2 group-hover:opacity-0 transition-opacity duration-300">{s.title}</h3>
              </div>
              {/* Overlay: covers entire card on hover */}
              <div className={`absolute inset-0 flex flex-col items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 ${
                isDarkMode ? 'bg-black' : 'bg-white'
              }`}>
                <h3 className={`text-xl md:text-2xl font-bold uppercase tracking-wide text-center mb-2 ${
                  isDarkMode ? 'text-white' : 'text-[#26A0A2]'
                }`}>{s.title}</h3>
                <p className={`text-lg text-justify md:text-xl mb-2 text-center font-semibold ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{s.tagline}</p>
                <p className={`text-base text-justify md:text-lg mb-2 text-center ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-700'
                }`}>{s.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactMetrics({ isDarkMode }) {
  const [counts, setCounts] = useState({
    sessions: 0,
    satisfaction: 0,
    support: 0,
    experts: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            const duration = 2000; // 2 seconds
            const steps = 60;
            const stepDuration = duration / steps;

            const targets = {
              sessions: 1000,
              satisfaction: 95,
              support: 24,
              experts: 50
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
      { threshold: 0.3 } // Trigger when 30% of the section is visible
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

  return (
    <section ref={sectionRef} className="w-full py-20 px-4 relative overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={impactVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Teal Transparent Overlay */}
      <div className="absolute inset-0 bg-[#26A0A2]/80 z-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Content - Slide from left */}
          <div className={`flex-1 lg:pr-8 transition-all duration-1000 ease-out ${
            hasAnimated ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
                         <h2 className="text-3xl md:text-4xl font-bold text-justify text-white mb-6 leading-tight">
               Wellness Studio is a <span className="font-bold text-yellow-300">more reliable partner,</span> that listens to your needs
             </h2>
                         <p className="text-white text-lg text-justify leading-relaxed mb-8">
               We deeply immerse ourselves in your wellness journey to create a modern, personalized experience that reflects the identity and essence of your health goals. Our comprehensive approach combines cutting-edge wellness technology with time-tested holistic practices, ensuring every individual receives tailored guidance that addresses their unique needs. From personalized nutrition plans and expert fitness coaching to mindfulness training and stress management techniques.
             </p>
          </div>

          {/* Right: Metrics Grid (2x2) - Slide from right */}
          <div className={`flex-1 transition-all duration-1000 ease-out delay-300 ${
            hasAnimated ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}>
            <div className="grid grid-cols-2 gap-6">
              {/* Top Left - White */}
                             <div className={`rounded-2xl p-8 relative group hover:shadow-xl transition-all duration-300 ${
                               isDarkMode ? 'bg-black' : 'bg-white'
                             }`}>
                 <div className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                   <div className="text-4xl font-bold mb-2 animate-pulse">
                     <span className={`inline-block transform transition-all duration-500 hover:scale-110 ${
                       isDarkMode ? 'text-white' : 'text-[#26A0A2]'
                     }`}>
                       {counts.sessions}+
                     </span>
                   </div>
                   <div className={`text-sm leading-relaxed ${
                     isDarkMode ? 'text-gray-300' : 'text-gray-600'
                   }`}>wellness sessions completed with personalized care</div>
                 </div>
               </div>

              {/* Top Right - White */}
                             <div className={`rounded-2xl p-8 relative group hover:shadow-xl transition-all duration-300 ${
                               isDarkMode ? 'bg-black' : 'bg-white'
                             }`}>
                 <div className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                   <div className="text-4xl font-bold mb-2 animate-pulse">
                     <span className={`inline-block transform transition-all duration-500 hover:scale-110 ${
                       isDarkMode ? 'text-white' : 'text-[#26A0A2]'
                     }`}>
                       {counts.satisfaction}%
                     </span>
              </div>
                   <div className={`text-sm leading-relaxed ${
                     isDarkMode ? 'text-gray-300' : 'text-gray-600'
                   }`}>client satisfaction rate with proven results</div>
              </div>
            </div>

              {/* Bottom Left - White */}
                             <div className={`rounded-2xl p-8 relative group hover:shadow-xl transition-all duration-300 ${
                               isDarkMode ? 'bg-black' : 'bg-white'
                             }`}>
                 <div className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                   <div className="text-4xl font-bold mb-2 animate-pulse">
                     <span className={`inline-block transform transition-all duration-500 hover:scale-110 ${
                       isDarkMode ? 'text-white' : 'text-[#26A0A2]'
                     }`}>
                       {counts.support}/7
                     </span>
              </div>
                   <div className={`text-sm leading-relaxed ${
                     isDarkMode ? 'text-gray-300' : 'text-gray-600'
                   }`}>expert support available for your wellness journey</div>
              </div>
            </div>

              {/* Bottom Right - White */}
                             <div className={`rounded-2xl p-8 relative group hover:shadow-xl transition-all duration-300 ${
                               isDarkMode ? 'bg-black' : 'bg-white'
                             }`}>
                 <div className={isDarkMode ? 'text-white' : 'text-gray-900'}>
                   <div className="text-4xl font-bold mb-2 animate-pulse">
                     <span className={`inline-block transform transition-all duration-500 hover:scale-110 ${
                       isDarkMode ? 'text-white' : 'text-[#26A0A2]'
                     }`}>
                       {counts.experts}+
                     </span>
                   </div>
                   <div className={`text-sm leading-relaxed ${
                     isDarkMode ? 'text-gray-300' : 'text-gray-600'
                   }`}>certified wellness coaches and nutrition experts</div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickTestimonialsPreview({ isDarkMode }) {
  const testimonials = [
    {
      quote: "This platform has transformed my wellness journey. The personalized plans and community support are unmatched!",
      name: "Ava Patel",
      role: "Yoga Enthusiast",
      photo: user1,
    },
    {
      quote: "I love the expert guidance and the easy-to-follow fitness programs. I feel healthier and more confident than ever!",
      name: "Liam Chen",
      role: "Fitness Member",
      photo: user2,
    },
    {
      quote: "The nutrition advice and sleep therapy tips have made a huge difference in my daily life. Highly recommended!",
      name: "Sophia Garcia",
      role: "Wellness Seeker",
      photo: user3,
    },
  ];
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  const t = testimonials[index];

  // Auto-advance testimonials every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);
  return (
    <section className={`w-full py-16 px-4 flex flex-col items-center justify-center transition-colors duration-300 ${
      isDarkMode ? 'bg-black' : 'bg-white'
    }`}>
      <h2 className="text-2xl md:text-3xl font-bold text-[#26A0A2] mb-8 text-center">What Our Users Say</h2>
      <div className="max-w-3xl w-full mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center relative">
        {/* Arrows */}
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#26A0A2] hover:text-[#0f766e] text-3xl p-2 rounded-full transition-colors" aria-label="Previous testimonial">
          &#60;
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#26A0A2] hover:text-[#0f766e] text-3xl p-2 rounded-full transition-colors" aria-label="Next testimonial">
          &#62;
        </button>
        {/* Quote */}
        <blockquote className="text-2xl md:text-3xl font-serif text-center text-[#222836] mb-8 leading-relaxed">
          "{t.quote}"
        </blockquote>
        {/* User info */}
        <div className="flex items-center gap-4 mt-2">
          <img src={t.photo} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#26A0A2]" />
          <div className="text-left">
            <div className="text-[#26A0A2] font-bold uppercase text-sm tracking-wide">{t.name}</div>
            <div className="text-gray-500 text-xs italic">{t.role}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToActionBanner({ isDarkMode }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = React.useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
  }, []);

  const navigateToContact = () => {
    navigate('/contact');
  };

  const navigateToServices = () => {
    navigate('/services');
  };

  return (
    <section ref={sectionRef} className="w-full py-16 px-2 md:px-0 flex justify-center items-center relative overflow-hidden bg-[#2ad2bb]">
      <div className="max-w-7xl w-full relative flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
                 {/* Left: Content - Slide from left */}
         <div className={`flex-1 flex flex-col justify-center text-left pl-8 lg:pl-12 transition-all duration-1000 ease-out ${
           isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
         }`}>
          <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 ${
            isDarkMode ? 'text-black' : 'text-white'
          }`}>Ready to Transform Your Life?</h2>
          <p className="text-white/90 text-lg text-justify md:text-xl mb-8 leading-relaxed">
            Join thousands of people who have already started their wellness journey with us. 
            Get personalized guidance, expert support, and a community that cares about your success.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button 
              onClick={navigateToContact}
              className={`font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl focus:ring-4 focus:ring-white/40 transform transition-all duration-200 hover:-translate-y-1 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-black text-white hover:bg-gray-800' 
                  : 'bg-white text-[#26A0A2] hover:bg-gray-100'
              }`}>
              Start Today
            </button>
            <button 
              onClick={navigateToServices}
              className={`font-semibold px-8 py-4 rounded-full border-2 shadow-lg focus:ring-4 focus:ring-white/40 transform transition-all duration-200 hover:-translate-y-1 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-black text-white border-black hover:bg-gray-800' 
                  : 'bg-transparent text-white border-white hover:bg-white hover:text-[#26A0A2]'
              }`}>
              Learn More
            </button>
          </div>
        </div>
        
                 {/* Right: Image - Slide from right */}
         <div className={`flex-1 flex justify-center lg:justify-end transition-all duration-1000 ease-out delay-300 ${
           isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
         }`}>
           <div className="relative w-full max-w-md lg:max-w-lg">
                           <img 
                src={homectaImg} 
                alt="Wellness Journey" 
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                style={{ aspectRatio: '16/9' }}
              />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [initials, setInitials] = useState("");
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
  let currentUser = { firstName: '', lastName: '' };
  try {
    currentUser = JSON.parse(localStorage.getItem('currentUser')) || { firstName: '', lastName: '' };
  } catch (e) {}
    setInitials(
      `${currentUser.firstName?.[0] || ''}${currentUser.lastName?.[0] || ''}`.toUpperCase()
    );
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-[#f6fffd]'}`}>
      <Header />
      <Hero isDarkMode={isDarkMode} />
      <WhoWeAre isDarkMode={isDarkMode} />
      <ServicesOverview isDarkMode={isDarkMode} />
      <ImpactMetrics isDarkMode={isDarkMode} />
      <QuickTestimonialsPreview isDarkMode={isDarkMode} />
      <CallToActionBanner isDarkMode={isDarkMode} />
      <Footer />
    </div>
  );
}
