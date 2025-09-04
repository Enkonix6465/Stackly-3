import React, { useState, useEffect, useContext } from 'react';
import Header from '../../Header.jsx';
import { LanguageContext } from '../../LanguageContext';
import AOS from 'aos';
import '../../aos-custom.css';
import fitnessHeroVideo from '../../assets/fithero.mp4';
import fitnessBenefitsBg from '../../assets/fitsbenefits.jpg';
import fitnessSteps from '../../assets/fitsteps.jpg';
import Footer from '../../footer.jsx';

const FitnessPrograms = () => {
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
      heroTitle: "Discover Fitness Programs",
      heroDesc: "Transform your body and mind with comprehensive fitness programs designed for all levels and goals.",
      heroBtn: "Start Your Journey",
      keyBenefits: "Key Benefits",
      keyBenefitsDesc: "Transform your life with the proven benefits of regular fitness training and exercise programs",
      benefits: [
        { title: "Builds Strength", desc: "Develop muscle mass and increase overall strength through progressive resistance training and targeted exercises designed for all fitness levels." },
        { title: "Cardiovascular Health", desc: "Improve heart health and circulation through cardio exercises that strengthen your cardiovascular system and boost endurance." },
        { title: "Weight Management", desc: "Achieve and maintain your ideal weight through effective fitness programs that boost metabolism and burn calories efficiently." },
        { title: "Boosts Energy", desc: "Increase your energy levels and vitality through regular exercise that enhances your metabolism and overall physical performance." }
      ],
      programsTitle: "Programs we serve",
      programs: [
        { title: "Strength Training Programs", description: "Build muscle and increase strength with progressive resistance training" },
        { title: "Cardio Fitness Classes", description: "Improve heart health and endurance with dynamic cardio workouts" },
        { title: "HIIT Training Sessions", description: "High-intensity interval training for maximum fat burning and fitness" },
        { title: "Functional Fitness Training", description: "Improve daily movement patterns and overall functional strength" },
        { title: "Personal Training Programs", description: "One-on-one customized fitness plans for your specific goals" },
        { title: "Group Fitness Classes", description: "Motivating group sessions for all fitness levels and preferences" }
      ],
      howItWorksTitle: "How It Works",
      howItWorksDesc: "Get started with your fitness journey in just a few simple steps",
      howItWorks: [
        "Complete a fitness assessment and goal setting",
        "Receive personalized workout recommendations",
        "Access training programs and video guides",
        "Follow structured routines with expert guidance",
        "Track progress and adjust your fitness plan"
      ],
      featuresTitle: "Features Included",
      featuresDesc: "Everything you need for a complete fitness experience",
      featuresParagraphs: [
        "Our comprehensive fitness platform provides you with all the tools and resources needed to achieve your strength, endurance, and health goals. From personalized training to expert guidance, we've got everything covered.",
        "Whether you're a beginner or an experienced athlete, our features are designed to support your fitness journey at every step, making exercise accessible and effective for everyone.",
        "Our platform integrates cutting-edge fitness technology with proven training methodologies, ensuring you have access to the best workout strategies. With real-time progress tracking and adaptive recommendations, your fitness journey becomes more effective and engaging.",
        "Join thousands of users who have transformed their bodies and lives through our comprehensive fitness approach. Experience the difference that personalized training, expert guidance, and community support can make in your health and fitness journey."
      ],
      features: [
        { title: "Personalized workout plans", desc: "Custom workout plans tailored to your goals and fitness level." },
        { title: "Progress tracking tools", desc: "Track your fitness progress with easy-to-use tools." },
        { title: "Video exercise library", desc: "Access a wide variety of exercise videos for every need." },
        { title: "Expert trainer support", desc: "Get guidance and support from certified fitness trainers." }
      ],
      pricingTitle: "Start Your Fitness Journey Today",
      pricingDesc: "Get access to personalized fitness programs and training tools to improve your strength, endurance, and overall health.",
      plans: [
        {
          name: "Basic",
          price: "$29/month",
          features: ["Basic workout programs", "Exercise video library", "Mobile app access", "Weekly progress reports"]
        },
        {
          name: "Premium",
          price: "$59/month",
          features: ["Everything in Basic", "Live fitness classes", "Personalized training plans", "Expert consultation", "Priority support"]
        },
        {
          name: "Pro",
          price: "$99/month",
          features: ["Everything in Premium", "1-on-1 training sessions", "Custom nutrition plans", "Weekend bootcamps access", "VIP community access"]
        }
      ],
      pricingBasicTitle: "Basic Plan",
      pricingBasicPrice: "$29",
      pricingBasicFeatures: ["Basic workout programs", "Exercise video library", "Mobile app access", "Weekly progress reports"],
      pricingBasicBtn: "Choose Basic",
      pricingPremiumTitle: "Premium Plan",
      pricingPremiumPrice: "$59",
      pricingPremiumFeatures: ["Everything in Basic", "Live fitness classes", "Personalized training plans", "Expert consultation", "Priority support"],
      pricingPremiumBtn: "Choose Premium",
      pricingProTitle: "Pro Plan",
      pricingProPrice: "$99",
      pricingProFeatures: ["Everything in Premium", "1-on-1 training sessions", "Custom nutrition plans", "Weekend bootcamps access", "VIP community access"],
      pricingProBtn: "Choose Pro",
      pricingPopular: "MOST POPULAR",
      monthText: "month"
    },
    Arabic: {
      heroTitle: "اكتشف برامج اللياقة البدنية",
      heroDesc: "حوّل جسمك وعقلك من خلال برامج اللياقة البدنية الشاملة المصممة لجميع المستويات والأهداف.",
      heroBtn: "ابدأ رحلتك",
      keyBenefits: "الفوائد الرئيسية",
      keyBenefitsDesc: "حوّل حياتك مع الفوائد المثبتة للتدريب المنتظم وبرامج التمارين الرياضية",
      benefits: [
        { title: "بناء القوة", desc: "طور كتلة العضلات وزد القوة العامة من خلال تدريبات المقاومة التدريجية والتمارين المستهدفة لجميع المستويات." },
        { title: "صحة القلب والأوعية الدموية", desc: "حسّن صحة القلب والدورة الدموية من خلال تمارين الكارديو التي تقوي جهازك القلبي الوعائي وتعزز القدرة على التحمل." },
        { title: "إدارة الوزن", desc: "حقق وزنك المثالي وحافظ عليه من خلال برامج اللياقة الفعالة التي تعزز الأيض وتحرق السعرات الحرارية بكفاءة." },
        { title: "تعزيز الطاقة", desc: "زد مستويات الطاقة والحيوية من خلال ممارسة التمارين الرياضية بانتظام التي تعزز الأيض والأداء البدني العام." }
      ],
      programsTitle: "البرامج التي نقدمها",
      programs: [
        { title: "برامج تدريب القوة", description: "بناء العضلات وزيادة القوة من خلال تدريبات المقاومة التدريجية" },
        { title: "دروس اللياقة القلبية", description: "تحسين صحة القلب والقدرة على التحمل من خلال تمارين الكارديو الديناميكية" },
        { title: "جلسات تدريب HIIT", description: "تدريب عالي الكثافة لحرق الدهون واللياقة القصوى" },
        { title: "تدريب اللياقة الوظيفية", description: "تحسين أنماط الحركة اليومية والقوة الوظيفية العامة" },
        { title: "برامج التدريب الشخصي", description: "خطط لياقة مخصصة فردية لأهدافك الخاصة" },
        { title: "دروس اللياقة الجماعية", description: "جلسات جماعية محفزة لجميع المستويات والتفضيلات" }
      ],
      howItWorksTitle: "كيف يعمل",
      howItWorksDesc: "ابدأ رحلتك الرياضية في خطوات بسيطة",
      howItWorks: [
        "أكمل تقييم اللياقة وتحديد الأهداف",
        "استلم توصيات التمارين الشخصية",
        "احصل على برامج التدريب وأدلة الفيديو",
        "اتبع الروتينات المنظمة مع إرشاد الخبراء",
        "تابع التقدم وعدل خطة اللياقة الخاصة بك"
      ],
      featuresTitle: "المميزات المتوفرة",
      featuresDesc: "كل ما تحتاجه لتجربة لياقة متكاملة",
      featuresParagraphs: [
        "منصتنا الشاملة للياقة البدنية توفر لك جميع الأدوات والموارد اللازمة لتحقيق أهداف القوة والقدرة على التحمل والصحة الخاصة بك. من التدريب الشخصي إلى الإرشاد الخبير، نحن نوفر كل شيء.",
        "سواء كنت مبتدئًا أو رياضيًا محترفًا، تم تصميم ميزاتنا لدعم رحلتك الرياضية في كل خطوة، مما يجعل ممارسة التمارين متاحة وفعالة للجميع.",
        "تدمج منصتنا أحدث تقنيات اللياقة مع منهجيات التدريب المثبتة، مما يضمن لك الوصول إلى أفضل استراتيجيات التمارين. مع تتبع التقدم في الوقت الحقيقي والتوصيات التكيفية، تصبح رحلتك الرياضية أكثر فعالية وجاذبية.",
        "انضم إلى آلاف المستخدمين الذين حولوا أجسامهم وحياتهم من خلال نهجنا الشامل للياقة البدنية. اختبر الفرق الذي يمكن أن يحدثه التدريب الشخصي، والإرشاد الخبير، ودعم المجتمع في صحتك ولياقتك البدنية."
      ],
      features: [
        { title: "خطط تمارين شخصية", desc: "خطط تمارين مخصصة لأهدافك ومستوى لياقتك." },
        { title: "أدوات متابعة التقدم", desc: "تابع تقدمك الرياضي باستخدام أدوات سهلة الاستخدام." },
        { title: "مكتبة فيديو التمارين", desc: "الوصول إلى مجموعة متنوعة من فيديوهات التمارين لكل احتياج." },
        { title: "دعم المدربين الخبراء", desc: "احصل على إرشاد ودعم من مدربين لياقة معتمدين." }
      ],
      pricingTitle: "ابدأ رحلتك الرياضية اليوم",
      pricingDesc: "احصل على برامج لياقة شخصية وأدوات تدريب لتحسين قوتك وقدرتك على التحمل وصحتك العامة.",
      plans: [
        {
          name: "أساسي",
          price: "$29/شهر",
          features: ["برامج تمارين أساسية", "مكتبة فيديو التمارين", "الوصول إلى التطبيق", "تقارير تقدم أسبوعية"]
        },
        {
          name: "مميز",
          price: "$59/شهر",
          features: ["كل شيء في الأساسي", "دروس لياقة مباشرة", "خطط تدريب شخصية", "استشارة خبراء", "دعم أولوية"]
        },
        {
          name: "احترافي",
          price: "$99/شهر",
          features: ["كل شيء في المميز", "جلسات تدريب فردية", "خطط تغذية مخصصة", "الوصول إلى معسكرات نهاية الأسبوع", "الوصول إلى مجتمع VIP"]
        }
      ],
      pricingBasicTitle: "الخطة الأساسية",
      pricingBasicPrice: "$29",
      pricingBasicFeatures: ["برامج تمارين أساسية", "مكتبة فيديو التمارين", "الوصول إلى التطبيق", "تقارير تقدم أسبوعية"],
      pricingBasicBtn: "اختر الأساسية",
      pricingPremiumTitle: "الخطة المميزة",
      pricingPremiumPrice: "$59",
      pricingPremiumFeatures: ["كل شيء في الأساسي", "دروس لياقة مباشرة", "خطط تدريب شخصية", "استشارة خبراء", "دعم أولوية"],
      pricingPremiumBtn: "اختر المميزة",
      pricingProTitle: "الخطة الاحترافية",
      pricingProPrice: "$99",
      pricingProFeatures: ["كل شيء في المميز", "جلسات تدريب فردية", "خطط تغذية مخصصة", "الوصول إلى معسكرات نهاية الأسبوع", "الوصول إلى مجتمع VIP"],
      pricingProBtn: "اختر الاحترافية",
      pricingPopular: "الأكثر شعبية",
      monthText: "شهر"
    },
    Hebrew: {
      heroTitle: "גלה תוכניות כושר",
      heroDesc: "שנה את גופך ונפשך עם תוכניות כושר מקיפות לכל הרמות והמטרות.",
      heroBtn: "התחל את המסע שלך",
      keyBenefits: "יתרונות עיקריים",
      keyBenefitsDesc: "שנה את חייך עם היתרונות המוכחים של אימון כושר קבוע ותוכניות אימון",
      benefits: [
        { title: "בונה כוח", desc: "פיתוח מסת שריר והגדלת כוח כללי באמצעות אימוני התנגדות מתקדמים ותרגילים ממוקדים לכל הרמות." },
        { title: "בריאות לב וכלי דם", desc: "שיפור בריאות הלב והמחזור באמצעות תרגילי קרדיו שמחזקים את מערכת הלב וכלי הדם ומגבירים סיבולת." },
        { title: "ניהול משקל", desc: "השגת ושמירה על משקל אידיאלי באמצעות תוכניות כושר יעילות שמגבירות חילוף חומרים ושורפות קלוריות ביעילות." },
        { title: "מגביר אנרגיה", desc: "הגדלת רמות האנרגיה והחיוניות באמצעות פעילות גופנית סדירה שמגבירה את חילוף החומרים והביצועים הפיזיים הכלליים." }
      ],
      programsTitle: "תוכניות שאנו מציעים",
      programs: [
        { title: "תוכניות אימון כוח", description: "פיתוח שרירים והגדלת כוח באמצעות אימוני התנגדות מתקדמים" },
        { title: "שיעורי כושר קרדיו", description: "שיפור בריאות הלב וסיבולת באמצעות אימוני קרדיו דינמיים" },
        { title: "אימוני HIIT", description: "אימון אינטרוולים בעצימות גבוהה לשריפת שומן מקסימלית וכושר" },
        { title: "אימון כושר פונקציונלי", description: "שיפור דפוסי תנועה יומיומיים וכוח פונקציונלי כללי" },
        { title: "תוכניות אימון אישי", description: "תוכניות כושר מותאמות אישית למטרותיך האישיות" },
        { title: "שיעורי כושר קבוצתיים", description: "מפגשים קבוצתיים מעוררי מוטיבציה לכל הרמות וההעדפות" }
      ],
      howItWorksTitle: "איך זה עובד",
      howItWorksDesc: "התחל את המסע הכושר שלך בכמה שלבים פשוטים",
      howItWorks: [
        "השלם הערכת כושר והגדרת מטרות",
        "קבל המלצות אימון אישיות",
        "קבל גישה לתוכניות אימון ומדריכי וידאו",
        "עקוב אחר שגרות מובנות עם הדרכת מומחים",
        "עקוב אחר ההתקדמות ועדכן את תוכנית הכושר שלך"
      ],
      featuresTitle: "תכונות כלולות",
      featuresDesc: "הכל שאתה צריך לחוויית כושר מלאה",
      featuresParagraphs: [
        "הפלטפורמה המקיפה שלנו מספקת לך את כל הכלים והמשאבים הדרושים להשגת מטרות הכוח, הסיבולת והבריאות שלך. מאימון אישי ועד הדרכה מקצועית, יש לנו הכל.",
        "בין אם אתה מתחיל או ספורטאי מנוסה, התכונות שלנו נועדו לתמוך במסע הכושר שלך בכל שלב, ולהפוך את האימון לנגיש ויעיל לכולם.",
        "הפלטפורמה שלנו משלבת טכנולוגיית כושר מתקדמת עם שיטות אימון מוכחות, ומבטיחה לך גישה לאסטרטגיות האימון הטובות ביותר. עם מעקב התקדמות בזמן אמת והמלצות מותאמות, המסע שלך הופך ליעיל ומרתק יותר.",
        "הצטרף לאלפי משתמשים ששינו את גופם וחייהם באמצעות הגישה המקיפה שלנו לכושר. חווה את ההבדל שאימון אישי, הדרכה מקצועית ותמיכת קהילה יכולים לעשות לבריאותך ולכושר שלך."
      ],
      features: [
        { title: "תוכניות אימון אישיות", desc: "תוכניות אימון מותאמות אישית למטרותיך ורמת הכושר שלך." },
        { title: "כלי מעקב התקדמות", desc: "עקוב אחר ההתקדמות שלך עם כלים נוחים לשימוש." },
        { title: "ספריית וידאו תרגילים", desc: "גישה למגוון רחב של סרטוני תרגילים לכל צורך." },
        { title: "תמיכה במאמנים מומחים", desc: "קבל הדרכה ותמיכה ממאמני כושר מוסמכים." }
      ],
      pricingTitle: "התחל את מסע הכושר שלך היום",
      pricingDesc: "קבל גישה לתוכניות כושר אישיות וכלי אימון לשיפור הכוח, הסיבולת והבריאות שלך.",
      plans: [
        {
          name: "בסיסי",
          price: "$29/חודש",
          features: ["תוכניות אימון בסיסיות", "ספריית וידאו תרגילים", "גישה לאפליקציה", "דוחות התקדמות שבועיים"]
        },
        {
          name: "פרימיום",
          price: "$59/חודש",
          features: ["הכל בבסיסי", "שיעורי כושר חיים", "תוכניות אימון אישיות", "ייעוץ מומחים", "תמיכה עדיפות"]
        },
        {
          name: "מקצועי",
          price: "$99/חודש",
          features: ["הכל בפרימיום", "אימונים אישיים", "תוכניות תזונה מותאמות", "גישה למחנות סוף שבוע", "גישה לקהילת VIP"]
        }
      ],
      pricingBasicTitle: "תוכנית בסיסית",
      pricingBasicPrice: "$29",
      pricingBasicFeatures: ["תוכניות אימון בסיסיות", "ספריית וידאו תרגילים", "גישה לאפליקציה", "דוחות התקדמות שבועיות"],
      pricingBasicBtn: "בחר בסיסי",
      pricingPremiumTitle: "תוכנית פרימיום",
      pricingPremiumPrice: "$59",
      pricingPremiumFeatures: ["הכל בבסיסי", "שיעורי כושר חיים", "תוכניות אימון אישיות", "ייעוץ מומחים", "תמיכה עדיפות"],
      pricingPremiumBtn: "בחר פרימיום",
      pricingProTitle: "תוכנית מקצועית",
      pricingProPrice: "$99",
      pricingProFeatures: ["הכל בפרימיום", "אימונים אישיים", "תוכניות תזונה מותאמות", "גישה למחנות סוף שבוע", "גישה לקהילת VIP"],
      pricingProBtn: "בחר מקצועי",
      pricingPopular: "הכי פופולרי",
      monthText: "חודש"
    }
  };

  return (
    <div className={`min-h-screen w-full overflow-x-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
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
          <source src={fitnessHeroVideo} type="video/mp4" />
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
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              {translations[language].keyBenefits}
            </h2>
            <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {translations[language].keyBenefitsDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-6 flex flex-col">
              {translations[language].benefits.slice(0,2).map((benefit, idx) => (
                <div key={idx} className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 min-h-[200px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`} data-aos="fade-right" data-aos-delay={400 + idx*100} data-aos-once="false">
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
            <div className="flex flex-col items-center text-center">
              <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-2xl mb-4">
                <img src={fitnessBenefitsBg} alt="Fitness Benefits" className="w-full h-full object-cover" />
              </div>
              <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{language === 'English' ? 'Transform Your Body' : language === 'Arabic' ? 'حوّل جسمك' : 'שנה את גופך'}</h3>
              <p className={`text-lg max-w-md ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{language === 'English' ? 'Experience the profound benefits of fitness training that will enhance your physical strength, endurance, and overall well-being.' : language === 'Arabic' ? 'اختبر الفوائد العميقة للتدريب الرياضي التي ستعزز قوتك البدنية وقدرتك على التحمل وصحتك العامة.' : 'חווה את היתרונות העמוקים של אימון כושר שישפרו את כוחך, סיבולתך ורווחתך הכללית.'}</p>
            </div>
            <div className="space-y-6 flex flex-col">
              {translations[language].benefits.slice(2,4).map((benefit, idx) => (
                <div key={idx} className={`p-4 sm:p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 min-h-[200px] ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`} data-aos="fade-left" data-aos-delay={400 + idx*100} data-aos-once="false">
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
      <section className="w-full text-justify py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-gradient-to-br from-[#26A0A2] to-[#20c997]">
        <div className="max-w-7xl mx-auto w-full overflow-hidden">
          <div className="mb-12" data-aos="fade-up">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white`}>
              {translations[language].programsTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {translations[language].programs.map((program, index) => (
              <div key={index} className={`transform transition-all duration-300 hover:scale-105 rounded-2xl p-6 shadow-lg ${isDarkMode ? 'bg-gray-800 bg-opacity-90 backdrop-blur-sm' : 'bg-white bg-opacity-90 backdrop-blur-sm'}`} data-aos="fade-up" data-aos-delay={index * 100} data-aos-once="false">
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
                {translations[language].featuresParagraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-base leading-relaxed text-white">{paragraph}</p>
                ))}
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
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Basic Plan */}
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-[#26A0A2] transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{translations[language].pricingBasicTitle}</h3>
                <div className="text-4xl font-bold text-[#26A0A2] mb-4">
                  {translations[language].pricingBasicPrice}<span className="text-lg text-gray-600">/{translations[language].monthText}</span>
                </div>
                <ul className="text-left space-y-3 mb-6">
                  {translations[language].pricingBasicFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-center" data-aos="fade-right" data-aos-delay={250 + idx*50} data-aos-once="false">
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
                  {translations[language].pricingBasicBtn}
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
                  {translations[language].pricingPopular}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2" data-aos="fade-down" data-aos-delay="250" data-aos-once="false">{translations[language].pricingPremiumTitle}</h3>
                <div className="text-4xl font-bold text-white mb-4" data-aos="zoom-in" data-aos-delay="300" data-aos-once="false">
                  {translations[language].pricingPremiumPrice}<span className="text-lg text-gray-100">/{translations[language].monthText}</span>
                </div>
                <ul className="text-left space-y-3 mb-6 text-white">
                  {translations[language].pricingPremiumFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-center" data-aos="fade-right" data-aos-delay={350 + idx*50} data-aos-once="false">
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
                  {translations[language].pricingPremiumBtn}
                </button>
              </div>
              {/* Pro Plan */}
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-[#26A0A2] transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-2" data-aos="fade-down" data-aos-delay="350" data-aos-once="false">{translations[language].pricingProTitle}</h3>
                <div className="text-4xl font-bold text-[#26A0A2] mb-4" data-aos="zoom-in" data-aos-delay="400" data-aos-once="false">
                  {translations[language].pricingProPrice}<span className="text-lg text-gray-600">/{translations[language].monthText}</span>
                </div>
                <ul className="text-left space-y-3 mb-6">
                  {translations[language].pricingProFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-center" data-aos="fade-right" data-aos-delay={450 + idx*50} data-aos-once="false">
                      <svg className="w-5 h-5 text-[#26A0A2] mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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
                  {translations[language].pricingProBtn}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default FitnessPrograms;