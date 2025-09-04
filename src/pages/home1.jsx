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
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
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
  const { language } = useContext(LanguageContext);
  const [isDarkMode, setIsDarkMode] = useState(false);
  useScrollToTop();
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

  // Translations
  const translations = {
    English: {
      heroTitle: "Your Wellness Journey",
      heroDesc: "Discover holistic health, expert guidance, and a supportive community. Your path to a healthier, happier you starts here.",
      heroBtn: "Start Your Journey",
      whoWeAre: "Who We Are",
      aboutUs: "About Us",
      whoWeAreDesc: "We are a dedicated team of wellness professionals committed to transforming lives through comprehensive health and wellness solutions. Our mission is to empower individuals to achieve their optimal well-being through personalized care, expert guidance, and evidence-based practices.",
      learnMore: "Learn More About Us →",
      servicesTitle: "Our Top Services",
      services: [
        {
          title: "Yoga & Meditation",
          tagline: "Balance mind and body with guided sessions.",
          details: "Join our expert-led yoga and meditation classes to improve flexibility, reduce stress, and enhance your overall well-being. Suitable for all levels."
        },
        {
          title: "Diet & Nutrition",
          tagline: "Personalized nutrition plans for your goals.",
          details: "Get customized meal plans and nutrition advice from certified dietitians. Achieve your health goals with science-backed guidance."
        },
        {
          title: "Fitness Programs",
          tagline: "Modern fitness routines for all levels.",
          details: "Access a variety of fitness programs, from strength training to cardio, designed to keep you motivated and fit."
        },
        {
          title: "Sleep Therapy",
          tagline: "Improve sleep quality with expert help.",
          details: "Overcome sleep issues with our therapy sessions and expert tips for restful, rejuvenating sleep every night."
        }
      ],
      impactTitle: "Wellness Studio is a more reliable partner, that listens to your needs",
      impactDesc: "We deeply immerse ourselves in your wellness journey to create a modern, personalized experience that reflects the identity and essence of your health goals. Our comprehensive approach combines cutting-edge wellness technology with time-tested holistic practices, ensuring every individual receives tailored guidance that addresses their unique needs. From personalized nutrition plans and expert fitness coaching to mindfulness training and stress management techniques.",
      impactMetrics: [
        "wellness sessions completed with personalized care",
        "client satisfaction rate with proven results",
        "expert support available for your wellness journey",
        "certified wellness coaches and nutrition experts"
      ],
      testimonialsTitle: "What Our Users Say",
      testimonials: [
        {
          quote: "This platform has transformed my wellness journey. The personalized plans and community support are unmatched!",
          name: "Ava Patel",
          role: "Yoga Enthusiast"
        },
        {
          quote: "I love the expert guidance and the easy-to-follow fitness programs. I feel healthier and more confident than ever!",
          name: "Liam Chen",
          role: "Fitness Member"
        },
        {
          quote: "The nutrition advice and sleep therapy tips have made a huge difference in my daily life. Highly recommended!",
          name: "Sophia Garcia",
          role: "Wellness Seeker"
        }
      ],
      ctaTitle: "Ready to Transform Your Life?",
      ctaDesc: "Join thousands of people who have already started their wellness journey with us. Get personalized guidance, expert support, and a community that cares about your success.",
      ctaStart: "Start Today",
      ctaLearn: "Learn More"
    },
    Arabic: {
      heroTitle: "رحلة العافية الخاصة بك",
      heroDesc: "اكتشف الصحة الشاملة، والإرشاد المتخصص، ومجتمع داعم. تبدأ رحلتك نحو صحة وسعادة أفضل هنا.",
      heroBtn: "ابدأ رحلتك",
      whoWeAre: "من نحن",
      aboutUs: "معلومات عنا",
      whoWeAreDesc: "نحن فريق مكرس من محترفي العافية ملتزمون بتحويل الحياة من خلال حلول الصحة والعافية الشاملة. مهمتنا هي تمكين الأفراد من تحقيق رفاهيتهم المثلى من خلال رعاية شخصية وإرشاد متخصص وممارسات قائمة على الأدلة.",
      learnMore: "تعرف أكثر علينا →",
      servicesTitle: "أفضل خدماتنا",
      services: [
        {
          title: "اليوغا والتأمل",
          tagline: "وازن بين العقل والجسم بجلسات موجهة.",
          details: "انضم إلى دروس اليوغا والتأمل بقيادة خبراء لتحسين المرونة وتقليل التوتر وتعزيز رفاهيتك بشكل عام. مناسب لجميع المستويات."
        },
        {
          title: "النظام الغذائي والتغذية",
          tagline: "خطط تغذية شخصية لأهدافك.",
          details: "احصل على خطط وجبات مخصصة ونصائح تغذية من اختصاصيين معتمدين. حقق أهدافك الصحية بإرشادات علمية."
        },
        {
          title: "برامج اللياقة البدنية",
          tagline: "برامج لياقة حديثة لجميع المستويات.",
          details: "احصل على مجموعة متنوعة من برامج اللياقة البدنية، من تدريب القوة إلى الكارديو، مصممة لتحفيزك والحفاظ على لياقتك."
        },
        {
          title: "علاج النوم",
          tagline: "حسّن جودة نومك بمساعدة الخبراء.",
          details: "تغلب على مشاكل النوم بجلسات علاجية ونصائح خبراء لنوم مريح ومتجدد كل ليلة."
        }
      ],
      impactTitle: "استوديو العافية هو شريك أكثر موثوقية يستمع إلى احتياجاتك",
      impactDesc: "نغمر أنفسنا بعمق في رحلتك الصحية لإنشاء تجربة حديثة وشخصية تعكس هوية وأهداف صحتك. يجمع نهجنا الشامل بين أحدث تقنيات العافية والممارسات الشاملة المجربة، لضمان حصول كل فرد على إرشادات مخصصة تلبي احتياجاته الفريدة. من خطط التغذية الشخصية والتدريب الرياضي إلى التدريب الذهني وتقنيات إدارة التوتر.",
      impactMetrics: [
        "جلسات عافية مكتملة برعاية شخصية",
        "معدل رضا العملاء بنتائج مثبتة",
        "دعم خبراء متاح لرحلتك الصحية",
        "مدربو عافية وخبراء تغذية معتمدون"
      ],
      testimonialsTitle: "ماذا يقول مستخدمونا",
      testimonials: [
        {
          quote: "هذا المنصة غيرت رحلتي الصحية. الخطط الشخصية والدعم المجتمعي لا مثيل لهما!",
          name: "آفا باتيل",
          role: "محبة اليوغا"
        },
        {
          quote: "أحب الإرشاد الخبير وبرامج اللياقة السهلة. أشعر بصحة وثقة أكثر من أي وقت!",
          name: "ليام تشين",
          role: "عضو لياقة"
        },
        {
          quote: "نصائح التغذية وعلاج النوم أحدثت فرقًا كبيرًا في حياتي اليومية. أنصح بها بشدة!",
          name: "صوفيا غارسيا",
          role: "باحثة عن العافية"
        }
      ],
      ctaTitle: "جاهز لتغيير حياتك؟",
      ctaDesc: "انضم إلى آلاف الأشخاص الذين بدأوا بالفعل رحلتهم الصحية معنا. احصل على إرشاد شخصي ودعم خبير ومجتمع يهتم بنجاحك.",
      ctaStart: "ابدأ اليوم",
      ctaLearn: "تعرف أكثر"
    },
    Hebrew: {
      heroTitle: "מסע הבריאות שלך",
      heroDesc: "גלה בריאות הוליסטית, הדרכה מקצועית וקהילה תומכת. הדרך שלך לבריאות ואושר מתחילה כאן.",
      heroBtn: "התחל את המסע שלך",
      whoWeAre: "מי אנחנו",
      aboutUs: "עלינו",
      whoWeAreDesc: "אנחנו צוות מקצועני בריאות מסור המחויב לשנות חיים באמצעות פתרונות בריאות הוליסטיים. המשימה שלנו היא להעצים אנשים להשיג רווחה מיטבית באמצעות טיפול אישי, הדרכה מקצועית ושיטות מבוססות ראיות.",
      learnMore: "למידע נוסף עלינו →",
      servicesTitle: "השירותים המובילים שלנו",
      services: [
        {
          title: "יוגה ומדיטציה",
          tagline: "איזון גוף ונפש עם מפגשים מודרכים.",
          details: "הצטרף לשיעורי יוגה ומדיטציה בהובלת מומחים לשיפור הגמישות, הפחתת מתחים ושיפור הרווחה הכללית שלך. מתאים לכל הרמות."
        },
        {
          title: "תזונה ודיאטה",
          tagline: "תוכניות תזונה מותאמות אישית למטרות שלך.",
          details: "קבל תוכניות ארוחות מותאמות אישית ועצות תזונה מדיאטנים מוסמכים. השג את מטרות הבריאות שלך עם הדרכה מדעית."
        },
        {
          title: "תוכניות כושר",
          tagline: "שגרות כושר מודרניות לכל הרמות.",
          details: "גש למגוון תוכניות כושר, מאימוני כוח ועד קרדיו, שנועדו לשמור על מוטיבציה וכושר."
        },
        {
          title: "טיפול בשינה",
          tagline: "שפר את איכות השינה בעזרת מומחים.",
          details: "התמודד עם בעיות שינה בעזרת מפגשי טיפול וטיפים ממומחים לשינה רגועה ומחדשת בכל לילה."
        }
      ],
      impactTitle: "סטודיו הבריאות הוא שותף אמין יותר שמקשיב לצרכים שלך",
      impactDesc: "אנחנו מעמיקים במסע הבריאות שלך כדי ליצור חוויה מודרנית ואישית שמשקפת את הזהות והמטרות שלך. הגישה המקיפה שלנו משלבת טכנולוגיית בריאות מתקדמת עם שיטות הוליסטיות מוכחות, כדי להבטיח שכל אחד יקבל הדרכה מותאמת אישית לצרכיו הייחודיים. מתוכניות תזונה אישיות ואימון כושר מקצועי ועד אימון מיינדפולנס וטכניקות ניהול מתחים.",
      impactMetrics: [
        "מפגשי בריאות שהושלמו עם טיפול אישי",
        "שיעור שביעות רצון לקוחות עם תוצאות מוכחות",
        "תמיכת מומחים זמינה למסע הבריאות שלך",
        "מאמני בריאות ותזונה מוסמכים"
      ],
      testimonialsTitle: "מה המשתמשים שלנו אומרים",
      testimonials: [
        {
          quote: "הפלטפורמה הזו שינתה את מסע הבריאות שלי. התוכניות האישיות והתמיכה הקהילתית ללא תחרות!",
          name: "אווה פאטל",
          role: "חובבת יוגה"
        },
        {
          quote: "אני אוהב את ההדרכה המקצועית ואת תוכניות הכושר הקלות. אני מרגיש בריא ובטוח יותר מאי פעם!",
          name: "ליאם צ'ן",
          role: "חבר כושר"
        },
        {
          quote: "עצות התזונה וטיפים לטיפול בשינה שיפרו מאוד את חיי היומיום שלי. מומלץ בחום!",
          name: "סופיה גרסיה",
          role: "מחפשת בריאות"
        }
      ],
      ctaTitle: "מוכן לשנות את חייך?",
      ctaDesc: "הצטרף לאלפי אנשים שכבר התחילו את מסע הבריאות שלהם איתנו. קבל הדרכה אישית, תמיכה מקצועית וקהילה שאכפת לה מההצלחה שלך.",
      ctaStart: "התחל היום",
      ctaLearn: "למידע נוסף"
    }
  };

  // RTL for Arabic/Hebrew
  const isRTL = language === 'Arabic' || language === 'Hebrew';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-[#f6fffd]'} ${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      <section className="w-full h-screen relative overflow-hidden flex flex-col items-center justify-center px-4 text-center">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={homeheroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-20 flex flex-col items-center justify-center">
          <h1 className={`text-6xl md:text-7xl font-extrabold text-white mb-8 drop-shadow transition-all duration-1000 ease-out`}>{translations[language].heroTitle}</h1>
          <p className={`text-2xl md:text-3xl text-white mb-12 max-w-2xl mx-auto`}>{translations[language].heroDesc}</p>
          <button className={`font-semibold px-12 py-5 rounded-full shadow text-xl ${isDarkMode ? 'bg-black text-white hover:bg-gray-800' : 'bg-[#26A0A2] text-white hover:bg-charcoal'}`}>{translations[language].heroBtn}</button>
        </div>
      </section>
      <section id="who-we-are" className="w-full py-20 px-4 bg-[#26A0A2]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="relative">
                <img src={whoweareImg} alt={translations[language].whoWeAre} className="w-full h-[500px] object-cover rounded-2xl shadow-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
            <div className="flex-1 lg:pl-8">
              <div className="mb-6">
                <span className="inline-block bg-white/20 text-white font-semibold px-4 py-2 rounded-full text-sm mb-4">{translations[language].aboutUs}</span>
                <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${isDarkMode ? 'text-black' : 'text-white'}`}>{translations[language].whoWeAre}</h2>
              </div>
              <p className="text-lg text-justify text-white/90 mb-8 leading-relaxed">{translations[language].whoWeAreDesc}</p>
              <button className={`font-semibold px-8 py-4 rounded-xl shadow-lg text-lg ${isDarkMode ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-[#26A0A2] hover:bg-gray-100'}`}>{translations[language].learnMore}</button>
            </div>
          </div>
        </div>
      </section>
      <section className={`w-full py-16 px-4 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}> {/* ServicesOverview */}
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center text-[#26A0A2] mb-10`}>{translations[language].servicesTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {translations[language].services.map((s, i) => (
              <div key={i} className={`relative group w-full h-[360px] bg-[#26A0A2] rounded-[10px] overflow-hidden shadow-md flex flex-col`}>
                <div className="w-full h-[250px] bg-cover bg-center" style={{ backgroundImage: `url(${[yogaImg, nutritionImg, fitnessImg, sleepImg][i]})` }} />
                <div className="flex-1 w-full min-h-[60px] flex items-center justify-center">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide text-center mt-2 group-hover:opacity-0 transition-opacity duration-300">{s.title}</h3>
                </div>
                <div className={`absolute inset-0 flex flex-col items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 ${isDarkMode ? 'bg-black' : 'bg-white'}`}> 
                  <h3 className={`text-xl md:text-2xl font-bold uppercase tracking-wide text-center mb-2 ${isDarkMode ? 'text-white' : 'text-[#26A0A2]'}`}>{s.title}</h3>
                  <p className={`text-lg text-justify md:text-xl mb-2 text-center font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{s.tagline}</p>
                  <p className={`text-base text-justify md:text-lg mb-2 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>{s.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-20 px-4 relative overflow-hidden"> {/* ImpactMetrics */}
        <video className="absolute inset-0 w-full h-full object-cover z-0" src={impactVideo} autoPlay loop muted playsInline />
        <div className="absolute inset-0 bg-[#26A0A2]/80 z-10"></div>
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 lg:pr-8">
              <h2 className="text-3xl md:text-4xl font-bold text-justify text-white mb-6 leading-tight">{translations[language].impactTitle}</h2>
              <p className="text-white text-lg text-justify leading-relaxed mb-8">{translations[language].impactDesc}</p>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-6">
                <div className={`rounded-2xl p-8 bg-white`}><div className="text-[#26A0A2] text-4xl font-bold mb-2">1000+</div><div className="text-sm text-gray-600">{translations[language].impactMetrics[0]}</div></div>
                <div className={`rounded-2xl p-8 bg-white`}><div className="text-[#26A0A2] text-4xl font-bold mb-2">95%</div><div className="text-sm text-gray-600">{translations[language].impactMetrics[1]}</div></div>
                <div className={`rounded-2xl p-8 bg-white`}><div className="text-[#26A0A2] text-4xl font-bold mb-2">24/7</div><div className="text-sm text-gray-600">{translations[language].impactMetrics[2]}</div></div>
                <div className={`rounded-2xl p-8 bg-white`}><div className="text-[#26A0A2] text-4xl font-bold mb-2">50+</div><div className="text-sm text-gray-600">{translations[language].impactMetrics[3]}</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`w-full py-16 px-4 flex flex-col items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}> {/* QuickTestimonialsPreview */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#26A0A2] mb-8 text-center">{translations[language].testimonialsTitle}</h2>
        <div className="max-w-3xl w-full mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center relative">
          {/* Arrows and carousel logic omitted for brevity, show first testimonial only */}
          <blockquote className="text-2xl md:text-3xl font-serif text-center text-[#222836] mb-8 leading-relaxed">"{translations[language].testimonials[0].quote}"</blockquote>
          <div className="flex items-center gap-4 mt-2">
            <img src={user1} alt={translations[language].testimonials[0].name} className="w-14 h-14 rounded-full object-cover border-2 border-[#26A0A2]" />
            <div className="text-left">
              <div className="text-[#26A0A2] font-bold uppercase text-sm tracking-wide">{translations[language].testimonials[0].name}</div>
              <div className="text-gray-500 text-xs italic">{translations[language].testimonials[0].role}</div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16 px-2 md:px-0 flex justify-center items-center relative overflow-hidden bg-[#2ad2bb]"> {/* CallToActionBanner */}
        <div className="max-w-7xl w-full relative flex flex-col lg:flex-row items-center justify-between gap-12 z-10">
          <div className="flex-1 flex flex-col justify-center text-left pl-8 lg:pl-12">
            <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 ${isDarkMode ? 'text-black' : 'text-white'}`}>{translations[language].ctaTitle}</h2>
            <p className="text-white/90 text-lg text-justify md:text-xl mb-8 leading-relaxed">{translations[language].ctaDesc}</p>
            <div className="flex gap-4 flex-wrap">
              <button className={`font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl focus:ring-4 focus:ring-white/40 transform transition-all duration-200 hover:-translate-y-1 hover:scale-105 ${isDarkMode ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-[#26A0A2] hover:bg-gray-100'}`}>{translations[language].ctaStart}</button>
              <button className={`font-semibold px-8 py-4 rounded-full border-2 shadow-lg focus:ring-4 focus:ring-white/40 transform transition-all duration-200 hover:-translate-y-1 hover:scale-105 ${isDarkMode ? 'bg-black text-white border-black hover:bg-gray-800' : 'bg-transparent text-white border-white hover:bg-white hover:text-[#26A0A2]'}`}>{translations[language].ctaLearn}</button>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img src={homectaImg} alt="Wellness Journey" className="w-full h-auto rounded-2xl shadow-2xl object-cover" style={{ aspectRatio: '16/9' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
