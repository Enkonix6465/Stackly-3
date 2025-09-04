import React, { useState, useEffect, useContext } from 'react';
import Header from '../../Header.jsx';
import AOS from 'aos';
import '../../aos-custom.css';
import sleepHeroVideo from '../../assets/sleephero.mp4';
import sleepBenefitsBg from '../../assets/sleepbenefits.jpg';
import sleepSteps from '../../assets/sleepsteps.jpg';
import sleepserve from '../../assets/sleepserves.jpg';
import { LanguageContext } from '../../LanguageContext';

const SleepTherapy = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'Arabic' || language === 'Hebrew';

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

  const translations = {
    English: {
      heroTitle: "Discover Sleep Therapy",
      heroDesc: "Transform your sleep quality with personalized therapy and proven techniques for deep, restorative rest.",
      heroBtn: "Start Your Journey",
      keyBenefits: "Key Benefits",
      keyBenefitsDesc: "Transform your life with the proven benefits of quality sleep and therapeutic sleep practices",
      benefits: [
        { title: "Better Sleep Quality", desc: "Experience deeper, more restorative sleep through proven therapeutic techniques and sleep optimization strategies designed for lasting improvement." },
        { title: "Reduces Insomnia", desc: "Overcome sleep difficulties and insomnia through evidence-based therapeutic approaches that address the root causes of sleep problems." },
        { title: "Enhanced Recovery", desc: "Support your body's natural healing and recovery processes through deep, restorative sleep that optimizes physical and mental restoration." },
        { title: "Mental Clarity", desc: "Improve cognitive function, focus, and mental clarity through quality sleep that enhances brain function and emotional well-being." }
      ],
      programsTitle: "Programs we serve",
      programs: [
        { title: "Sleep Assessment & Analysis", description: "Comprehensive evaluation of your sleep patterns and habits" },
        { title: "Insomnia Treatment Programs", description: "Evidence-based therapies to overcome sleep difficulties" },
        { title: "Sleep Hygiene Education", description: "Learn optimal sleep environment and routine practices" },
        { title: "Relaxation & Meditation Techniques", description: "Mindfulness practices to prepare mind and body for sleep" },
        { title: "Cognitive Behavioral Therapy for Sleep", description: "CBT techniques to address sleep-related thoughts and behaviors" },
        { title: "Sleep Environment Optimization", description: "Create the perfect sleep sanctuary for better rest" }
      ],
      howItWorksTitle: "How It Works",
      howItWorksDesc: "Get started with your sleep therapy journey in just a few simple steps",
      howItWorks: [
        "Complete a comprehensive sleep assessment",
        "Receive personalized sleep therapy recommendations",
        "Access guided relaxation and sleep techniques",
        "Practice sleep hygiene with expert guidance",
        "Track progress and adjust your sleep plan"
      ],
      featuresTitle: "Features Included",
      featuresDesc: "Everything you need for a complete sleep therapy experience",
      featuresParagraphs: [
        "Our comprehensive sleep therapy platform provides you with all the tools and resources needed to achieve quality sleep and overcome sleep disorders. From personalized therapy to expert guidance, we've got everything covered.",
        "Whether you're struggling with insomnia, poor sleep quality, or simply want to optimize your sleep, our features are designed to support your sleep journey at every step, making restful sleep accessible and achievable for everyone.",
        "Our platform integrates evidence-based sleep science with modern therapeutic approaches, ensuring you have access to the best sleep improvement strategies. With real-time sleep tracking and adaptive recommendations, your sleep therapy journey becomes more effective and sustainable.",
        "Join thousands of users who have transformed their sleep quality through our comprehensive approach. Experience the difference that personalized sleep therapy, expert guidance, and ongoing support can make in your rest and recovery."
      ],
      features: [
        { title: "Personalized sleep therapy plans", desc: "Custom sleep therapy plans tailored to your needs." },
        { title: "Sleep tracking and monitoring tools", desc: "Track your sleep progress with easy-to-use tools." },
        { title: "Guided relaxation audio library", desc: "Access a wide variety of relaxation audio for every need." },
        { title: "Expert sleep consultation support", desc: "Get guidance and support from certified sleep therapists." }
      ],
      pricingTitle: "Start Your Sleep Therapy Journey Today",
      pricingDesc: "Get access to personalized sleep therapy and relaxation tools to improve your sleep quality and overall well-being.",
      pricingBasicTitle: "Basic Plan",
      pricingBasicPrice: "$29",
      pricingBasicFeatures: ["Basic sleep assessment", "Relaxation audio library", "Mobile app access", "Weekly sleep reports"],
      pricingBasicBtn: "Choose Basic",
      pricingPremiumTitle: "Premium Plan",
      pricingPremiumPrice: "$59",
      pricingPremiumFeatures: ["Everything in Basic", "Live sleep therapy sessions", "Personalized sleep plans", "Expert consultation", "Priority support"],
      pricingPremiumBtn: "Choose Premium",
      pricingProTitle: "Pro Plan",
      pricingProPrice: "$99",
      pricingProFeatures: ["Everything in Premium", "1-on-1 sleep therapy sessions", "Custom sleep environment plans", "Weekend sleep retreats access", "VIP community access"],
      pricingProBtn: "Choose Pro",
      pricingPopular: "MOST POPULAR",
      monthText: "month"
    },
    Arabic: {
      heroTitle: "اكتشف علاج النوم",
      heroDesc: "حوّل جودة نومك من خلال العلاج المخصص والتقنيات المثبتة للراحة العميقة والمجددة.",
      heroBtn: "ابدأ رحلتك",
      keyBenefits: "الفوائد الرئيسية",
      keyBenefitsDesc: "حوّل حياتك من خلال الفوائد المثبتة للنوم الجيد وممارسات علاج النوم العلاجية",
      benefits: [
        { title: "جودة نوم أفضل", desc: "اختبر نومًا أعمق وأكثر تجديدًا من خلال تقنيات علاجية مثبتة واستراتيجيات تحسين النوم مصممة لتحسين دائم." },
        { title: "تقليل الأرق", desc: "تغلب على صعوبات النوم والأرق من خلال أساليب علاجية قائمة على الأدلة تعالج الأسباب الجذرية لمشاكل النوم." },
        { title: "تعزيز الشفاء", desc: "دعم عمليات الشفاء والتعافي الطبيعية لجسمك من خلال نوم عميق ومجدد يحسن من الاستعادة البدنية والعقلية." },
        { title: "صفاء ذهني", desc: "حسّن من وظائفك الإدراكية وتركيزك وصفاء ذهنك من خلال نوم جيد يعزز من وظائف الدماغ ورفاهيتك العاطفية." }
      ],
      programsTitle: "البرامج التي نقدمها",
      programs: [
        { title: "تقييم وتحليل النوم", description: "تقييم شامل لأنماط نومك وعاداتك" },
        { title: "برامج علاج الأرق", description: "علاجات قائمة على الأدلة للتغلب على صعوبات النوم" },
        { title: "تثقيف حول نظافة النوم", description: "تعلم بيئة النوم المثالية وممارسات الروتين" },
        { title: "تقنيات الاسترخاء والتأمل", description: "ممارسات اليقظة لتحضير العقل والجسم للنوم" },
        { title: "العلاج السلوكي المعرفي للنوم", description: "تقنيات العلاج السلوكي المعرفي لمعالجة الأفكار والسلوكيات المرتبطة بالنوم" },
        { title: "تحسين بيئة النوم", description: "إنشاء ملاذ نوم مثالي للحصول على راحة أفضل" }
      ],
      howItWorksTitle: "كيف يعمل",
      howItWorksDesc: "ابدأ رحلتك في علاج النوم من خلال بضع خطوات بسيطة",
      howItWorks: [
        "أكمل تقييم نوم شامل",
        "تلقَ توصيات علاج نوم مخصصة",
        "الوصول إلى تقنيات الاسترخاء والنوم الموجهة",
        "مارس نظافة النوم مع إرشادات الخبراء",
        "تتبع التقدم وضبط خطة نومك"
      ],
      featuresTitle: "المميزات المتضمنة",
      featuresDesc: "كل ما تحتاجه لتجربة علاج نوم كاملة",
      featuresParagraphs: [
        "توفر لك منصتنا الشاملة لعلاج النوم جميع الأدوات والموارد اللازمة لتحقيق نوم جيد والتغلب على اضطرابات النوم. من العلاج المخصص إلى الإرشاد من قبل الخبراء، نحن نقدم كل ما تحتاجه.",
        "سواء كنت تعاني من الأرق، أو ضعف جودة النوم، أو كنت ترغب ببساطة في تحسين نومك، فإن ميزاتنا مصممة لدعم رحلتك في النوم في كل خطوة، مما يجعل النوم المريح متاحًا وقابلًا للتحقيق للجميع.",
        "تدمج منصتنا بين علوم النوم القائمة على الأدلة والأساليب العلاجية الحديثة، مما يضمن لك الوصول إلى أفضل استراتيجيات تحسين النوم. مع تتبع النوم في الوقت الحقيقي والتوصيات التكيفية، تصبح رحلتك في علاج النوم أكثر فعالية واستدامة.",
        "انضم إلى الآلاف من المستخدمين الذين حولوا جودة نومهم من خلال نهجنا الشامل. اختبر الفرق الذي يمكن أن تحدثه علاجات النوم المخصصة، والإرشاد من قبل الخبراء، والدعم المستمر في راحتك واستعادتك."
      ],
      features: [
        { title: "خطط علاج نوم مخصصة", desc: "خطط علاج نوم مخصصة مصممة وفقًا لاحتياجاتك." },
        { title: "أدوات تتبع ومراقبة النوم", desc: "تتبع تقدم نومك باستخدام أدوات سهلة الاستخدام." },
        { title: "مكتبة صوتيات الاسترخاء الموجهة", desc: "الوصول إلى مجموعة واسعة من صوتيات الاسترخاء لكل احتياج." },
        { title: "دعم استشاري نوم خبير", desc: "احصل على إرشادات ودعم من معالجين نوم معتمدين." }
      ],
      pricingTitle: "ابدأ رحلتك في علاج النوم اليوم",
      pricingDesc: "احصل على وصول إلى علاج نوم مخصص وأدوات استرخاء لتحسين جودة نومك ورفاهيتك العامة.",
      pricingBasicTitle: "الخطة الأساسية",
      pricingBasicPrice: "$29",
      pricingBasicFeatures: ["تقييم نوم أساسي", "مكتبة صوتيات الاسترخاء", "الوصول إلى التطبيق المحمول", "تقارير نوم أسبوعية"],
      pricingBasicBtn: "اختر الخطة الأساسية",
      pricingPremiumTitle: "خطة مميزة",
      pricingPremiumPrice: "$59",
      pricingPremiumFeatures: ["كل شيء في الخطة الأساسية", "جلسات علاج نوم مباشرة", "خطط نوم مخصصة", "استشارة خبير", "دعم ذو أولوية"],
      pricingPremiumBtn: "اختر الخطة المميزة",
      pricingProTitle: "خطة برو",
      pricingProPrice: "$99",
      pricingProFeatures: ["كل شيء في الخطة المميزة", "جلسات علاج نوم فردية", "خطط بيئة نوم مخصصة", "الوصول إلى معسكرات نوم في عطلة نهاية الأسبوع", "الوصول إلى مجتمع VIP"],
      pricingProBtn: "اختر خطة برو",
      pricingPopular: "الأكثر شعبية",
      monthText: "شهرا"
    },
    Hebrew: {
      heroTitle: "גלה את טיפול השינה",
      heroDesc: "שנה את איכות השינה שלך בעזרת טיפול מותאם אישית וטכניקות מוכחות לשינה עמוקה ומחודשת.",
      heroBtn: "התחל את המסע שלך",
      keyBenefits: "יתרונות עיקריים",
      keyBenefitsDesc: "שנה את חייך בעזרת היתרונות המוכחים של שינה איכותית ופרקטיקות טיפול שינה תרפויטיות",
      benefits: [
        { title: "איכות שינה טובה יותר", desc: "חווה שינה עמוקה ומחודשת יותר בעזרת טכניקות תרפויטיות מוכחות ואסטרטגיות אופטימיזציה לשינה המיועדות לשיפור מתמשך." },
        { title: "מפחית אובססיה", desc: "התמודד עם קשיי שינה ואובססיה בעזרת גישות תרפויטיות מבוססות ראיות המטפלות בסיבות השורשיות לבעיות שינה." },
        { title: "שיקום משופר", desc: "תמוך בתהליכי ההחלמה וההתחדשות הטבעיים של גופך בעזרת שינה עמוקה ומחודשת המייעלת את השיקום הפיזי והמנטלי." },
        { title: "בהירות מנטלית", desc: "שפר את התפקוד הקוגניטיבי, הריכוז והבהירות המנטלית שלך בעזרת שינה איכותית המקדמת את תפקוד המוח ורווחתך הרגשית." }
      ],
      programsTitle: "התוכניות שאנו מציעים",
      programs: [
        { title: "הערכה וניתוח שינה", description: "הערכה מקיפה של דפוסי השינה וההרגלים שלך" },
        { title: "תוכניות טיפול באובססיה", description: "טיפולים מבוססי ראיות להתמודדות עם קשיי שינה" },
        { title: "חינוך להיגיינת שינה", description: "למד על סביבת השינה האופטימלית ופרקטיקות שגרתיות" },
        { title: "טכניקות הרפיה ומדיטציה", description: "פרקטיקות מיינדפולנס להכנת הגוף והנפש לשינה" },
        { title: "טיפול קוגניטיבי התנהגותי לשינה", description: "טכניקות CBT לטיפול במחשבות ובתנהגויות הקשורות לשינה" },
        { title: "אופטימיזציה של סביבת השינה", description: "צור מקלט שינה מושלם למנוחה טובה יותר" }
      ],
      howItWorksTitle: "איך זה עובד",
      howItWorksDesc: "התחל את מסע טיפול השינה שלך בכמה צעדים פשוטים",
      howItWorks: [
        "מלא הערכת שינה מקיפה",
        "קבל המלצות טיפול שינה מותאמות אישית",
        "גשת לטכניקות הרפיה ושינה מונחות",
        "תרגל היגיינת שינה עם הנחיה של מומחים",
        "עקוב אחרי ההתקדמות והתאם את תוכנית השינה שלך"
      ],
      featuresTitle: "תכונות כלולות",
      featuresDesc: "כל מה שאתה צריך לחוויית טיפול שינה מלאה",
      featuresParagraphs: [
        "פלטפורמת טיפול השינה המקיפה שלנו מספקת לך את כל הכלים והמשאבים הנדרשים להשגת שינה איכותית ולהתמודדות עם הפרעות שינה. מטיפול מותאם אישית ועד להנחיה על ידי מומחים, יש לנו את כל מה שאתה צריך.",
        "בין אם אתה מתמודד עם אובססיה, איכות שינה ירודה, או פשוט רוצה לאופטימיזציה של השינה שלך, התכונות שלנו מיועדות לתמוך במסע השינה שלך בכל שלב, מה שהופך שינה רגועה לנגישה ולבר השגה עבור כולם.",
        "הפלטפורמה שלנו משלבת בין מדע השינה מבוסס הראיות לבין גישות תרפויטיות מודרניות, ומבטיחה שתהיה לך גישה לאסטרטגיות הטובות ביותר לשיפור השינה. עם מעקב שינה בזמן אמת והמלצות אדפטיביות, מסע טיפול השינה שלך הופך ליעיל ולבר קיימא יותר.",
        "הצטרף לאלפי המשתמשים שהמירו את איכות השינה שלהם בעזרת הגישה המקיפה שלנו. חווה את ההבדל שיכולים לעשות טיפול שינה מותאם אישית, הנחיה מקצועית ותמיכה מתמשכת בנוחות שלך ובתהליך ההתאוששות שלך."
      ],
      features: [
        { title: "תוכניות טיפול שינה מותאמות אישית", desc: "תוכניות טיפול שינה מותאמות אישית לפי הצרכים שלך." },
        { title: "כלים למעקב ומדידת שינה", desc: "עקוב אחרי התקדמות השינה שלך בעזרת כלים קלים לשימוש." },
        { title: "ספריית אודיו להרפיה מונחית", desc: "גשת למגוון רחב של אודיו להרפיה לכל צורך." },
        { title: "תמיכת ייעוץ שינה מקצועית", desc: "קבל הנחיה ותמיכה ממטפלי שינה מוסמכים." }
      ],
      pricingTitle: "התחל את מסע טיפול השינה שלך היום",
      pricingDesc: "קבל גישה לטיפול שינה מותאם אישית וכלי הרפיה לשיפור איכות השינה שלך ורווחתך הכללית.",
      pricingBasicTitle: "תוכנית בסיסית",
      pricingBasicPrice: "$29",
      pricingBasicFeatures: ["הערכה בסיסית של השינה", "ספריית אודיו להרפיה", "גישה לאפליקציה הניידת", "דוחות שינה שבועיים"],
      pricingBasicBtn: "בחר תוכנית בסיסית",
      pricingPremiumTitle: "תוכנית פרימיום",
      pricingPremiumPrice: "$59",
      pricingPremiumFeatures: ["הכל בבסיסי", "שיעורי טיפול בשינה בשידור חי", "תוכניות שינה מותאמות", "ייעוץ מומחה", "תמיכה בעדיפות גבוהה"],
      pricingPremiumBtn: "בחר פרימיום",
      pricingProTitle: "תוכנית פרו",
      pricingProPrice: "$99",
      pricingProFeatures: ["הכל בפרימיום", "שיעורי טיפול בשינה אחד על אחד", "תוכניות מותאמות לסביבת שינה", "גישה למש retreats שינה בסוף השבוע", "גישה לקהילת VIP"],
      pricingProBtn: "בחר פרו",
      pricingPopular: "הפופולרי ביותר",
      monthText: "חודש"
    }
  };

  const {
    heroTitle,
    heroDesc,
    heroBtn,
    keyBenefits,
    keyBenefitsDesc,
    benefits,
    programsTitle,
    programs,
    howItWorksTitle,
    howItWorksDesc,
    howItWorks,
    featuresTitle,
    featuresDesc,
    featuresParagraphs,
    features,
    pricingTitle,
    pricingDesc,
    pricingBasicTitle,
    pricingBasicPrice,
    pricingBasicFeatures,
    pricingBasicBtn,
    pricingPremiumTitle,
    pricingPremiumPrice,
    pricingPremiumFeatures,
    pricingPremiumBtn,
    pricingProTitle,
    pricingProPrice,
    pricingProFeatures,
    pricingProBtn,
    pricingPopular,
    monthText
  } = translations[language];

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
          <source src={sleepHeroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        <div className="relative z-10 text-center max-w-4xl px-4 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight text-center" data-aos="fade-up">
            {heroTitle.split(' ').map((word, index) => (
              <span key={index} className={index === 1 ? 'text-teal-500' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            {heroDesc}
          </p>
          <button className="bg-white text-[#26A0A2] font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:bg-gray-100 transition text-base sm:text-lg md:text-xl transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">
            {heroBtn}
          </button>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className={`w-full text-justify py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`} data-aos="fade-up" data-aos-duration="1000" data-aos-once="false" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="max-w-7xl mx-auto w-full overflow-hidden">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200" data-aos-once="false">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translations[language].keyBenefits}</h2>
            <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translations[language].keyBenefitsDesc}</p>
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
                <img src={sleepBenefitsBg} alt="Sleep Therapy Benefits" className="w-full h-full object-cover" />
              </div>
              <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{language === 'English' ? 'Transform Your Sleep' : language === 'Arabic' ? 'حوّل نومك' : 'שנה את השינה שלך'}</h3>
              <p className={`text-lg max-w-md ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{language === 'English' ? 'Experience the profound benefits of quality sleep that will enhance your physical recovery, mental clarity, and overall well-being.' : language === 'Arabic' ? 'اختبر الفوائد العميقة للنوم الجيد التي ستعزز تعافيك البدني، وصفاء ذهنك، ورفاهيتك العامة.' : 'חווה את היתרונות העמוקים של שינה איכותית שישפרו את ההתאוששות הפיזית שלך, הבהירות המנטלית שלך, ורווחתך הכללית.'}</p>
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
      <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden`}>
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={sleepserve} 
            alt="Sleep Therapy Programs Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#26A0A2] bg-opacity-70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full overflow-hidden">
          <div className="mb-12" data-aos="fade-up">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white`}>
              {programsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {programs.map((program, index) => (
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
                  {howItWorksTitle}
                </h2>
                <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {howItWorksDesc}
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-6">
                {howItWorks.map((step, index) => (
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
                    src={sleepSteps} 
                    alt="Sleep Therapy Steps" 
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
      <section className="w-full text-justify py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-gradient-to-br from-[#26A0A2] to-[#20c997]" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="max-w-7xl mx-auto w-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left Side - Content */}
            <div className="flex flex-col space-y-8" data-aos="fade-right" data-aos-once="false">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">{translations[language].featuresTitle}</h2>
                <p className="text-lg sm:text-xl mb-8 text-white">{translations[language].featuresDesc}</p>
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
              {pricingTitle}
            </h2>
            <p 
              className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto ${isDarkMode ? 'text-white' : 'text-black'}`}
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="false"
            >
              {pricingDesc}
            </p>
            
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Basic Plan */}
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-[#26A0A2] transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{pricingBasicTitle}</h3>
                <div className="text-4xl font-bold text-[#26A0A2] mb-4">
                  {pricingBasicPrice}<span className="text-lg text-gray-600">/{monthText}</span>
                </div>
                <ul className="text-left space-y-3 mb-6">
                  {pricingBasicFeatures.map((feature, index) => (
                    <li className="flex items-center" data-aos="fade-right" data-aos-delay={250 + index * 50} data-aos-once="false" key={index}>
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
                  {pricingBasicBtn}
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
                  {pricingPopular}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2" data-aos="fade-down" data-aos-delay="250" data-aos-once="false">{pricingPremiumTitle}</h3>
                <div className="text-4xl font-bold text-white mb-4" data-aos="zoom-in" data-aos-delay="300" data-aos-once="false">
                  {pricingPremiumPrice}<span className="text-lg text-gray-100">/{monthText}</span>
                </div>
                <ul className="text-left space-y-3 mb-6 text-white">
                  {pricingPremiumFeatures.map((feature, index) => (
                    <li className="flex items-center" data-aos="fade-right" data-aos-delay={350 + index * 50} data-aos-once="false" key={index}>
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
                  {pricingPremiumBtn}
                </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-[#26A0A2] transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-800 mb-2" data-aos="fade-down" data-aos-delay="350" data-aos-once="false">{pricingProTitle}</h3>
                <div className="text-4xl font-bold text-[#26A0A2] mb-4" data-aos="zoom-in" data-aos-delay="400" data-aos-once="false">
                  {pricingProPrice}<span className="text-lg text-gray-600">/{monthText}</span>
                </div>
                <ul className="text-left space-y-3 mb-6">
                  {pricingProFeatures.map((feature, index) => (
                    <li className="flex items-center" data-aos="fade-right" data-aos-delay={450 + index * 50} data-aos-once="false" key={index}>
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
                  {pricingProBtn}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SleepTherapy;