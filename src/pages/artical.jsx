1

import React, { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../footer';
import morningWellness from '../assets/morning wellness.jpeg';
import mindfulMeditation from '../assets/mindfulMeditation.jpeg';
import nutrition from '../assets/nutrition.jpeg';

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  // Multilingual article data
  const { language } = useContext(LanguageContext);
  const isRTL = language === 'Arabic' || language === 'Hebrew';
  const articles = {
    'morning-wellness': {
      English: {
        title: "The Complete Guide to Morning Wellness Routines",
        author: "Wellness Team",
        authorInitial: "W",
        readTime: "5 min read",
        publishDate: "2 days ago",
        category: "Wellness",
        image: morningWellness,
        content: `
         <p>Starting your day with intention and purpose can transform your entire life. Research shows that people who follow consistent morning routines experience higher levels of productivity and better mental health. The first hour after waking up is often called the "golden hour" because it sets the tone for your entire day.</p>
         <h2>Why Morning Routines Matter</h2>
         <p>Research shows that people who follow consistent morning routines have better stress management, improved focus throughout the day, and enhanced emotional regulation. A structured morning sets the tone for the entire day. Studies from Harvard Business Review indicate that successful people are 2.5 times more likely to have a morning routine than those who don't.</p>
         <p>Morning routines help regulate your circadian rhythm, boost your metabolism, and improve your mood. They also provide a sense of control and accomplishment early in the day, which can carry through to all your other activities.</p>
         <h2>Essential Elements of a Morning Wellness Routine</h2>
         <h3>1. Hydration First</h3>
         <p>Start your day with a glass of water to rehydrate your body after 7-8 hours of sleep. Add lemon for vitamin C or apple cider vinegar for digestive health. Your body loses water through breathing and sweating during sleep, so rehydration is crucial for optimal function.</p>
         <p>Consider adding a pinch of Himalayan salt for electrolytes or a splash of apple cider vinegar to support digestion and metabolism. This simple practice can boost your energy levels and kickstart your metabolism.</p>
         <h3>2. Mindful Movement</h3>
         <p>Incorporate gentle stretching or yoga poses to wake up your muscles and improve circulation. Even 5-10 minutes of movement can significantly boost your energy levels. Focus on poses that open your chest, stretch your spine, and activate your core.</p>
         <p>Try sun salutations, cat-cow stretches, or simple standing poses. The key is to move slowly and mindfully, paying attention to how your body feels. This practice increases blood flow to your brain and muscles, helping you feel more alert and energized.</p>
         <h3>3. Meditation and Mindfulness</h3>
         <p>Take 5-10 minutes to center yourself through meditation, deep breathing, or simply sitting in silence. This practice helps reduce cortisol levels and prepares your mind for the day ahead. Research shows that morning meditation can improve focus, reduce anxiety, and enhance emotional regulation.</p>
         <p>Start with guided meditations if you're new to the practice. Focus on your breath, observe your thoughts without judgment, and gradually increase your practice time as you become more comfortable.</p>
         <h3>4. Nourishing Breakfast</h3>
         <p>Fuel your body with a balanced breakfast that includes protein, healthy fats, and complex carbohydrates. This provides sustained energy and prevents mid-morning crashes. Avoid sugary cereals and processed foods that can cause energy spikes and crashes.</p>
         <p>Consider options like overnight oats with nuts and berries, Greek yogurt with honey and granola, or eggs with whole grain toast and avocado. The combination of protein, healthy fats, and complex carbs will keep you satisfied and energized until lunch.</p>
         <h3>5. Digital Detox</h3>
         <p>Resist the urge to immediately check your phone or email. Give yourself at least 30 minutes of screen-free time in the morning. This allows your brain to wake up naturally and reduces stress hormones that can be triggered by immediate digital engagement.</p>
         <p>Use this time to connect with yourself, your family, or simply enjoy the quiet moments before the day begins. This practice can significantly improve your mental clarity and reduce anxiety throughout the day.</p>
         <h2>Creating Your Personalized Routine</h2>
         <p>Remember, there's no one-size-fits-all approach to morning wellness. Start with what feels natural and gradually build upon your routine. The key is consistency and listening to your body's needs. Your ideal morning routine should feel nourishing, not stressful.</p>
         <p>Consider your chronotype (whether you're a morning person or night owl) when designing your routine. Early birds might thrive with longer morning practices, while night owls might prefer shorter, more energizing activities.</p>
         <h2>Tips for Success</h2>
         <ul>
           <li>Start small - begin with just 10-15 minutes and gradually increase</li>
           <li>Prepare the night before to reduce morning stress</li>
           <li>Be consistent but flexible - life happens, and that's okay</li>
           <li>Track your progress and adjust as needed</li>
           <li>Create a peaceful environment - declutter your space</li>
           <li>Set realistic expectations - perfection isn't the goal</li>
           <li>Listen to your body - some days you might need more rest</li>
         </ul>
         <h2>Common Challenges and Solutions</h2>
         <p>Many people struggle with consistency, especially in the beginning. If you're not a morning person, start by going to bed 15 minutes earlier each week until you're getting adequate sleep. Remember that it takes about 21 days to form a new habit, so be patient with yourself.</p>
         <p>If you have children or a busy household, involve them in your routine or wake up 30 minutes earlier to have time for yourself. The investment in your morning routine will pay dividends throughout your day.</p>
         <h2>The Science Behind Morning Routines</h2>
         <p>Research from the University of Nottingham shows that morning routines can improve cognitive function, reduce stress hormones, and enhance mood. The practice of setting intentions in the morning activates the prefrontal cortex, improving decision-making and emotional regulation throughout the day.</p>
         <p>Your morning routine is a powerful tool for creating the life you want. By investing in yourself first thing each day, you're setting yourself up for success in all areas of your life. Remember, the goal isn't perfection—it's progress and consistency.</p>
       `
      },
      Arabic: {
        title: "الدليل الكامل لروتين العافية الصباحية",
        author: "فريق العافية",
        authorInitial: "و",
        readTime: "٥ دقائق قراءة",
        publishDate: "منذ يومين",
        category: "العافية",
        image: morningWellness,
        content: `
         <p>بدء يومك بنية وهدف يمكن أن يغير حياتك بالكامل. تظهر الأبحاث أن الأشخاص الذين يتبعون روتينًا صباحيًا ثابتًا يتمتعون بمستويات أعلى من الإنتاجية وصحة نفسية أفضل. غالبًا ما يُطلق على الساعة الأولى بعد الاستيقاظ اسم "الساعة الذهبية" لأنها تحدد نغمة يومك بالكامل.</p>
         <h2>لماذا الروتين الصباحي مهم</h2>
         <p>تظهر الأبحاث أن الأشخاص الذين يتبعون روتينًا صباحيًا ثابتًا يديرون التوتر بشكل أفضل، ويحسنون التركيز طوال اليوم، ويعززون التنظيم العاطفي. الروتين المنظم يحدد نغمة اليوم بأكمله. تشير دراسات من Harvard Business Review إلى أن الأشخاص الناجحين أكثر عرضة بمقدار 2.5 مرة لامتلاك روتين صباحي من أولئك الذين لا يملكونه.</p>
         <p>يساعد الروتين الصباحي على تنظيم إيقاع الساعة البيولوجية، وتعزيز عملية الأيض، وتحسين المزاج. كما يوفر إحساسًا بالسيطرة والإنجاز في وقت مبكر من اليوم، مما يمكن أن يستمر في جميع أنشطتك الأخرى.</p>
         <h2>عناصر أساسية لروتين العافية الصباحية</h2>
         <h3>1. الترطيب أولاً</h3>
         <p>ابدأ يومك بكوب من الماء لإعادة ترطيب جسمك بعد 7-8 ساعات من النوم. أضف الليمون لفيتامين C أو خل التفاح لصحة الجهاز الهضمي. يفقد جسمك الماء أثناء التنفس والتعرق أثناء النوم، لذا فإن إعادة الترطيب أمر بالغ الأهمية لوظائف الجسم المثلى.</p>
         <p>فكر في إضافة رشة من ملح الهيمالايا للإلكتروليتات أو رشّة من خل التفاح لدعم الهضم والأيض. يمكن أن تعزز هذه الممارسة البسيطة مستويات الطاقة لديك وتبدأ عملية الأيض.</p>
         <h3>2. الحركة الواعية</h3>
         <p>أدخل تمارين التمدد أو اليوغا اللطيفة لإيقاظ عضلاتك وتحسين الدورة الدموية. حتى 5-10 دقائق من الحركة يمكن أن تعزز مستويات الطاقة بشكل كبير. ركز على الحركات التي تفتح صدرك، وتمدد عمودك الفقري، وتنشط عضلاتك الأساسية.</p>
         <p>جرب تحية الشمس، وتمارين القط-البقرة، أو الحركات الوقوف البسيطة. المفتاح هو التحرك ببطء وبوعي، والانتباه إلى شعور جسمك. تزيد هذه الممارسة من تدفق الدم إلى الدماغ والعضلات، مما يساعدك على الشعور بمزيد من اليقظة والنشاط.</p>
         <h3>3. التأمل واليقظة</h3>
         <p>خذ 5-10 دقائق للتركيز من خلال التأمل أو التنفس العميق أو الجلوس بصمت. تساعد هذه الممارسة على تقليل مستويات الكورتيزول وتجهز عقلك لليوم القادم. تظهر الأبحاث أن التأمل الصباحي يمكن أن يحسن التركيز، ويقلل القلق، ويعزز التنظيم العاطفي.</p>
         <p>ابدأ بالتأملات الموجهة إذا كنت جديدًا على الممارسة. ركز على تنفسك، وراقب أفكارك دون حكم، وزد وقت الممارسة تدريجيًا مع زيادة راحتك.</p>
         <h3>4. إفطار مغذي</h3>
         <p>زود جسمك بوجبة إفطار متوازنة تحتوي على البروتين، والدهون الصحية، والكربوهيدرات المعقدة. يوفر هذا طاقة مستدامة ويمنع الانخفاضات في منتصف الصباح. تجنب الحبوب السكرية والأطعمة المصنعة التي يمكن أن تسبب ارتفاعات وانخفاضات في الطاقة.</p>
         <p>فكر في خيارات مثل الشوفان الليلي مع المكسرات والتوت، أو الزبادي اليوناني مع العسل والجرانولا، أو البيض مع خبز الحبوب الكاملة والأفوكادو. سيبقيك مزيج البروتين والدهون الصحية والكربوهيدرات المعقدة مشبعًا ونشيطًا حتى الغداء.</p>
         <h3>5. التخلص من الأجهزة الرقمية</h3>
         <p>قاوم الرغبة في التحقق من هاتفك أو بريدك الإلكتروني فورًا. امنح نفسك 30 دقيقة على الأقل من الوقت الخالي من الشاشات في الصباح. يسمح ذلك لعقلك بالاستيقاظ بشكل طبيعي ويقلل من هرمونات التوتر التي يمكن أن تثيرها المشاركة الرقمية الفورية.</p>
         <p>استخدم هذا الوقت للتواصل مع نفسك أو عائلتك أو ببساطة للاستمتاع بلحظات الهدوء قبل بدء اليوم. يمكن أن تحسن هذه الممارسة بشكل كبير من وضوحك الذهني وتقلل من القلق طوال اليوم.</p>
         <h2>إنشاء روتينك الشخصي</h2>
         <p>تذكر، لا يوجد نهج واحد يناسب الجميع للعافية الصباحية. ابدأ بما تشعر أنه طبيعي وابنِ روتينك تدريجيًا. المفتاح هو الاتساق والاستماع إلى احتياجات جسمك. يجب أن يشعر روتينك الصباحي المثالي بأنه مغذٍ وليس مرهقًا.</p>
         <p>ضع في اعتبارك نوعك الزمني (سواء كنت شخصًا صباحيًا أو ليليًا) عند تصميم روتينك. قد يزدهر الأشخاص الصباحيون مع ممارسات صباحية أطول، بينما قد يفضل الأشخاص الليليون أنشطة أقصر وأكثر نشاطًا.</p>
         <h2>نصائح للنجاح</h2>
         <ul>
           <li>ابدأ صغيرًا - ابدأ بـ 10-15 دقيقة فقط وزد تدريجيًا</li>
           <li>استعد في الليلة السابقة لتقليل التوتر الصباحي</li>
           <li>كن متسقًا ولكن مرنًا - الحياة تحدث، وهذا طبيعي</li>
           <li>تتبع تقدمك وعدل حسب الحاجة</li>
           <li>أنشئ بيئة هادئة - نظف مساحتك</li>
           <li>ضع توقعات واقعية - الكمال ليس الهدف</li>
           <li>استمع إلى جسمك - بعض الأيام قد تحتاج إلى مزيد من الراحة</li>
         </ul>
         <h2>التحديات الشائعة والحلول</h2>
         <p>يواجه الكثيرون صعوبة في الاتساق، خاصة في البداية. إذا لم تكن شخصًا صباحيًا، ابدأ بالذهاب إلى الفراش قبل 15 دقيقة كل أسبوع حتى تحصل على نوم كافٍ. تذكر أن الأمر يستغرق حوالي 21 يومًا لتكوين عادة جديدة، لذا كن صبورًا مع نفسك.</p>
         <p>إذا كان لديك أطفال أو منزل مزدحم، أشركهم في روتينك أو استيقظ قبل 30 دقيقة لتحصل على وقت لنفسك. الاستثمار في روتينك الصباحي سيؤتي ثماره طوال اليوم.</p>
         <h2>العلم وراء الروتين الصباحي</h2>
         <p>تظهر الأبحاث من جامعة نوتنغهام أن الروتين الصباحي يمكن أن يحسن الوظائف الإدراكية، ويقلل من هرمونات التوتر، ويعزز المزاج. ممارسة تحديد النوايا في الصباح تنشط القشرة الجبهية الأمامية، مما يحسن اتخاذ القرار والتنظيم العاطفي طوال اليوم.</p>
         <p>روتينك الصباحي هو أداة قوية لإنشاء الحياة التي تريدها. من خلال الاستثمار في نفسك أول شيء كل يوم، فإنك تهيئ نفسك للنجاح في جميع مجالات حياتك. تذكر، الهدف ليس الكمال—بل التقدم والاتساق.</p>
       `
      },
      Hebrew: {
        title: "המדריך המלא לשגרות בריאות הבוקר",
        author: "צוות הבריאות",
        authorInitial: "ב",
        readTime: "5 דקות קריאה",
        publishDate: "לפני יומיים",
        category: "בריאות",
        image: morningWellness,
        content: `
         <p>התחלת היום בכוונה ומטרה יכולה לשנות את כל חייך. מחקרים מראים שאנשים שמקפידים על שגרה בוקרית קבועה נהנים מרמות גבוהות יותר של פרודוקטיביות ובריאות נפשית טובה יותר. השעה הראשונה לאחר ההתעוררות נקראת לעיתים "שעת הזהב" כי היא קובעת את הטון לכל היום.</p>
         <h2>למה שגרות בוקר חשובות</h2>
         <p>מחקרים מראים שאנשים שמקפידים על שגרה בוקרית קבועה מנהלים טוב יותר את הלחץ, משפרים את הריכוז לאורך היום ומחזקים את הוויסות הרגשי. שגרה מסודרת קובעת את הטון לכל היום. מחקרים מ-Harvard Business Review מראים שאנשים מצליחים נוטים פי 2.5 יותר להחזיק בשגרה בוקרית מאשר אלו שלא.</p>
         <p>שגרות בוקר עוזרות לווסת את השעון הביולוגי, להאיץ את חילוף החומרים ולשפר את מצב הרוח. הן גם מעניקות תחושת שליטה והישגיות מוקדם ביום, שיכולה להימשך לכל שאר הפעילויות שלך.</p>
         <h2>מרכיבים חיוניים לשגרת בריאות בוקר</h2>
         <h3>1. הידרציה תחילה</h3>
         <p>התחל את היום בכוס מים כדי להחזיר לגוף נוזלים אחרי 7-8 שעות שינה. הוסף לימון לוויטמין C או חומץ תפוחים לבריאות העיכול. הגוף מאבד מים בנשימה ובהזעה במהלך השינה, לכן הידרציה חשובה לתפקוד מיטבי.</p>
         <p>שקול להוסיף קורט מלח הימלאיה לאלקטרוליטים או מעט חומץ תפוחים לתמיכה בעיכול ובחילוף החומרים. פעולה פשוטה זו יכולה להעלות את רמות האנרגיה ולהפעיל את חילוף החומרים.</p>
         <h3>2. תנועה מודעת</h3>
         <p>שלב מתיחות עדינות או תנוחות יוגה כדי להעיר את השרירים ולשפר את זרימת הדם. אפילו 5-10 דקות של תנועה יכולות להעלות משמעותית את רמות האנרגיה. התמקד בתנוחות שפותחות את החזה, מותחות את עמוד השדרה ומפעילות את הליבה.</p>
         <p>נסה ברכות שמש, מתיחות חתול-פרה או תנוחות עמידה פשוטות. המפתח הוא לנוע לאט ובמודעות, לשים לב איך הגוף מרגיש. פעולה זו מגבירה את זרימת הדם למוח ולשרירים, ועוזרת לך להרגיש ערני ומלא אנרגיה.</p>
         <h3>3. מדיטציה ומיינדפולנס</h3>
         <p>קח 5-10 דקות להתרכז במדיטציה, נשימות עמוקות או פשוט לשבת בשקט. פעולה זו עוזרת להפחית את רמות הקורטיזול ומכינה את המוח ליום שלפניך. מחקרים מראים שמדיטציה בוקרית יכולה לשפר את הריכוז, להפחית חרדה ולחזק את הוויסות הרגשי.</p>
         <p>התחל במדיטציות מודרכות אם אתה חדש בתחום. התמקד בנשימה, התבונן במחשבות ללא שיפוט, והגדל את זמן התרגול בהדרגה ככל שתתרגל.</p>
         <h3>4. ארוחת בוקר מזינה</h3>
         <p>ספק לגוף ארוחת בוקר מאוזנת הכוללת חלבון, שומנים בריאים ופחמימות מורכבות. זה מספק אנרגיה מתמשכת ומונע נפילות אנרגיה באמצע הבוקר. הימנע מדגני בוקר ממותקים ומאכלים מעובדים שיכולים לגרום לעליות וירידות באנרגיה.</p>
         <p>שקול אפשרויות כמו שיבולת שועל עם אגוזים ופירות יער, יוגורט יווני עם דבש וגרנולה, או ביצים עם לחם מחיטה מלאה ואבוקדו. השילוב של חלבון, שומנים בריאים ופחמימות מורכבות ישאיר אותך שבע ומלא אנרגיה עד הצהריים.</p>
         <h3>5. דטוקס דיגיטלי</h3>
         <p>התנגד לדחף לבדוק את הטלפון או המייל מיד. תן לעצמך לפחות 30 דקות של זמן ללא מסכים בבוקר. זה מאפשר למוח להתעורר באופן טבעי ומפחית הורמוני לחץ שיכולים להתעורר מהשתתפות דיגיטלית מיידית.</p>
         <p>נצל את הזמן הזה להתחבר לעצמך, למשפחה שלך או פשוט ליהנות מהרגעים השקטים לפני שהיום מתחיל. פעולה זו יכולה לשפר משמעותית את הבהירות המנטלית ולהפחית חרדה לאורך כל היום.</p>
         <h2>יצירת שגרה מותאמת אישית</h2>
         <p>זכור, אין גישה אחת שמתאימה לכולם לבריאות בוקר. התחל במה שמרגיש טבעי ובנה את השגרה שלך בהדרגה. המפתח הוא עקביות והקשבה לצרכי הגוף שלך. שגרת הבוקר האידיאלית שלך צריכה להרגיש מזינה, לא מלחיצה.</p>
         <p>קח בחשבון את הכרונוטיפ שלך (אם אתה טיפוס בוקר או ערב) בעת עיצוב השגרה. טיפוסי בוקר עשויים להפיק תועלת מתרגולים ארוכים יותר, בעוד שטיפוסי ערב עשויים להעדיף פעילויות קצרות וממריצות יותר.</p>
         <h2>טיפים להצלחה</h2>
         <ul>
           <li>התחל בקטן - התחל ב-10-15 דקות והגדל בהדרגה</li>
           <li>הכן את עצמך בלילה שלפני כדי להפחית לחץ בבוקר</li>
           <li>היה עקבי אך גמיש - החיים קורים וזה בסדר</li>
           <li>עקוב אחר ההתקדמות שלך והתאם לפי הצורך</li>
           <li>צור סביבה שלווה - סדר את המרחב שלך</li>
           <li>הצב ציפיות ריאליות - שלמות אינה המטרה</li>
           <li>הקשב לגוף שלך - יש ימים בהם תצטרך יותר מנוחה</li>
         </ul>
         <h2>אתגרים נפוצים ופתרונות</h2>
         <p>אנשים רבים מתקשים בעקביות, במיוחד בהתחלה. אם אינך טיפוס בוקר, התחל ללכת לישון 15 דקות מוקדם יותר בכל שבוע עד שתשיג שינה מספקת. זכור שלוקח כ-21 יום ליצור הרגל חדש, אז היה סבלני עם עצמך.</p>
         <p>אם יש לך ילדים או בית עמוס, שתף אותם בשגרה שלך או התעורר 30 דקות מוקדם יותר כדי שיהיה לך זמן לעצמך. ההשקעה בשגרת הבוקר שלך תשתלם לאורך כל היום.</p>
         <h2>המדע מאחורי שגרות הבוקר</h2>
         <p>מחקרים מאוניברסיטת נוטינגהאם מראים ששגרות בוקר יכולות לשפר את התפקוד הקוגניטיבי, להפחית הורמוני לחץ ולשפר את מצב הרוח. תרגול קביעת כוונות בבוקר מפעיל את הקורטקס הקדם-מצחי, ומשפר קבלת החלטות וויסות רגשי לאורך כל היום.</p>
         <p>שגרת הבוקר שלך היא כלי עוצמתי ליצירת החיים שאתה רוצה. על ידי השקעה בעצמך בראש ובראשונה בכל יום, אתה מכין את עצמך להצלחה בכל תחומי החיים שלך. זכור, המטרה אינה שלמות—אלא התקדמות ועקביות.</p>
       `
      }
    },
    'mindfulness-meditation': {
      English: {
        title: "Mindfulness Meditation: A Beginner's Journey",
        author: "Sarah Chen",
        authorInitial: "S",
        readTime: "8 min read",
        publishDate: "1 day ago",
        category: "Meditation",
        image: mindfulMeditation,
        content: `<p>Mindfulness meditation is more than just sitting quietly—it's a practice...</p>`
      },
      Arabic: {
        title: "تأمل اليقظة: رحلة المبتدئين",
        author: "سارة تشين",
        authorInitial: "س",
        readTime: "٨ دقائق قراءة",
        publishDate: "منذ يوم",
        category: "تأمل",
        image: mindfulMeditation,
        content: `<p>تأمل اليقظة أكثر من مجرد الجلوس بهدوء...</p>`
      },
      Hebrew: {
        title: "מדיטציית מיינדפולנס: מסע למתחילים",
        author: "שרה צ'ן",
        authorInitial: "ש",
        readTime: "8 דקות קריאה",
        publishDate: "לפני יום",
        category: "מדיטציה",
        image: mindfulMeditation,
        content: `<p>מדיטציית מיינדפולנס היא יותר מסתם ישיבה בשקט...</p>`
      }
    },
    'nutrition-wellness': {
      English: {
        title: "The Power of Mindful Nutrition: Fueling Your Body and Mind",
        author: "Dr. Emily Rodriguez",
        authorInitial: "E",
        readTime: "6 min read",
        publishDate: "3 days ago",
        category: "Nutrition",
        image: nutrition,
        content: `<p>Nutrition is more than just what you eat—it's a fundamental pillar of wellness...</p>`
      },
      Arabic: {
        title: "قوة التغذية الواعية: تغذية الجسم والعقل",
        author: "د. إميلي رودريغيز",
        authorInitial: "إ",
        readTime: "٦ دقائق قراءة",
        publishDate: "منذ ثلاثة أيام",
        category: "تغذية",
        image: nutrition,
        content: `<p>التغذية أكثر من مجرد ما تأكله—إنها ركيزة أساسية للعافية...</p>`
      },
      Hebrew: {
        title: "הכוח של תזונה מודעת: דלק לגוף ולנפש",
  author: "ד\"ר אמילי רודריגז",
        authorInitial: "א",
        readTime: "6 דקות קריאה",
        publishDate: "לפני שלושה ימים",
        category: "תזונה",
        image: nutrition,
        content: `<p>תזונה היא הרבה יותר ממה שאתה אוכל—זו עמוד תווך של בריאות...</p>`
      }
    }
  };

  const article = articles[id]?.[language];

  if (!article) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Article Not Found</h1>
        <button
          onClick={() => navigate('/blog')}
          className="mt-4 px-4 py-2 bg-teal-500 text-white rounded-lg"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  const articleImage = article.image;

  return (
  <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'} pt-20`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      {/* Navigation */}
      <nav className={`py-4 px-6 border-b ${isDarkMode ? 'border-gray-800' : 'border-white'}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate('/blog')}
            className={`flex items-center text-sm ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
          >
            {isRTL ? '←' : '→'} {language === 'Arabic' ? 'العودة للمدونة' : language === 'Hebrew' ? 'חזרה לבלוג' : 'Back to Blog'}
          </button>
        </div>
      </nav>

      {/* Article Layout */}
      <main className="relative">
        {/* Hero Section with Image and Initial Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-8 lg:py-12">
          {/* Left Side: Image */}
          <div className="flex flex-col">
            <div className="relative w-full h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
              <img 
                src={articleImage} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  isDarkMode 
                    ? 'bg-black/80 text-white' 
                    : 'bg-white/90 text-gray-900'
                } shadow-md`}>
                  {article.category}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Article Title and Initial Content */}
          <div className="lg:pl-4 flex flex-col justify-start">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight text-teal-500">
              {article.title}
            </h1>
            <div className={`prose max-w-none text-lg leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <p className="mb-6">
                {article.publishDate} • {article.readTime}
              </p>
            </div>
          </div>
        </div>

        {/* Full-width Content Section */}
        <section className="px-6 py-6">
          <div className="max-w-4xl mx-auto">
            <article
              className={`prose max-w-none ${isDarkMode ? 'prose-invert' : ''}`}
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '1.1rem',
                lineHeight: '1.7',
                letterSpacing: '0.01em',
              }}
            >
              <div
                dangerouslySetInnerHTML={{ 
                  __html: article.content 
                }}
                className={[
                  'custom-article-content',
                  isDarkMode ? 'text-gray-300' : 'text-gray-700',
                ].join(' ')}
              />
            </article>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className={`mt-16 pt-8 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}> 
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-teal-600 text-sm font-bold">{article.authorInitial}</span>
                </div>
                <div>
                  <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {language === 'Arabic' ? 'كتبه' : language === 'Hebrew' ? 'נכתב על ידי' : 'Written by'} {article.author}
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{article.readTime}</p>
                </div>
              </div>
              <button
                onClick={() => navigate('/blog')}
                className="px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {language === 'Arabic' ? 'العودة للمدونة' : language === 'Hebrew' ? 'חזרה לבלוג' : 'Back to Blog'}
              </button>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .custom-article-content h1, .custom-article-content h2, .custom-article-content h3, .custom-article-content h4 {
          margin-top: 2em;
          margin-bottom: 0.8em;
          font-weight: 700;
          line-height: 1.3;
          color: #14b8a6;
        }
        .custom-article-content h1 { font-size: 2rem; }
        .custom-article-content h2 { font-size: 1.5rem; }
        .custom-article-content h3 { font-size: 1.25rem; }
        .custom-article-content h4 { font-size: 1.1rem; }
        .custom-article-content p {
          margin-top: 1em;
          margin-bottom: 1em;
          font-size: 1.05em;
          line-height: 1.7;
        }
        .custom-article-content ul, .custom-article-content ol {
          margin-top: 1em;
          margin-bottom: 1em;
          padding-left: 1.5em;
        }
        .custom-article-content li {
          margin-bottom: 0.5em;
          font-size: 1em;
        }
        .custom-article-content strong {
          font-weight: 600;
        }
      `}</style>
      <Footer />
    </div>
  );
};

export default Article;