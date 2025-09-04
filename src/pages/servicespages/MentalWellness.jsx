import Footer from '../../footer.jsx';
import React, { useState, useEffect } from 'react';
import Header from '../../Header.jsx';
import { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';
import AOS from 'aos';
import '../../aos-custom.css';
import mentalHeroVideo from '../../assets/mentalhero.mp4';
import mentalBenefitsBg from '../../assets/mentalbenefits.jpg';
import mentalSteps from '../../assets/mentalsteps.jpg';
import mentalServe from '../../assets/mentalserve.jpg';

const MentalWellness = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'Arabic' || language === 'Hebrew';

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
  }, []);

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

  const translations = {
    English: {
      heroTitle: "Discover Mental Wellness",
      heroDesc: "Transform your mental health with personalized therapy and mindfulness practices for inner peace and emotional balance.",
      heroBtn: "Start Your Journey",
      keyBenefits: "Key Benefits",
      keyBenefitsDesc: "Transform your life with the proven benefits of mental wellness practices and therapeutic techniques",
      benefits: [
        { title: "Reduces Stress", desc: "Effectively manage and reduce stress levels through proven therapeutic techniques and mindfulness practices designed for modern life challenges." },
        { title: "Emotional Balance", desc: "Develop emotional intelligence and regulation skills to maintain balance and resilience in challenging situations." },
        { title: "Better Sleep", desc: "Improve your sleep quality with relaxation techniques and mental wellness practices that prepare your mind for restful sleep." },
        { title: "Mental Clarity", desc: "Enhance your cognitive function and mental clarity through mindfulness practices and therapeutic techniques." }
      ],
      programsTitle: "Programs we serve",
      programs: [
        { title: "Stress Management Therapy", description: "Learn effective techniques to manage and reduce daily stress" },
        { title: "Anxiety Relief Programs", description: "Comprehensive approaches to overcome anxiety and worry" },
        { title: "Mindfulness & Meditation", description: "Develop mindfulness practices for mental clarity and peace" },
        { title: "Cognitive Behavioral Therapy", description: "Evidence-based therapy for thought pattern improvement" },
        { title: "Emotional Wellness Workshops", description: "Group sessions for emotional intelligence and resilience" },
        { title: "Sleep Improvement Programs", description: "Specialized techniques for better sleep and rest" }
      ],
      howItWorksTitle: "How It Works",
      howItWorksDesc: "Get started with your mental wellness journey in just a few simple steps",
      howItWorks: [
        "Complete a mental wellness assessment",
        "Receive personalized therapy recommendations",
        "Access guided sessions and resources",
        "Practice techniques with expert guidance",
        "Track progress and adjust your approach"
      ],
      featuresTitle: "Features Included",
      featuresDesc: "Everything you need for a complete mental wellness experience",
      featuresParagraphs: [
        "Our comprehensive mental wellness platform provides you with all the tools and resources needed to achieve emotional balance and psychological well-being. From personalized therapy to expert guidance, we've got everything covered.",
        "Whether you're dealing with stress, anxiety, or simply want to improve your mental health, our features are designed to support your journey at every step, making mental wellness accessible and effective for everyone."
      ],
      features: [
        { title: "Personalized therapy sessions", desc: "Custom therapy sessions tailored to your needs." },
        { title: "Mental health tracking tools", desc: "Track your mental health and progress with easy-to-use tools." },
        { title: "Guided meditation library", desc: "Access a wide variety of guided meditations for every need." },
        { title: "Expert consultation support", desc: "Get guidance and support from certified mental health experts." }
      ],
      pricingTitle: "Start Your Mental Wellness Journey Today",
      pricingDesc: "Get access to personalized therapy and mental wellness tools to improve your emotional and psychological well-being.",
      pricingBasicTitle: "Basic",
      pricingBasicPrice: "$29",
      pricingBasicFeatures: [
        "Basic therapy sessions",
        "Meditation library access",
        "Mobile app access",
        "Weekly progress reports"
      ],
      pricingBasicBtn: "Choose Basic",
      pricingPopular: "MOST POPULAR",
      pricingPremiumTitle: "Premium",
      pricingPremiumPrice: "$59",
      pricingPremiumFeatures: [
        "Everything in Basic",
        "Live therapy sessions",
        "Personalized therapy plans",
        "Expert consultation",
        "Priority support"
      ],
      pricingPremiumBtn: "Choose Premium",
      pricingProTitle: "Pro",
      pricingProPrice: "$99",
      pricingProFeatures: [
        "Everything in Premium",
        "1-on-1 therapy sessions",
        "Custom therapy plans",
        "Weekend retreats access",
        "VIP community access"
      ],
      pricingProBtn: "Choose Pro",
      monthText: "month"
    },
    Arabic: {
      heroTitle: "اكتشف الصحة النفسية",
      heroDesc: "حوّل صحتك النفسية من خلال العلاج الشخصي وممارسات اليقظة لتحقيق السلام الداخلي والتوازن العاطفي.",
      heroBtn: "ابدأ رحلتك",
      keyBenefits: "الفوائد الرئيسية",
      keyBenefitsDesc: "حوّل حياتك مع الفوائد المثبتة لممارسات الصحة النفسية والتقنيات العلاجية",
      benefits: [
        { title: "تقليل التوتر", desc: "إدارة وتقليل مستويات التوتر بفعالية من خلال تقنيات علاجية مثبتة وممارسات اليقظة المصممة لتحديات الحياة الحديثة." },
        { title: "توازن عاطفي", desc: "تطوير الذكاء العاطفي ومهارات التنظيم للحفاظ على التوازن والمرونة في المواقف الصعبة." },
        { title: "نوم أفضل", desc: "تحسين جودة النوم من خلال تقنيات الاسترخاء وممارسات الصحة النفسية التي تهيئ العقل للنوم المريح." },
        { title: "صفاء ذهني", desc: "تعزيز الوظائف الإدراكية وصفاء الذهن من خلال ممارسات اليقظة وتقنيات العلاج." }
      ],
      programsTitle: "البرامج التي نقدمها",
      programs: [
        { title: "علاج إدارة التوتر", description: "تعلم تقنيات فعالة لإدارة وتقليل التوتر اليومي" },
        { title: "برامج تخفيف القلق", description: "طرق شاملة للتغلب على القلق والهموم" },
        { title: "اليقظة والتأمل", description: "تطوير ممارسات اليقظة لصفاء الذهن والسلام الداخلي" },
        { title: "العلاج السلوكي المعرفي", description: "علاج قائم على الأدلة لتحسين أنماط التفكير" },
        { title: "ورش العمل للعافية العاطفية", description: "جلسات جماعية للذكاء العاطفي والمرونة" },
        { title: "برامج تحسين النوم", description: "تقنيات متخصصة لنوم أفضل وراحة أكثر" }
      ],
      howItWorksTitle: "كيف يعمل",
      howItWorksDesc: "ابدأ رحلتك النفسية في خطوات بسيطة",
      howItWorks: [
        "أكمل تقييم الصحة النفسية",
        "استلم توصيات علاجية شخصية",
        "احصل على جلسات وموارد موجهة",
        "مارس التقنيات مع إرشاد الخبراء",
        "تابع التقدم وعدل نهجك"
      ],
      featuresTitle: "المميزات المتوفرة",
      featuresDesc: "كل ما تحتاجه لتجربة صحة نفسية متكاملة",
      featuresParagraphs: [
        "منصتنا الشاملة للصحة النفسية توفر لك جميع الأدوات والموارد اللازمة لتحقيق التوازن العاطفي والرفاهية النفسية. من العلاج الشخصي إلى الإرشاد الخبير، نحن نوفر كل شيء.",
        "سواء كنت تتعامل مع التوتر أو القلق أو ترغب ببساطة في تحسين صحتك النفسية، تم تصميم ميزاتنا لدعم رحلتك في كل خطوة، مما يجعل الصحة النفسية متاحة وفعالة للجميع."
      ],
      features: [
        { title: "جلسات علاج شخصية", desc: "جلسات علاجية مخصصة لاحتياجاتك الشخصية." },
        { title: "أدوات متابعة الصحة النفسية", desc: "تابع صحتك النفسية وتقدمك باستخدام أدوات سهلة الاستخدام." },
        { title: "مكتبة التأملات الموجهة", desc: "الوصول إلى مجموعة متنوعة من التأملات الموجهة لكل احتياج." },
        { title: "دعم استشاري خبير", desc: "احصل على إرشاد ودعم من خبراء الصحة النفسية المعتمدين." }
      ],
      pricingTitle: "ابدأ رحلتك النفسية اليوم",
      pricingDesc: "احصل على جلسات علاجية شخصية وأدوات الصحة النفسية لتحسين رفاهيتك العاطفية والنفسية.",
      pricingBasicTitle: "أساسي",
      pricingBasicPrice: "$29",
      pricingBasicFeatures: [
        "جلسات علاجية أساسية",
        "الوصول إلى مكتبة التأملات",
        "الوصول إلى التطبيق",
        "تقارير تقدم أسبوعية"
      ],
      pricingBasicBtn: "اختر الأساسي",
      pricingPopular: "الأكثر شعبية",
      pricingPremiumTitle: "مميز",
      pricingPremiumPrice: "$59",
      pricingPremiumFeatures: [
        "كل شيء في الأساسي",
        "جلسات علاج مباشرة",
        "خطط علاجية شخصية",
        "استشارة خبراء",
        "دعم أولوية"
      ],
      pricingPremiumBtn: "اختر المميز",
      pricingProTitle: "احترافي",
      pricingProPrice: "$99",
      pricingProFeatures: [
        "كل شيء في المميز",
        "جلسات علاج فردية",
        "خطط علاجية مخصصة",
        "الوصول إلى رحلات نهاية الأسبوع",
        "الوصول إلى مجتمع VIP"
      ],
      pricingProBtn: "اختر الاحترافي",
      monthText: "شهر"
    },
    Hebrew: {
      heroTitle: "גלה רווחה נפשית",
      heroDesc: "שנה את בריאותך הנפשית עם טיפול אישי ותרגולי מיינדפולנס לאיזון רגשי ושלווה פנימית.",
      heroBtn: "התחל את המסע שלך",
      keyBenefits: "יתרונות עיקריים",
      keyBenefitsDesc: "שנה את חייך עם היתרונות המוכחים של רווחה נפשית וטכניקות טיפוליות",
      benefits: [
        { title: "מפחית לחץ", desc: "נהל והפחת את רמות הלחץ ביעילות באמצעות טכניקות טיפוליות מוכחות ותרגולי מיינדפולנס המותאמים לאתגרי החיים המודרניים." },
        { title: "איזון רגשי", desc: "פיתוח אינטליגנציה רגשית וכישורי ויסות לשמירה על איזון וחוסן במצבים מאתגרים." },
        { title: "שינה טובה יותר", desc: "שפר את איכות השינה שלך עם טכניקות הרפיה ותרגולי רווחה נפשית שמכינים את המוח לשינה רגועה." },
        { title: "בהירות מחשבתית", desc: "שפר את התפקוד הקוגניטיבי והבהירות המחשבתית שלך באמצעות תרגולי מיינדפולנס וטכניקות טיפוליות." }
      ],
      programsTitle: "תוכניות שאנו מציעים",
      programs: [
        { title: "טיפול בניהול לחץ", description: "למד טכניקות יעילות לניהול והפחתת לחץ יומיומי" },
        { title: "תוכניות להקלה על חרדה", description: "גישות מקיפות להתמודדות עם חרדה ודאגה" },
        { title: "מיינדפולנס ומדיטציה", description: "פיתוח תרגולי מיינדפולנס לבהירות מחשבתית ושלווה פנימית" },
        { title: "טיפול קוגניטיבי התנהגותי", description: "טיפול מבוסס ראיות לשיפור דפוסי חשיבה" },
        { title: "סדנאות לרווחה רגשית", description: "מפגשים קבוצתיים לאינטליגנציה רגשית וחוסן" },
        { title: "תוכניות לשיפור השינה", description: "טכניקות מתקדמות לשינה טובה יותר ומנוחה עמוקה" }
      ],
      howItWorksTitle: "איך זה עובד",
      howItWorksDesc: "התחל את המסע הנפשי שלך בכמה שלבים פשוטים",
      howItWorks: [
        "השלם הערכת רווחה נפשית",
        "קבל המלצות טיפוליות אישיות",
        "קבל גישה למפגשים ומשאבים מודרכים",
        "תרגל טכניקות עם הדרכת מומחים",
        "עקוב אחר ההתקדמות והתאם את הגישה שלך"
      ],
      featuresTitle: "תכונות כלולות",
      featuresDesc: "הכל שאתה צריך לחוויית רווחה נפשית מלאה",
      featuresParagraphs: [
        "הפלטפורמה המקיפה שלנו לרווחה נפשית מספקת לך את כל הכלים והמשאבים הדרושים להשגת איזון רגשי ורווחה פסיכולוגית. מטיפול אישי ועד הדרכה מקצועית, יש לנו הכל.",
        "בין אם אתה מתמודד עם לחץ, חרדה או פשוט רוצה לשפר את בריאותך הנפשית, התכונות שלנו נועדו לתמוך במסע שלך בכל שלב, ולהפוך את הרווחה הנפשית לנגישה ויעילה לכולם."
      ],
      features: [
        { title: "מפגשי טיפול אישיים", desc: "מפגשי טיפול מותאמים אישית לצרכים שלך." },
        { title: "כלי מעקב לבריאות נפשית", desc: "עקוב אחר בריאותך הנפשית וההתקדמות שלך עם כלים נוחים לשימוש." },
        { title: "ספריית מדיטציות מודרכות", desc: "גישה למגוון רחב של מדיטציות מודרכות לכל צורך." },
        { title: "תמיכה בייעוץ מומחים", desc: "קבל הדרכה ותמיכה ממומחי בריאות נפשית מוסמכים." }
      ],
      pricingTitle: "התחל את המסע לרווחה נפשית היום",
      pricingDesc: "קבל גישה לטיפול אישי וכלי רווחה נפשית לשיפור הרווחה הרגשית והפסיכולוגית שלך.",
      pricingBasicTitle: "בסיסי",
      pricingBasicPrice: "$29",
      pricingBasicFeatures: [
        "מפגשי טיפול בסיסיים",
        "גישה לספריית מדיטציות",
        "גישה לאפליקציה",
        "דוחות התקדמות שבועיים"
      ],
      pricingBasicBtn: "בחר בסיסי",
      pricingPopular: "הכי פופולרי",
      pricingPremiumTitle: "פרימיום",
      pricingPremiumPrice: "$59",
      pricingPremiumFeatures: [
        "הכל בבסיסי",
        "מפגשי טיפול חיים",
        "תוכניות טיפול אישיות",
        "ייעוץ מומחים",
        "תמיכה עדיפות"
      ],
      pricingPremiumBtn: "בחר פרימיום",
      pricingProTitle: "מקצועי",
      pricingProPrice: "$99",
      pricingProFeatures: [
        "הכל בפרימיום",
        "מפגשי טיפול אחד על אחד",
        "תוכניות טיפול מותאמות",
        "גישה לריטריטים בסופי שבוע",
        "גישה לקהילת VIP"
      ],
      pricingProBtn: "בחר מקצועי",
      monthText: "חודש"
    }
  };

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
        <source src={mentalHeroVideo} type="video/mp4" />
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
        <button className="bg-white text-[#26A0A2] font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:bg-gray-100 transition text-base sm:text-lg md:text-xl transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">
          {translations[language].heroBtn}
        </button>
      </div>
    </section>
    {/* Key Benefits Section */}
    <section className={`w-full text-justify py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
      <div className="max-w-7xl mx-auto w-full overflow-hidden">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200" data-aos-once="false">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translations[language].keyBenefits}</h2>
          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translations[language].keyBenefitsDesc}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
          {/* Left Cards */}
          <div className="space-y-4 sm:space-y-6" data-aos="fade-right" data-aos-delay="300" data-aos-once="false">
            {translations[language].benefits.slice(0,2).map((benefit, idx) => (
              <div key={idx} className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`} data-aos="fade-right" data-aos-delay={400 + idx*100} data-aos-once="false">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#26A0A2] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{benefit.title}</h3>
                </div>
                <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{benefit.desc}</p>
              </div>
            ))}
          </div>
          {/* Center Image */}
          <div className="flex flex-col items-center text-center" data-aos="zoom-in" data-aos-delay="600" data-aos-once="false">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl mb-4 sm:mb-6">
              <img 
                src={mentalBenefitsBg} 
                alt="Mental Wellness Benefits" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translations[language].centerTitle || (language === 'English' ? 'Transform Your Mind' : language === 'Arabic' ? 'حوّل عقلك' : 'שנה את מחשבתך')}</h3>
            <p className={`text-lg max-w-md ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translations[language].centerDesc || (language === 'English' ? 'Experience the profound benefits of mental wellness that will enhance your emotional, cognitive, and psychological well-being.' : language === 'Arabic' ? 'اختبر الفوائد العميقة للصحة النفسية التي ستعزز رفاهيتك العاطفية والإدراكية والنفسية.' : 'חווה את היתרונות העמוקים של רווחה נפשית שישפרו את הרווחה הרגשית, הקוגניטיבית והפסיכולוגית שלך.')}</p>
          </div>
          {/* Right Cards */}
          <div className="space-y-4 sm:space-y-6" data-aos="fade-left" data-aos-delay="300" data-aos-once="false">
            {translations[language].benefits.slice(2,4).map((benefit, idx) => (
              <div key={idx} className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`} data-aos="fade-left" data-aos-delay={400 + idx*100} data-aos-once="false">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#26A0A2] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{benefit.title}</h3>
                </div>
                <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    {/* Programs Section */}
    <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/mentalserve.jpg" 
          alt="Mental Wellness Programs Background" 
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
                     {language === 'English' ? `Step ${index + 1}` : language === 'Arabic' ? `الخطوة ${index + 1}` : `שלב ${index + 1}`}
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
                 src={mentalSteps} 
                 alt="Mental Wellness Steps" 
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
               {translations[language].featuresParagraphs && translations[language].featuresParagraphs.map((paragraph, idx) => (
                 <p key={idx} className="text-base leading-relaxed text-white">{paragraph}</p>
               ))}
             </div>
           </div>
           {/* Right Side - Cards */}
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" data-aos="fade-left" data-aos-once="false">
             {translations[language].features.map((feature, index) => (
               <div key={index} className={`p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-gray-800 bg-opacity-95 backdrop-blur-sm' : 'bg-white bg-opacity-95 backdrop-blur-sm'}`} data-aos="fade-up" data-aos-delay={index * 100} data-aos-once="false">
                 <div className="mb-4">
                   <div className="w-12 h-12 bg-[#26A0A2] rounded-full flex items-center justify-center mb-3 shadow-lg">
                     <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                   </div>
                   <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{feature.title}</h3>
                 </div>
                 <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature.desc}</p>
               </div>
             ))}
           </div>
         </div>
       </div>
     </section>

     {/* Final CTA Section */}
     <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
       <div className="max-w-6xl mx-auto text-center w-full overflow-hidden">
         <div className={`rounded-3xl p-8 sm:p-12 ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up">
           <h2 
             className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}
             data-aos="fade-down"
             data-aos-delay="50"
             data-aos-once="false"
           >
             {translations[language].pricingTitle}
           </h2>
           <p 
             className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-white' : 'text-black'}`}
             data-aos="fade-up"
             data-aos-delay="100"
             data-aos-once="false"
           >
             {translations[language].pricingDesc}
           </p>
          
          {/* Pricing Cards Section - Mental Wellness */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Basic Plan */}
            <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-[#26A0A2] transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{translations[language].pricingBasicTitle}</h3>
              <div className="text-4xl font-bold text-[#26A0A2] mb-4">
                {translations[language].pricingBasicPrice}<span className="text-lg text-gray-600">{translations[language].monthText}</span>
              </div>
              <ul className="text-left space-y-3 mb-6">
                {translations[language].pricingBasicFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 text-[#26A0A2] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300 transform hover:scale-105">
                {translations[language].pricingBasicBtn}
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-[#26A0A2] to-[#20c997] rounded-2xl p-6 border-2 border-[#26A0A2] transform scale-105">
              <div className="bg-white text-[#26A0A2] text-sm font-bold px-3 py-1 rounded-full inline-block mb-4 animate-pulse">
                {translations[language].pricingPopular}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{translations[language].pricingPremiumTitle}</h3>
              <div className="text-4xl font-bold text-white mb-4">
                {translations[language].pricingPremiumPrice}<span className="text-lg text-gray-100">{translations[language].monthText}</span>
              </div>
              <ul className="text-left space-y-3 mb-6 text-white">
                {translations[language].pricingPremiumFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 text-white mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-white text-[#26A0A2] font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                {translations[language].pricingPremiumBtn}
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-[#26A0A2] transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{translations[language].pricingProTitle}</h3>
              <div className="text-4xl font-bold text-[#26A0A2] mb-4">
                {translations[language].pricingProPrice}<span className="text-lg text-gray-600">{translations[language].monthText}</span>
              </div>
              <ul className="text-left space-y-3 mb-6">
                {translations[language].pricingProFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 text-[#26A0A2] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300 transform hover:scale-105">
                {translations[language].pricingProBtn}
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

export default MentalWellness;