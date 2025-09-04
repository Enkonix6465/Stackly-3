import React, { useEffect, useState, useRef, useContext } from 'react';
import AOS from 'aos';
import '../aos-custom.css';
import { Link, useNavigate } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useScrollToTop } from "../hooks/useScrollToTop";

// Assets from detailed folder
import coachImg from '../assets/detailed/Karan Mehta.png';
import service1Img from '../assets/detailed/Fitness Programs.jpg';
import service2Img from '../assets/detailed/Diet & Nutrition.jpg';
import service3Img from '../assets/detailed/Yoga & Meditation.webp';
import expert1 from '../assets/detailed/Priya Sharma.jpeg.jpg';
import expert2 from '../assets/detailed/Dr. Arjun Rao.jpeg.jpg';
import expert3 from '../assets/detailed/Lina Gomez.avif';
import eventImg from '../assets/detailed/Sleep Therapy.jpg';
import event1Img from '../assets/yoga.jpg';
import event2Img from '../assets/detailed/Diet & Nutrition.jpg';
import event3Img from '../assets/detailed/Mental Wellness.jpeg.jpg';
import why1 from '../assets/why1.jpg';
import ceoImg from '../assets/ceo.jpg';
// Trainer images
import trainer1 from '../assets/trainer 1.jpg';
import trainer2 from '../assets/trainer 2.jpeg.jpg';
import trainer3 from '../assets/trainer 3.jpg';
import trainer4 from '../assets/trainer 4.jpg';
// Hero video
import heroVideo from '../assets/herobg.mp4';
import insightsImg from '../assets/insights.png';
import Header from "../Header";
import Footer from "../footer";
import { LanguageContext } from "../LanguageContext";

// Translations and RTL logic moved outside JSX
const translations = {
  English: {
    events: [
      {
        img: event1Img,
        title: "Sunrise Yoga & Meditation",
        time: "Saturday, 7:00 AM",
        instructor: "David Thompson",
      },
      {
        img: event2Img,
        title: "Healthy Diet & Nutrition Q&A",
        time: "Sunday, 11:00 AM",
        instructor: "Marcus Rodriguez",
      },
      {
        img: event3Img,
        title: "Mental Wellness",
        time: "Monday, 6:00 PM",
        instructor: "Dr. Aisha Johnson",
      },
      {
        img: service1Img,
        title: "Total Body Fitness Program",
        time: "Tuesday, 5:30 PM",
        instructor: "Sarah Chen",
      },
      {
        img: eventImg,
        title: "Sleep Therapy Workshop",
        time: "Wednesday, 8:00 PM",
        instructor: "Dr. Aisha Johnson",
      },
      {
        img: coachImg,
        title: "Lifestyle Coaching Session",
        time: "Friday, 4:00 PM",
        instructor: "Sarah Chen",
      },
      {
        img: trainer1,
        title: "Advanced Strength Training",
        time: "Thursday, 6:30 AM",
        instructor: "Sarah Chen",
      },
      {
        img: trainer2,
        title: "Nutrition Planning Workshop",
        time: "Saturday, 10:00 AM",
        instructor: "Marcus Rodriguez",
      },
      {
        img: trainer3,
        title: "Mind-Body Balance Session",
        time: "Sunday, 5:00 PM",
        instructor: "Dr. Aisha Johnson",
      },
      {
        img: trainer4,
        title: "Advanced Yoga Flow",
        time: "Monday, 7:30 AM",
        instructor: "David Thompson",
      },
    ],
    heroTitle: "Discover Your Potential and Achieve Wellness",
    heroDesc: "Experience the perfect blend of fitness, nutrition, and mindfulness. Our expert-led programs are designed to help you reach your health and wellness goals with personalized guidance and support.",
    heroBtn: "Start Your Journey",
    expertsTitle: "Professional Team",
    expertsDesc: "Our dedicated wellness experts are committed to helping you achieve your health and fitness goals.",
    ceoTitle: "Meet Our CEO",
    ceoDesc: "Leading our mission to transform lives through wellness and fitness excellence.",
    ceoBio1: "With over 15 years of experience in the health and wellness industry, our CEO has dedicated their career to helping people achieve their fitness goals and live healthier, more fulfilling lives.",
    ceoBio2: "We believe that true wellness comes from a balanced approach to physical fitness, mental health, and nutrition. Our team of certified experts is here to guide you every step of the way.",
    ceoName: "- John Smith, CEO",
    whyChoose: "WHY CHOOSE US",
    whyTitle: "Empowering Your Success with Wellness Expertise",
    whyDesc: "Our certified experts, personalized plans, and supportive community help you achieve your health and wellness goals with confidence and care.",
    uniqueApproach: "Our Unique Approach",
    uniqueDesc: "We believe in a holistic approach to wellness, combining expert guidance, innovative programs, and a caring community. Our personalized plans and proven support systems ensure you get the results you deserve.",
    personalizedPlans: "Personalized Plans",
    communityInnovation: "Community & Innovation",
    supportResults: "Support & Results",
    upcomingEvents: "Upcoming Events & Classes",
    joinNow: "Join Now",
    registerTitle: "Register for Class",
    registerName: "Full Name *",
    registerEmail: "Email Address *",
    registerPhone: "Phone Number *",
    registerLevel: "Experience Level",
    registerLevelSelect: "Select your experience level",
    registerLevelBeginner: "Beginner",
    registerLevelIntermediate: "Intermediate",
    registerLevelAdvanced: "Advanced",
    registerSpecial: "Special Requirements",
    registerSpecialPlaceholder: "Any special requirements or notes...",
    registerBtn: "Register Now",
    registerTerms: "By registering, you agree to our terms and conditions. We'll contact you shortly to confirm your registration.",
    successTitle: "Registration Successful!",
    successDesc: "Thank you for registering for the class. We've sent a confirmation email with all the details.",
    closeBtn: "Close",
    insightsTitle: "Wellness Insights",
    insightsDesc: "Discover the latest trends, research, and expert insights in health and wellness. Our comprehensive analysis helps you make informed decisions about your fitness journey.",
    evidenceBased: "Evidence-Based Approach",
    evidenceDesc: "All our recommendations are backed by the latest scientific research and proven methodologies.",
    personalizedStrategies: "Personalized Strategies",
    personalizedStrategiesDesc: "Tailored wellness strategies that adapt to your unique lifestyle and goals.",
    communitySupport: "Community Support",
    communitySupportDesc: "Join a supportive community of like-minded individuals on their wellness journey.",
    exploreInsights: "Explore Insights"
  },
  Arabic: {
    events: [
      {
        img: event1Img,
        title: "يوغا وتأمل عند شروق الشمس",
        time: "السبت، 7:00 صباحًا",
        instructor: "ديفيد طومسون",
      },
      {
        img: event2Img,
        title: "أسئلة وأجوبة حول النظام الغذائي والتغذية الصحية",
        time: "الأحد، 11:00 صباحًا",
        instructor: "ماركوس رودريغيز",
      },
      {
        img: event3Img,
        title: "العافية الذهنية",
        time: "الاثنين، 6:00 مساءً",
        instructor: "د. عائشة جونسون",
      },
      {
        img: service1Img,
        title: "برنامج اللياقة البدنية الشامل",
        time: "الثلاثاء، 5:30 مساءً",
        instructor: "سارة تشين",
      },
      {
        img: eventImg,
        title: "ورشة علاج النوم",
        time: "الأربعاء، 8:00 مساءً",
        instructor: "د. عائشة جونسون",
      },
      {
        img: coachImg,
        title: "جلسة تدريب أسلوب الحياة",
        time: "الجمعة، 4:00 مساءً",
        instructor: "سارة تشين",
      },
      {
        img: trainer1,
        title: "تدريب القوة المتقدم",
        time: "الخميس، 6:30 صباحًا",
        instructor: "سارة تشين",
      },
      {
        img: trainer2,
        title: "ورشة تخطيط التغذية",
        time: "السبت، 10:00 صباحًا",
        instructor: "ماركوس رودريغيز",
      },
      {
        img: trainer3,
        title: "جلسة توازن العقل والجسم",
        time: "الأحد، 5:00 مساءً",
        instructor: "د. عائشة جونسون",
      },
      {
        img: trainer4,
        title: "تدفق اليوغا المتقدم",
        time: "الاثنين، 7:30 صباحًا",
        instructor: "ديفيد طومسون",
      },
    ],
  heroTitle: "اكتشف إمكانياتك وحقق العافية",
    heroDesc: "اختبر مزيجًا مثاليًا من اللياقة البدنية والتغذية والذهن. برامجنا بقيادة خبراء مصممة لمساعدتك على تحقيق أهدافك الصحية والعافية بإرشاد ودعم شخصي.",
    heroBtn: "ابدأ رحلتك",
    expertsTitle: "فريق محترف",
    expertsDesc: "خبراؤنا المكرسون ملتزمون بمساعدتك على تحقيق أهدافك الصحية والبدنية.",
    ceoTitle: "تعرف على المدير التنفيذي",
    ceoDesc: "يقود مهمتنا لتحويل الحياة من خلال التميز في العافية واللياقة البدنية.",
    ceoBio1: "مع أكثر من 15 عامًا من الخبرة في مجال الصحة والعافية، كرس المدير التنفيذي حياته لمساعدة الناس على تحقيق أهدافهم الصحية والعيش بشكل أكثر صحة وسعادة.",
    ceoBio2: "نؤمن أن العافية الحقيقية تأتي من نهج متوازن للياقة البدنية والصحة العقلية والتغذية. فريقنا من الخبراء المعتمدين هنا لإرشادك في كل خطوة.",
    ceoName: "- جون سميث، المدير التنفيذي",
    whyChoose: "لماذا تختارنا",
    whyTitle: "تمكين نجاحك بخبرة العافية",
    whyDesc: "خبراؤنا المعتمدون، الخطط الشخصية، والمجتمع الداعم يساعدونك على تحقيق أهدافك الصحية بثقة ورعاية.",
    uniqueApproach: "نهجنا الفريد",
    uniqueDesc: "نؤمن بنهج شامل للعافية يجمع بين الإرشاد الخبير، البرامج المبتكرة، والمجتمع الداعم. خططنا الشخصية وأنظمة الدعم المثبتة تضمن حصولك على النتائج التي تستحقها.",
    personalizedPlans: "خطط شخصية",
    communityInnovation: "المجتمع والابتكار",
    supportResults: "الدعم والنتائج",
    upcomingEvents: "الفعاليات والدروس القادمة",
    joinNow: "انضم الآن",
    registerTitle: "سجل في الدرس",
    registerName: "الاسم الكامل *",
    registerEmail: "البريد الإلكتروني *",
    registerPhone: "رقم الهاتف *",
    registerLevel: "مستوى الخبرة",
    registerLevelSelect: "اختر مستوى خبرتك",
    registerLevelBeginner: "مبتدئ",
    registerLevelIntermediate: "متوسط",
    registerLevelAdvanced: "متقدم",
    registerSpecial: "متطلبات خاصة",
    registerSpecialPlaceholder: "أي متطلبات أو ملاحظات خاصة...",
    registerBtn: "سجل الآن",
    registerTerms: "بتسجيلك، أنت توافق على الشروط والأحكام. سنتواصل معك قريبًا لتأكيد التسجيل.",
    successTitle: "تم التسجيل بنجاح!",
    successDesc: "شكرًا لتسجيلك في الدرس. أرسلنا بريدًا إلكترونيًا بالتفاصيل.",
    closeBtn: "إغلاق",
    insightsTitle: "رؤى العافية",
    insightsDesc: "اكتشف أحدث الاتجاهات والأبحاث والرؤى من الخبراء في الصحة والعافية. تحليلاتنا الشاملة تساعدك على اتخاذ قرارات مستنيرة حول رحلتك الصحية.",
    evidenceBased: "نهج قائم على الأدلة",
    evidenceDesc: "جميع توصياتنا مدعومة بأحدث الأبحاث العلمية والأساليب المثبتة.",
    personalizedStrategies: "استراتيجيات شخصية",
    personalizedStrategiesDesc: "استراتيجيات عافية مصممة خصيصًا لتناسب نمط حياتك وأهدافك الفريدة.",
    communitySupport: "دعم المجتمع",
    communitySupportDesc: "انضم إلى مجتمع داعم من أفراد يشاركونك رحلة العافية.",
    exploreInsights: "استكشف الرؤى"
  },
  Hebrew: {
    events: [
      {
        img: event1Img,
        title: "יוגה ומדיטציה בזריחה",
        time: "שבת, 7:00 בבוקר",
        instructor: "דיויד תומפסון",
      },
      {
        img: event2Img,
        title: "שאלות ותשובות על תזונה בריאה",
        time: "ראשון, 11:00 בבוקר",
        instructor: "מרקוס רודריגז",
      },
      {
        img: event3Img,
        title: "רווחה נפשית",
        time: "שני, 6:00 בערב",
        instructor: "ד\"ר עאישה ג'ונסון",
      },
      {
        img: service1Img,
        title: "תוכנית כושר לכל הגוף",
        time: "שלישי, 5:30 בערב",
        instructor: "שרה צ'ן",
      },
      {
        img: eventImg,
        title: "סדנת טיפול בשינה",
        time: "רביעי, 8:00 בערב",
        instructor: "ד\"ר עאישה ג'ונסון",
      },
      {
        img: coachImg,
        title: "מפגש אימון לאורח חיים",
        time: "שישי, 4:00 בערב",
        instructor: "שרה צ'ן",
      },
      {
        img: trainer1,
        title: "אימון כוח מתקדם",
        time: "חמישי, 6:30 בבוקר",
        instructor: "שרה צ'ן",
      },
      {
        img: trainer2,
        title: "סדנת תכנון תזונה",
        time: "שבת, 10:00 בבוקר",
        instructor: "מרקוס רודריגז",
      },
      {
        img: trainer3,
        title: "מפגש איזון גוף-נפש",
        time: "ראשון, 5:00 בערב",
        instructor: "ד\"ר עאישה ג'ונסון",
      },
      {
        img: trainer4,
        title: "זרימת יוגה מתקדמת",
        time: "שני, 7:30 בבוקר",
        instructor: "דיויד תומפסון",
      },
    ],
    heroTitle: "גלה את הפוטנציאל שלך והשג בריאות",
    heroDesc: "חווה שילוב מושלם של כושר, תזונה ומיינדפולנס. התוכניות שלנו בהובלת מומחים נועדו לעזור לך להשיג את מטרות הבריאות שלך עם הדרכה ותמיכה אישית.",
    heroBtn: "התחל את המסע שלך",
    expertsTitle: "צוות מקצועי",
    expertsDesc: "המומחים המסורים שלנו מחויבים לעזור לך להשיג את מטרות הבריאות והכושר שלך.",
    ceoTitle: "הכירו את המנכ\"ל שלנו",
    ceoDesc: "מוביל את המשימה שלנו לשנות חיים באמצעות מצוינות בריאות וכושר.",
    ceoBio1: "עם ניסיון של מעל 15 שנה בתחום הבריאות, המנכ\"ל שלנו הקדיש את הקריירה שלו לעזור לאנשים להשיג מטרות כושר ולחיות חיים בריאים ומספקים יותר.",
    ceoBio2: "אנו מאמינים שבריאות אמיתית מגיעה מגישה מאוזנת לכושר, בריאות נפשית ותזונה. צוות המומחים המוסמכים שלנו כאן להדריך אותך בכל שלב.",
    ceoName: "- ג'ון סמית, מנכ\"ל",
    whyChoose: "למה לבחור בנו",
    whyTitle: "מעצימים את ההצלחה שלך עם מומחיות בריאות",
    whyDesc: "המומחים המוסמכים שלנו, תוכניות אישיות והקהילה התומכת עוזרים לך להשיג מטרות בריאות בביטחון ובדאגה.",
    uniqueApproach: "הגישה הייחודית שלנו",
    uniqueDesc: "אנו מאמינים בגישה הוליסטית לבריאות, המשלבת הדרכה מקצועית, תוכניות חדשניות וקהילה תומכת. התוכניות האישיות ומערכות התמיכה המוכחות שלנו מבטיחות שתקבל את התוצאות שמגיעות לך.",
    personalizedPlans: "תוכניות אישיות",
    communityInnovation: "קהילה וחדשנות",
    supportResults: "תמיכה ותוצאות",
    upcomingEvents: "אירועים ושיעורים קרובים",
    joinNow: "הצטרף עכשיו",
    registerTitle: "הרשמה לשיעור",
    registerName: "שם מלא *",
    registerEmail: "כתובת אימייל *",
    registerPhone: "מספר טלפון *",
    registerLevel: "רמת ניסיון",
    registerLevelSelect: "בחר את רמת הניסיון שלך",
    registerLevelBeginner: "מתחיל",
    registerLevelIntermediate: "בינוני",
    registerLevelAdvanced: "מתקדם",
    registerSpecial: "דרישות מיוחדות",
    registerSpecialPlaceholder: "דרישות או הערות מיוחדות...",
    registerBtn: "הרשם עכשיו",
    registerTerms: "בהרשמה, אתה מסכים לתנאים וההגבלות שלנו. ניצור איתך קשר בקרוב לאישור ההרשמה.",
    successTitle: "ההרשמה הצליחה!",
    successDesc: "תודה שנרשמת לשיעור. שלחנו אימייל עם כל הפרטים.",
    closeBtn: "סגור",
    insightsTitle: "תובנות בריאות",
    insightsDesc: "גלה את המגמות, המחקרים והתובנות העדכניות ביותר בתחום הבריאות. הניתוח המקיף שלנו עוזר לך לקבל החלטות מושכלות במסע הבריאות שלך.",
    evidenceBased: "גישה מבוססת ראיות",
    evidenceDesc: "כל ההמלצות שלנו מגובות במחקר מדעי עדכני ושיטות מוכחות.",
    personalizedStrategies: "אסטרטגיות אישיות",
    personalizedStrategiesDesc: "אסטרטגיות בריאות מותאמות אישית שמתאימות לאורח החיים והמטרות שלך.",
    communitySupport: "תמיכת קהילה",
    communitySupportDesc: "הצטרף לקהילה תומכת של אנשים בעלי מטרות דומות.",
    exploreInsights: "גלה תובנות"
  }
};

const Home2 = () => {
  // ...existing code...
  const { language } = useContext(LanguageContext);
  // Localized team members for experts section (must be after language is initialized)
  const teamMembers = [
    {
      img: trainer1,
      name: translations[language].trainer1Name || "Sarah Chen",
      role: translations[language].trainer1Role || "Personal Fitness Trainer",
      description: translations[language].trainer1Desc || "Certified trainer with 8+ years experience in strength training and cardio fitness."
    },
    {
      img: trainer2,
      name: translations[language].trainer2Name || "Marcus Rodriguez",
      role: translations[language].trainer2Role || "Nutrition Specialist",
      description: translations[language].trainer2Desc || "Registered dietitian specializing in sports nutrition and weight management."
    },
    {
      img: trainer3,
      name: translations[language].trainer3Name || "Dr. Aisha Johnson",
      role: translations[language].trainer3Role || "Wellness Coach",
      description: translations[language].trainer3Desc || "Holistic wellness expert focusing on mind-body balance and stress management."
    },
    {
      img: trainer4,
      name: translations[language].trainer4Name || "David Thompson",
      role: translations[language].trainer4Role || "Yoga Instructor",
      description: translations[language].trainer4Desc || "Certified yoga teacher with expertise in meditation and mindfulness practices."
    }
  ];
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();
  const isRTL = language === 'Arabic' || language === 'Hebrew';

  // Scroll to top when component mounts
  useScrollToTop();

  const scrollToExperts = () => {
    const expertsSection = document.getElementById('experts-section');
    if (expertsSection) {
      expertsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToBlog = () => {
    navigate('/blog');
  };

  // Listen for dark mode changes from localStorage or other components
  useEffect(() => {
    const checkDarkMode = () => {
      const darkMode = localStorage.getItem('darkMode') === 'true';
      setIsDarkMode(darkMode);
    };
    
    const handleDarkModeChange = (event) => {
      setIsDarkMode(event.detail);
    };
    
    checkDarkMode();
    window.addEventListener('storage', checkDarkMode);
    window.addEventListener('darkModeChanged', handleDarkModeChange);
    
    return () => {
      window.removeEventListener('storage', checkDarkMode);
      window.removeEventListener('darkModeChanged', handleDarkModeChange);
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    
    // Custom progress bar animation
    const animateProgressBars = () => {
      const progressBars = document.querySelectorAll('[data-aos="progress-bar"]');
      
      if (progressBars.length === 0) return;
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            const targetWidth = bar.getAttribute('data-target-width') || '95%';
            const delay = parseInt(bar.getAttribute('data-aos-delay') || 0);
            
            // Ensure bar starts at 0%
            bar.style.width = '0%';
            
            setTimeout(() => {
              bar.style.width = targetWidth;
            }, delay);
            
            observer.unobserve(bar);
          }
        });
      }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element comes into view
      });
      
      progressBars.forEach((bar) => {
        // Ensure initial state is 0%
        bar.style.width = '0%';
        observer.observe(bar);
      });
    };
    
    // Run after a small delay to ensure DOM is ready
    setTimeout(animateProgressBars, 100);
  }, []);

  const services = [
    { title: "Personal Training", desc: "Customized sessions to achieve your fitness goals.", img: service1Img },
    { title: "Nutrition Guidance", desc: "Expert advice for a healthier you.", img: service2Img },
    { title: "Group Workouts", desc: "Fun, high-energy group classes for all levels.", img: service3Img },
  ];

  const experts = [
    { name: "Priya Sharma", title: "Certified Trainer", img: expert1 },
    { name: "Dr. Arjun Rao", title: "Nutritionist", img: expert2 },
    { name: "Lina Gomez", title: "Yoga Coach", img: expert3 },
  ];

  const faqs = [
    { q: "How do I enroll in a program?", a: "Click 'Get Started' and choose your preferred program." },
    { q: "Are your coaches certified?", a: "Yes, all our experts are certified." },
    { q: "Can I cancel anytime?", a: "Absolutely! You control your membership." },
    { q: "Do you offer trial classes?", a: "Yes, we offer free trial classes." },
    { q: "Can I switch programs?", a: "Yes, contact support or use your dashboard." },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  // Map all possible instructor names (English, Arabic, Hebrew) to correct images
  const instructorAvatars = {
    // English
    'Priya Sharma': expert1,
    'Dr. Arjun Rao': expert2,
    'Lina Gomez': expert3,
    'Karan Mehta': coachImg,
    'Sarah Chen': trainer1,
    'Marcus Rodriguez': trainer2,
    'Dr. Aisha Johnson': trainer3,
    'David Thompson': trainer4,
    // Arabic
    'سارة تشين': trainer1,
    'ماركوس رودريغيز': trainer2,
    'د. عائشة جونسون': trainer3,
    'ديفيد طومسون': trainer4,
    // Hebrew
    'שרה צ\'ן': trainer1,
    'מרקוס רודריגז': trainer2,
    'ד"ר עאישה ג\'ונסון': trainer3,
    'דיויד תומפסון': trainer4,
  };
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [cardWidth, setCardWidth] = useState(344); // Default width
  const carouselRef = useRef(null);

  // Calculate card dimensions based on screen size
  const getCardDimensions = () => {
    const isMobile = window.innerWidth < 640; // sm breakpoint
    const cardWidth = isMobile ? 288 : 320; // w-72 = 288px, w-80 = 320px
    const gap = 24; // gap-6 = 24px
    return {
      cardWidth,
      gap,
      totalWidth: cardWidth + gap
    };
  };
  const events = translations[language].events;
  
  // Calculate card width on mount and resize
  useEffect(() => {
    const updateCardWidth = () => {
      const dimensions = getCardDimensions();
      setCardWidth(dimensions.totalWidth);
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  // Train-like continuous scroll effect
  useEffect(() => {
    if (isHovered) return; // Don't auto-scroll when hovered
    
    const interval = setInterval(() => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + 2; // Increased speed
        const dimensions = getCardDimensions();
        
        // Reset to 0 when we've scrolled through one complete set of events
        // This creates a seamless loop without gaps
        if (newPosition >= events.length * dimensions.totalWidth) {
          return 0;
        }
        
        return newPosition;
      });
    }, 50); // Faster movement (reduced from 100ms to 50ms)
    
    return () => clearInterval(interval);
  }, [isHovered, events.length]);
  
  // Create duplicated events for seamless train-like scrolling
  const duplicatedEvents = [...events, ...events, ...events]; // Triple the events for seamless loop

  const [homeDropdown, setHomeDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [initials, setInitials] = useState("");

  useEffect(() => {
    let currentUser = { firstName: '', lastName: '' };
    try {
      currentUser = JSON.parse(localStorage.getItem('currentUser')) || { firstName: '', lastName: '' };
    } catch (e) {}
    setInitials(
      `${currentUser.firstName?.[0] || ''}${currentUser.lastName?.[0] || ''}`.toUpperCase()
    );
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-[#f6fffd]'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      {/* Hero Section - Redesigned */}
      <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          {translations[language].videoNotSupported || "Your browser does not support the video tag."}
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        {/* Centered Content */}
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in-up">
            {translations[language].heroTitle}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay-3">
            {translations[language].heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up-delay-4">
            <button 
              onClick={scrollToExperts}
              className="bg-white text-[#26A0A2] font-semibold px-6 sm:px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition text-base sm:text-lg transform hover:scale-105">
              {translations[language].heroBtn}
            </button>
          </div>
        </div>
      </section>
      {/* Our Experts Section */}
      <section id="experts-section" className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12" data-aos="fade-up" data-aos-duration="800">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translations[language].expertsTitle}</h2>
            <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translations[language].expertsDesc}</p>
          </div>
          {/* Team Members Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="text-center" data-aos="fade-up" data-aos-delay={idx * 200} data-aos-duration="800">
                {/* Circular Headshot */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-white shadow-lg mx-auto mb-4 sm:mb-6">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">{member.name}</h3>
                <p className="text-[#26A0A2] font-semibold mb-1">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Meet Our CEO Section */}
      <section className="w-full relative min-h-screen">
        {/* CEO Image as Background */}
        <div className="absolute inset-0">
          <img 
            src={ceoImg} 
            alt="CEO Background" 
            className="w-full h-full object-cover sm:object-contain lg:object-cover object-center"
          />
          {/* Teal gradient overlay from left to center - responsive */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#26A0A2] via-[#26A0A2]/70 sm:via-[#26A0A2]/50 to-transparent"></div>
        </div>
        {/* Content overlay */}
        <div className="relative z-10 text-justify flex items-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 py-12">
          <div className="text-white max-w-md sm:max-w-lg md:max-w-xl lg:max-w-md bg-black/20 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none rounded-lg sm:rounded-none p-6 sm:p-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in-up" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">{translations[language].ceoTitle}</h2>
            <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 leading-relaxed animate-fade-in-up" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              {translations[language].ceoDesc}
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed opacity-90 animate-fade-in-up" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
              {translations[language].ceoBio1}
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed opacity-90 animate-fade-in-up" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
              {translations[language].ceoBio2}
            </p>
            {/* CEO Name */}
            <p className="text-base sm:text-lg md:text-xl font-semibold mb-6 sm:mb-8 opacity-95 animate-fade-in-up" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
              {translations[language].ceoName}
            </p>
            {/* Social Media Links */}
            <div className="flex gap-3 sm:gap-4 animate-fade-in-up" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

             {/* Why Choose Us Section */}
       <section className={`w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
         <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10">
           {/* Headline */}
           <div className="text-center mb-6 sm:mb-8" data-aos="fade-up" data-aos-duration="800">
             <span
               className="inline-block px-3 sm:px-4 py-1 rounded-full font-extrabold text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 bg-clip-text text-transparent"
               style={{ background: 'linear-gradient(135deg, #20c997, #0f766e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
             >
               {translations[language].whyChoose}
             </span>
             <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>{translations[language].whyTitle}</h2>
             <p className={`max-w-2xl mx-auto text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translations[language].whyDesc}</p>
           </div>
                     {/* Main content grid: only one image and progress bars */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch min-h-[250px] sm:min-h-[300px]">
             {/* Left: Single Image */}
             <div className="flex flex-col justify-center h-full" data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
               <img src={why1} alt="Wellness" className="rounded-xl w-full h-full min-h-[300px] object-cover" />
             </div>
             {/* Right: Progress Bars with heading and intro text */}
             <div className="flex flex-col gap-4 sm:gap-6 justify-center h-full min-h-[250px] sm:min-h-[300px]" data-aos="fade-left" data-aos-duration="800" data-aos-delay="400">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#26A0A2] m-0 p-0">{translations[language].uniqueApproach}</h3>
              <p className={`text-sm sm:text-base md:text-lg m-0 p-0 text-justify ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>{translations[language].uniqueDesc}</p>
                                                           <div data-aos="fade-up" data-aos-delay="600" data-aos-duration="600">
                  <div className="flex justify-between mb-1">
                    <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>{translations[language].personalizedPlans}</span>
                    <span className="text-[#26A0A2] font-bold">95%</span>
                  </div>
                                     <div className="w-full h-3 bg-[#C9FFE9] rounded-full overflow-hidden">
                     <div 
                       className="h-3 bg-[#26A0A2] rounded-full transition-all duration-1000 ease-out" 
                       data-aos="progress-bar" 
                       data-aos-delay="800" 
                       data-aos-duration="1000"
                       style={{ width: '0%' }}
                       data-aos-once="true"
                       data-target-width="95%"
                     ></div>
                   </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="700" data-aos-duration="600">
                  <div className="flex justify-between mb-1">
                    <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>{translations[language].communityInnovation}</span>
                    <span className="text-[#26A0A2] font-bold">90%</span>
                  </div>
                                     <div className="w-full h-3 bg-[#C9FFE9] rounded-full overflow-hidden">
                     <div 
                       className="h-3 bg-[#26A0A2] rounded-full transition-all duration-1000 ease-out" 
                       data-aos="progress-bar" 
                       data-aos-delay="900" 
                       data-aos-duration="1000"
                       style={{ width: '0%' }}
                       data-aos-once="true"
                       data-target-width="90%"
                     ></div>
              </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="600">
                  <div className="flex justify-between mb-1">
                    <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>{translations[language].supportResults}</span>
                    <span className="text-[#26A0A2] font-bold">98%</span>
                  </div>
                                     <div className="w-full h-3 bg-[#C9FFE9] rounded-full overflow-hidden">
                     <div 
                       className="h-3 bg-[#26A0A2] rounded-full transition-all duration-1000 ease-out" 
                       data-aos="progress-bar" 
                       data-aos-delay="1000" 
                       data-aos-duration="1000"
                       style={{ width: '0%' }}
                       data-aos-once="true"
                       data-target-width="98%"
                     ></div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

           

         

      {/* Upcoming Events & Classes Section */}
      <section className="w-full bg-gradient-to-br from-[#26A0A2] to-[#20c997] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12">{translations[language].upcomingEvents}</h2>
        <div className="max-w-7xl mx-auto">
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ref={carouselRef}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <div 
              className={`flex gap-6 transition-transform duration-100 ease-linear ${isRTL ? 'flex-row-reverse' : ''}`}
              style={{ 
                transform: isRTL
                  ? `translateX(${scrollPosition}px)`
                  : `translateX(-${scrollPosition}px)`,
                width: `${duplicatedEvents.length * getCardDimensions().totalWidth}px`
              }}
            >
              {duplicatedEvents.map((event, idx) => {
                // Fallback for missing avatar mapping
                const avatarImg = instructorAvatars[event.instructor] || trainer1;
                return (
                  <div 
                    key={`${event.title}-${idx}`} 
                    className={`event-card rounded-2xl shadow-md flex flex-col w-72 sm:w-80 flex-shrink-0 overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl ${isDarkMode ? 'bg-black' : 'bg-white'}`}
                  >
                    <img src={event.img} alt={event.title} className="w-full h-32 sm:h-40 object-cover" />
                    <div className="p-4 sm:p-6 flex flex-col flex-1">
                      <h3 className={`text-base sm:text-lg md:text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-[#17806d]'}`}>{event.title}</h3>
                      <p className={`text-xs sm:text-sm mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{event.time}</p>
                      <div className="flex items-center gap-2 mb-4">
                        <img src={avatarImg} alt={event.instructor} className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover border-2 border-white shadow" />
                        <span className="text-[#17806d] font-semibold text-xs sm:text-sm">{event.instructor}</span>
                      </div>
                      <button 
                        onClick={() => {
                          setSelectedEvent(event);
                          setShowRegistrationForm(true);
                        }}
                        className="mt-auto bg-[#26A0A2] text-white font-semibold py-2 rounded-lg shadow hover:bg-[#17806d] transition"
                      >
                        {translations[language].joinNow}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Modal */}
      {showRegistrationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#26A0A2]">{translations[language].registerTitle}</h3>
                <button 
                  onClick={() => setShowRegistrationForm(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              {/* Event Details */}
              {selectedEvent && (
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-lg text-[#17806d] mb-2">{selectedEvent.title}</h4>
                  <p className="text-gray-600 text-sm mb-1">{selectedEvent.time}</p>
                  <p className="text-gray-600 text-sm">Instructor: {selectedEvent.instructor}</p>
                </div>
              )}

              {/* Registration Form */}
              <form 
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowRegistrationForm(false);
                  setShowSuccessMessage(true);
                  // Reset form after 3 seconds
                  setTimeout(() => {
                    setShowSuccessMessage(false);
                  }, 3000);
                }}
              >
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                  <label className="block text-gray-700 font-medium mb-2">{translations[language].registerName}</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26A0A2] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                  <label className="block text-gray-700 font-medium mb-2">{translations[language].registerEmail}</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26A0A2] focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                  <label className="block text-gray-700 font-medium mb-2">{translations[language].registerPhone}</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26A0A2] focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Experience Level</label>
                  <label className="block text-gray-700 font-medium mb-2">{translations[language].registerLevel}</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26A0A2] focus:border-transparent">
                    <option value="">{translations[language].registerLevelSelect}</option>
                    <option value="beginner">{translations[language].registerLevelBeginner}</option>
                    <option value="intermediate">{translations[language].registerLevelIntermediate}</option>
                    <option value="advanced">{translations[language].registerLevelAdvanced}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Special Requirements</label>
                  <label className="block text-gray-700 font-medium mb-2">{translations[language].registerSpecial}</label>
                  <textarea 
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#26A0A2] focus:border-transparent"
                    placeholder={translations[language].registerSpecialPlaceholder}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full bg-[#26A0A2] text-white font-semibold py-3 rounded-lg hover:bg-[#17806d] transition duration-300"
                >
                  {translations[language].registerBtn}
                </button>
              </form>

              {/* Terms */}
              <p className="text-xs text-gray-500 mt-4 text-center">
                {translations[language].registerTerms}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Success Message Modal */}
      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
            {/* Success Icon */}
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            
            {/* Success Message */}
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{translations[language].successTitle}</h3>
            <p className="text-gray-600 mb-6">
              {translations[language].successDesc}
            </p>
            
            {/* Event Details */}
            {selectedEvent && (
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-lg text-[#17806d] mb-2">{selectedEvent.title}</h4>
                <p className="text-gray-600 text-sm mb-1">{selectedEvent.time}</p>
                <p className="text-gray-600 text-sm">Instructor: {selectedEvent.instructor}</p>
              </div>
            )}
            
            {/* Close Button */}
            <button 
              onClick={() => setShowSuccessMessage(false)}
              className="bg-[#26A0A2] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#17806d] transition duration-300"
            >
              {translations[language].closeBtn}
            </button>
          </div>
        </div>
      )}

      {/* Insights Section */}
      <section className={`w-full py-12 sm:py-16 text-justify px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <div data-aos="fade-right" data-aos-duration="800">
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  {translations[language].insightsTitle}
                </h2>
                <p className={`text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {translations[language].insightsDesc}
                </p>
              </div>

              {/* Insight Cards */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#26A0A2] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                                      <div>
                      <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translations[language].evidenceBased}</h3>
                      <p className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translations[language].evidenceDesc}</p>
                    </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4" data-aos="fade-up" data-aos-delay="400" data-aos-duration="600">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#26A0A2] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translations[language].personalizedStrategies}</h3>
                    <p className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translations[language].personalizedStrategiesDesc}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4" data-aos="fade-up" data-aos-delay="600" data-aos-duration="600">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#26A0A2] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{translations[language].communitySupport}</h3>
                    <p className={`text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{translations[language].communitySupportDesc}</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="600">
                <button 
                  onClick={navigateToBlog}
                  className="bg-[#26A0A2] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#17806d] transition duration-300 transform hover:scale-105">
                  {translations[language].exploreInsights}
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <img 
                src={insightsImg} 
                alt="Wellness Insights" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl relative z-10"
              />
              {/* Decorative Elements - Overlapping on Image */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#26A0A2] rounded-full opacity-30 z-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#20c997] rounded-full opacity-25 z-20"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home2;