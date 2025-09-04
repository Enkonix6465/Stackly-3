import React, { useState, useEffect, useContext } from 'react';
import Header from '../../Header.jsx';
import AOS from 'aos';
import '../../aos-custom.css';
import lifestyleHeroVideo from '../../assets/lifehero.mp4';
import lifestyleBenefitsBg from '../../assets/lifebenefits.jpg';
import lifestyleSteps from '../../assets/lifesteps.jpg';
import lifestyleServe from '../../assets/lifeserves.jpg';
import { LanguageContext } from '../../LanguageContext';
import Footer from '../../footer.jsx';

const LifestyleCoaching = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const { language } = useContext(LanguageContext);
  const isRTL = language === 'Arabic' || language === 'Hebrew';
  const translations = {
    English: {
      heroTitle: "Discover Lifestyle Coaching",
      heroDesc: "Transform your life with personalized coaching and proven strategies for lasting positive change.",
      heroBtn: "Start Your Journey",
      keyBenefits: "Key Benefits",
      keyBenefitsDesc: "Transform your life with the proven benefits of lifestyle coaching and personal development",
      benefits: [
        "Improves overall life balance and well-being",
        "Enhances personal and professional relationships",
        "Increases productivity and goal achievement",
        "Promotes healthy habits and routines",
        "Supports stress management and resilience",
        "Boosts confidence and self-awareness"
      ],
      programsTitle: "Programs we serve",
      programs: [
        { title: "Life Balance Assessment", description: "Comprehensive evaluation of your current lifestyle and areas for improvement" },
        { title: "Goal Setting & Achievement", description: "Strategic planning and execution of personal and professional goals" },
        { title: "Stress Management Coaching", description: "Learn effective techniques to manage stress and build resilience" },
        { title: "Time Management Mastery", description: "Optimize your daily routines and maximize productivity" },
        { title: "Relationship Enhancement", description: "Improve communication and strengthen personal connections" },
        { title: "Habit Formation & Change", description: "Create lasting positive habits and break negative patterns" }
      ],
      howItWorksTitle: "How It Works",
      howItWorksDesc: "Get started with your lifestyle coaching journey in just a few simple steps",
      howItWorks: [
        "Complete a comprehensive lifestyle assessment",
        "Receive personalized coaching recommendations",
        "Access guided sessions and practical tools",
        "Practice new habits with expert guidance",
        "Track progress and celebrate achievements"
      ],
      featuresTitle: "Features Included",
      featuresDesc: "Everything you need for a complete lifestyle coaching experience",
      features: [
        "Personalized lifestyle coaching plans",
        "Progress tracking and accountability tools",
        "Guided meditation and mindfulness sessions",
        "Expert coaching consultation support"
      ],
      finalCtaTitle: "Start Your Lifestyle Coaching Journey Today",
      finalCtaDesc: "Get access to personalized lifestyle coaching and development tools to transform your life and achieve lasting positive change.",
      pricing: {
        basic: {
          title: "Basic",
          features: ["Basic lifestyle assessment", "Goal setting tools", "Mobile app access", "Weekly progress reports"],
          button: "Choose Basic"
        },
        premium: {
          title: "Premium",
          features: ["Everything in Basic", "Live coaching sessions", "Personalized coaching plans", "Expert consultation", "Priority support"],
          button: "Choose Premium"
        },
        pro: {
          title: "Pro",
          features: ["Everything in Premium", "1-on-1 coaching sessions", "Custom lifestyle plans", "Weekend retreats access", "VIP community access"],
          button: "Choose Pro"
        }
      }
    },
    Arabic: {
      heroTitle: "اكتشف تدريب أسلوب الحياة",
      heroDesc: "حوّل حياتك من خلال التدريب الشخصي واستراتيجيات مثبتة للتغيير الإيجابي الدائم.",
      heroBtn: "ابدأ رحلتك",
      keyBenefits: "الفوائد الرئيسية",
      keyBenefitsDesc: "حوّل حياتك بالفوائد المثبتة لتدريب أسلوب الحياة والتنمية الشخصية",
      benefits: [
        "تحسين التوازن العام والرفاهية",
        "تعزيز العلاقات الشخصية والمهنية",
        "زيادة الإنتاجية وتحقيق الأهداف",
        "تعزيز العادات الصحية والروتين",
        "دعم إدارة التوتر والمرونة",
        "تعزيز الثقة بالنفس والوعي الذاتي"
      ],
      programsTitle: "البرامج التي نقدمها",
      programs: [
        { title: "تقييم توازن الحياة", description: "تقييم شامل لأسلوب حياتك الحالي ومجالات التحسين" },
        { title: "تحديد الأهداف وتحقيقها", description: "تخطيط استراتيجي وتنفيذ الأهداف الشخصية والمهنية" },
        { title: "تدريب إدارة التوتر", description: "تعلم تقنيات فعالة لإدارة التوتر وبناء المرونة" },
        { title: "إتقان إدارة الوقت", description: "تحسين الروتين اليومي وزيادة الإنتاجية" },
        { title: "تعزيز العلاقات", description: "تحسين التواصل وتقوية الروابط الشخصية" },
        { title: "تكوين وتغيير العادات", description: "إنشاء عادات إيجابية دائمة وكسر الأنماط السلبية" }
      ],
      howItWorksTitle: "كيف يعمل",
      howItWorksDesc: "ابدأ رحلتك في تدريب أسلوب الحياة في خطوات بسيطة",
      howItWorks: [
        "أكمل تقييم شامل لأسلوب الحياة",
        "احصل على توصيات تدريب شخصية",
        "الوصول إلى جلسات وأدوات عملية",
        "مارس عادات جديدة بإرشاد الخبراء",
        "تتبع التقدم واحتفل بالإنجازات"
      ],
      featuresTitle: "المميزات المتوفرة",
      featuresDesc: "كل ما تحتاجه لتجربة تدريب أسلوب حياة متكاملة",
      features: [
        "خطط تدريب شخصية",
        "أدوات تتبع التقدم والمساءلة",
        "جلسات التأمل واليقظة الموجهة",
        "دعم استشاري من الخبراء"
      ],
      finalCtaTitle: "ابدأ رحلتك في تدريب أسلوب الحياة اليوم",
      finalCtaDesc: "احصل على تدريب شخصي وأدوات تطوير لتحويل حياتك وتحقيق تغيير إيجابي دائم.",
      pricing: {
        basic: {
          title: "أساسي",
          features: ["تقييم أسلوب الحياة الأساسي", "أدوات تحديد الأهداف", "الوصول إلى التطبيق", "تقارير التقدم الأسبوعية"],
          button: "اختر الأساسي"
        },
        premium: {
          title: "مميز",
          features: ["كل شيء في الأساسي", "جلسات تدريب مباشرة", "خطط تدريب شخصية", "استشارة الخبراء", "دعم أولوية"],
          button: "اختر المميز"
        },
        pro: {
          title: "احترافي",
          features: ["كل شيء في المميز", "جلسات تدريب فردية", "خطط أسلوب حياة مخصصة", "الوصول إلى الرحلات الأسبوعية", "الوصول إلى مجتمع VIP"],
          button: "اختر الاحترافي"
        }
      }
    },
    Hebrew: {
      heroTitle: "גלה אימון אורח חיים",
      heroDesc: "שנה את חייך עם אימון אישי ואסטרטגיות מוכחות לשינוי חיובי מתמשך.",
      heroBtn: "התחל את המסע שלך",
      keyBenefits: "יתרונות מרכזיים",
      keyBenefitsDesc: "שנה את חייך עם היתרונות המוכחים של אימון אורח חיים והתפתחות אישית",
      benefits: [
        "משפר איזון חיים ורווחה כללית",
        "משפר מערכות יחסים אישיות ומקצועיות",
        "מגביר פרודוקטיביות והשגת מטרות",
        "מעודד הרגלים בריאים ושגרה",
        "תומך בניהול לחץ וחוסן",
        "מגביר ביטחון עצמי ומודעות עצמית"
      ],
      programsTitle: "תוכניות שאנו מציעים",
      programs: [
        { title: "הערכת איזון חיים", description: "הערכה מקיפה של אורח החיים הנוכחי ותחומי שיפור" },
        { title: "הגדרת מטרות והשגתן", description: "תכנון אסטרטגי וביצוע מטרות אישיות ומקצועיות" },
        { title: "אימון ניהול לחץ", description: "למד טכניקות יעילות לניהול לחץ ובניית חוסן" },
        { title: "שליטה בניהול זמן", description: "שפר את שגרת היומיום והגבר פרודוקטיביות" },
        { title: "שיפור מערכות יחסים", description: "שפר תקשורת וחזק קשרים אישיים" },
        { title: "יצירת ושינוי הרגלים", description: "צור הרגלים חיוביים מתמשכים ושבור דפוסים שליליים" }
      ],
      howItWorksTitle: "איך זה עובד",
      howItWorksDesc: "התחל את מסע אימון אורח החיים שלך בכמה צעדים פשוטים",
      howItWorks: [
        "השלם הערכת אורח חיים מקיפה",
        "קבל המלצות אימון אישיות",
        "גש למפגשים וכלים מעשיים",
        "תרגל הרגלים חדשים בהדרכת מומחים",
        "עקוב אחר התקדמות וחגוג הישגים"
      ],
      featuresTitle: "תכונות כלולות",
      featuresDesc: "הכל שאתה צריך לחוויית אימון אורח חיים מלאה",
      features: [
        "תוכניות אימון אישיות",
        "כלי מעקב והתחייבות",
        "מפגשי מדיטציה ומיינדפולנס מודרכים",
        "תמיכה בייעוץ מומחים"
      ],
      finalCtaTitle: "התחל את מסע אימון אורח החיים שלך היום",
      finalCtaDesc: "קבל גישה לאימון אישי וכלי פיתוח לשינוי חיובי מתמשך.",
      pricing: {
        basic: {
          title: "בסיסי",
          features: ["הערכת אורח חיים בסיסית", "כלי הגדרת מטרות", "גישה לאפליקציה", "דוחות התקדמות שבועיים"],
          button: "בחר בסיסי"
        },
        premium: {
          title: "פרימיום",
          features: ["הכל בבסיסי", "מפגשי אימון חיים", "תוכניות אימון אישיות", "ייעוץ מומחים", "תמיכה בעדיפות"],
          button: "בחר פרימיום"
        },
        pro: {
          title: "מקצועי",
          features: ["הכל בפרימיום", "מפגשי אימון אישיים", "תוכניות אורח חיים מותאמות אישית", "גישה לריטריטים בסוף שבוע", "גישה לקהילת VIP"],
          button: "בחר מקצועי"
        }
      }
    }
  };

  // Add translation for 'month' and 'MOST POPULAR'
  const monthText = language === 'English' ? 'month' : language === 'Arabic' ? 'شهرياً' : 'חודש';
  const mostPopularText = language === 'English' ? 'MOST POPULAR' : language === 'Arabic' ? 'الأكثر شعبية' : 'הפופולרי ביותר';

  return (
    <div className={`min-h-screen w-full overflow-x-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} dir={isRTL ? 'rtl' : 'ltr'}>
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
          <source src={lifestyleHeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="relative z-10 text-center max-w-4xl px-4 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight text-center" data-aos="fade-up">
            {translations[language].heroTitle.split(' ').map((word, index) => (
              <span key={index} className={index === 1 ? 'text-teal-500' : ''}>
                {word}
                &nbsp;
              </span>
            ))}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            {translations[language].heroDesc}
          </p>
          <button className="bg-white text-[#26A0A2] font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:bg-gray-100 transition text-base sm:text-lg md:text-xl transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">
            {translations[language].heroBtn}
          </button>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className={`w-full text-justify py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
        <div className="max-w-7xl mx-auto w-full overflow-hidden">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200" data-aos-once="false">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              {translations[language].keyBenefits}
            </h2>
            <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {translations[language].keyBenefitsDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
            {/* Left Cards */}
            <div className="space-y-4 sm:space-y-6" data-aos="fade-right" data-aos-delay="300" data-aos-once="false">
              <div className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-once="false">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#26A0A2] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    {translations[language].benefits[4]}
                  </h3>
                </div>
                <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {language === 'English' ?
                    "Learn effective techniques to manage stress, build resilience, and maintain emotional well-being in all areas of life." :
                    language === 'Arabic' ?
                    "تعلم تقنيات فعالة لإدارة التوتر وبناء المرونة والحفاظ على الصحة النفسية في جميع مجالات الحياة." :
                    "למד טכניקות יעילות לניהול לחץ, בניית חוסן ושמירה על רווחה נפשית בכל תחומי החיים."
                  }
                </p>
              </div>
              <div className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-once="false">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#26A0A2] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    {translations[language].benefits[5]}
                  </h3>
                </div>
                <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {language === 'English' ?
                    "Develop deeper self-awareness, confidence, and understanding of your values, strengths, and areas for growth." :
                    language === 'Arabic' ?
                    "طور وعيًا ذاتيًا أعمق، وثقة بالنفس، وفهمًا لقيمك ونقاط قوتك ومجالات النمو." :
                    "פיתח מודעות עצמית עמוקה יותר, ביטחון עצמי והבנה של הערכים, החוזקות ותחומי הצמיחה שלך."
                  }
                </p>
              </div>
            </div>
            {/* Center Image and Title */}
            <div className="flex flex-col items-center text-center" data-aos="zoom-in" data-aos-delay="600" data-aos-once="false">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl mb-4 sm:mb-6">
                <img src={lifestyleBenefitsBg} alt="Lifestyle Coaching Benefits" className="w-full h-full object-cover" />
              </div>
              <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                {/* This can be translated if needed, or left as is for branding */}
              </h3>
              <p className={`text-lg max-w-md ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {/* Already covered by keyBenefitsDesc and benefits */}
              </p>
            </div>
            {/* Right Cards */}
            <div className="space-y-4 sm:space-y-6" data-aos="fade-left" data-aos-delay="300" data-aos-once="false">
              <div className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-once="false">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#26A0A2] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    {translations[language].benefits[0]}
                  </h3>
                </div>
                <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {language === 'English' ?
                    "Achieve harmony between work, relationships, health, and personal growth through strategic lifestyle planning and balanced living approaches." :
                    language === 'Arabic' ?
                    "حقق التوازن بين العمل والعلاقات والصحة والنمو الشخصي من خلال التخطيط الاستراتيجي لأسلوب الحياة ونهج العيش المتوازن." :
                    "השג איזון בין עבודה, מערכות יחסים, בריאות וצמיחה אישית באמצעות תכנון אסטרטגי של אורח חיים וגישה מאוזנת לחיים."
                  }
                </p>
              </div>
              <div className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                data-aos="fade-left"
                data-aos-delay="500"
                data-aos-once="false">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#26A0A2] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    {translations[language].benefits[1]}
                  </h3>
                </div>
                <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {language === 'English' ?
                    "Enhances personal and professional relationships." :
                    language === 'Arabic' ?
                    "تعزيز العلاقات الشخصية والمهنية." :
                    "משפר מערכות יחסים אישיות ומקצועיות."
                  }
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
            src={lifestyleServe} 
            alt="Lifestyle Coaching Programs Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#26A0A2] bg-opacity-70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full overflow-hidden">
          <div className="mb-12" data-aos="fade-up">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white`}>
              {translations[language].programsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {translations[language].programs.map((program, index) => (
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
                  {translations[language].howItWorksTitle}
                </h2>
                <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {translations[language].howItWorksDesc}
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                {translations[language].howItWorks.map((step, index) => (
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
                <button className="bg-[#26A0A2] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#20c997] transition-colors duration-300 transform hover:scale-105">
                  {translations[language].heroBtn}
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center lg:justify-end items-start" data-aos="fade-left" data-aos-once="false">
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="relative">
                  <img 
                    src={lifestyleSteps} 
                    alt="Lifestyle Coaching Steps" 
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
                  {translations[language].featuresTitle}
                </h2>
                <p className="text-lg sm:text-xl mb-8 text-white">
                  {translations[language].featuresDesc}
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-base leading-relaxed text-white">
                  {language === 'English' ?
                    "Our comprehensive lifestyle coaching platform provides you with all the tools and resources needed to transform your life and achieve lasting positive change. From personalized coaching to expert guidance, we've got everything covered." :
                    language === 'Arabic' ?
                    "منصتنا الشاملة لتدريب أسلوب الحياة توفر لك جميع الأدوات والموارد اللازمة لتحويل حياتك وتحقيق تغيير إيجابي دائم. من التدريب الشخصي إلى الإرشاد من الخبراء، لدينا كل شيء." :
                    "הפלטפורמה המקיפה שלנו לאימון אורח חיים מספקת לך את כל הכלים והמשאבים הדרושים לשינוי חיובי מתמשך. מאימון אישי ועד לייעוץ מומחים, הכל כלול."
                }</p>
                <p className="text-base leading-relaxed text-white">
                  {language === 'English' ?
                    "Whether you're looking to improve work-life balance, achieve your goals, manage stress, or enhance relationships, our features are designed to support your lifestyle transformation at every step, making positive change accessible and sustainable." :
                    language === 'Arabic' ?
                    "سواء كنت تسعى لتحسين توازن الحياة والعمل، أو تحقيق أهدافك، أو إدارة التوتر، أو تعزيز العلاقات، فإن ميزاتنا مصممة لدعم تحول أسلوب حياتك في كل خطوة، مما يجعل التغيير الإيجابي متاحًا ومستدامًا." :
                    "בין אם אתה רוצה לשפר את איזון החיים והעבודה, להשיג מטרות, לנהל לחץ או לשפר מערכות יחסים, התכונות שלנו נועדו לתמוך בשינוי אורח החיים שלך בכל שלב, ולהפוך שינוי חיובי לנגיש ובר קיימא."
                }</p>
                <p className="text-base leading-relaxed text-white">
                  {language === 'English' ?
                    "Our platform integrates proven coaching methodologies with modern technology, ensuring you have access to the best lifestyle improvement strategies. With real-time progress tracking and adaptive recommendations, your coaching journey becomes more effective and rewarding." :
                    language === 'Arabic' ?
                    "منصتنا تدمج منهجيات تدريب مثبتة مع التكنولوجيا الحديثة، مما يضمن لك الوصول إلى أفضل استراتيجيات تحسين أسلوب الحياة. مع تتبع التقدم في الوقت الفعلي والتوصيات التكيفية، تصبح رحلتك التدريبية أكثر فعالية ومكافأة." :
                    "הפלטפורמה שלנו משלבת שיטות אימון מוכחות עם טכנולוגיה מודרנית, ומבטיחה לך גישה לאסטרטגיות שיפור אורח חיים הטובות ביותר. עם מעקב התקדמות בזמן אמת והמלצות מותאמות, מסע האימון שלך הופך ליעיל ומתגמל יותר."
                }</p>
                <p className="text-base leading-relaxed text-white">
                  {language === 'English' ?
                    "Join thousands of users who have transformed their lives through our comprehensive approach. Experience the difference that personalized lifestyle coaching, expert guidance, and ongoing support can make in your personal and professional development." :
                    language === 'Arabic' ?
                    "انضم إلى آلاف المستخدمين الذين حولوا حياتهم من خلال نهجنا الشامل. اختبر الفرق الذي يمكن أن يحدثه التدريب الشخصي، والإرشاد من الخبراء، والدعم المستمر في تطويرك الشخصي والمهني." :
                    "הצטרף לאלפי משתמשים ששינו את חייהם באמצעות הגישה המקיפה שלנו. חווה את ההבדל שאימון אישי, ייעוץ מומחים ותמיכה מתמשכת יכולים לעשות בהתפתחות האישית והמקצועית שלך."
                }</p>
              </div>
            </div>
            {/* Right Side - Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" data-aos="fade-left" data-aos-once="false">
              {translations[language].features.map((feature, index) => (
                <div key={index}
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
                    {language === 'English' ?
                      `Access to ${feature.toLowerCase()} for enhanced lifestyle coaching experience and comprehensive support.` :
                      language === 'Arabic' ?
                      `الوصول إلى ${feature} لتجربة تدريب أسلوب حياة محسنة ودعم شامل.` :
                      `גישה ל${feature} לחוויית אימון אורח חיים משופרת ותמיכה מקיפה.`
                    }
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto text-center w-full overflow-hidden">
          <div className={`rounded-3xl p-8 sm:p-12 ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up">
            <h2 
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-once="false"
            >
              {translations[language].finalCtaTitle}
            </h2>
            <p 
              className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-white' : 'text-black'}`}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="false"
            >
              {translations[language].finalCtaDesc}
            </p>
            
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Basic Plan */}
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-[#26A0A2] transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{translations[language].pricing.basic.title}</h3>
                <div className="text-4xl font-bold text-[#26A0A2] mb-4">
                  ${'39'}<span className="text-lg text-gray-600">/{monthText}</span>
                </div>
                <ul className="text-left space-y-3 mb-6">
                  {translations[language].pricing.basic.features.map((feature, i) => (
                    <li key={i} className="flex items-center" data-aos="fade-right" data-aos-delay={250 + i * 50} data-aos-once="false">
                      <svg className="w-5 h-5 text-[#26A0A2] mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className="w-full bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300 transform hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay="450"
                  data-aos-once="false"
                >
                  {translations[language].pricing.basic.button}
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
                  {mostPopularText}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2" data-aos="fade-down" data-aos-delay="250" data-aos-once="false">{translations[language].pricing.premium.title}</h3>
                <div className="text-4xl font-bold text-white mb-4" data-aos="zoom-in" data-aos-delay="300" data-aos-once="false">
                  ${'79'}<span className="text-lg text-gray-100">/{monthText}</span>
                </div>
                <ul className="text-left space-y-3 mb-6 text-white">
                  {translations[language].pricing.premium.features.map((feature, i) => (
                    <li key={i} className="flex items-center" data-aos="fade-right" data-aos-delay={350 + i * 50} data-aos-once="false">
                      <svg className="w-5 h-5 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className="w-full bg-white text-[#26A0A2] font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  data-aos-once="false"
                >
                  {translations[language].pricing.premium.button}
                </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-[#26A0A2] transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-2" data-aos="fade-down" data-aos-delay="350" data-aos-once="false">{translations[language].pricing.pro.title}</h3>
                <div className="text-4xl font-bold text-[#26A0A2] mb-4" data-aos="zoom-in" data-aos-delay="400" data-aos-once="false">
                  ${'129'}<span className="text-lg text-gray-600">/{monthText}</span>
                </div>
                <ul className="text-left space-y-3 mb-6">
                  {translations[language].pricing.pro.features.map((feature, i) => (
                    <li key={i} className="flex items-center" data-aos="fade-right" data-aos-delay={450 + i * 50} data-aos-once="false">
                      <svg className="w-5 h-5 text-[#26A0A2] mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className="w-full bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300 transform hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay="700"
                  data-aos-once="false"
                >
                  {translations[language].pricing.pro.button}
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

export default LifestyleCoaching;