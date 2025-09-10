import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
import { LanguageContext } from "./LanguageContext";
export default function Header() {
  const { language, setLanguage } = useContext(LanguageContext);
  const isRTL = language === "Arabic" || language === "Hebrew";
  // Translations for navigation items
  const translations = {
    English: {
      home: "Home",
      home1: "Home1",
      home2: "Home2",
      about: "About Us",
      services: "Services",
      viewAll: "View All Services",
      yoga: "Yoga & Meditation",
      diet: "Diet & Nutrition",
      mental: "Mental Wellness",
      fitness: "Fitness Programs",
      sleep: "Sleep Therapy",
      lifestyle: "Lifestyle Coaching",
      blog: "Blog",
      contact: "Contact Us",
      languages: "Languages",
      userProfile: "User Profile",
      logout: "Logout"
    },
    Arabic: {
      home: "الصفحة الرئيسية",
      home1: "الصفحة 1",
      home2: "الصفحة 2",
      about: "معلومات عنا",
      services: "الخدمات",
      viewAll: "عرض جميع الخدمات",
      yoga: "اليوغا والتأمل",
      diet: "النظام الغذائي والتغذية",
      mental: "الصحة النفسية",
      fitness: "برامج اللياقة البدنية",
      sleep: "علاج النوم",
      lifestyle: "تدريب أسلوب الحياة",
      blog: "مدونة",
      contact: "اتصل بنا",
      languages: "اللغات",
      userProfile: "ملف المستخدم",
      logout: "تسجيل الخروج"
    },
    Hebrew: {
      home: "בית",
      home1: "בית 1",
      home2: "בית 2",
      about: "אודותינו",
      services: "שירותים",
      viewAll: "הצג את כל השירותים",
      yoga: "יוגה ומדיטציה",
      diet: "דיאטה ותזונה",
      mental: "בריאות נפשית",
      fitness: "תוכניות כושר",
      sleep: "טיפול שינה",
      lifestyle: "אימון אורח חיים",
      blog: "בלוג",
      contact: "צור קשר",
      languages: "שפות",
      userProfile: "פרופיל משתמש",
      logout: "התנתק"
    }
  };
  const t = translations[language];
  const navigate = useNavigate();
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [initials, setInitials] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(darkMode);
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    let initials = '';
    if (user) {
      if (user.name) {
        const parts = user.name.trim().split(' ');
        if (parts.length >= 2) {
          initials = parts[0][0].toUpperCase() + parts[1][0].toUpperCase();
        } else if (parts.length === 1) {
          initials = parts[0][0].toUpperCase();
        }
      } else if (user.email) {
        const emailParts = user.email.split('@')[0].split('.');
        if (emailParts.length >= 2) {
          initials = emailParts[0][0].toUpperCase() + emailParts[1][0].toUpperCase();
        } else {
          initials = user.email[0].toUpperCase();
        }
      }
    }
    setInitials(initials);
  }, []);

  // Language options for dropdown
  const languageOptions = [
    { code: "English", label: "English" },
    { code: "Arabic", label: "العربية" },
    { code: "Hebrew", label: "עברית" }
  ];

  // Responsive header style
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full shadow-md transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}
      dir={isRTL ? "rtl" : "ltr"}
      style={{ minHeight: '72px', height: '72px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2 flex items-center justify-between" style={{ width: '100%' }}>
        {/* Logo */}
        <Link to="/home1" className="flex items-center">
          <img
            src={logo}
            alt="Stackly Logo"
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            style={{ minWidth: 48, minHeight: 48 }}
          />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <div className="relative">
            <button
              className={`text-lg font-semibold hover:text-teal-400 flex items-center gap-1 focus:outline-none transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-black'}`}
              onClick={() => setHomeDropdown((open) => !open)}
            >
              {t.home}
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {homeDropdown && (
              <div className={`absolute left-0 mt-2 w-48 border rounded shadow-lg z-50 ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'}`}>
                <Link to="/home1" className={`block px-4 py-3 text-base hover:bg-teal-50 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-100'}`} onClick={() => setHomeDropdown(false)}>{t.home1}</Link>
                <Link to="/home2" className={`block px-4 py-3 text-base hover:bg-teal-50 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-100'}`} onClick={() => setHomeDropdown(false)}>{t.home2}</Link>
              </div>
            )}
          </div>
          <Link to="/about" className={`text-lg font-semibold hover:text-teal-400 transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-black'}`}>{t.about}</Link>
          <div className="relative">
            <button
              className={`text-lg font-semibold hover:text-teal-400 flex items-center gap-1 focus:outline-none transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-black'}`}
              onClick={() => setServicesDropdown((open) => !open)}
            >
              {t.services}
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {servicesDropdown && (
              <div className={`absolute left-0 mt-2 w-56 border rounded shadow-lg z-50 ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'}`}>
                <Link to="/services" className={`block px-4 py-3 text-base hover:bg-teal-50 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-100'}`}>{t.viewAll}</Link>
                <Link to="/yoga" className={`block px-4 py-3 text-base hover:bg-teal-50 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-100'}`}>{t.yoga}</Link>
                <Link to="/diet-nutrition" className={`block px-4 py-3 text-base hover:bg-teal-50 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-100'}`}>{t.diet}</Link>
                <Link to="/mental-wellness" className={`block px-4 py-3 text-base hover:bg-teal-50 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-100'}`}>{t.mental}</Link>
                <Link to="/fitness-programs" className={`block px-4 py-3 text-base hover:bg-teal-50 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-100'}`}>{t.fitness}</Link>
                <Link to="/sleep-therapy" className={`block px-4 py-3 text-base hover:bg-teal-50 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-100'}`}>{t.sleep}</Link>
                <Link to="/lifestyle-coaching" className={`block px-4 py-3 text-base hover:bg-teal-50 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-100'}`}>{t.lifestyle}</Link>
              </div>
            )}
          </div>
          <Link to="/blog" className={`text-lg font-semibold hover:text-teal-400 transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-black'}`}>{t.blog}</Link>
          <Link to="/contact" className={`text-lg font-semibold hover:text-teal-400 transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-black'}`}>{t.contact}</Link>
        </nav>
        {/* Right Side: Toggles */}
        <div className="flex items-center space-x-2">
          {/* Language Toggle */}
          <div className="relative">
            <button
              className={`p-2 rounded-lg flex items-center justify-center transition-colors duration-200 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
              onClick={() => setLanguageDropdown((open) => !open)}
              aria-label="Select language"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
              </svg>
            </button>
            {languageDropdown && (
              <div className={`absolute right-0 mt-2 w-40 border rounded shadow-lg z-50 ${isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'}`}>
                {languageOptions.map(opt => (
                  <button
                    key={opt.code}
                    className={`block w-full text-left px-4 py-3 text-base hover:bg-teal-50 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-black hover:bg-gray-100'}`}
                    onClick={() => { setLanguage(opt.code); setLanguageDropdown(false); }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-lg transition-colors duration-200 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? (
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          {/* User Avatar */}
          <div className="w-10 h-10 bg-[#26A0A2] rounded-full flex items-center justify-center text-white font-bold text-base cursor-pointer hover:bg-[#1f8a8c] transition-colors duration-200">
            {initials}
          </div>
        </div>
        {/* Hamburger for mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`ml-2 p-2 rounded-lg transition-colors duration-200 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
            aria-label="Toggle mobile menu"
          >
            <svg className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-gray-600'} ${isMobileMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden border-t ${isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'}`}>
          <div className="px-4 py-6 flex flex-col space-y-2">
            <Link to="/home1" className="block py-2 text-teal-600 font-semibold" onClick={() => setIsMobileMenuOpen(false)}>{t.home1}</Link>
            <Link to="/home2" className="block py-2 text-teal-600 font-semibold" onClick={() => setIsMobileMenuOpen(false)}>{t.home2}</Link>
            <Link to="/about" className="block py-2 text-teal-600 font-semibold" onClick={() => setIsMobileMenuOpen(false)}>{t.about}</Link>
            <Link to="/services" className="block py-2 text-teal-600 font-semibold" onClick={() => setIsMobileMenuOpen(false)}>{t.services}</Link>
            <Link to="/blog" className="block py-2 text-teal-600 font-semibold" onClick={() => setIsMobileMenuOpen(false)}>{t.blog}</Link>
            <Link to="/contact" className="block py-2 text-teal-600 font-semibold" onClick={() => setIsMobileMenuOpen(false)}>{t.contact}</Link>
            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
              {languageOptions.map(opt => (
                <button
                  key={opt.code}
                  className={`block w-full text-left py-2 px-4 rounded-lg transition-colors duration-200 ${isDarkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`}
                  onClick={() => { setLanguage(opt.code); setIsMobileMenuOpen(false); }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
