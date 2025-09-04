import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext';
import Header from '../../Header.jsx';
import AOS from 'aos';
import '../../aos-custom.css';
import dietHeroVideo from '../../assets/Diethero.mp4';
import dietBenefitsBg from '../../assets/Dietbenefits.jpg';
import dietSteps from '../../assets/Dietsteps.jpg';
import Footer from '../../footer.jsx';

const DietNutrition = () => {
  // Scroll to Pricing section
  // Scroll to Pricing section
  const scrollToPricing = () => {
    const el = document.getElementById('pricing-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // Scroll to Key Benefits section
  const scrollToBenefits = () => {
    const el = document.getElementById('key-benefits');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'Arabic' || language === 'Hebrew';
  const [isDarkMode, setIsDarkMode] = useState(false);
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

  const translations = {
    English: {
      heroTitle: "Discover Diet & Nutrition",
      heroDesc: "Transform your health with personalized nutrition guidance and sustainable eating habits for optimal wellness.",
      heroBtn: "Start Your Journey",
      keyBenefits: "Key Benefits",
      keyBenefitsDesc: "Transform your life with the proven benefits of proper nutrition and healthy eating habits",
      benefits: [
        { title: "Improves Energy", desc: "Boost your daily energy levels and vitality through balanced nutrition and proper meal timing designed to fuel your body optimally." },
        { title: "Healthy Weight", desc: "Achieve and maintain a healthy weight through sustainable nutrition strategies that work with your body's natural metabolism." },
        { title: "Better Digestion", desc: "Improve your digestive health with nutrition plans that support gut health and promote optimal nutrient absorption." },
        { title: "Boosts Metabolism", desc: "Enhance your metabolic function through targeted nutrition strategies that optimize your body's natural fat-burning processes." }
      ],
      programsTitle: "Programs we serve",
      programs: [
        { title: "Personalized Meal Planning", description: "Custom nutrition plans tailored to your goals and lifestyle" },
        { title: "Weight Management Programs", description: "Sustainable approaches to achieving and maintaining healthy weight" },
        { title: "Sports Nutrition Coaching", description: "Optimize performance with targeted nutrition strategies" },
        { title: "Medical Nutrition Therapy", description: "Specialized nutrition support for health conditions" },
        { title: "Detox and Cleanse Programs", description: "Gentle cleansing approaches for better health" },
        { title: "Mindful Eating Workshops", description: "Develop healthy relationships with food and eating habits" }
      ],
      howItWorksTitle: "How It Works",
      howItWorksDesc: "Get started with your nutrition journey in just a few simple steps",
      howItWorks: [
        "Complete a comprehensive nutrition assessment",
        "Receive your personalized meal plan",
        "Access nutrition guidance and recipes",
        "Track your progress with expert support",
        "Adjust your plan based on results and feedback"
      ],
      featuresTitle: "Features Included",
      featuresDesc: "Everything you need for a complete nutrition experience",
      featuresParagraphs: [
        "Our comprehensive nutrition platform provides you with all the tools and resources needed to achieve your health and wellness goals. From personalized meal plans to expert guidance, we've got everything covered.",
        "Whether you're looking to lose weight, gain muscle, or simply improve your overall health, our features are designed to support your journey at every step, making healthy eating accessible and enjoyable."
      ],
      features: [
        {
          title: "Personalized meal plans",
          desc: "Custom meal plans tailored to your goals and lifestyle."
        },
        {
          title: "Nutrition tracking tools",
          desc: "Track your nutrition and progress with easy-to-use tools."
        },
        {
          title: "Recipe database access",
          desc: "Access a wide variety of healthy recipes for every need."
        },
        {
          title: "Expert consultation support",
          desc: "Get guidance and support from certified nutrition experts."
        }
      ],
      pricingTitle: "Start Your Nutrition Journey Today",
      pricingDesc: "Get access to personalized nutrition plans and wellness tools to improve your health and vitality.",
      plans: [
        {
          name: "Basic",
          price: "$29/month",
          features: ["Basic meal planning", "Recipe database access", "Mobile app access", "Weekly progress reports"]
        },
        {
          name: "Premium",
          price: "$59/month",
          features: ["Everything in Basic", "Personalized meal plans", "Expert consultation", "Nutrition tracking tools", "Priority support"]
        },
        {
          name: "Pro",
          price: "$99/month",
          features: ["Everything in Premium", "1-on-1 coaching sessions", "Custom meal plans", "Weekend workshops access", "VIP community access"]
        }
      ],
      pricingBasicTitle: "Basic Plan",
      pricingBasicPrice: "$29",
      pricingBasicFeatures: [
        "Basic meal planning",
        "Recipe database access",
        "Mobile app access",
        "Weekly progress reports"
      ],
      pricingBasicBtn: "Choose Basic",
      pricingPremiumTitle: "Premium Plan",
      pricingPremiumPrice: "$59",
      pricingPremiumFeatures: [
        "Everything in Basic",
        "Personalized meal plans",
        "Expert consultation",
        "Nutrition tracking tools",
        "Priority support"
      ],
      pricingPremiumBtn: "Choose Premium",
      pricingProTitle: "Pro Plan",
      pricingProPrice: "$99",
      pricingProFeatures: [
        "Everything in Premium",
        "1-on-1 coaching sessions",
        "Custom meal plans",
        "Weekend workshops access",
        "VIP community access"
      ],
      pricingProBtn: "Choose Pro",
      pricingPopular: "MOST POPULAR"
    },
    Arabic: {
      heroTitle: "اكتشف التغذية الصحية",
      heroDesc: "حوّل صحتك من خلال إرشادات التغذية الشخصية وعادات الأكل المستدامة لتحقيق العافية المثلى.",
      heroBtn: "ابدأ رحلتك",
      keyBenefits: "الفوائد الرئيسية",
      keyBenefitsDesc: "حوّل حياتك مع الفوائد المثبتة للتغذية السليمة وعادات الأكل الصحية",
      benefits: [
        { title: "زيادة الطاقة", desc: "عزز مستويات الطاقة اليومية والحيوية من خلال التغذية المتوازنة وتوقيت الوجبات المناسب لتغذية جسمك بشكل مثالي." },
        { title: "وزن صحي", desc: "حقق وزنًا صحيًا وحافظ عليه من خلال استراتيجيات التغذية المستدامة التي تعمل مع عملية الأيض الطبيعية لجسمك." },
        { title: "هضم أفضل", desc: "حسّن صحة الجهاز الهضمي من خلال خطط التغذية التي تدعم صحة الأمعاء وتعزز امتصاص العناصر الغذائية بشكل مثالي." },
        { title: "تعزيز الأيض", desc: "عزز وظيفة الأيض من خلال استراتيجيات التغذية المستهدفة التي تحسن عمليات حرق الدهون الطبيعية في جسمك." }
      ],
      programsTitle: "البرامج التي نقدمها",
      programs: [
        { title: "تخطيط وجبات شخصية", description: "خطط تغذية مخصصة لأهدافك ونمط حياتك" },
        { title: "برامج إدارة الوزن", description: "طرق مستدامة لتحقيق وزن صحي والمحافظة عليه" },
        { title: "تدريب التغذية الرياضية", description: "تحسين الأداء من خلال استراتيجيات التغذية المستهدفة" },
        { title: "العلاج الغذائي الطبي", description: "دعم غذائي متخصص للحالات الصحية" },
        { title: "برامج التطهير والتنظيف", description: "طرق تنظيف لطيفة لصحة أفضل" },
        { title: "ورش الأكل الواعي", description: "تطوير علاقة صحية مع الطعام وعادات الأكل" }
      ],
      howItWorksTitle: "كيف يعمل",
      howItWorksDesc: "ابدأ رحلتك الغذائية في خطوات بسيطة",
      howItWorks: [
        "أكمل تقييمًا غذائيًا شاملاً",
        "استلم خطة وجباتك الشخصية",
        "احصل على إرشادات غذائية ووصفات",
        "تابع تقدمك مع دعم الخبراء",
        "عدل خطتك بناءً على النتائج والملاحظات"
      ],
      featuresTitle: "المميزات المتوفرة",
      featuresDesc: "كل ما تحتاجه لتجربة تغذية متكاملة",
      featuresParagraphs: [
        "منصتنا الشاملة للتغذية توفر لك جميع الأدوات والموارد اللازمة لتحقيق أهداف الصحة والعافية الخاصة بك. من خطط الوجبات الشخصية إلى الإرشاد الخبير، نحن نوفر كل شيء.",
        "سواء كنت ترغب في فقدان الوزن أو زيادة العضلات أو ببساطة تحسين صحتك العامة، تم تصميم ميزاتنا لدعم رحلتك في كل خطوة، مما يجعل الأكل الصحي متاحًا وممتعًا."
      ],
      features: [
        {
          title: "خطط وجبات شخصية",
          desc: "خطط وجبات مخصصة لأهدافك ونمط حياتك."
        },
        {
          title: "أدوات متابعة التغذية",
          desc: "تابع تغذيتك وتقدمك باستخدام أدوات سهلة الاستخدام."
        },
        {
          title: "الوصول إلى قاعدة بيانات الوصفات",
          desc: "الوصول إلى مجموعة متنوعة من الوصفات الصحية لكل احتياج."
        },
        {
          title: "دعم استشاري خبير",
          desc: "احصل على إرشاد ودعم من خبراء تغذية معتمدين."
        }
      ],
      pricingTitle: "ابدأ رحلتك الغذائية اليوم",
      pricingDesc: "احصل على خطط تغذية شخصية وأدوات العافية لتحسين صحتك وحيويتك.",
      plans: [
        {
          name: "أساسي",
          price: "$29/شهر",
          features: ["تخطيط وجبات أساسي", "الوصول إلى قاعدة بيانات الوصفات", "الوصول إلى التطبيق", "تقارير تقدم أسبوعية"]
        },
        {
          name: "مميز",
          price: "$59/شهر",
          features: ["كل شيء في الأساسي", "خطط وجبات شخصية", "استشارة خبراء", "أدوات متابعة التغذية", "دعم أولوية"]
        },
        {
          name: "احترافي",
          price: "$99/شهر",
          features: ["كل شيء في المميز", "جلسات تدريب فردية", "خطط وجبات مخصصة", "ورش عمل في عطلة نهاية الأسبوع", "الوصول إلى مجتمع VIP"]
        }
      ],
      pricingBasicTitle: "الخطة الأساسية",
      pricingBasicPrice: "$29",
      pricingBasicFeatures: [
        "تخطيط وجبات أساسي",
        "الوصول إلى قاعدة بيانات الوصفات",
        "الوصول إلى التطبيق",
        "تقارير تقدم أسبوعية"
      ],
      pricingBasicBtn: "اختر الأساسية",
      pricingPremiumTitle: "الخطة المميزة",
      pricingPremiumPrice: "$59",
      pricingPremiumFeatures: [
        "كل شيء في الأساسي",
        "خطط وجبات شخصية",
        "استشارة خبراء",
        "أدوات متابعة التغذية",
        "دعم أولوية"
      ],
      pricingPremiumBtn: "اختر المميزة",
      pricingProTitle: "الخطة الاحترافية",
      pricingProPrice: "$99",
      pricingProFeatures: [
        "كل شيء في المميز",
        "جلسات تدريب فردية",
        "خطط وجبات مخصصة",
        "ورش عمل في عطلة نهاية الأسبوع",
        "الوصول إلى مجتمع VIP"
      ],
      pricingProBtn: "اختر الاحترافية",
      pricingPopular: "الأكثر شعبية"
    },
    Hebrew: {
      heroTitle: "גלה תזונה ודיאטה",
      heroDesc: "שנה את בריאותך עם הדרכה תזונתית אישית והרגלי אכילה בריאים להשגת רווחה מיטבית.",
      heroBtn: "התחל את המסע שלך",
      keyBenefits: "יתרונות עיקריים",
      keyBenefitsDesc: "שנה את חייך עם היתרונות המוכחים של תזונה נכונה והרגלי אכילה בריאים",
      benefits: [
        { title: "משפר אנרגיה", desc: "שפר את רמות האנרגיה והחיוניות היומית שלך באמצעות תזונה מאוזנת ותזמון ארוחות נכון להזנת הגוף בצורה מיטבית." },
        { title: "משקל בריא", desc: "השג ושמור על משקל בריא באמצעות אסטרטגיות תזונה ברות קיימא העובדות עם חילוף החומרים הטבעי של הגוף שלך." },
        { title: "עיכול טוב יותר", desc: "שפר את בריאות מערכת העיכול שלך באמצעות תוכניות תזונה התומכות בבריאות המעיים ומקדמות ספיגה מיטבית של רכיבי תזונה." },
        { title: "מגביר חילוף חומרים", desc: "שפר את תפקוד חילוף החומרים שלך באמצעות אסטרטגיות תזונה ממוקדות המייעלות את תהליכי שריפת השומן הטבעיים של הגוף שלך." }
      ],
      programsTitle: "תוכניות שאנו מציעים",
      programs: [
        { title: "תכנון ארוחות אישי", description: "תוכניות תזונה מותאמות אישית למטרותיך ואורח החיים שלך" },
        { title: "תוכניות ניהול משקל", description: "גישות ברות קיימא להשגת ושמירה על משקל בריא" },
        { title: "אימון תזונה ספורטיבית", description: "שיפור ביצועים באמצעות אסטרטגיות תזונה ממוקדות" },
        { title: "טיפול תזונתי רפואי", description: "תמיכה תזונתית מיוחדת למצבים בריאותיים" },
        { title: "תוכניות ניקוי ורענון", description: "גישות ניקוי עדינות לבריאות טובה יותר" },
        { title: "סדנאות אכילה מודעת", description: "פיתוח יחסים בריאים עם אוכל והרגלי אכילה" }
      ],
      howItWorksTitle: "איך זה עובד",
      howItWorksDesc: "התחל את המסע התזונתי שלך בכמה שלבים פשוטים",
      howItWorks: [
        "השלם הערכת תזונה מקיפה",
        "קבל את תוכנית הארוחות האישית שלך",
        "קבל הדרכה תזונתית ומתכונים",
        "עקוב אחר ההתקדמות שלך עם תמיכת מומחים",
        "התאם את התוכנית שלך על סמך תוצאות ומשוב"
      ],
      featuresTitle: "תכונות כלולות",
      featuresDesc: "הכל שאתה צריך לחוויית תזונה מלאה",
      featuresParagraphs: [
        "הפלטפורמה המקיפה שלנו מספקת לך את כל הכלים והמשאבים הדרושים להשגת מטרות הבריאות והרווחה שלך. מתוכניות ארוחות אישיות ועד הדרכה מקצועית, יש לנו הכל.",
        "בין אם אתה רוצה לרדת במשקל, להעלות מסת שריר או פשוט לשפר את הבריאות הכללית שלך, התכונות שלנו נועדו לתמוך במסע שלך בכל שלב, ולהפוך את האכילה הבריאה לנגישה ומהנה."
      ],
      features: [
        {
          title: "תוכניות ארוחות אישיות",
          desc: "תוכניות ארוחות מותאמות אישית למטרותיך ואורח החיים שלך."
        },
        {
          title: "כלי מעקב תזונה",
          desc: "עקוב אחר התזונה וההתקדמות שלך עם כלים נוחים לשימוש."
        },
        {
          title: "גישה למאגר מתכונים",
          desc: "גישה למגוון רחב של מתכונים בריאים לכל צורך."
        },
        {
          title: "תמיכה בייעוץ מומחים",
          desc: "קבל הדרכה ותמיכה ממומחי תזונה מוסמכים."
        }
      ],
      pricingTitle: "התחל את המסע התזונתי שלך היום",
      pricingDesc: "קבל גישה לתוכניות תזונה אישיות וכלי בריאות לשיפור הבריאות והחיוניות שלך.",
      plans: [
        {
          name: "בסיסי",
          price: "$29/חודש",
          features: ["תכנון ארוחות בסיסי", "גישה למאגר מתכונים", "גישה לאפליקציה", "דוחות התקדמות שבועיים"]
        },
        {
          name: "פרימיום",
          price: "$59/חודש",
          features: ["הכל בבסיסי", "תוכניות ארוחות אישיות", "ייעוץ מומחים", "כלי מעקב תזונה", "תמיכה עדיפות"]
        },
        {
          name: "מקצועי",
          price: "$99/חודש",
          features: [
            "הכל בפרימיום",
            "מפגשי אימון אישיים",
            "תוכניות ארוחות מותאמות אישית",
            "גישה לסדנאות סוף שבוע",
            "גישה לקהילת VIP"
          ]
        }
      ]
    }
  };

  // Remove stray const howItWorks and features arrays, as translations object already contains these.

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
          <source src={dietHeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-1 text-center max-w-4xl px-4 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight text-center" data-aos="fade-up">
            {translations[language].heroTitle}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            {translations[language].heroDesc}
          </p>
          <button 
            onClick={scrollToBenefits}
            className="bg-white text-[#26A0A2] font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:bg-gray-100 transition text-base sm:text-lg md:text-xl transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">
            {translations[language].heroBtn}
          </button>
        </div>
      </section>

             {/* Key Benefits Section */}
       <section id="key-benefits" className={`w-full text-justify py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up" data-aos-duration="1000" data-aos-once="false">
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
                <div key={idx} className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`} data-aos="fade-right" data-aos-delay={400+idx*100} data-aos-once="false">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#26A0A2] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
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
                <img src={dietBenefitsBg} alt="Diet Benefits" className="w-full h-full object-cover" />
              </div>
              <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translations[language].heroTitle}</h3>
              <p className={`text-lg max-w-md ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translations[language].heroDesc}</p>
            </div>
            {/* Right Cards */}
            <div className="space-y-4 sm:space-y-6" data-aos="fade-left" data-aos-delay="300" data-aos-once="false">
              {translations[language].benefits.slice(2,4).map((benefit, idx) => (
                <div key={idx} className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 h-auto min-h-[200px] sm:min-h-[256px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`} data-aos="fade-left" data-aos-delay={400+idx*100} data-aos-once="false">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#26A0A2] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
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
                  src="/src/assets/dietserve.jpg" 
                  alt="Diet Programs Background" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#26A0A2] bg-opacity-70"></div>
              </div>
              <div className="max-w-7xl mx-auto relative z-1 w-full overflow-hidden">
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
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translations[language].howItWorksTitle}</h2>
                <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translations[language].howItWorksDesc}</p>
              </div>
              {/* Steps */}
              <div className="space-y-6">
                {translations[language].howItWorks.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4" data-aos="fade-right" data-aos-delay={index * 100} data-aos-once="false">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg bg-[#26A0A2]`}>{index + 1}</div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translations[language].howItWorksTitle} {index + 1}</h3>
                      <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{step}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* CTA Button */}
              <div className="pt-4">
                <button onClick={scrollToPricing} className="bg-[#26A0A2] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#20c997] transition-colors duration-300 transform hover:scale-105">{translations[language].heroBtn}</button>
              </div>
            </div>
            {/* Right Side - Image */}
            <div className="flex justify-center lg:justify-end items-start" data-aos="fade-left" data-aos-once="false">
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="relative">
                  <img src={dietSteps} alt="Diet Steps" className="w-full object-cover rounded-2xl shadow-2xl" style={{ height: '600px', maxHeight: 'none' }} />
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
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">{translations[language].featuresTitle}</h2>
                <p className="text-lg sm:text-xl mb-8 text-white">{translations[language].featuresDesc}</p>
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
      {/* Pricing Section */}
      <section id="pricing-section" className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto text-center w-full overflow-hidden">
          <div className={`rounded-3xl p-8 sm:p-12 ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>{translations[language].pricingTitle}</h2>
            <p className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-white' : 'text-black'}`}>{translations[language].pricingDesc}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {translations[language].plans.map((plan, idx) => (
                <div key={idx} className={`rounded-2xl p-6 border-2 ${idx === 1 ? 'bg-gradient-to-br from-[#26A0A2] to-[#20c997] border-[#26A0A2] scale-105' : 'bg-gray-50 border-gray-200 hover:border-[#26A0A2]'} transition-all duration-300`}>
                  {idx === 1 && <div className="bg-white text-[#26A0A2] text-sm font-bold px-3 py-1 rounded-full inline-block mb-4 animate-pulse">{language === 'English' ? 'MOST POPULAR' : language === 'Arabic' ? 'الأكثر شعبية' : 'הכי פופולרי'}</div>}
                  <h3 className={`text-2xl font-bold ${idx === 1 ? 'text-white' : 'text-gray-800'} mb-2`}>{plan.name}</h3>
                  <div className={`text-4xl font-bold ${idx === 1 ? 'text-white' : 'text-[#26A0A2]'} mb-4`}>{plan.price}</div>
                  <ul className={`text-left space-y-3 mb-6 ${idx === 1 ? 'text-white' : ''}`}>
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx}>{feature}</li>
                    ))}
                  </ul>
                  <button className={`w-full ${idx === 1 ? 'bg-white text-[#26A0A2]' : 'bg-gray-200 text-gray-800'} font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105`}>
                    {language === 'English' ? 'Choose ' : language === 'Arabic' ? 'اختر ' : 'בחר '} {plan.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DietNutrition;