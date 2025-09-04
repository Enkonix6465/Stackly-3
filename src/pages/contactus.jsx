import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import Header from "../Header";
import Footer from "../footer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useScrollToTop } from "../hooks/useScrollToTop";
import formSection from "../assets/formSection.jpg";
import getInTouchVideo from "../assets/getInTouch.mp4";
import globe from "../assets/globe.jpeg";

function ContactUs() {
  // Card descriptions translations
  const cardDescT = {
    phone: {
      English: "Speak directly with our wellness experts. We're available Monday through Friday, 9 AM to 6 PM EST for personalized consultations and support.",
      Arabic: "تحدث مباشرة مع خبراء الصحة لدينا. نحن متواجدون من الاثنين إلى الجمعة، من الساعة 9 صباحًا حتى 6 مساءً بتوقيت شرق الولايات المتحدة للاستشارات والدعم الشخصي.",
      Hebrew: "שוחח ישירות עם מומחי הבריאות שלנו. אנו זמינים שני עד שישי, 9:00 עד 18:00 (EST) לייעוץ ותמיכה אישית."
    },
    email: {
      English: "Send us your questions anytime. Our team responds within 24 hours with personalized wellness advice and program recommendations.",
      Arabic: "أرسل لنا أسئلتك في أي وقت. يرد فريقنا خلال 24 ساعة بنصائح صحية شخصية وتوصيات للبرامج.",
      Hebrew: "שלח לנו את שאלותיך בכל עת. הצוות שלנו מגיב תוך 24 שעות עם עצות בריאות אישיות והמלצות לתוכניות."
    },
    location: {
      English: "Located in the heart of Manhattan. Schedule an in-person consultation at our state-of-the-art wellness facility with certified health coaches.",
      Arabic: "يقع في قلب مانهاتن. حدد موعدًا لاستشارة شخصية في مركز الصحة الحديث لدينا مع مدربين صحيين معتمدين.",
      Hebrew: "ממוקם בלב מנהטן. קבע פגישת ייעוץ אישית במרכז הבריאות המתקדם שלנו עם מאמני בריאות מוסמכים."
    }
  };
  // More translations for contact info, directions, and business hours
  const infoT = {
    phone: {
      English: "(+1) 555-123-4567",
      Arabic: "(+1) 555-123-4567",
      Hebrew: "(+1) 555-123-4567"
    },
    email: {
      English: "hello@wellness.com",
      Arabic: "hello@wellness.com",
      Hebrew: "hello@wellness.com"
    },
    location: {
      English: "Wellness Center NYC",
      Arabic: "مركز الصحة نيويورك",
      Hebrew: "מרכז הבריאות ניו יורק"
    },
    subway: {
      English: "Subway: 4, 5, 6 trains",
      Arabic: "مترو الأنفاق: قطارات 4، 5، 6",
      Hebrew: "רכבת תחתית: קווים 4, 5, 6"
    },
    bus: {
      English: "Bus: M1, M2, M3",
      Arabic: "حافلة: M1، M2، M3",
      Hebrew: "אוטובוס: M1, M2, M3"
    },
    parking: {
      English: "Parking available",
      Arabic: "موقف سيارات متاح",
      Hebrew: "חניה זמינה"
    },
    mondayFriday: {
      English: "Monday - Friday",
      Arabic: "الاثنين - الجمعة",
      Hebrew: "שני - שישי"
    },
    saturday: {
      English: "Saturday",
      Arabic: "السبت",
      Hebrew: "שבת"
    },
    sunday: {
      English: "Sunday",
      Arabic: "الأحد",
      Hebrew: "ראשון"
    },
    mfHours: {
      English: "9:00 AM - 6:00 PM",
      Arabic: "9:00 صباحًا - 6:00 مساءً",
      Hebrew: "09:00 - 18:00"
    },
    satHours: {
      English: "10:00 AM - 4:00 PM",
      Arabic: "10:00 صباحًا - 4:00 مساءً",
      Hebrew: "10:00 - 16:00"
    },
    closed: {
      English: "Closed",
      Arabic: "مغلق",
      Hebrew: "סגור"
    }
  };
  // FAQ translations
  const faq = [
    {
      q: {
        English: "What wellness programs do you offer?",
        Arabic: "ما هي برامج الصحة التي تقدمونها؟",
        Hebrew: "אילו תוכניות בריאות אתם מציעים?"
      },
      a: {
        English: "We offer comprehensive wellness programs including nutrition coaching, fitness training, mindfulness sessions, stress management, and sleep optimization. Each program is personalized to meet your specific health goals and lifestyle needs.",
        Arabic: "نحن نقدم برامج صحة شاملة تشمل تدريب التغذية، تدريب اللياقة البدنية، جلسات التأمل الذهني، إدارة التوتر، وتحسين النوم. كل برنامج مصمم خصيصًا لتلبية أهدافك الصحية واحتياجات نمط حياتك.",
        Hebrew: "אנו מציעים תוכניות בריאות מקיפות הכוללות אימון תזונה, אימוני כושר, מפגשי מיינדפולנס, ניהול מתחים ואופטימיזציה של שינה. כל תוכנית מותאמת אישית למטרות הבריאות והצרכים שלך."
      }
    },
    {
      q: {
        English: "How long does it take to see results?",
        Arabic: "كم من الوقت يستغرق لرؤية النتائج؟",
        Hebrew: "כמה זמן לוקח לראות תוצאות?"
      },
      a: {
        English: "Most clients begin to see positive changes within 2-4 weeks of starting our wellness programs. However, sustainable health improvements typically develop over 8-12 weeks with consistent participation and lifestyle modifications.",
        Arabic: "يبدأ معظم العملاء في رؤية تغييرات إيجابية خلال 2-4 أسابيع من بدء برامج الصحة لدينا. ومع ذلك، فإن التحسينات الصحية المستدامة تتطور عادةً خلال 8-12 أسبوعًا مع المشاركة المستمرة وتعديلات نمط الحياة.",
        Hebrew: "רוב הלקוחות מתחילים לראות שינויים חיוביים תוך 2-4 שבועות מתחילת התוכנית. שיפורים בריאותיים מתמשכים מתפתחים בדרך כלל תוך 8-12 שבועות עם השתתפות עקבית ושינויים באורח החיים."
      }
    },
    {
      q: {
        English: "What is included in a wellness consultation?",
        Arabic: "ما الذي يتضمنه استشارة الصحة؟",
        Hebrew: "מה כלול בייעוץ בריאות?"
      },
      a: {
        English: "Our wellness consultations include a comprehensive health assessment, personalized goal setting, nutrition analysis, fitness evaluation, stress assessment, and a customized wellness plan tailored to your specific needs and lifestyle.",
        Arabic: "تشمل استشارات الصحة لدينا تقييم صحي شامل، تحديد أهداف شخصية، تحليل التغذية، تقييم اللياقة البدنية، تقييم التوتر، وخطة صحة مخصصة لاحتياجاتك ونمط حياتك.",
        Hebrew: "הייעוצים שלנו כוללים הערכת בריאות מקיפה, קביעת מטרות אישיות, ניתוח תזונה, הערכת כושר, הערכת מתחים ותוכנית בריאות מותאמת אישית לצרכים שלך."
      }
    },
    {
      q: {
        English: "Do you offer virtual wellness sessions?",
        Arabic: "هل تقدمون جلسات صحة افتراضية؟",
        Hebrew: "האם אתם מציעים מפגשי בריאות וירטואליים?"
      },
      a: {
        English: "Yes, we offer virtual wellness sessions for clients who prefer remote consultations. Our online platform provides the same quality of care with flexible scheduling options and secure video conferencing technology.",
        Arabic: "نعم، نقدم جلسات صحة افتراضية للعملاء الذين يفضلون الاستشارات عن بعد. منصتنا الإلكترونية توفر نفس جودة الرعاية مع خيارات جدولة مرنة وتقنية مؤتمرات فيديو آمنة.",
        Hebrew: "כן, אנו מציעים מפגשי בריאות וירטואליים ללקוחות שמעדיפים ייעוץ מרחוק. הפלטפורמה שלנו מספקת את אותה איכות טיפול עם אפשרויות תזמון גמישות וטכנולוגיית וידאו מאובטחת."
      }
    },
    {
      q: {
        English: "How do I get started with your wellness programs?",
        Arabic: "كيف أبدأ مع برامج الصحة الخاصة بكم؟",
        Hebrew: "איך מתחילים עם תוכניות הבריאות שלכם?"
      },
      a: {
        English: "Getting started is easy! Simply contact us through our website, phone, or email to schedule your initial consultation. We'll discuss your health goals and create a personalized wellness plan just for you.",
        Arabic: "البدء سهل! فقط تواصل معنا عبر الموقع الإلكتروني أو الهاتف أو البريد الإلكتروني لتحديد موعد الاستشارة الأولى. سنناقش أهدافك الصحية وننشئ خطة صحة مخصصة لك.",
        Hebrew: "התחלה היא פשוטה! צור קשר דרך האתר, טלפון או אימייל כדי לקבוע פגישת ייעוץ ראשונית. נדון במטרות הבריאות שלך וניצור תוכנית מותאמת אישית עבורך."
      }
    }
  ];
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'Arabic' || language === 'Hebrew';

  // Simple translation object
  const t = {
    ContactUs: {
      English: "Contact Us",
      Arabic: "اتصل بنا",
      Hebrew: "צור קשר"
    },
    GetInTouch: {
      English: "Get In Touch",
      Arabic: "تواصل معنا",
      Hebrew: "צור קשר"
    },
    CallUs: {
      English: "Call Us",
      Arabic: "اتصل بنا",
      Hebrew: "התקשר אלינו"
    },
    EmailUs: {
      English: "Email Us",
      Arabic: "ارسل بريد إلكتروني",
      Hebrew: "שלח אימייל"
    },
    VisitUs: {
      English: "Visit Us",
      Arabic: "قم بزيارتنا",
      Hebrew: "בקר אותנו"
    },
    FirstName: {
      English: "First Name",
      Arabic: "الاسم الأول",
      Hebrew: "שם פרטי"
    },
    LastName: {
      English: "Last Name",
      Arabic: "اسم العائلة",
      Hebrew: "שם משפחה"
    },
    Email: {
      English: "Email",
      Arabic: "البريد الإلكتروني",
      Hebrew: "אימייל"
    },
    Phone: {
      English: "Phone",
      Arabic: "رقم الهاتف",
      Hebrew: "טלפון"
    },
    Message: {
      English: "Message",
      Arabic: "رسالة",
      Hebrew: "הודעה"
    },
    SendMessage: {
      English: "Send Message",
      Arabic: "إرسال الرسالة",
      Hebrew: "שלח הודעה"
    },
    MessageSent: {
      English: "Message sent successfully! We'll get back to you soon.",
      Arabic: "تم إرسال الرسالة بنجاح! سنعود إليك قريبًا.",
      Hebrew: "ההודעה נשלחה בהצלחה! נחזור אליך בקרוב."
    },
    FindUs: {
      English: "Find Us",
      Arabic: "اعثر علينا",
      Hebrew: "מצא אותנו"
    },
    BusinessHours: {
      English: "Business Hours",
      Arabic: "ساعات العمل",
      Hebrew: "שעות פעילות"
    },
    GettingHere: {
      English: "Getting Here",
      Arabic: "كيفية الوصول",
      Hebrew: "איך להגיע"
    },
    ContactInfo: {
      English: "Contact Info",
      Arabic: "معلومات الاتصال",
      Hebrew: "פרטי קשר"
    },
    StayConnected: {
      English: "Stay Connected",
      Arabic: "ابق على تواصل",
      Hebrew: "השאר מחובר"
    },
    SubscribeNewsletter: {
      English: "Subscribe to Newsletter",
      Arabic: "اشترك في النشرة الإخبارية",
      Hebrew: "הירשם לניוזלטר"
    },
    AgreeUpdates: {
      English: "I agree to receive wellness updates and special offers",
      Arabic: "أوافق على تلقي تحديثات وعروض خاصة للصحة",
      Hebrew: "אני מסכים לקבל עדכונים והצעות מיוחדות"
    },
    NewsletterText: {
      English: "Subscribe to our wellness newsletter for exclusive tips, health insights, and special offers delivered straight to your inbox.",
      Arabic: "اشترك في نشرتنا الصحية للحصول على نصائح حصرية ورؤى صحية وعروض خاصة مباشرة إلى بريدك الوارد.",
      Hebrew: "הירשם לניוזלטר הבריאות שלנו לטיפים בלעדיים, תובנות בריאות והצעות מיוחדות ישירות לתיבת הדואר שלך."
    },
    NewsletterSent: {
      English: "Message sent!",
      Arabic: "تم إرسال الرسالة!",
      Hebrew: "ההודעה נשלחה!"
    },
    FAQ: {
      English: "Frequently Asked Questions",
      Arabic: "الأسئلة الشائعة",
      Hebrew: "שאלות נפוצות"
    },
    // ...add more as needed
  };
  const [messageSent, setMessageSent] = useState(false);
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Scroll to top when component mounts
  useScrollToTop();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    // Reset the notification after 3 seconds
    setTimeout(() => {
      setMessageSent(false);
    }, 3000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterSubscribed(true);
    // Reset the notification after 3 seconds
    setTimeout(() => {
      setNewsletterSubscribed(false);
    }, 3000);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      {/* Section 1 */}
      <section className="w-full h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={getInTouchVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ease-out animate-fade-in-up"
            style={{ color: "#14B8A6" }}
          >
            {t.ContactUs[language]}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-white/90 transition-all duration-1000 ease-out delay-300 animate-fade-in-up-delay-1">
            {/* You can add translation for this line as well if needed */}
            {language === 'English' ?
              "Get in touch with our wellness experts and start your journey to better health today."
              : language === 'Arabic' ?
              "تواصل مع خبراء الصحة لدينا وابدأ رحلتك نحو صحة أفضل اليوم."
              : "צור קשר עם מומחי הבריאות שלנו והתחל את המסע שלך לבריאות טובה יותר היום."}
          </p>
        </div>
      </section>

             {/* Section 2 */}
       <section className={`w-full py-16 px-4 ${isDarkMode ? 'bg-black' : 'bg-white'} text-white flex flex-col items-center justify-center`}>
        <div className="text-center max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Card */}
            <div className="bg-teal-500 rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0s', animationDuration: '1s' }}>
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t.CallUs[language]}</h3>
                  <p className="text-lg font-semibold">(+1) 555-123-4567</p>
                </div>
              </div>
              <p className="text-white/80 text-sm">
                {cardDescT.phone[language]}
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-teal-500 rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.3s', animationDuration: '1s' }}>
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t.EmailUs[language]}</h3>
                  <p className="text-lg font-semibold">stackly.com</p>
                </div>
              </div>
              <p className="text-white text-sm">
                {cardDescT.email[language]}
              </p>
            </div>

            {/* Location Card */}
            <div className="bg-teal-500 rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.6s', animationDuration: '1s' }}>
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t.VisitUs[language]}</h3>
                  <p className="text-lg font-semibold">Wellness Center NYC</p>
                </div>
              </div>
              <p className="text-white/80 text-sm">
                {cardDescT.location[language]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="w-full py-16 px-4 bg-teal-700">
        <div className="max-w-7xl mx-auto">
            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white leading-tight mb-8">
                {t.GetInTouch[language]}
              </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-[600px]">
            {/* Left Column - Image */}
            <div className="flex flex-col">
              {/* Image - fills remaining height */}
              <div className="flex-1 rounded-xl overflow-hidden">
                <img
                  src={formSection}
                  alt="Contact Form Section"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

                                                   {/* Right Column - Contact Form */}
              <div className={`${isDarkMode ? 'bg-black' : 'bg-teal-50'} rounded-xl p-8 shadow-lg`}>
               <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-teal-500 mb-2">
                      {t.FirstName[language]}
                    </label>
                                         <input
                     required
                       type="text"
                       className={`w-full px-4 py-3 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent ${isDarkMode ? 'text-black placeholder-black' : ''}`}
                       placeholder={language === 'English' ? "Enter your first name" : language === 'Arabic' ? "أدخل اسمك الأول" : "הזן שם פרטי"}
                     />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-teal-500 mb-2">
                      {t.LastName[language]}
                    </label>
                                         <input
                     required
                       type="text"
                       className={`w-full px-4 py-3 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent ${isDarkMode ? 'text-black placeholder-black' : ''}`}
                       placeholder={language === 'English' ? "Enter your last name" : language === 'Arabic' ? "أدخل اسم العائلة" : "הזן שם משפחה"}
                     />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-teal-500 mb-2">
                    {t.Email[language]}
                  </label>
                                     <input
                   required
                     type="email"
                     className={`w-full px-4 py-3 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent ${isDarkMode ? 'text-black placeholder-black' : ''}`}
                     placeholder={language === 'English' ? "Enter your email address" : language === 'Arabic' ? "أدخل بريدك الإلكتروني" : "הזן כתובת אימייל"}
                   />
                </div>

                <div>
                  <label className="block text-sm font-medium text-teal-500 mb-2">
                    {t.Phone[language]}
                  </label>
                                     <input
                   required
                     type="tel"
                     className={`w-full px-4 py-3 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent ${isDarkMode ? 'text-black placeholder-black' : ''}`}
                     placeholder={language === 'English' ? "Enter your phone number" : language === 'Arabic' ? "أدخل رقم هاتفك" : "הזן מספר טלפון"}
                   />
                </div>

                <div>
                  <label className="block text-sm font-medium text-teal-500 mb-2">
                    {t.Message[language]}
                  </label>
                                     <textarea
                   required
                     rows="4"
                     className={`w-full px-4 py-3 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent ${isDarkMode ? 'text-black placeholder-black' : ''}`}
                     placeholder={language === 'English' ? "Tell us about your wellness goals..." : language === 'Arabic' ? "أخبرنا عن أهدافك الصحية..." : "ספר לנו על מטרות הבריאות שלך..."}
                   ></textarea>
                </div>

                                 <button
                                   type="submit"
                                   className="w-full bg-teal-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
                                 >
                                   {t.SendMessage[language]}
                                 </button>
                 
                 {/* Success Notification */}
                 {messageSent && (
                   <div className="mt-2 p-1 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
                     <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                     </svg>
                     <span className="font-medium">{t.MessageSent[language]}</span>
                   </div>
                 )}
               </form>
             </div>
          </div>
        </div>
      </section>

             {/* Section 4 */}
       <section className={`w-full py-16 px-4 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-teal-500 mb-4">{t.FindUs[language]}</h2>
          </div>

          {/* Three Cards on Top */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Business Hours Card */}
            <div className="bg-teal-50 border-2 border-teal-500 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-teal-500">
                  {t.BusinessHours[language]}
                </h4>
              </div>
              <div className="space-y-2 text-teal-500/80">
                <div className="flex justify-between">
                  <span>{infoT.mondayFriday[language]}</span>
                  <span>{infoT.mfHours[language]}</span>
                </div>
                <div className="flex justify-between">
                  <span>{infoT.saturday[language]}</span>
                  <span>{infoT.satHours[language]}</span>
                </div>
                <div className="flex justify-between">
                  <span>{infoT.sunday[language]}</span>
                  <span>{infoT.closed[language]}</span>
                </div>
              </div>
            </div>

            {/* Getting Here Card */}
            <div className="bg-teal-50 border-2 border-teal-500 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20v1h2.23l2-2H14l2 2h2v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm5.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-7h-5V6h5v4z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-teal-500">
                  {t.GettingHere[language]}
                </h4>
              </div>
              <div className="space-y-3 text-teal-500/80">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20v1h2.23l2-2H14l2 2h2v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm5.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-7h-5V6h5v4z" />
                  </svg>
                  <span>{infoT.subway[language]}</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20v1h2.23l2-2H14l2 2h2v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm5.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-7h-5V6h5v4z" />
                  </svg>
                  <span>{infoT.bus[language]}</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20v1h2.23l2-2H14l2 2h2v-1l-1.5-1c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm5.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-7h-5V6h5v4z" />
                  </svg>
                  <span>{infoT.parking[language]}</span>
                </div>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-teal-50 border-2 border-teal-500 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-teal-500">
                  {t.ContactInfo[language]}
                </h4>
              </div>
              <div className="space-y-3 text-teal-500/80">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span>{infoT.phone[language]}</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span>{infoT.email[language]}</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>{infoT.location[language]}</span>
                </div>
              </div>
            </div>
          </div>

                     {/* Full Width Map */}
           <div className="bg-teal-50 border-2 border-teal-500 rounded-xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425882353772!3d40.74076297144166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0x2595e5b0b5b0b5b0!2sManhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wellness Center NYC Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="w-full py-16 px-4 bg-teal-700">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-white mb-12">
            {t.FAQ[language]}
          </h1>
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
 
             {/* Right Column - Image */}
             <div className="flex items-center justify-center h-full">
               <div className="relative w-full h-full">
                 <img
                   src={globe}
                   alt="Wellness Globe"
                   className="w-full h-full object-cover rounded-xl shadow-2xl"
                 />
                 <div className="absolute inset-0 bg-teal-500/10 rounded-xl"></div>
               </div>
             </div>
 
             {/* Left Column - FAQ Items */}
             <div className="space-y-4 h-full text-justify">
                             {/* FAQ Items with translation */}
                             {faq.map((item, idx) => (
                               <div key={idx} className={`${isDarkMode ? 'bg-black' : 'bg-white'} rounded-xl shadow-lg overflow-hidden`}>
                                 <button
                                   onClick={() => toggleFAQ(idx)}
                                   className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-teal-50'}`}
                                 >
                                   <h3 className="text-lg font-bold text-teal-700">
                                     {item.q[language]}
                                   </h3>
                                   <svg
                                     className={`w-5 h-5 text-teal-500 transition-transform duration-300 ${openFAQ === idx ? 'rotate-180' : ''}`}
                                     fill="currentColor"
                                     viewBox="0 0 24 24"
                                   >
                                     <path d="M7 10l5 5 5-5z" />
                                   </svg>
                                 </button>
                                 <div 
                                   className={`overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                                 >
                                   <div className="px-6 pb-4">
                                     <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                                       {item.a[language]}
                                     </p>
                                   </div>
                                 </div>
                               </div>
                             ))}
            </div>

          </div>
        </div>
      </section>

             {/* Section 6 */}
       <section className={`w-full py-16 px-4 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-500 mb-4">
              {t.StayConnected[language]}
            </h2>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-white' : 'text-black'}`}>
              {t.NewsletterText[language]}
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleNewsletterSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                required
                  type="text"
                  placeholder={language === 'English' ? "Full Name" : language === 'Arabic' ? "الاسم الكامل" : "שם מלא"}
                  className="w-full px-6 py-4 border-2 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-black placeholder-black"
                />
              </div>
              <div>
                <input
                required
                  type="email"
                  placeholder={language === 'English' ? "Email Address" : language === 'Arabic' ? "البريد الإلكتروني" : "כתובת אימייל"}
                  className="w-full px-6 py-4 border-2 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-black placeholder-black"
                />
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                required
                  type="checkbox"
                  className="w-5 h-5 text-teal-500 border-2 border-teal-200 rounded focus:ring-teal-500"
                />
                                 <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>
                   {t.AgreeUpdates[language]}
                 </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-teal-500 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t.SubscribeNewsletter[language]}
            </button>
            
            {/* Newsletter Subscription Notification */}
            {newsletterSubscribed && (
              <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{t.NewsletterSent[language]}</span>
              </div>
            )}
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ContactUs;