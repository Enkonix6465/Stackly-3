import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';
import Header from '../../Header.jsx';
import AOS from 'aos';
import '../../aos-custom.css';
import yogaHeroVideo from '../../assets/yogahero.mp4';
import yogaBenefitsBg from '../../assets/yogabenefits.png';
import yogaSteps from '../../assets/yogasteps.png';
import Footer from '../../footer.jsx';


const translations = {
  English: {
    heroTitle: "Discover Yoga & Meditation",
    heroDesc: "Discover peace, flexibility, and mindfulness with guided Yoga & Meditation sessions for all levels.",
    startJourney: "Start Your Journey",
    keyBenefits: "Key Benefits",
    keyBenefitsDesc: "Transform your life with the proven benefits of regular yoga and meditation practice",
    benefits: [
      { title: "Improves Flexibility", desc: "Enhance your range of motion and posture through targeted yoga poses and stretching exercises designed for all fitness levels." },
      { title: "Reduces Anxiety", desc: "Find inner peace and calm through guided meditation techniques that help manage stress and promote mental well-being." },
      { title: "Better Sleep", desc: "Improve your sleep quality with relaxation techniques and breathing exercises that prepare your mind and body for restful sleep." },
      { title: "Boosts Energy", desc: "Increase your vitality and productivity through energizing yoga sequences and mindfulness practices that revitalize your body." }
    ],
    transformTitle: "Transform Your Life",
    transformDesc: "Experience the profound benefits of yoga and meditation that will enhance your physical, mental, and spiritual well-being.",
    programsTitle: "Programs we serve",
    programs: [
      { title: "Morning Yoga Flow", desc: "Start your day with energizing poses and mindful breathing" },
      { title: "Guided Meditation Series", desc: "Find inner peace through structured meditation practices" },
      { title: "Power Yoga Sessions", desc: "Build strength and endurance with dynamic sequences" },
      { title: "Chair Yoga for Beginners", desc: "Gentle yoga accessible to everyone, regardless of mobility" },
      { title: "Weekend Deep Relaxation Retreats", desc: "Immerse yourself in complete wellness experiences" },
      { title: "Breathing Techniques Practice", desc: "Master the art of conscious breathing for better health" }
    ],
    howItWorksTitle: "How It Works",
    howItWorksDesc: "Get started with your wellness journey in just a few simple steps",
    howItWorks: [
      "Choose the program that fits your lifestyle",
      "Register and pick your preferred time",
      "Access sessions online or through our app",
      "Follow your routine with expert guidance",
      "Track progress and adjust as needed"
    ],
    featuresTitle: "Features Included",
    featuresDesc: "Everything you need for a complete wellness experience",
    features: [
      { title: "Access to our mobile app", desc: "Easily track your progress and join sessions from anywhere using our dedicated mobile app." },
      { title: "Customizable daily routines", desc: "Personalize your wellness schedule to fit your lifestyle and goals." },
      { title: "On-demand video and audio sessions", desc: "Access a library of guided yoga and meditation sessions anytime." },
      { title: "Printable wellness guides", desc: "Download and print expert wellness guides for offline use." }
    ],
    finalCTATitle: "Start Your Wellness Journey Today",
    finalCTADesc: "Get access to personalized programs and wellness tools to improve your mind and body.",
    plans: [
      {
        name: "Basic",
        price: "$29/month",
        features: ["Access to basic yoga sessions", "Guided meditation library", "Mobile app access", "Weekly progress reports"]
      },
      {
        name: "Premium",
        price: "$59/month",
        features: ["Everything in Basic", "Live group classes", "Personalized routines", "Expert consultation", "Priority support"]
      },
      {
        name: "Pro",
        price: "$99/month",
        features: ["Everything in Premium", "1-on-1 coaching sessions", "Custom meal plans", "Weekend retreats access", "VIP community access"]
      }
    ],
    choose: "Choose"
  },
  Arabic: {
    heroTitle: "اكتشف اليوغا والتأمل",
    heroDesc: "اكتشف السلام والمرونة واليقظة الذهنية مع جلسات اليوغا والتأمل الموجهة لجميع المستويات.",
    startJourney: "ابدأ رحلتك",
    keyBenefits: "الفوائد الرئيسية",
    keyBenefitsDesc: "حوّل حياتك بالفوائد المثبتة لممارسة اليوغا والتأمل بانتظام",
    benefits: [
      { title: "تحسين المرونة", desc: "عزز نطاق حركتك ووضعيتك من خلال تمارين اليوغا والتمدد المصممة لجميع مستويات اللياقة." },
      { title: "تقليل القلق", desc: "ابحث عن السلام الداخلي والهدوء من خلال تقنيات التأمل الموجهة التي تساعد في إدارة التوتر وتعزيز الصحة النفسية." },
      { title: "نوم أفضل", desc: "حسّن جودة نومك من خلال تقنيات الاسترخاء وتمارين التنفس التي تهيئ عقلك وجسمك لنوم مريح." },
      { title: "زيادة الطاقة", desc: "زد من حيويتك وإنتاجيتك من خلال تسلسلات اليوغا النشطة وممارسات اليقظة الذهنية التي تنشط جسمك." }
    ],
    transformTitle: "حوّل حياتك",
    transformDesc: "اختبر الفوائد العميقة لليوغا والتأمل التي ستعزز صحتك الجسدية والنفسية والروحية.",
    programsTitle: "البرامج التي نقدمها",
    programs: [
      { title: "تدفق اليوغا الصباحية", desc: "ابدأ يومك بوضعيات نشطة وتنفس واعٍ" },
      { title: "سلسلة التأمل الموجه", desc: "ابحث عن السلام الداخلي من خلال ممارسات التأمل المنظمة" },
      { title: "جلسات اليوغا القوية", desc: "ابنِ القوة والقدرة على التحمل من خلال تسلسلات ديناميكية" },
      { title: "يوغا الكرسي للمبتدئين", desc: "يوغا لطيفة متاحة للجميع بغض النظر عن القدرة الحركية" },
      { title: "عطلات الاسترخاء العميق في نهاية الأسبوع", desc: "انغمس في تجارب العافية الكاملة" },
      { title: "تمارين تقنيات التنفس", desc: "أتقن فن التنفس الواعي لصحة أفضل" }
    ],
    howItWorksTitle: "كيف تعمل",
    howItWorksDesc: "ابدأ رحلتك الصحية في خطوات بسيطة",
    howItWorks: [
      "اختر البرنامج المناسب لنمط حياتك",
      "سجل واختر الوقت المفضل لديك",
      "الوصول إلى الجلسات عبر الإنترنت أو التطبيق",
      "اتبع روتينك مع إرشاد الخبراء",
      "تتبع التقدم وعدّل حسب الحاجة"
    ],
    featuresTitle: "الميزات المتوفرة",
    featuresDesc: "كل ما تحتاجه لتجربة عافية متكاملة",
    features: [
      { title: "الوصول إلى تطبيقنا المحمول", desc: "تتبع تقدمك بسهولة وانضم إلى الجلسات من أي مكان باستخدام تطبيقنا المخصص للهاتف المحمول." },
      { title: "روتينات يومية قابلة للتخصيص", desc: "خصص جدول العافية الخاص بك ليناسب نمط حياتك وأهدافك الشخصية." },
      { title: "جلسات فيديو وصوت حسب الطلب", desc: "احصل على مكتبة من جلسات اليوغا والتأمل الموجهة في أي وقت." },
      { title: "أدلة عافية قابلة للطباعة", desc: "قم بتنزيل وطباعة أدلة العافية من خبرائنا للاستخدام دون اتصال." }
    ],
    finalCTATitle: "ابدأ رحلتك الصحية اليوم",
    finalCTADesc: "احصل على برامج مخصصة وأدوات عافية لتحسين عقلك وجسمك.",
    plans: [
      {
        name: "أساسي",
        price: "$29/شهر",
        features: ["الوصول إلى جلسات اليوغا الأساسية", "مكتبة التأمل الموجه", "الوصول إلى التطبيق المحمول", "تقارير التقدم الأسبوعية"]
      },
      {
        name: "مميز",
        price: "$59/شهر",
        features: ["كل شيء في الأساسي", "دروس جماعية مباشرة", "روتينات مخصصة", "استشارة الخبراء", "دعم أولوية"]
      },
      {
        name: "احترافي",
        price: "$99/شهر",
        features: ["كل شيء في المميز", "جلسات تدريب فردية", "خطط وجبات مخصصة", "الوصول إلى عطلات نهاية الأسبوع", "الوصول إلى مجتمع VIP"]
      }
    ],
    choose: "اختر"
  },
  Hebrew: {
    heroTitle: "גלה יוגה ומדיטציה",
    heroDesc: "גלה שלווה, גמישות ומיינדפולנס עם מפגשי יוגה ומדיטציה מודרכים לכל הרמות.",
    startJourney: "התחל את המסע שלך",
    keyBenefits: "יתרונות עיקריים",
    keyBenefitsDesc: "שנה את חייך עם היתרונות המוכחים של תרגול יוגה ומדיטציה קבוע",
    benefits: [
      { title: "משפר גמישות", desc: "שפר את טווח התנועה והיציבה שלך באמצעות תנוחות יוגה ותרגילי מתיחה מותאמים לכל רמות הכושר." },
      { title: "מפחית חרדה", desc: "מצא שלווה ורוגע פנימי באמצעות טכניקות מדיטציה מודרכות המסייעות בניהול לחץ ובריאות נפשית." },
      { title: "שינה טובה יותר", desc: "שפר את איכות השינה שלך עם טכניקות הרפיה ותרגילי נשימה שמכינים את הגוף והנפש לשינה רגועה." },
      { title: "מגביר אנרגיה", desc: "הגבר את החיוניות והפרודוקטיביות שלך באמצעות רצפי יוגה אנרגטיים ותרגולי מיינדפולנס שמחדשים את הגוף." }
    ],
    transformTitle: "שנה את חייך",
    transformDesc: "חווה את היתרונות העמוקים של יוגה ומדיטציה שישפרו את בריאותך הפיזית, הנפשית והרוחנית.",
    programsTitle: "תוכניות שאנו מציעים",
    programs: [
      { title: "יוגה בוקר", desc: "התחל את היום עם תנוחות אנרגטיות ונשימה מודעת" },
      { title: "סדרת מדיטציה מודרכת", desc: "מצא שלווה פנימית באמצעות תרגולי מדיטציה מובנים" },
      { title: "יוגה עוצמתית", desc: "בנה כוח וסיבולת עם רצפים דינמיים" },
      { title: "יוגה בכיסא למתחילים", desc: "יוגה עדינה נגישה לכולם, ללא קשר לניידות" },
      { title: "ריטריטים להרפיה עמוקה בסופי שבוע", desc: "היכנס לחוויות בריאות שלמות" },
      { title: "תרגול טכניקות נשימה", desc: "שלוט באמנות הנשימה המודעת לבריאות טובה יותר" }
    ],
    howItWorksTitle: "איך זה עובד",
    howItWorksDesc: "התחל את מסע הבריאות שלך בכמה צעדים פשוטים",
    howItWorks: [
      "בחר את התוכנית שמתאימה לאורח החיים שלך",
      "הירשם ובחר את הזמן המועדף עליך",
      "גש למפגשים אונליין או דרך האפליקציה",
      "עקוב אחרי השגרה שלך עם הדרכת מומחים",
      "עקוב אחרי ההתקדמות והתאם לפי הצורך"
    ],
    featuresTitle: "תכונות כלולות",
    featuresDesc: "הכל שצריך לחוויית בריאות שלמה",
    features: [
      { title: "גישה לאפליקציה שלנו", desc: "עקוב בקלות אחרי ההתקדמות שלך והצטרף למפגשים מכל מקום עם אפליקציית המובייל שלנו." },
      { title: "שגרות יומיות מותאמות אישית", desc: "התאם אישית את לוח הזמנים לבריאות שלך כך שיתאים לאורח החיים והמטרות שלך." },
      { title: "מפגשי וידאו ואודיו לפי דרישה", desc: "קבל גישה לספריית מפגשי יוגה ומדיטציה מודרכים בכל עת." },
      { title: "מדריכי בריאות להדפסה", desc: "הורד והדפס מדריכי בריאות מקצועיים לשימוש לא מקוון." }
    ],
    finalCTATitle: "התחל את מסע הבריאות שלך היום",
    finalCTADesc: "קבל גישה לתוכניות מותאמות אישית וכלי בריאות לשיפור הגוף והנפש.",
    plans: [
      {
        name: "בסיסי",
        price: "$29/חודש",
        features: ["גישה למפגשי יוגה בסיסיים", "ספריית מדיטציה מודרכת", "גישה לאפליקציה", "דוחות התקדמות שבועיים"]
      },
      {
        name: "פרימיום",
        price: "$59/חודש",
        features: ["הכל בבסיסי", "שיעורים קבוצתיים חיים", "שגרות מותאמות אישית", "ייעוץ מומחים", "תמיכה בעדיפות"]
      },
      {
        name: "מקצועי",
        price: "$99/חודש",
        features: ["הכל בפרימיום", "מפגשי אימון אישיים", "תוכניות ארוחות מותאמות", "גישה לריטריטים בסופי שבוע", "גישה לקהילת VIP"]
      }
    ],
    choose: "בחר"
  }
};

const YogaMeditation = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'Arabic' || language === 'Hebrew';

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
  }, []);

  const benefits = [
    "Improves flexibility and posture",
    "Helps reduce anxiety and stress",
    "Enhances mental clarity and focus",
    "Promotes better sleep quality",
    "Supports emotional balance",
    "Boosts energy and productivity"
  ];

  const programs = [
    {
      title: "Morning Yoga Flow",
      description: "Start your day with energizing poses and mindful breathing"
    },
    {
      title: "Guided Meditation Series",
      description: "Find inner peace through structured meditation practices"
    },
    {
      title: "Power Yoga Sessions",
      description: "Build strength and endurance with dynamic sequences"
    },
    {
      title: "Chair Yoga for Beginners",
      description: "Gentle yoga accessible to everyone, regardless of mobility"
    },
    {
      title: "Weekend Deep Relaxation Retreats",
      description: "Immerse yourself in complete wellness experiences"
    },
    {
      title: "Breathing Techniques Practice",
      description: "Master the art of conscious breathing for better health"
    }
  ];

  const howItWorks = [
    "Choose the program that fits your lifestyle",
    "Register and pick your preferred time",
    "Access sessions online or through our app",
    "Follow your routine with expert guidance",
    "Track progress and adjust as needed"
  ];

  const features = [
    "Access to our mobile app",
    "Customizable daily routines",
    "On-demand video and audio sessions",
    "Printable wellness guides"
  ];

  return (
    <div className={`min-h-screen w-full overflow-x-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
  <Header />
  {/* Hero Section */}
  <section className="w-full h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden max-w-full" dir={isRTL ? "rtl" : "ltr"}>
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={yogaHeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="relative z-10 text-center max-w-4xl px-4 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight text-center" data-aos="fade-up">
            {translations[language].heroTitle}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            {translations[language].heroDesc}
          </p>
          <button 
            onClick={scrollToBenefits}
            className="bg-white text-[#26A0A2] font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:bg-gray-100 transition text-base sm:text-lg md:text-xl transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">
            {translations[language].startJourney}
          </button>
        </div>
      </section>

      {/* Key Benefits Section */}
  <section id="key-benefits" className={`w-full text-justify py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`} dir={isRTL ? "rtl" : "ltr"} data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
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
              {translations[language].benefits.slice(0,2).map((benefit, idx) => (
                <div 
                  key={benefit.title}
                  className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                  data-aos="fade-right"
                  data-aos-delay={400 + idx*100}
                  data-aos-once="false"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#26A0A2] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                      {benefit.title}
                    </h3>
                  </div>
                  <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="flex flex-col items-center text-center" data-aos="zoom-in" data-aos-delay="600" data-aos-once="false">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl mb-4 sm:mb-6">
                <img 
                  src={yogaBenefitsBg} 
                  alt="Yoga Benefits" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                {translations[language].transformTitle}
              </h3>
              <p className={`text-lg max-w-md ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {translations[language].transformDesc}
              </p>
            </div>

            {/* Right Cards */}
            <div className="space-y-4 sm:space-y-6" data-aos="fade-left" data-aos-delay="300" data-aos-once="false">
              {translations[language].benefits.slice(2,4).map((benefit, idx) => (
                <div 
                  key={benefit.title}
                  className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                  data-aos="fade-left"
                  data-aos-delay={400 + idx*100}
                  data-aos-once="false"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#26A0A2] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                      {benefit.title}
                    </h3>
                  </div>
                  <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

             {/* Programs Section */}
  <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden`} dir={isRTL ? "rtl" : "ltr"}>
         {/* Background Image with Overlay */}
         <div className="absolute inset-0 z-0">
           <img 
             src="/src/assets/yogaserve.jpg" 
             alt="Yoga Programs Background" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-[#26A0A2] bg-opacity-60"></div>
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
                  {program.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

             {/* How It Works Section */}
  <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`} dir={isRTL ? "rtl" : "ltr"}>
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
                        {translations[language].howItWorksTitle} {index + 1}
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
                  {translations[language].startJourney}
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center lg:justify-end items-start" data-aos="fade-left" data-aos-once="false">
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="relative">
                  <img 
                    src={yogaSteps} 
                    alt="Yoga Steps" 
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
  <section className="w-full text-justify py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-gradient-to-br from-[#26A0A2] to-[#20c997]" dir={isRTL ? "rtl" : "ltr"}>
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
                  {language === 'Arabic'
                    ? 'منصتنا الشاملة للعافية توفر لك جميع الأدوات والموارد اللازمة لتحقيق أهدافك الصحية واللياقية. من الإرشاد الشخصي إلى الدعم الخبير، نحن نوفر كل شيء.'
                    : language === 'Hebrew'
                    ? 'הפלטפורמה המקיפה שלנו מספקת לך את כל הכלים והמשאבים הדרושים להשגת מטרות הבריאות והכושר שלך. מהכוונה אישית ועד תמיכה מקצועית, הכל כלול.'
                    : 'Our comprehensive wellness platform provides you with all the tools and resources needed to achieve your health and fitness goals. From personalized guidance to expert support, we\'ve got everything covered.'}
                </p>
                <p className="text-base leading-relaxed text-white">
                  {language === 'Arabic'
                    ? 'سواء كنت مبتدئًا أو ممارسًا ذو خبرة، ميزاتنا مصممة لدعم رحلتك في كل خطوة، مما يجعل العافية متاحة وممتعة للجميع.'
                    : language === 'Hebrew'
                    ? 'בין אם אתה מתחיל או מתרגל מנוסה, התכונות שלנו נועדו לתמוך במסע שלך בכל שלב, ולהפוך את הבריאות לנגישה ומהנה לכולם.'
                    : 'Whether you\'re a beginner or an experienced practitioner, our features are designed to support your journey at every step, making wellness accessible and enjoyable for everyone.'}
                </p>
                <p className="text-base leading-relaxed text-white">
                  {language === 'Arabic'
                    ? 'منصتنا تدمج أحدث التقنيات مع ممارسات العافية التقليدية، مما يضمن حصولك على أفضل ما في العالمين. مع تتبع التقدم في الوقت الحقيقي وتوصيات متكيفة، تصبح رحلتك الصحية أكثر فعالية وجاذبية.'
                    : language === 'Hebrew'
                    ? 'הפלטפורמה שלנו משלבת טכנולוגיה מתקדמת עם שיטות בריאות מסורתיות, ומבטיחה שתהיה לך גישה לטוב משני העולמות. עם מעקב התקדמות בזמן אמת והמלצות מותאמות, מסע הבריאות שלך הופך ליעיל ומרתק יותר.'
                    : 'Our platform integrates cutting-edge technology with traditional wellness practices, ensuring you have access to the best of both worlds. With real-time progress tracking and adaptive recommendations, your wellness journey becomes more effective and engaging.'}
                </p>
                <p className="text-base leading-relaxed text-white">
                  {language === 'Arabic'
                    ? 'انضم إلى آلاف المستخدمين الذين حولوا حياتهم من خلال نهجنا الشامل للعافية. اختبر الفرق الذي يمكن أن تحدثه الرعاية الشخصية، والإرشاد الخبير، ودعم المجتمع في رحلتك الصحية واللياقية.'
                    : language === 'Hebrew'
                    ? 'הצטרף לאלפי משתמשים ששינו את חייהם באמצעות הגישה המקיפה שלנו לבריאות. חווה את ההבדל שטיפול אישי, הדרכה מקצועית ותמיכה קהילתית יכולים לעשות במסע הבריאות והכושר שלך.'
                    : 'Join thousands of users who have transformed their lives through our comprehensive wellness approach. Experience the difference that personalized care, expert guidance, and community support can make in your health and fitness journey.'}
                </p>
              </div>
            </div>

            {/* Right Side - Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" data-aos="fade-left" data-aos-once="false">
              {translations[language].features.map((feature, index) => (
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
                      {feature.title}
                    </h3>
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

             {/* Final CTA Section */}
  <section id="pricing-section" className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`} dir={isRTL ? "rtl" : "ltr"}>
         <div className="max-w-6xl mx-auto text-center w-full overflow-hidden">
           <div className={`rounded-3xl p-8 sm:p-12 ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up">
             <h2 
               className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}
               data-aos="fade-down"
               data-aos-delay="50"
               data-aos-once="false"
             >
               {translations[language].finalCTATitle}
             </h2>
             <p 
               className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-white' : 'text-black'}`}
               data-aos="fade-up"
               data-aos-delay="100"
               data-aos-once="false"
             >
               {translations[language].finalCTADesc}
             </p>
            
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {translations[language].plans.map((plan, idx) => (
                <div key={plan.name} className={`rounded-2xl p-6 border-2 ${idx === 1 ? 'bg-gradient-to-br from-[#26A0A2] to-[#20c997] border-[#26A0A2] scale-105' : 'bg-gray-50 border-gray-200 hover:border-[#26A0A2]'} transition-all duration-300`}>
                  {idx === 1 && (
                    <div 
                      className="bg-white text-[#26A0A2] text-sm font-bold px-3 py-1 rounded-full inline-block mb-4 animate-pulse"
                      data-aos="bounce"
                      data-aos-delay="250"
                      data-aos-once="false"
                    >
                      {translations[language].mostPopular}
                    </div>
                  )}
                  <h3 className={`text-2xl font-bold mb-2 ${idx === 1 ? 'text-white' : 'text-gray-800'}`}>{plan.name}</h3>
                  <div className={`text-4xl font-bold mb-4 ${idx === 1 ? 'text-white' : 'text-[#26A0A2]'}`}>
                    {plan.price}
                  </div>
                  <ul className={`text-left space-y-3 mb-6 ${idx === 1 ? 'text-white' : ''}`}>
                    {plan.features.map((feature, fidx) => (
                      <li key={feature} className="flex items-center" data-aos="fade-right" data-aos-delay={250 + fidx*50} data-aos-once="false">
                        <svg className={`w-5 h-5 ${idx === 1 ? 'text-white' : 'text-[#26A0A2]'} mr-3`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 ${idx === 1 ? 'bg-white text-[#26A0A2] hover:bg-gray-100' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                    data-aos="fade-up"
                    data-aos-delay={450}
                    data-aos-once="false"
                  >
                    {translations[language].choose} {plan.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default YogaMeditation;