import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../footer";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import servicesVideo from "../assets/services.mp4";
import mentalWellnessImg from "../assets/mental.jpg";
import sleepImg from "../assets/sleep.jpeg";
import lifestyleCoachingImg from "../assets/detailed/Lifestyle Coaching.webp";
import lifeImg from "../assets/life.jpg";
import fitnessImg from "../assets/fitness.jpeg";
import nutritionImg from "../assets/nutrition.jpeg";
import yogaImg from "../assets/yoga.jpeg";
import wellnessTipsImg from "../assets/tips.jpg";
// import ServicesHero from './ServicesHero'; // Adjust the path as needed

// Move translations object to top-level so all components can access it
export const translations = {
  English: {
    heroTitle: "Explore Our Services",
    heroDesc: "Comprehensive wellness solutions designed to transform your life. From personalized fitness programs to holistic health guidance, we provide everything you need for your wellness journey.",
    exploreBtn: "Explore Services",
    getStartedBtn: "Get Started",
    ourServices: "Our Services",
    ourServicesDesc: "Discover our comprehensive range of wellness services designed to support your health and fitness journey.",
    symptomsTitle: "What are your current symptoms?",
    symptomsDesc: "Tell us about your symptoms and we'll guide you to the most suitable wellness services.",
    findServicesBtn: "Find Services for My Symptoms",
    recommendedTitle: "Recommended Services for Your Symptoms",
    recommendedDesc: "Based on your symptoms, these services are specifically designed to help you find relief and improve your health.",
    backToSymptoms: "← Back to Symptoms",
    achieveTitle: "What You Can Achieve",
    achieveDesc: "Discover realistic, inspiring outcomes from using our wellness services. Transform your life with proven results and sustainable improvements.",
    tipsTitle: "Health & Wellness Tips",
    tipsDesc: "Simple, effective strategies to enhance your daily wellness routine and improve your overall health.",
    readyTitle: "Ready to Transform Your Life?",
    readyDesc: "Join thousands of people who have already improved their health and wellness with our expert guidance and proven programs.",
    getStartedToday: "Get Started Today",
    learnMore: "Learn More"
  },
  Arabic: {
    heroTitle: "استكشف خدماتنا",
    heroDesc: "حلول الصحة الشاملة المصممة لتحويل حياتك. من برامج اللياقة الشخصية إلى الإرشاد الصحي الشامل، نقدم كل ما تحتاجه لرحلة العافية الخاصة بك.",
    exploreBtn: "استكشاف الخدمات",
    getStartedBtn: "ابدأ الآن",
    ourServices: "خدماتنا",
    ourServicesDesc: "اكتشف مجموعتنا الشاملة من خدمات العافية المصممة لدعم رحلتك الصحية واللياقية.",
    symptomsTitle: "ما هي الأعراض الحالية لديك؟",
    symptomsDesc: "أخبرنا بأعراضك وسنرشدك إلى أنسب خدمات العافية.",
    findServicesBtn: "ابحث عن الخدمات لأعراضي",
    recommendedTitle: "الخدمات الموصى بها لأعراضك",
    recommendedDesc: "استنادًا إلى الأعراض الخاصة بك، تم تصميم هذه الخدمات خصيصًا لمساعدتك في إيجاد الراحة وتحسين صحتك.",
    backToSymptoms: "← العودة إلى الأعراض",
    achieveTitle: "ما الذي يمكنك تحقيقه",
    achieveDesc: "اكتشف النتائج الواقعية والملهمة من استخدام خدمات العافية لدينا. حول حياتك بنتائج مثبتة وتحسينات مستدامة.",
    tipsTitle: "نصائح الصحة والعافية",
    tipsDesc: "استراتيجيات بسيطة وفعالة لتعزيز روتين العافية اليومي وتحسين صحتك العامة.",
    readyTitle: "هل أنت مستعد لتحويل حياتك؟",
    readyDesc: "انضم إلى آلاف الأشخاص الذين حسّنوا صحتهم وعافيتهم بإرشادنا وخبراتنا المثبتة.",
    getStartedToday: "ابدأ اليوم",
    learnMore: "تعرف أكثر"
  },
  Hebrew: {
    heroTitle: "גלה את השירותים שלנו",
    heroDesc: "פתרונות בריאות מקיפים שנועדו לשנות את חייך. מתוכניות כושר אישיות ועד להכוונה הוליסטית, אנו מספקים את כל מה שאתה צריך למסע הבריאות שלך.",
    exploreBtn: "גלה שירותים",
    getStartedBtn: "התחל עכשיו",
    ourServices: "השירותים שלנו",
    ourServicesDesc: "גלה את מגוון השירותים המקיפים שלנו שנועדו לתמוך במסע הבריאות והכושר שלך.",
    symptomsTitle: "מהם הסימפטומים הנוכחיים שלך?",
    symptomsDesc: "ספר לנו על הסימפטומים שלך ונכוון אותך לשירותי הבריאות המתאימים ביותר.",
    findServicesBtn: "מצא שירותים לסימפטומים שלי",
    recommendedTitle: "שירותים מומלצים לסימפטומים שלך",
    recommendedDesc: "בהתבסס על הסימפטומים שלך, שירותים אלו נועדו במיוחד לעזור לך למצוא הקלה ולשפר את בריאותך.",
    backToSymptoms: "← חזרה לסימפטומים",
    achieveTitle: "מה תוכל להשיג",
    achieveDesc: "גלה תוצאות מציאותיות ומעוררות השראה משימוש בשירותי הבריאות שלנו. שנה את חייך עם תוצאות מוכחות ושיפורים ברי קיימא.",
    tipsTitle: "טיפים לבריאות ורווחה",
    tipsDesc: "אסטרטגיות פשוטות ויעילות לשיפור שגרת הבריאות היומית שלך ושיפור הבריאות הכללית.",
    readyTitle: "מוכן לשנות את חייך?",
    readyDesc: "הצטרף לאלפי אנשים שכבר שיפרו את בריאותם ורווחתם בעזרת ההכוונה והמומחיות שלנו.",
    getStartedToday: "התחל היום",
    learnMore: "למידע נוסף"
  },
};
const ServicesHero = ({ elementRef, isRTL, isVisible, language, translations, scrollToServices, navigateToContact }) => {
  return (
        <section ref={elementRef} className="w-full h-screen flex items-center justify-center px-4 relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={servicesVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight text-white transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {translations[language].heroTitle}
        </h1>
        <p className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {translations[language].heroDesc}
        </p>
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <button 
            onClick={scrollToServices}
            className="bg-white text-[#26A0A2] font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            {translations[language].exploreBtn}
          </button>
          <button 
            onClick={navigateToContact}
            className="bg-transparent text-white font-semibold px-8 py-4 rounded-xl border-2 border-white hover:bg-white hover:text-[#26A0A2] transition-all duration-300">
            {translations[language].getStartedBtn}
          </button>
        </div>
      </div>
    </section>
  );
}

function OurServices({ isDarkMode }) {
  const { language } = useContext(LanguageContext);
  const isRTL = language === "Arabic" || language === "Hebrew";
  const [currentSection, setCurrentSection] = React.useState(0);
  const { elementRef, isVisible } = useScrollAnimation(0.3, 200);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection(prev => prev === 0 ? 1 : 0);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const section1 = [
    {
      type: "image",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      title: "Yoga & Meditation",
      description: "Transform your mind and body through our comprehensive yoga and meditation programs. Experience deep relaxation, improved flexibility, and mental clarity with expert-guided sessions designed to reduce stress and enhance your overall well-being."
    },
    {
      type: "content",
      title: "Fitness Programs",
      description: "Revolutionize your fitness journey with our personalized training programs. Our certified trainers create custom workout plans that adapt to your progress, combining strength training, cardio, and flexibility exercises to help you achieve your fitness goals faster and more effectively.",
      icon: "💪",
      color: "bg-blue-500"
    },
    {
      type: "image",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      title: "Nutrition Guidance",
      description: "Discover the power of proper nutrition with our expert guidance. Our nutritionists develop personalized meal plans that align with your health objectives, dietary preferences, and lifestyle, ensuring sustainable eating habits that fuel your body and mind."
    },
    {
      type: "content",
      title: "Yoga & Meditation",
      description: "Embark on a transformative journey of self-discovery through our holistic yoga and meditation programs. Learn ancient techniques combined with modern approaches to achieve inner peace, emotional balance, and physical vitality in today's fast-paced world.",
      icon: "🧘",
      color: "bg-purple-500"
    },
    {
      type: "image",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      title: "Personal Training",
      description: "Experience the ultimate in personalized fitness with our one-on-one training sessions. Our expert trainers provide motivation, accountability, and scientifically-proven techniques to help you build strength, endurance, and confidence in a supportive environment."
    },
    {
      type: "content",
      title: "Nutrition Guidance",
      description: "Master the art of healthy eating with our comprehensive nutrition programs. From meal planning and grocery shopping guidance to cooking techniques and dietary education, we empower you to make informed food choices that support your health and wellness goals.",
      icon: "🥗",
      color: "bg-green-500"
    }
  ];

  const section2 = [
    {
      type: "image",
      image: mentalWellnessImg,
      title: "Mental Wellness",
      description: "Comprehensive mental health support including therapy, mindfulness practices, and stress management techniques. Our mental wellness programs help you build resilience and emotional well-being."
    },
    {
      type: "content",
      title: "Sleep Therapy",
      description: "Specialized sleep therapy programs to help you achieve better sleep quality and overcome insomnia. Our experts provide personalized solutions for restful nights and improved overall health.",
      icon: "💤",
      color: "bg-blue-500"
    },
    {
      type: "image",
      image: lifeImg,
      title: "Wellness Coaching",
      description: "Holistic wellness coaching to help you achieve balance in all aspects of your life - physical, mental, and emotional."
    },
    {
      type: "content",
      title: "Mental Wellness",
      description: "Comprehensive mental health support including therapy, mindfulness practices, and stress management techniques. Our mental wellness programs help you build resilience and emotional well-being.",
      icon: "🧠",
      color: "bg-purple-500"
    },
    {
      type: "image",
      image: sleepImg,
      title: "Health Assessments",
      description: "Comprehensive health evaluations and progress tracking to monitor your wellness journey and achievements."
    },
    {
      type: "content",
      title: "Lifestyle Coaching",
      description: "Personalized lifestyle coaching to help you create sustainable habits and routines. Our coaches guide you through positive lifestyle changes for long-term health and wellness success.",
      icon: "🌟",
      color: "bg-green-500"
    }
  ];

  const currentServices = currentSection === 0 ? section1 : section2;

  return (
    <section id="our-services" ref={elementRef} className={`w-full py-20 px-4 transition-colors duration-300 ${
      isDarkMode ? 'bg-black' : 'bg-white'
    }`} dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          } ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {translations[language].ourServices}
          </h2>
          <p className={`text-xl max-w-3xl mx-auto transition-all duration-1000 ease-out delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          } ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {translations[language].ourServicesDesc}
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={() => setCurrentSection(0)}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${currentSection === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:scale-110'}`}
            disabled={currentSection === 0}
          >
            <svg className="w-6 h-6 text-[#26A0A2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <button 
            onClick={() => setCurrentSection(1)}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${currentSection === 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:scale-110'}`}
            disabled={currentSection === 1}
          >
            <svg className="w-6 h-6 text-[#26A0A2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>

          <div className={`grid grid-cols-3 text-justify gap-0 transition-opacity duration-1000 ${currentSection === 0 ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
            {section1.map((service, index) => (
              <div key={index} className="relative">
                {service.type === "image" ? (
                  <div className="w-full h-64 bg-gray-200 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="bg-[#26A0A2] p-8 h-64 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className={`grid grid-cols-3 gap-0 text-justify transition-opacity duration-1000 ${currentSection === 1 ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
            {section2.map((service, index) => (
              <div key={index} className="relative">
                {service.type === "image" ? (
                  <div className="w-full h-64 bg-gray-200 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="bg-[#26A0A2] p-8 h-64 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Section Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSection === 0 ? 'bg-[#26A0A2]' : 'bg-gray-300'}`}></div>
          <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSection === 1 ? 'bg-[#26A0A2]' : 'bg-gray-300'}`}></div>
        </div>
      </div>
    </section>
  );
}

function SymptomGoalChecker({ isDarkMode }) {
  const { language } = useContext(LanguageContext);
  const isRTL = language === "Arabic" || language === "Hebrew";
  const navigate = useNavigate();
  const [selectedSymptoms, setSelectedSymptoms] = React.useState([]);
  const [showResults, setShowResults] = React.useState(false);
  const { elementRef, isVisible } = useScrollAnimation(0.3, 200);

  // Translated symptom titles and descriptions
  const symptomTranslations = {
    insomnia: {
      English: { title: "Insomnia", description: "Difficulty falling or staying asleep" },
      Arabic: { title: "الأرق", description: "صعوبة في النوم أو البقاء نائمًا" },
      Hebrew: { title: "נדודי שינה", description: "קושי להירדם או להישאר ישן" }
    },
    stress: {
      English: { title: "Chronic Stress", description: "Constant worry and anxiety" },
      Arabic: { title: "إجهاد مزمن", description: "قلق وتوتر مستمر" },
      Hebrew: { title: "לחץ כרוני", description: "דאגה וחרדה מתמשכת" }
    },
    fatigue: {
      English: { title: "Low Energy", description: "Feeling tired and unmotivated" },
      Arabic: { title: "انخفاض الطاقة", description: "الشعور بالتعب وقلة الحافز" },
      Hebrew: { title: "אנרגיה נמוכה", description: "תחושת עייפות וחוסר מוטיבציה" }
    },
    weight_gain: {
      English: { title: "Weight Issues", description: "Struggling with weight management" },
      Arabic: { title: "مشاكل الوزن", description: "صعوبة في إدارة الوزن" },
      Hebrew: { title: "בעיות משקל", description: "קושי בניהול משקל" }
    },
    back_pain: {
      English: { title: "Back Pain", description: "Chronic back and neck pain" },
      Arabic: { title: "آلام الظهر", description: "آلام مزمنة في الظهر والرقبة" },
      Hebrew: { title: "כאבי גב", description: "כאבים כרוניים בגב ובצוואר" }
    },
    digestive: {
      English: { title: "Digestive Issues", description: "Bloating, indigestion, gut problems" },
      Arabic: { title: "مشاكل الهضم", description: "انتفاخ، عسر هضم، مشاكل في الأمعاء" },
      Hebrew: { title: "בעיות עיכול", description: "נפיחות, עיכול לקוי, בעיות במערכת העיכול" }
    },
    mood_swings: {
      English: { title: "Mood Swings", description: "Irregular mood and emotional instability" },
      Arabic: { title: "تغيرات المزاج", description: "مزاج غير منتظم وعدم استقرار عاطفي" },
      Hebrew: { title: "שינויים במצב הרוח", description: "מצב רוח לא יציב וחוסר יציבות רגשית" }
    },
    headaches: {
      English: { title: "Frequent Headaches", description: "Regular tension or migraine headaches" },
      Arabic: { title: "صداع متكرر", description: "صداع توتري أو نصفي منتظم" },
      Hebrew: { title: "כאבי ראש תכופים", description: "כאבי ראש מתוחים או מיגרנות באופן קבוע" }
    }
  };

  const clientSymptoms = [
    { id: "insomnia" },
    { id: "stress" },
    { id: "fatigue" },
    { id: "weight_gain" },
    { id: "back_pain" },
    { id: "digestive" },
    { id: "mood_swings" },
    { id: "headaches" }
  ];

  const serviceRecommendations = {
    insomnia: [
      {
        title: "Sleep Therapy",
        description: "Specialized sleep therapy programs to help you achieve better sleep quality and overcome insomnia",
        image: sleepImg,
        servicePage: "sleep-therapy"
      },
      {
        title: "Yoga & Meditation",
        description: "Mind-body wellness through yoga classes and meditation sessions for stress relief and inner peace",
        image: yogaImg,
        servicePage: "yoga-meditation"
      }
    ],
    stress: [
      {
        title: "Mental Wellness",
        description: "Comprehensive mental health support including therapy, mindfulness practices, and stress management",
        image: mentalWellnessImg,
        servicePage: "mental-wellness"
      },
      {
        title: "Yoga & Meditation",
        description: "Transform your mind and body through comprehensive yoga and meditation programs",
        image: yogaImg,
        servicePage: "yoga-meditation"
      }
    ],
    fatigue: [
      {
        title: "Fitness Programs",
        description: "Revolutionize your fitness journey with personalized training programs to boost energy",
        image: fitnessImg,
        servicePage: "fitness-programs"
      },
      {
        title: "Nutrition Guidance",
        description: "Expert nutrition advice and meal planning to fuel your body and mind",
        image: nutritionImg,
        servicePage: "nutrition-guidance"
      }
    ],
    weight_gain: [
      {
        title: "Personal Training",
        description: "One-on-one fitness coaching tailored to your weight loss goals and fitness level",
        image: fitnessImg,
        servicePage: "personal-training"
      },
      {
        title: "Nutrition Guidance",
        description: "Master the art of healthy eating with comprehensive nutrition programs",
        image: nutritionImg,
        servicePage: "nutrition-guidance"
      }
    ],
    back_pain: [
      {
        title: "Yoga & Meditation",
        description: "Improve flexibility and reduce pain through yoga classes and meditation sessions",
        image: yogaImg,
        servicePage: "yoga-meditation"
      },
      {
        title: "Personal Training",
        description: "Expert trainers provide techniques to strengthen core and improve posture",
        image: fitnessImg,
        servicePage: "personal-training"
      }
    ],
    digestive: [
      {
        title: "Nutrition Guidance",
        description: "Expert nutrition advice and meal planning to support digestive health",
        image: nutritionImg,
        servicePage: "nutrition-guidance"
      },
      {
        title: "Lifestyle Coaching",
        description: "Personalized lifestyle coaching to create sustainable healthy habits",
        image: lifestyleCoachingImg,
        servicePage: "lifestyle-coaching"
      }
    ],
    mood_swings: [
      {
        title: "Mental Wellness",
        description: "Comprehensive mental health support to help you build resilience and emotional well-being",
        image: mentalWellnessImg,
        servicePage: "mental-wellness"
      },
      {
        title: "Lifestyle Coaching",
        description: "Holistic wellness coaching to help you achieve balance in all aspects of your life",
        image: lifestyleCoachingImg,
        servicePage: "lifestyle-coaching"
      }
    ],
    headaches: [
      {
        title: "Yoga & Meditation",
        description: "Mind-body wellness through yoga classes and meditation sessions for stress relief",
        image: yogaImg,
        servicePage: "yoga-meditation"
      },
      {
        title: "Sleep Therapy",
        description: "Specialized sleep therapy programs to improve sleep quality and reduce headaches",
        image: sleepImg,
        servicePage: "sleep-therapy"
      }
    ]
  };

  const handleSymptomToggle = (symptomId) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptomId) 
        ? prev.filter(id => id !== symptomId)
        : [...prev, symptomId]
    );
  };

  const handleFindServices = () => {
    if (selectedSymptoms.length > 0) {
      // Scroll to top when showing results
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      setShowResults(true);
    }
  };

  const getRecommendedServices = () => {
    const allServices = [];
    const seenServices = new Set();
    
    selectedSymptoms.forEach(symptomId => {
      if (serviceRecommendations[symptomId]) {
        serviceRecommendations[symptomId].forEach(service => {
          // Use service title as unique identifier to avoid duplicates
          if (!seenServices.has(service.title)) {
            seenServices.add(service.title);
            allServices.push(service);
          }
        });
      }
    });
    return allServices;
  };

  const handleServiceClick = (servicePage) => {
    try {
      // Scroll to top before navigation
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      
      // Navigate to the specific service page based on servicePage value
      switch (servicePage) {
        case 'yoga-meditation':
          navigate('/yoga-meditation');
          break;
        case 'sleep-therapy':
          navigate('/sleep-therapy');
          break;
        case 'mental-wellness':
          navigate('/mental-wellness');
          break;
        case 'fitness-programs':
          navigate('/fitness-programs');
          break;
        case 'nutrition-guidance':
          navigate('/diet-nutrition');
          break;
        case 'personal-training':
          navigate('/fitness-programs');
          break;
        case 'lifestyle-coaching':
          navigate('/lifestyle-coaching');
          break;
        default:
          console.warn(`Unknown service page: ${servicePage}`);
          break;
      }
    } catch (error) {
      console.error('Error navigating to service page:', error);
    }
  };

  return (
    <section ref={elementRef} className="w-full py-20 px-4 bg-[#26A0A2]" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-1000 ease-out delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            {translations[language].symptomsTitle}
          </h2>
          <p className={`text-xl text-white/90 max-w-3xl mx-auto transition-all duration-1000 ease-out delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            {translations[language].symptomsDesc}
          </p>
        </div>

        {!showResults ? (
          <>
                         <div className="max-w-6xl mx-auto mb-12">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 {/* Left Column - First 4 symptoms */}
                 <div className="space-y-4">
                   {clientSymptoms.slice(0, 4).map((symptom) => (
                     <label
                       key={symptom.id}
                       className={`flex items-center p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                         selectedSymptoms.includes(symptom.id)
                           ? `border-[#26A0A2] shadow-lg ${isDarkMode ? 'bg-black' : 'bg-white'}`
                           : `${isDarkMode ? 'border-gray-600 bg-black hover:border-[#26A0A2]' : 'border-gray-200 bg-white hover:border-[#26A0A2]'} hover:shadow-md`
                       }`}
                     >
                       <input
                         type="checkbox"
                         checked={selectedSymptoms.includes(symptom.id)}
                         onChange={() => handleSymptomToggle(symptom.id)}
                         className="w-5 h-5 text-[#26A0A2] border-gray-300 rounded focus:ring-[#26A0A2] focus:ring-2 mr-4"
                       />
                       <div className="flex-1">
                         <div className={`font-semibold text-lg ${
                           selectedSymptoms.includes(symptom.id) ? 'text-[#26A0A2]' : (isDarkMode ? 'text-white' : 'text-gray-900')
                         }`}>
                           {symptomTranslations[symptom.id][language].title}
                         </div>
                         <div className={`text-sm mt-1 ${
                           selectedSymptoms.includes(symptom.id) ? 'text-[#26A0A2]/80' : (isDarkMode ? 'text-gray-300' : 'text-gray-600')
                         }`}>
                           {symptomTranslations[symptom.id][language].description}
                         </div>
                       </div>
                     </label>
                   ))}
                 </div>
                 
                 {/* Right Column - Last 4 symptoms */}
                 <div className="space-y-4">
                   {clientSymptoms.slice(4, 8).map((symptom) => (
                     <label
                       key={symptom.id}
                       className={`flex items-center p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                         selectedSymptoms.includes(symptom.id)
                           ? `border-[#26A0A2] shadow-lg ${isDarkMode ? 'bg-black' : 'bg-white'}`
                           : `${isDarkMode ? 'border-gray-600 bg-black hover:border-[#26A0A2]' : 'border-gray-200 bg-white hover:border-[#26A0A2]'} hover:shadow-md`
                       }`}
                     >
                       <input
                         type="checkbox"
                         checked={selectedSymptoms.includes(symptom.id)}
                         onChange={() => handleSymptomToggle(symptom.id)}
                         className="w-5 h-5 text-[#26A0A2] border-gray-300 rounded focus:ring-[#26A0A2] focus:ring-2 mr-4"
                       />
                       <div className="flex-1">
                         <div className={`font-semibold text-lg ${
                           selectedSymptoms.includes(symptom.id) ? 'text-[#26A0A2]' : (isDarkMode ? 'text-white' : 'text-gray-900')
                         }`}>
                           {symptomTranslations[symptom.id][language].title}
                         </div>
                         <div className={`text-sm mt-1 ${
                           selectedSymptoms.includes(symptom.id) ? 'text-[#26A0A2]/80' : (isDarkMode ? 'text-gray-300' : 'text-gray-600')
                         }`}>
                           {symptomTranslations[symptom.id][language].description}
                         </div>
                       </div>
                     </label>
                   ))}
                 </div>
               </div>
             </div>

                         <div className="text-center">
                                 <button
                                 onClick={handleFindServices}
                                 disabled={selectedSymptoms.length === 0}
                                 className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                                   selectedSymptoms.length > 0
                                     ? 'bg-[#26A0A2] text-white hover:bg-[#1f8a8c] shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                                     : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                 }`}
                               >
                                 {translations[language].findServicesBtn}
                               </button>
             </div>
          </>
        ) : (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className={`text-2xl font-bold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {translations[language].recommendedTitle}
              </h3>
              <p className={`mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {translations[language].recommendedDesc}
              </p>
              <button
                onClick={() => {
                  // Scroll to top
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                  });
                  setShowResults(false);
                  setSelectedSymptoms([]);
                }}
                className="bg-white text-[#26A0A2] px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {translations[language].backToSymptoms}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getRecommendedServices().map((service, index) => (
                <div key={`${service.title}-${index}`} className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
                  isDarkMode ? 'bg-black border-gray-700' : 'bg-white border-gray-100'
                }`}>
                  <div className="w-16 h-16 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={service.image} 
                      alt={service.title || 'Service'}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        console.warn(`Failed to load image for service: ${service.title}`);
                      }}
                    />
                  </div>
                  <h4 className={`text-lg font-bold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title || 'Service'}
                  </h4>
                  <p className={`text-sm leading-relaxed mb-4 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {service.description || 'No description available'}
                  </p>
                  <button 
                    onClick={() => handleServiceClick(service.servicePage)}
                    className="bg-[#26A0A2] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#1f8a8c] transition-colors duration-300"
                  >
                    View Service Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function WhatYouCanAchieve({ isDarkMode }) {
  const { language } = useContext(LanguageContext);
  const isRTL = language === "Arabic" || language === "Hebrew";
  // Translated goal titles and descriptions
  const goalTranslations = [
    {
      English: {
        title: "Improved Flexibility",
        description: "Enhance your range of motion and joint mobility through our specialized yoga and stretching programs designed for all fitness levels."
      },
      Arabic: {
        title: "مرونة محسّنة",
        description: "عزز نطاق حركتك ومرونة المفاصل من خلال برامج اليوغا والتمدد المصممة لجميع مستويات اللياقة."
      },
      Hebrew: {
        title: "גמישות משופרת",
        description: "שפר את טווח התנועה וגמישות המפרקים שלך באמצעות תוכניות יוגה ומתיחות מותאמות לכל רמות הכושר."
      },
      color: "bg-[#26A0A2]",
      number: "01"
    },
    {
      English: {
        title: "Reduced Anxiety",
        description: "Lower stress levels and improve mental clarity with our mindfulness practices, meditation sessions, and stress management techniques."
      },
      Arabic: {
        title: "تقليل القلق",
        description: "قلل مستويات التوتر وحسّن صفاء الذهن من خلال ممارسات اليقظة الذهنية وجلسات التأمل وتقنيات إدارة التوتر."
      },
      Hebrew: {
        title: "חרדה מופחתת",
        description: "הפחת את רמות הלחץ ושפר את הבהירות המנטלית שלך עם תרגולי מיינדפולנס, מדיטציה וטכניקות ניהול לחץ."
      },
      color: "bg-[#26A0A2]",
      number: "02"
    },
    {
      English: {
        title: "Better Posture",
        description: "Strengthen your core and achieve proper spine alignment through our posture correction programs and specialized training sessions."
      },
      Arabic: {
        title: "وضعية أفضل",
        description: "قوّي عضلاتك الأساسية وحقق محاذاة صحيحة للعمود الفقري من خلال برامج تصحيح الوضعية وجلسات التدريب المتخصصة."
      },
      Hebrew: {
        title: "יציבה טובה יותר",
        description: "חזק את שרירי הליבה שלך והשג יישור נכון של עמוד השדרה באמצעות תוכניות תיקון יציבה ואימונים מיוחדים."
      },
      color: "bg-[#26A0A2]",
      number: "03"
    },
    {
      English: {
        title: "Inner Calm",
        description: "Achieve deep sense of peace and emotional balance through our holistic wellness practices and expert-guided meditation programs."
      },
      Arabic: {
        title: "هدوء داخلي",
        description: "حقق شعورًا عميقًا بالسلام والتوازن العاطفي من خلال ممارسات العافية الشاملة وبرامج التأمل الموجهة من الخبراء."
      },
      Hebrew: {
        title: "רוגע פנימי",
        description: "השג תחושת שלווה עמוקה ואיזון רגשי באמצעות תרגולי בריאות הוליסטיים ותוכניות מדיטציה בהנחיית מומחים."
      },
      color: "bg-[#26A0A2]",
      number: "04"
    }
  ];

  return (
    <section className={`w-full py-20 px-4 transition-colors duration-300 ${
      isDarkMode ? 'bg-black' : 'bg-white'
    }`} dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {translations[language].achieveTitle}
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {translations[language].achieveDesc}
          </p>
        </div>
        <div className="grid grid-cols-1 text-justify md:grid-cols-2 lg:grid-cols-4 gap-6">
          {goalTranslations.map((goal, index) => (
            <div 
              key={index} 
              className={`rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden ${
                isDarkMode ? 'bg-black' : 'bg-white'
              }`}
            >
              {/* Colored Tab */}
              <div className={`${goal.color} text-white p-4 rounded-tl-xl`}>
                <div className="text-3xl font-bold">{goal.number}</div>
              </div>
              {/* Card Content */}
              <div className="p-6">
                <div>
                  <h3 className={`text-lg font-bold mb-3 ${goal.color.replace('bg-', 'text-')}`}>
                    {goal[language].title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {goal[language].description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HealthWellnessTips({ isDarkMode }) {
  const { language } = useContext(LanguageContext);
  const isRTL = language === "Arabic" || language === "Hebrew";
  // Translated tips
  const tipsTranslations = [
    {
      English: {
        title: "Stay Hydrated",
        description: "Drink at least 8 glasses of water daily to maintain optimal body function and energy levels."
      },
      Arabic: {
        title: "حافظ على الترطيب",
        description: "اشرب ما لا يقل عن 8 أكواب من الماء يوميًا للحفاظ على وظائف الجسم ومستويات الطاقة المثلى."
      },
      Hebrew: {
        title: "הישארו רוויים",
        description: "שתו לפחות 8 כוסות מים ביום לשמירה על תפקוד גוף מיטבי ורמות אנרגיה."
      }
    },
    {
      English: {
        title: "Get Quality Sleep",
        description: "Aim for 7-9 hours of sleep per night to support recovery and mental clarity."
      },
      Arabic: {
        title: "احصل على نوم جيد",
        description: "اسعَ للحصول على 7-9 ساعات من النوم كل ليلة لدعم التعافي وصفاء الذهن."
      },
      Hebrew: {
        title: "שינה איכותית",
        description: "שאפו ל-7-9 שעות שינה בלילה לתמיכה בהתאוששות ובהירות מנטלית."
      }
    },
    {
      English: {
        title: "Move Daily",
        description: "Incorporate at least 30 minutes of physical activity into your daily routine."
      },
      Arabic: {
        title: "تحرك يوميًا",
        description: "أدرج ما لا يقل عن 30 دقيقة من النشاط البدني في روتينك اليومي."
      },
      Hebrew: {
        title: "היו פעילים כל יום",
        description: "שלבו לפחות 30 דקות של פעילות גופנית בשגרה היומית שלכם."
      }
    },
    {
      English: {
        title: "Practice Mindfulness",
        description: "Take 10-15 minutes daily for meditation or deep breathing exercises."
      },
      Arabic: {
        title: "مارس اليقظة الذهنية",
        description: "خصص 10-15 دقيقة يوميًا للتأمل أو تمارين التنفس العميق."
      },
      Hebrew: {
        title: "תרגלו מיינדפולנס",
        description: "הקדישו 10-15 דקות ביום למדיטציה או לתרגילי נשימה עמוקה."
      }
    },
    {
      English: {
        title: "Eat Balanced Meals",
        description: "Focus on whole foods, lean proteins, and plenty of fruits and vegetables."
      },
      Arabic: {
        title: "تناول وجبات متوازنة",
        description: "ركز على الأطعمة الكاملة، البروتينات الخالية من الدهون، والكثير من الفواكه والخضروات."
      },
      Hebrew: {
        title: "אכלו ארוחות מאוזנות",
        description: "התמקדו במזון מלא, חלבונים רזים והרבה פירות וירקות."
      }
    }
  ];

  return (
    <section className="w-full py-20 px-4 bg-[#26A0A2]" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1 flex items-center">
            <img 
              src={wellnessTipsImg} 
              alt="Health and Wellness" 
              className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
          {/* Right Side - Tips */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? 'text-black' : 'text-white'
            }`}>
              {translations[language].tipsTitle}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {translations[language].tipsDesc}
            </p>
            <div className="space-y-6">
              {tipsTranslations.map((tip, index) => (
                <div key={index} className="border-l-4 border-white pl-6 py-2">
                  <h3 className={`text-lg font-semibold mb-2 ${
                    isDarkMode ? 'text-black' : 'text-white'
                  }`}>
                    {tip[language].title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {tip[language].description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection({ isDarkMode }) {
  const { language } = useContext(LanguageContext);
  const isRTL = language === "Arabic" || language === "Hebrew";
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contact');
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('our-services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`w-full py-20 px-4 transition-colors duration-300 ${
      isDarkMode ? 'bg-black' : 'bg-white'
    }`} dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
          isDarkMode ? 'text-white' : 'text-[#26A0A2]'
        }`}>
          {translations[language].readyTitle}
        </h2>
        <p className={`text-xl max-w-3xl mx-auto mb-8 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {translations[language].readyDesc}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={navigateToContact}
            className="bg-[#26A0A2] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#1f8a8c] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            {translations[language].getStartedToday}
          </button>
          <button 
            onClick={scrollToServices}
            className="bg-transparent text-[#26A0A2] font-semibold px-8 py-4 rounded-xl border-2 border-[#26A0A2] hover:bg-[#26A0A2] hover:text-white transition-all duration-300">
            {translations[language].learnMore}
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const { language } = useContext(LanguageContext);
  const isRTL = language === "Arabic" || language === "Hebrew";

  // Scroll to top when component mounts
  useScrollToTop();

  // Dark mode functionality
  React.useEffect(() => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(darkMode);
  }, []);

  React.useEffect(() => {
    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.detail);
    };
    window.addEventListener('darkModeChanged', handleDarkModeChange);
    return () => {
      window.removeEventListener('darkModeChanged', handleDarkModeChange);
    };
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} dir={isRTL ? "rtl" : "ltr"}>
      <Header />
      {/* <ServicesHero /> */}
      {/* Use useScrollAnimation for elementRef and isVisible */}
      <ServicesHero 
        elementRef={React.createRef()} 
        isRTL={isRTL} 
        isVisible={true} 
        language={language} 
        translations={translations} 
        scrollToServices={() => {}} 
        navigateToContact={() => {}} 
      />
      <SymptomGoalChecker isDarkMode={isDarkMode} />
      <WhatYouCanAchieve isDarkMode={isDarkMode} />
      <HealthWellnessTips isDarkMode={isDarkMode} />
      <CTASection isDarkMode={isDarkMode} />
      <Footer />
    </div>
  );
}
