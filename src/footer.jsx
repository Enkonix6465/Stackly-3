import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp, FaSpa, FaAppleAlt, FaBrain, FaDumbbell, FaBed, FaUserTie } from "react-icons/fa";
import { LanguageContext } from "./LanguageContext";
import logo from "./assets/logo.png";


const translations = {
  English: {
    brand: "HealthSite",
    tagline: "Empowering Your Wellness Journey",
    quickLinks: "Quick Links",
    home: "Home",
    about: "About Us",
    blog: "Blog",
    contact: "Contact Us",
    services: "Services",
    explore: "Explore Services",
    yoga: "Yoga & Meditation",
    diet: "Diet & Nutrition",
    mental: "Mental Wellness",
    fitness: "Fitness Programs",
    sleep: "Sleep Therapy",
    lifestyle: "Lifestyle Coaching",
    contactTitle: "Contact Information",
    address: "Address:",
    addressVal: "Located in the heart of Manhattan. Schedule an in-person consultation at our state-of-the-art wellness facility with certified health coaches.",
    phone: "Phone:",
    phoneVal: "(+1) 555-123-4567",
    email: "Email:",
    hours: "Hours:",
    hoursVal: "Mon-Fri 9:00 AM - 6:00 PM",
    follow: "Follow Us",
    newsletter: "Newsletter Signup",
    newsletterDesc: "Subscribe to get the latest wellness tips and updates.",
    subscribe: "Subscribe",
    thanks: "Thank you for subscribing!",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    disclaimer: "Disclaimer",
    copyright: "© 2025 HealthSite. All rights reserved."
  },
  Arabic: {
    brand: "موقع الصحة",
    tagline: "تمكين رحلتك الصحية",
    quickLinks: "روابط سريعة",
    home: "الرئيسية",
    about: "معلومات عنا",
    blog: "مدونة",
    contact: "اتصل بنا",
    services: "الخدمات",
    explore: "استكشاف الخدمات",
    yoga: "اليوغا والتأمل",
    diet: "النظام الغذائي والتغذية",
    mental: "الصحة النفسية",
    fitness: "برامج اللياقة",
    sleep: "علاج النوم",
    lifestyle: "تدريب أسلوب الحياة",
    contactTitle: "معلومات الاتصال",
    address: "العنوان:",
    addressVal: "123 شارع الصحة، مدينة الصحة، الدولة",
    phone: "الهاتف:",
    phoneVal: "+1 234 567 890",
    email: "البريد الإلكتروني:",
    hours: "ساعات العمل:",
    hoursVal: "الاثنين-الجمعة 9ص-6م",
    follow: "تابعنا",
    newsletter: "الاشتراك في النشرة",
    newsletterDesc: "اشترك للحصول على أحدث نصائح الصحة والتحديثات.",
    subscribe: "اشترك",
    thanks: "شكرًا لاشتراكك!",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    disclaimer: "إخلاء المسؤولية",
    copyright: "© 2025 موقع الصحة. جميع الحقوق محفوظة."
  },
  Hebrew: {
    brand: "אתר הבריאות",
    tagline: "להעצים את מסע הבריאות שלך",
    quickLinks: "קישורים מהירים",
    home: "בית",
    about: "אודותינו",
    blog: "בלוג",
    contact: "צור קשר",
    services: "שירותים",
    explore: "חקור שירותים",
    yoga: "יוגה ומדיטציה",
    diet: "תזונה ודיאטה",
    mental: "בריאות נפשית",
    fitness: "תוכניות כושר",
    sleep: "טיפול שינה",
    lifestyle: "אימון אורח חיים",
    contactTitle: "פרטי קשר",
    address: "כתובת:",
    addressVal: "123 רחוב הבריאות, עיר הבריאות, מדינה",
    phone: "טלפון:",
    phoneVal: "+1 234 567 890",
    email: "אימייל:",
    hours: "שעות פעילות:",
    hoursVal: "ב'-ו' 9:00-18:00",
    follow: "עקוב אחרינו",
    newsletter: "הרשמה לניוזלטר",
    newsletterDesc: "הירשם לקבלת טיפים ועדכונים אחרונים.",
    subscribe: "הירשם",
    thanks: "תודה שנרשמת!",
    privacy: "מדיניות פרטיות",
    terms: "תנאי שירות",
    disclaimer: "הצהרה",
    copyright: "© 2025 אתר הבריאות. כל הזכויות שמורות."
  }
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { language } = useContext(LanguageContext);
  // Get translations
  const t = translations[language];

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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 pb-8 items-start">
        {/* Brand & Tagline - Make it aligned with other columns */}
        <div className="flex flex-col items-start space-y-3">
          <img src={logo} alt="Logo" className="h-32 w-32 object-contain mb-2" />
          <span className="font-bold text-lg text-green-700">{t.brand}</span>
          <span className="text-sm text-white">{t.tagline}</span>
        </div>
        {/* Quick Navigation */}
        <div className="flex flex-col items-start">
          <h3 className="font-semibold mb-3 text-[#26A0A2]">{t.quickLinks}</h3>
          <ul className="space-y-2">
            <li><Link to="/home1" className="hover:text-blue-600">{t.home}</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">{t.about}</Link></li>
            <li><Link to="/blog" className="hover:text-blue-600">{t.blog}</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">{t.contact}</Link></li>
            <li><Link to="/services" className="hover:text-blue-600">{t.services}</Link></li>
          </ul>
        </div>
        {/* Explore Services */}
        <div className="flex flex-col items-start">
          <h3 className="font-semibold mb-3 text-[#26A0A2]">{t.explore}</h3>
          <ul className="space-y-2">
            <li><Link to="/yoga" className="hover:text-blue-600">{t.yoga}</Link></li>
            <li><Link to="/diet-nutrition" className="hover:text-blue-600">{t.diet}</Link></li>
            <li><Link to="/mental-wellness" className="hover:text-blue-600">{t.mental}</Link></li>
            <li><Link to="/fitness-programs" className="hover:text-blue-600">{t.fitness}</Link></li>
            <li><Link to="/sleep-therapy" className="hover:text-blue-600">{t.sleep}</Link></li>
            <li><Link to="/lifestyle-coaching" className="hover:text-blue-600">{t.lifestyle}</Link></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col items-start">
          <h3 className="font-semibold mb-3 text-[#26A0A2]">{t.contactTitle}</h3>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium">{t.address}</span> {t.addressVal}</li>
            <li><span className="font-medium">{t.phone}</span> {t.phoneVal}</li>
            <li><span className="font-medium">{t.email}</span> <a href="mailto:hello@wellness.com" className="hover:text-blue-600">hello@wellness.com</a></li>
            <li><span className="font-medium">{t.hours}</span> {t.hoursVal}</li>
          </ul>
          {/* Social Media Icons */}
          <div className="mt-4">
            <h4 className="font-medium mb-2 text-sm text-[#26A0A2]">{t.follow}</h4>
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
        <div className="flex flex-col items-start">
          <h3 className="font-semibold mb-3 text-[#26A0A2]">{t.newsletter}</h3>
          <p className="text-sm mb-2">{t.newsletterDesc}</p>
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
              {t.subscribe}
            </button>
          </form>
          {subscribed && (
            <div className="mt-2 text-green-600 text-sm font-semibold">{t.thanks}</div>
          )}
        </div>
      </div>
      {/* Legal Links */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center border-t border-gray-100 pt-4 gap-4">
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="#" className="hover:text-blue-600">{t.privacy}</a>
          <a href="#" className="hover:text-blue-600">{t.terms}</a>
          <a href="#" className="hover:text-blue-600">{t.disclaimer}</a>
        </div>
      </div>
      {/* Copyright */}
      <div className="max-w-7xl mx-auto text-center text-xs text-gray-400 pt-4">
        {t.copyright}
      </div>
    </footer>
  );
}
