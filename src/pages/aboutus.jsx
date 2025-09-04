import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import Header from "../Header";
import Footer from "../footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useScrollToTop } from "../hooks/useScrollToTop";
import missionImg from "../assets/mission.jpeg";
import whoweareImg from "../assets/whoweare.jpeg";
import whatwethinkImg from "../assets/whatwethink.jpg";
import aboutusVideo from "../assets/aboutus.mp4";
import ourvaluesImg from "../assets/ourvalues.jpg";
import user1 from "../assets/user1.jpeg";
import user2 from "../assets/user2.jpeg";
import user3 from "../assets/user3.jpeg";

// Add custom CSS animations
// Translations for About Us page
const translations = {
  English: {
    aboutTitle: "About Us",
    aboutDesc: "Dedicated to transforming lives through comprehensive health and wellness solutions. We believe everyone deserves access to personalized care that nurtures mind, body, and spirit.",
    growthTitle: "Our Growth Through Years",
    growthDesc: "A journey of continuous growth, innovation, and commitment to transforming lives through wellness.",
    milestones: [
      {
        year: "2018",
        title: "Founded",
        description: "Our journey began with a vision to make wellness accessible to all."
      },
      {
        year: "2020",
        title: "Expanded Services",
        description: "We introduced new programs and expert-led sessions to meet growing needs."
      },
      {
        year: "2023",
        title: "AI Personalization",
        description: "Launched AI-powered personalized wellness plans for better results."
      },
      {
        year: "2025",
        title: "Global Community",
        description: "Built a thriving global wellness community supporting thousands."
      }
    ],
    missionVisionTitle: "Our Mission & Vision",
    missionVisionDesc: "We are committed to empowering individuals to achieve their optimal well-being through evidence-based practices, personalized care, and a supportive community.",
    missionTitle: "Our Mission",
    missionDesc: "To provide accessible, comprehensive wellness solutions that transform lives and create lasting positive change in our community.",
    visionTitle: "Our Vision",
    visionDesc: "To be the leading wellness destination where individuals discover their path to holistic health and sustainable lifestyle transformation.",
    valuesTitle: "Our Values",
    values: [
      { title: "Innovation", description: "We embrace cutting-edge wellness technology and evidence-based practices, always seeking better ways to deliver personalized health solutions." },
      { title: "Integrity", description: "We act with honesty, transparency, and the highest ethical standards in all our wellness practices and client relationships." },
      { title: "Flexibility", description: "We adapt quickly to individual needs and changing health goals, staying agile to meet evolving wellness requirements and lifestyle preferences." },
      { title: "Excellence", description: "We strive for the highest quality in everything we do, delivering outstanding wellness results and transformative experiences for our clients." }
    ],
    whatWeThinkTitle: "What We Think",
    whatWeThinkDesc: "Our philosophy is rooted in the belief that true wellness encompasses mind, body, and spirit. We think that everyone deserves access to personalized, evidence-based wellness solutions that transform lives and create lasting positive change.",
    holisticTitle: "Holistic Approach",
    holisticDesc: "We believe in addressing the complete person - not just symptoms, but the root causes of wellness challenges through comprehensive, integrated care.",
    personalizedTitle: "Personalized Care",
    personalizedDesc: "Every individual is unique, and we think wellness solutions should be tailored to personal needs, goals, and lifestyle preferences.",
    evidenceTitle: "Evidence-Based Practice",
    evidenceDesc: "We think the best wellness outcomes come from combining cutting-edge research with time-tested holistic practices for optimal results.",
    uniqueTitle: "What Makes Us Unique",
    uniqueFeatures: [
      { title: "Holistic Wellness Integration", description: "We seamlessly integrate physical, mental, and spiritual wellness practices, creating a comprehensive approach that addresses the complete person rather than isolated symptoms." },
      { title: "AI-Powered Personalization", description: "Our advanced AI technology creates truly personalized wellness plans that adapt to your progress, preferences, and lifestyle changes in real-time for optimal results." },
      { title: "Expert-Led Community", description: "Access to certified wellness experts, nutritionists, and fitness professionals who provide ongoing support and guidance throughout your wellness transformation journey." }
    ]
  },
  Arabic: {
    aboutTitle: "من نحن",
    aboutDesc: "ملتزمون بتحويل الحياة من خلال حلول الصحة والعافية الشاملة. نؤمن أن الجميع يستحق رعاية شخصية تغذي العقل والجسم والروح.",
    growthTitle: "نموّنا عبر السنوات",
    growthDesc: "رحلة من النمو المستمر والابتكار والالتزام بتحويل الحياة من خلال العافية.",
    milestones: [
      {
        year: "2018",
        title: "تأسيس الشركة",
        description: "بدأت رحلتنا برؤية لجعل العافية متاحة للجميع."
      },
      {
        year: "2020",
        title: "توسيع الخدمات",
        description: "قدمنا برامج جديدة وجلسات يقودها خبراء لتلبية الاحتياجات المتزايدة."
      },
      {
        year: "2023",
        title: "التخصيص بالذكاء الاصطناعي",
        description: "أطلقنا خطط عافية شخصية مدعومة بالذكاء الاصطناعي لتحقيق نتائج أفضل."
      },
      {
        year: "2025",
        title: "مجتمع عالمي",
        description: "أنشأنا مجتمع عافية عالمي مزدهر يدعم الآلاف."
      }
    ],
    missionVisionTitle: "مهمتنا ورؤيتنا",
    missionVisionDesc: "نلتزم بتمكين الأفراد لتحقيق رفاهيتهم المثلى من خلال ممارسات قائمة على الأدلة ورعاية شخصية ومجتمع داعم.",
    missionTitle: "مهمتنا",
    missionDesc: "تقديم حلول عافية شاملة يمكن الوصول إليها وتغيير الحياة وإحداث تغيير إيجابي دائم في مجتمعنا.",
    visionTitle: "رؤيتنا",
    visionDesc: "أن نكون الوجهة الرائدة للعافية حيث يكتشف الأفراد طريقهم نحو الصحة الشاملة والتحول المستدام في نمط الحياة.",
    valuesTitle: "قيمنا",
    values: [
      { title: "الابتكار", description: "نعتمد أحدث تقنيات العافية والممارسات القائمة على الأدلة، ونبحث دائمًا عن طرق أفضل لتقديم حلول صحية شخصية." },
      { title: "النزاهة", description: "نتصرف بأمانة وشفافية وأعلى المعايير الأخلاقية في جميع ممارساتنا وعلاقاتنا مع العملاء." },
      { title: "المرونة", description: "نتكيف بسرعة مع الاحتياجات الفردية والأهداف الصحية المتغيرة، ونبقى مرنين لتلبية متطلبات العافية المتطورة وتفضيلات نمط الحياة." },
      { title: "التميز", description: "نسعى لتحقيق أعلى جودة في كل ما نقوم به، ونقدم نتائج عافية رائعة وتجارب تحويلية لعملائنا." }
    ],
    whatWeThinkTitle: "ماذا نعتقد",
    whatWeThinkDesc: "فلسفتنا قائمة على الاعتقاد بأن العافية الحقيقية تشمل العقل والجسم والروح. نعتقد أن الجميع يستحق حلول عافية شخصية قائمة على الأدلة تغير الحياة وتحدث تغييرًا إيجابيًا دائمًا.",
    holisticTitle: "نهج شامل",
    holisticDesc: "نؤمن بمعالجة الشخص بالكامل - ليس فقط الأعراض، بل الأسباب الجذرية لتحديات العافية من خلال رعاية شاملة ومتكاملة.",
    personalizedTitle: "رعاية شخصية",
    personalizedDesc: "كل فرد فريد، ونعتقد أن حلول العافية يجب أن تكون مصممة حسب الاحتياجات والأهداف وتفضيلات نمط الحياة الشخصية.",
    evidenceTitle: "ممارسة قائمة على الأدلة",
    evidenceDesc: "نعتقد أن أفضل نتائج العافية تأتي من الجمع بين أحدث الأبحاث والممارسات الشاملة المجربة لتحقيق أفضل النتائج.",
    uniqueTitle: "ما الذي يجعلنا مميزين",
    uniqueFeatures: [
      { title: "دمج العافية الشاملة", description: "نقوم بدمج ممارسات العافية الجسدية والعقلية والروحية بسلاسة، مما يخلق نهجًا شاملاً يعالج الشخص بالكامل بدلاً من الأعراض المنعزلة." },
      { title: "التخصيص المدعوم بالذكاء الاصطناعي", description: "تُنشئ تقنيتنا المتقدمة خطط عافية شخصية تتكيف مع تقدمك وتفضيلاتك وتغيرات نمط حياتك في الوقت الفعلي لتحقيق أفضل النتائج." },
      { title: "مجتمع يقوده الخبراء", description: "الوصول إلى خبراء العافية المعتمدين وأخصائيي التغذية والمدربين الذين يقدمون الدعم والإرشاد المستمر طوال رحلة التحول الخاصة بك." }
    ]
  },
  Hebrew: {
    aboutTitle: "עלינו",
    aboutDesc: "מחויבים לשינוי חיים באמצעות פתרונות בריאות ורווחה מקיפים. אנו מאמינים שלכל אחד מגיע טיפול אישי שמזין את הנפש, הגוף והרוח.",
    growthTitle: "הצמיחה שלנו לאורך השנים",
    growthDesc: "מסע של צמיחה מתמשכת, חדשנות ומחויבות לשינוי חיים באמצעות רווחה.",
    milestones: [
      {
        year: "2018",
        title: "הקמה",
        description: "המסע שלנו התחיל עם חזון להנגיש רווחה לכולם."
      },
      {
        year: "2020",
        title: "הרחבת שירותים",
        description: "הצגנו תוכניות חדשות ומפגשים בהובלת מומחים כדי לענות על צרכים גדלים."
      },
      {
        year: "2023",
        title: "התאמה אישית בינה מלאכותית",
        description: "השקנו תוכניות רווחה מותאמות אישית בעזרת בינה מלאכותית לתוצאות טובות יותר."
      },
      {
        year: "2025",
        title: "קהילה גלובלית",
        description: "בנינו קהילת רווחה גלובלית משגשגת התומכת באלפים."
      }
    ],
    missionVisionTitle: "המשימה והחזון שלנו",
    missionVisionDesc: "אנו מחויבים להעצמת אנשים להשגת רווחה מיטבית באמצעות פרקטיקות מבוססות ראיות, טיפול אישי וקהילה תומכת.",
    missionTitle: "המשימה שלנו",
    missionDesc: "להעניק פתרונות רווחה מקיפים ונגישים שמשנים חיים ויוצרים שינוי חיובי מתמשך בקהילה שלנו.",
    visionTitle: "החזון שלנו",
    visionDesc: "להיות יעד הרווחה המוביל שבו אנשים מגלים את דרכם לבריאות הוליסטית ושינוי אורח חיים בר-קיימא.",
    valuesTitle: "הערכים שלנו",
    values: [
      { title: "חדשנות", description: "אנו מאמצים טכנולוגיות רווחה מתקדמות ופרקטיקות מבוססות ראיות, תמיד מחפשים דרכים טובות יותר להעניק פתרונות בריאות אישיים." },
      { title: "יושרה", description: "אנו פועלים ביושר, בשקיפות ובסטנדרטים אתיים גבוהים בכל הפרקטיקות והקשרים שלנו עם לקוחות." },
      { title: "גמישות", description: "אנו מסתגלים במהירות לצרכים אישיים ולמטרות בריאות משתנות, נשארים גמישים כדי לעמוד בדרישות רווחה משתנות והעדפות אורח חיים." },
      { title: "מצוינות", description: "אנו שואפים לאיכות הגבוהה ביותר בכל מה שאנו עושים, מעניקים תוצאות רווחה יוצאות דופן וחוויות טרנספורמטיביות ללקוחותינו." }
    ],
    whatWeThinkTitle: "מה אנחנו חושבים",
    whatWeThinkDesc: "הפילוסופיה שלנו מושרשת באמונה שרווחה אמיתית כוללת נפש, גוף ורוח. אנו חושבים שלכל אחד מגיע פתרונות רווחה אישיים מבוססי ראיות שמשנים חיים ויוצרים שינוי חיובי מתמשך.",
    holisticTitle: "גישה הוליסטית",
    holisticDesc: "אנו מאמינים בטיפול באדם השלם - לא רק בתסמינים, אלא בשורש הבעיות באמצעות טיפול מקיף ומשולב.",
    personalizedTitle: "טיפול אישי",
    personalizedDesc: "כל אדם הוא ייחודי, ואנו חושבים שפתרונות רווחה צריכים להיות מותאמים לצרכים, מטרות והעדפות אישיות.",
    evidenceTitle: "פרקטיקה מבוססת ראיות",
    evidenceDesc: "אנו חושבים שהתוצאות הטובות ביותר מגיעות משילוב מחקר מתקדם עם פרקטיקות הוליסטיות מוכחות לתוצאות מיטביות.",
    uniqueTitle: "מה מייחד אותנו",
    uniqueFeatures: [
      { title: "אינטגרציה הוליסטית של רווחה", description: "אנו משלבים בצורה חלקה פרקטיקות רווחה פיזיות, נפשיות ורוחניות, יוצרים גישה מקיפה שמטפלת באדם השלם ולא רק בתסמינים מבודדים." },
      { title: "התאמה אישית מבוססת בינה מלאכותית", description: "הטכנולוגיה המתקדמת שלנו יוצרת תוכניות רווחה אישיות שמסתגלות להתקדמות, להעדפות ולשינויים באורח החיים שלך בזמן אמת לתוצאות מיטביות." },
      { title: "קהילה בהובלת מומחים", description: "גישה למומחי רווחה מוסמכים, תזונאים ומאמני כושר שמספקים תמיכה והכוונה מתמשכת לאורך כל מסע השינוי שלך." }
    ]
  }
};
const customStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .animate-fade-in-up {
    animation: fadeInUp 1s ease-out forwards;
  }

  .animate-fade-in-up-delay {
    animation: fadeInUp 1s ease-out 0.3s forwards;
    opacity: 0;
  }

  .animate-fade-in-up-delay-1 {
    animation: fadeInUp 1s ease-out 0.2s forwards;
    opacity: 0;
  }

  .animate-fade-in-up-delay-2 {
    animation: fadeInUp 1s ease-out 0.4s forwards;
    opacity: 0;
  }

  .animate-fade-in-up-delay-3 {
    animation: fadeInUp 1s ease-out 0.6s forwards;
    opacity: 0;
  }

  .animate-fade-in-left {
    animation: fadeInLeft 1s ease-out forwards;
  }

  .animate-fade-in-left-delay {
    animation: fadeInLeft 1s ease-out 0.3s forwards;
    opacity: 0;
  }

  .animate-fade-in-left-delay-2 {
    animation: fadeInLeft 1s ease-out 0.4s forwards;
    opacity: 0;
  }

  .animate-fade-in-left-delay-3 {
    animation: fadeInLeft 1s ease-out 0.6s forwards;
    opacity: 0;
  }

  .animate-fade-in-left-delay-4 {
    animation: fadeInLeft 1s ease-out 0.8s forwards;
    opacity: 0;
  }

  .animate-fade-in-right {
    animation: fadeInRight 1s ease-out 0.5s forwards;
    opacity: 0;
  }

  .animate-slide-in-left {
    animation: slideInLeft 1.2s ease-out forwards;
  }

  .animate-slide-in-right {
    animation: slideInRight 1.2s ease-out 0.3s forwards;
    opacity: 0;
  }

  .animate-scale-in {
    animation: scaleIn 0.8s ease-out forwards;
  }

  .scroll-animate {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
  }

  .scroll-animate.animate {
    opacity: 1;
    transform: translateY(0);
  }

  .scroll-animate-left {
    opacity: 0;
    transform: translateX(-30px);
    transition: all 0.8s ease-out;
  }

  .scroll-animate-left.animate {
    opacity: 1;
    transform: translateX(0);
  }

  .scroll-animate-right {
    opacity: 0;
    transform: translateX(30px);
    transition: all 0.8s ease-out;
  }

  .scroll-animate-right.animate {
    opacity: 1;
    transform: translateX(0);
  }

  .scroll-animate-scale {
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.8s ease-out;
  }

  .scroll-animate-scale.animate {
    opacity: 1;
    transform: scale(1);
  }

  .hover\\:scale-105:hover {
    transform: scale(1.05);
  }

  .hover\\:scale-110:hover {
    transform: scale(1.1);
  }

  .hover\\:-translate-y-2:hover {
    transform: translateY(-8px);
  }
`;

// Inject styles into document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = customStyles;
  document.head.appendChild(styleSheet);
}

function AboutHero() {
  const { elementRef, isVisible } = useScrollAnimation(0.1, 0);

  const { language, isRTL } = arguments[0] || {};
  const lang = language || 'English';
  return (
    <section ref={elementRef} className="w-full h-screen flex items-center justify-center px-4 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={aboutusVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
  <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight text-white transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>{translations[lang].aboutTitle}</h1>
        <p className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>{translations[lang].aboutDesc}</p>
      </div>
    </section>
  );
}

function OurGrowthThroughYears({ isDarkMode, language, isRTL }) {
  const { elementRef, isVisible } = useScrollAnimation(0.3, 200);
  
  const milestones = translations[language].milestones.map(m => ({
    ...m,
    color: "bg-[#26A0A2]"
  }));

  return (
    <section ref={elementRef} className={`w-full py-20 px-4 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-gray-100'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          } ${
            isDarkMode ? 'text-white' : 'text-[#26A0A2]'
          }`}>
            {translations[language].growthTitle}
          </h2>
          <p className={`text-xl max-w-3xl mx-auto transition-all duration-1000 ease-out delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          } ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {translations[language].growthDesc}
          </p>
        </div>
        <div className="relative">
          <div className="space-y-16">
            {milestones.map((milestone, index) => {
              const year = milestone.year;
              const isBlackCircle = year === '2016' || year === '2020' || year === '2024' || year === '2026';
              return (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content Banner */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'} ${index % 2 === 0 ? 'scroll-animate-left' : 'scroll-animate-right'}`}>
                    <div className={`p-8 rounded-2xl shadow-lg relative ${
                      isDarkMode 
                        ? (milestone.color === 'bg-[#26A0A2]' ? 'bg-[#26A0A2] text-white' : 'bg-black text-white')
                        : milestone.color
                    }`}>
                      <div className="flex items-center mb-4">
                        <h3 className={`text-2xl font-bold ${
                          isDarkMode ? 'text-white' : 'text-white'
                        }`}>{milestone.title}</h3>
                      </div>
                      <p className={`leading-relaxed text-lg ${
                        isDarkMode ? 'text-gray-300' : 'text-white/90'
                      }`}>
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  {/* Timeline Circle with Number */}
                  <div className={`hidden lg:flex items-center justify-center w-20 h-20 rounded-full shadow-lg z-10 relative scroll-animate-scale ${
                    isDarkMode 
                      ? (isBlackCircle ? 'bg-black' : 'bg-[#26A0A2]')
                      : (isBlackCircle ? 'bg-gray-600' : 'bg-[#26A0A2]')
                  }`}>
                    <div className="text-xl font-bold text-white">{year}</div>
                  </div>
                  {/* Spacer for mobile */}
                  <div className="lg:hidden flex-1"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVision({ isDarkMode, language, isRTL }) {
  const lang = language || 'English';
  return (
    <section className="w-full py-20 px-4 bg-[#26A0A2]" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative scroll-animate-left">
            <img 
              src={whoweareImg} 
              alt="Our Mission" 
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
         
          {/* Right: Content */}
          <div className="space-y-8 scroll-animate-right">
            <div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${isDarkMode ? 'text-black' : 'text-white'}`}>{translations[lang].missionVisionTitle}</h2>
              <p className="text-lg text-justify text-white/90 leading-relaxed">{translations[lang].missionVisionDesc}</p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border-l-4 border-white">
                <h3 className="text-xl font-bold text-white mb-2">{translations[lang].missionTitle}</h3>
                <p className="text-white/90">{translations[lang].missionDesc}</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border-l-4 border-white">
                <h3 className="text-xl font-bold text-white mb-2">{translations[lang].visionTitle}</h3>
                <p className="text-white/90">{translations[lang].visionDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurValues({ isDarkMode, language, isRTL }) {
  const lang = language || 'English';
  const values = translations[lang].values;

  return (
    <section className={`w-full py-20 px-4 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 scroll-animate-left ${isDarkMode ? 'text-white' : 'text-[#26A0A2]'}`}>{translations[lang].valuesTitle}</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Left: Large Image Card */}
          <div className="scroll-animate-left">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-full">
              <img 
                src={ourvaluesImg} 
                alt="Our Values" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: 2x2 Grid of Value Cards */}
          <div className="grid text-justify grid-cols-2 gap-6 scroll-animate-right h-full">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`p-6 shadow-md scroll-animate-scale flex flex-col justify-center ${
                  value.teal 
                    ? 'bg-[#26A0A2] text-white' 
                    : 'bg-white text-gray-900'
                }`}
                style={{
                  borderTopLeftRadius: '35px',
                  borderBottomRightRadius: '35px'
                }}
              >
                <h3 className={`text-xl font-bold mb-3 ${
                  value.teal ? 'text-white' : 'text-[#26A0A2]'
                }`}>
                  {value.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  value.teal ? 'text-white/90' : 'text-gray-900'
                }`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeThink({ isDarkMode, language, isRTL }) {
  const lang = language || 'English';
  return (
    <section className={`w-full py-12 px-4 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl text-justify mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Content */}
          <div className="flex flex-col justify-center space-y-4 scroll-animate-left">
            <div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-3 leading-tight ${isDarkMode ? 'text-white' : 'text-[#26A0A2]'}`}>{translations[lang].whatWeThinkTitle}</h2>
              <p className={`text-base leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translations[lang].whatWeThinkDesc}</p>
            </div>
            
            <div className="space-y-3">
              <div className={`p-4 rounded-xl border-l-4 border-[#26A0A2] hover:scale-105 transition-all duration-300 ${
                isDarkMode ? 'bg-gray-800' : 'bg-[#26A0A2]/5'
              }`}>
                <h3 className={`text-lg font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-[#26A0A2]'}`}>{translations[lang].holisticTitle}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translations[lang].holisticDesc}</p>
              </div>
              
              <div className={`p-4 rounded-xl border-l-4 border-[#26A0A2] animate-fade-in-left-delay-3 hover:scale-105 transition-all duration-300 ${
                isDarkMode ? 'bg-gray-800' : 'bg-[#26A0A2]/5'
              }`}>
                <h3 className={`text-lg font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-[#26A0A2]'}`}>{translations[lang].personalizedTitle}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translations[lang].personalizedDesc}</p>
              </div>
              
              <div className={`p-4 rounded-xl border-l-4 border-[#26A0A2] animate-fade-in-left-delay-4 hover:scale-105 transition-all duration-300 ${
                isDarkMode ? 'bg-gray-800' : 'bg-[#26A0A2]/5'
              }`}>
                <h3 className={`text-lg font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-[#26A0A2]'}`}>{translations[lang].evidenceTitle}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translations[lang].evidenceDesc}</p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative w-full h-full rounded-2xl shadow-2xl overflow-hidden scroll-animate-right">
            <img 
              src={whatwethinkImg} 
              alt="What We Think" 
              className="w-full h-full object-fill hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatMakesUsUnique({ isDarkMode, language, isRTL }) {
  const uniqueFeatures = translations[language].uniqueFeatures;
  const uniqueTitle = translations[language].uniqueTitle;

  return (
    <section className="w-full py-20 px-4 bg-[#26A0A2]">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 scroll-animate">
            {uniqueTitle}
          </h2>
        </div>

        {/* Cards Layout */}
        <div className="grid grid-cols-1 text-justify md:grid-cols-3 gap-8">
          {uniqueFeatures.map((feature, index) => (
            <div 
              key={index}
              className={`relative rounded-lg shadow-sm p-8 hover:shadow-md transition-all duration-300 scroll-animate-scale hover:scale-105 hover:-translate-y-2 ${
                isDarkMode ? 'bg-black' : 'bg-white'
              }`}
              style={{
                borderTopLeftRadius: '8px',
                borderBottomRightRadius: '8px',
                borderTop: `3px solid ${isDarkMode ? 'white' : 'white'}`,
                borderLeft: `3px solid ${isDarkMode ? 'white' : 'white'}`,
                borderBottom: `3px solid ${isDarkMode ? 'white' : 'white'}`,
                borderRight: `3px solid ${isDarkMode ? 'white' : 'white'}`
              }}
            >
              {/* Icon (optional, only if present) */}
              {feature.icon && (
                <div className="w-16 h-16 bg-[#26A0A2] rounded-lg flex items-center justify-center mb-6">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
              )}
              {/* Title */}
              <h3 className={`text-xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {feature.title}
              </h3>
              {/* Description */}
              <p className={`leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { language } = useContext(LanguageContext);
  const testimonials = translations[language].testimonials;
  const testimonialsTitle = translations[language].testimonialsTitle;
  const testimonialsDesc = translations[language].testimonialsDesc;
  const images = [user1, user2, user3, user1, user2, user3];

  return (
    <section className="w-full py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {testimonialsTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {testimonialsDesc}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Rating Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={images[index % images.length]} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-[#26A0A2] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const [counts, setCounts] = useState({
    clients: 0,
    sessions: 0,
    satisfaction: 0,
    years: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            const duration = 2000;
            const steps = 60;
            const stepDuration = duration / steps;

            const targets = {
              clients: 5000,
              sessions: 15000,
              satisfaction: 98,
              years: 8
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
  }, [hasAnimated]);

  const { language } = useContext(LanguageContext);
  const statsTitle = translations[language].statsTitle;
  const statsDesc = translations[language].statsDesc;
  const statsLabels = translations[language].stats;
  const stats = [
    {
      number: counts.clients,
      suffix: statsLabels[0].suffix,
      label: statsLabels[0].label,
      description: statsLabels[0].description
    },
    {
      number: counts.sessions,
      suffix: statsLabels[1].suffix,
      label: statsLabels[1].label,
      description: statsLabels[1].description
    },
    {
      number: counts.satisfaction,
      suffix: statsLabels[2].suffix,
      label: statsLabels[2].label,
      description: statsLabels[2].description
    },
    {
      number: counts.years,
      suffix: statsLabels[3].suffix,
      label: statsLabels[3].label,
      description: statsLabels[3].description
    }
  ];

  return (
    <section ref={sectionRef} className="w-full py-20 px-4 bg-[#26A0A2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 scroll-animate">
            {statsTitle}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto scroll-animate">
            {statsDesc}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 scroll-animate-scale"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}{stat.suffix}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
              <p className="text-white/80 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  const { language } = useContext(LanguageContext);
  const ctaTitle = translations[language].ctaTitle;
  const ctaDesc = translations[language].ctaDesc;
  const ctaStart = translations[language].ctaStart;
  const ctaContact = translations[language].ctaContact;
  return (
    <section className="w-full py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 scroll-animate">
          {ctaTitle}
        </h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed scroll-animate">
          {ctaDesc}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-animate">
          <button className="bg-[#26A0A2] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#0f766e] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            {ctaStart}
          </button>
          <button className="bg-transparent text-[#26A0A2] font-semibold px-8 py-4 rounded-xl border-2 border-[#26A0A2] hover:bg-[#26A0A2] hover:text-white transition-all duration-300">
            {ctaContact}
          </button>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'Arabic' || language === 'Hebrew';

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
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll animation classes
    const animatedElements = document.querySelectorAll(
      '.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale'
    );
    
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      <AboutHero language={language} isRTL={isRTL} />
      <OurGrowthThroughYears isDarkMode={isDarkMode} language={language} isRTL={isRTL} />
      <MissionVision isDarkMode={isDarkMode} language={language} isRTL={isRTL} />
      <WhatWeThink isDarkMode={isDarkMode} language={language} isRTL={isRTL} />
      <WhatMakesUsUnique isDarkMode={isDarkMode} language={language} isRTL={isRTL} />
      <OurValues isDarkMode={isDarkMode} language={language} isRTL={isRTL} />
      <Footer />
    </div>
  );
} 