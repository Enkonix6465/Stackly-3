
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../footer';
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useScrollToTop } from "../hooks/useScrollToTop";
import morningWellness from '../assets/morning wellness.jpeg';
import mindfulMeditation from '../assets/mindfulMeditation.jpeg';
import nutrition from '../assets/nutrition.jpeg';
import blogVideo from '../assets/blogVideo.mp4';
import quizImage from '../assets/quiz.jpg';

function Blog() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [currentMythFact, setCurrentMythFact] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('fitness');
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

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

  // Category content data
  const categoryContent = {
    fitness: {
      title: "Fitness & Exercise",
      description: "Transform your life through movement and strength training. Our fitness category covers everything from beginner workouts to advanced training programs.",
      benefits: [
        "Improved cardiovascular health",
        "Increased strength and flexibility",
        "Better mood and mental clarity",
        "Enhanced energy levels throughout the day"
      ],
      tips: "Start with 30 minutes of moderate exercise daily and gradually increase intensity. Remember, consistency is key to seeing results.",
      articles: "50+ articles on workouts, training plans, and fitness tips"
    },
    healthyEating: {
      title: "Healthy Eating",
      description: "Discover the power of nutrition and learn how to fuel your body with wholesome, delicious foods that support your wellness journey.",
      benefits: [
        "Better digestion and gut health",
        "Stable energy levels",
        "Improved immune function",
        "Enhanced mental clarity and focus"
      ],
      tips: "Focus on whole foods, eat a rainbow of fruits and vegetables, and stay hydrated. Small changes lead to big results.",
      articles: "40+ articles on nutrition, meal planning, and healthy recipes"
    },
    weightLoss: {
      title: "Weight Loss",
      description: "Achieve sustainable weight loss through science-backed strategies, balanced nutrition, and lifestyle changes that last.",
      benefits: [
        "Sustainable weight management",
        "Improved body composition",
        "Better metabolic health",
        "Increased confidence and self-esteem"
      ],
      tips: "Focus on creating a calorie deficit through diet and exercise, prioritize protein, and be patient with your progress.",
      articles: "35+ articles on weight loss strategies and success stories"
    },
    wellness: {
      title: "Overall Wellness",
      description: "Holistic approaches to health that encompass physical, mental, and emotional well-being for a balanced lifestyle.",
      benefits: [
        "Comprehensive health improvement",
        "Better stress management",
        "Enhanced quality of life",
        "Improved relationships and social connections"
      ],
      tips: "Take a holistic approach by addressing all aspects of health: physical, mental, emotional, and spiritual.",
      articles: "60+ articles on holistic wellness and lifestyle balance"
    },
    healthyMind: {
      title: "Healthy Mind",
      description: "Nurture your mental health through mindfulness, stress management, and cognitive wellness practices.",
      benefits: [
        "Reduced stress and anxiety",
        "Improved focus and concentration",
        "Better emotional regulation",
        "Enhanced creativity and problem-solving"
      ],
      tips: "Practice mindfulness daily, prioritize sleep, and don't hesitate to seek professional help when needed.",
      articles: "45+ articles on mental health and cognitive wellness"
    },
    sleep: {
      title: "Sleep & Recovery",
      description: "Optimize your sleep quality and recovery to support your overall health and performance goals.",
      benefits: [
        "Better physical recovery",
        "Enhanced cognitive function",
        "Improved mood and emotional stability",
        "Stronger immune system"
      ],
      tips: "Create a consistent sleep schedule, optimize your sleep environment, and avoid screens before bedtime.",
      articles: "30+ articles on sleep optimization and recovery strategies"
    },
    stressManagement: {
      title: "Stress Management",
      description: "Learn effective techniques to manage stress and build resilience in today's fast-paced world.",
      benefits: [
        "Reduced cortisol levels",
        "Better emotional balance",
        "Improved decision-making",
        "Enhanced overall well-being"
      ],
      tips: "Practice deep breathing, regular exercise, and time management. Remember to take breaks and prioritize self-care.",
      articles: "40+ articles on stress management and resilience building"
    },
    meditation: {
      title: "Meditation & Mindfulness",
      description: "Discover inner peace and mental clarity through meditation practices and mindfulness techniques.",
      benefits: [
        "Reduced anxiety and depression",
        "Improved focus and attention",
        "Better emotional regulation",
        "Enhanced self-awareness"
      ],
      tips: "Start with just 5-10 minutes daily. Focus on your breath and be patient with your practice.",
      articles: "35+ articles on meditation techniques and mindfulness practices"
    },
    nutrition: {
      title: "Nutrition Science",
      description: "Explore the science behind nutrition and learn evidence-based approaches to fueling your body optimally.",
      benefits: [
        "Evidence-based dietary choices",
        "Better understanding of food's impact",
        "Optimized nutrient absorption",
        "Improved long-term health outcomes"
      ],
      tips: "Focus on nutrient density, understand your individual needs, and consult with professionals for personalized advice.",
      articles: "50+ articles on nutrition science and dietary research"
    },
    selfCare: {
      title: "Self Care",
      description: "Prioritize yourself with meaningful self-care practices that nourish your mind, body, and soul.",
      benefits: [
        "Improved self-esteem and confidence",
        "Better stress management",
        "Enhanced emotional well-being",
        "Stronger personal boundaries"
      ],
      tips: "Make self-care a non-negotiable part of your routine. Remember, you can't pour from an empty cup.",
      articles: "40+ articles on self-care practices and personal development"
    }
  };

  const quizQuestions = [
    {
      question: "What is the recommended daily water intake for adults?",
      options: ["4-6 glasses", "6-8 glasses", "8-10 glasses", "10-12 glasses"],
      correct: 2
    },
    {
      question: "Which of these is NOT a benefit of regular exercise?",
      options: ["Improved mood", "Better sleep", "Increased stress", "Stronger immune system"],
      correct: 2
    },
    {
      question: "How many hours of sleep do adults typically need per night?",
      options: ["4-5 hours", "5-6 hours", "7-9 hours", "10-12 hours"],
      correct: 2
    },
    {
      question: "Which food group should make up the largest portion of your plate?",
      options: ["Proteins", "Vegetables", "Grains", "Fruits"],
      correct: 1
    },
    {
      question: "What is the best time to exercise for weight loss?",
      options: ["Early morning", "Afternoon", "Evening", "Any time that fits your schedule"],
      correct: 3
    },
    {
      question: "Which vitamin is known as the 'sunshine vitamin'?",
      options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
      correct: 2
    },
    {
      question: "How often should you take breaks when working at a computer?",
      options: ["Every 30 minutes", "Every hour", "Every 2 hours", "Only when tired"],
      correct: 1
    },
    {
      question: "Which of these is a sign of good mental health?",
      options: ["Feeling happy all the time", "Never experiencing stress", "Being able to cope with challenges", "Always being positive"],
      correct: 2
    },
    {
      question: "What percentage of your body weight should come from protein?",
      options: ["5-10%", "10-15%", "15-20%", "20-25%"],
      correct: 2
    },
    {
      question: "Which activity is best for reducing stress?",
      options: ["Watching TV", "Mindfulness meditation", "Social media scrolling", "Eating comfort food"],
      correct: 1
    }
  ];

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const getAnswerColor = (questionIndex, optionIndex) => {
    if (selectedAnswers[questionIndex] === undefined) return '';
    
    if (optionIndex === quizQuestions[questionIndex].correct) {
      return 'bg-green-500 text-white';
    } else if (selectedAnswers[questionIndex] === optionIndex) {
      return 'bg-red-500 text-white';
    }
    return '';
  };

  const calculateScore = () => {
    let correct = 0;
    Object.keys(selectedAnswers).forEach(questionIndex => {
      if (selectedAnswers[questionIndex] === quizQuestions[questionIndex].correct) {
        correct++;
      }
    });
    return correct;
  };

  const mythsAndFacts = [
    {
      myth: [
        "Drinking 8 glasses of water daily is necessary for everyone",
        "Eating late at night causes weight gain",
        "Carbs are bad for you and should be avoided",
        "You need to exercise for hours to see results"
      ],
      fact: [
        "Water needs vary by individual. Factors like activity level, climate, and diet determine your actual needs.",
        "Weight gain is about total calories consumed vs. burned, not timing.",
        "Carbohydrates are essential for energy. The key is choosing complex carbs over refined carbs.",
        "Even 30 minutes of moderate exercise daily provides significant health benefits."
      ]
    },
    {
      myth: [
        "Skipping meals helps you lose weight faster",
        "All fats are unhealthy and should be avoided",
        "You can't build muscle after age 40",
        "Detox diets are necessary to cleanse your body"
      ],
      fact: [
        "Skipping meals often leads to overeating later and slows metabolism.",
        "Healthy fats are essential for brain health and hormone production.",
        "You can build muscle at any age with proper strength training and nutrition.",
        "Your liver and kidneys naturally detoxify your body."
      ]
    },
    {
      myth: [
        "You need protein supplements to build muscle",
        "Stretching before exercise prevents injuries",
        "Supplements can replace a healthy diet",
        "You must eat immediately after working out"
      ],
      fact: [
        "Most people can get enough protein from whole foods.",
        "Dynamic stretching before exercise is beneficial, but static stretching can increase injury risk.",
        "Supplements should complement, not replace, a balanced diet.",
        "The anabolic window is longer than previously thought - you have 2-3 hours post-workout."
      ]
    }
  ];

  const handleMythFactNext = () => {
    if (currentMythFact < mythsAndFacts.length - 1) {
      setCurrentMythFact(currentMythFact + 1);
    }
  };

  const handleGoToFirst = () => {
    setCurrentMythFact(0);
  };

  const handleMythFactPrevious = () => {
    if (currentMythFact > 0) {
      setCurrentMythFact(currentMythFact - 1);
    }
  };

  return (
    <div className={`min-h-screen overflow-x-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <Header />
      {/* Section 1 - Hero Section */}
      <section className={`w-full min-h-screen relative overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-teal-50'}`}>
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={blogVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Content Overlay */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 py-8">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 transition-all duration-1000 ease-out animate-fade-in-up ${isDarkMode ? 'text-white' : 'text-teal-700'}`}>
            Wellness Blog
          </h1>
          <p className={`text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto px-4 transition-all duration-1000 ease-out delay-300 animate-fade-in-up-delay-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Discover expert insights, tips, and stories to help you on your wellness journey
          </p>
        </div>
      </section>

             {/* Section 2 - Featured Articles */}
       <section className={`w-full py-12 sm:py-16 px-4 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
         <div className="max-w-7xl mx-auto">
           <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 transition-all duration-1000 ease-out animate-fade-in-up ${isDarkMode ? 'text-white' : 'text-teal-700'}`}>
             Featured Articles
           </h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
             {/* Featured Article Card 1 */}
             <div className={`rounded-xl shadow-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-shadow duration-300`}>
               <div className="h-40 sm:h-48 overflow-hidden">
                 <img 
                   src={morningWellness} 
                   alt="Morning Wellness" 
                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                 />
               </div>
               <div className="p-4 sm:p-6">
                 <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                   The Complete Guide to Morning Wellness Routines
                 </h3>
                 <p className={`text-xs sm:text-sm mb-3 sm:mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                   Discover how to start your day with energy and purpose through proven wellness practices
                 </p>
                 <div className="flex items-center mb-3 sm:mb-4">
                   <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-100 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                     <span className="text-teal-600 text-xs sm:text-sm font-bold">W</span>
                   </div>
                   <div className="flex-1">
                     <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Wellness Team</p>
                     <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>2d ago • 5 min read</p>
                   </div>
                 </div>
                 <button 
                   onClick={() => navigate('/article/morning-wellness')}
                   className="text-teal-500 font-semibold hover:text-teal-600 transition-colors text-sm sm:text-base"
                 >
                   Read More →
                 </button>
               </div>
             </div>

             {/* Featured Article Card 2 */}
             <div className={`rounded-xl shadow-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-shadow duration-300`}>
               <div className="h-40 sm:h-48 overflow-hidden">
                 <img 
                   src={mindfulMeditation} 
                   alt="Mindful Meditation" 
                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                 />
               </div>
               <div className="p-4 sm:p-6">
                 <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                   Mindfulness Meditation: A Beginner's Journey
                 </h3>
                 <p className={`text-xs sm:text-sm mb-3 sm:mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                   Learn the fundamentals of meditation and how it can transform your mental health
                 </p>
                 <div className="flex items-center mb-3 sm:mb-4">
                   <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                     <span className="text-purple-600 text-xs sm:text-sm font-bold">S</span>
                   </div>
                   <div className="flex-1">
                     <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Sarah Chen</p>
                     <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>1d ago • 8 min read</p>
                   </div>
                 </div>
                 <button 
                   onClick={() => navigate('/article/mindfulness-meditation')}
                   className="text-teal-500 font-semibold hover:text-teal-600 transition-colors text-sm sm:text-base"
                 >
                   Read More →
                 </button>
               </div>
             </div>

             {/* Featured Article Card 3 */}
             <div className={`rounded-xl shadow-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-xl transition-shadow duration-300`}>
               <div className="h-40 sm:h-48 overflow-hidden">
                 <img 
                   src={nutrition} 
                   alt="Nutrition" 
                   className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                 />
               </div>
               <div className="p-4 sm:p-6">
                 <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                   The Power of Mindful Nutrition: Fueling Your Body and Mind
                 </h3>
                 <p className={`text-xs sm:text-sm mb-3 sm:mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                   Understanding how to nourish your body mindfully can transform your relationship with food
                 </p>
                 <div className="flex items-center mb-3 sm:mb-4">
                   <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                     <span className="text-orange-600 text-xs sm:text-sm font-bold">E</span>
                   </div>
                   <div className="flex-1">
                     <p className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Dr. Emily Rodriguez</p>
                     <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>3d ago • 6 min read</p>
                   </div>
                 </div>
                 <button 
                   onClick={() => navigate('/article/nutrition-wellness')}
                   className="text-teal-500 font-semibold hover:text-teal-600 transition-colors text-sm sm:text-base"
                 >
                   Read More →
                 </button>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Section 3 - Workout Comparison */}
       <section className={`w-full py-12 sm:py-16 px-4 ${isDarkMode ? 'bg-teal-500' : 'bg-teal-500'}`}>
         <div className="max-w-7xl mx-auto">
           <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 ${isDarkMode ? 'text-white' : 'text-teal-700'}`}>
             Find Your Perfect Workout
           </h2>
           <p className={`text-base sm:text-lg text-center mb-8 sm:mb-12 max-w-3xl mx-auto px-4 ${isDarkMode ? 'text-gray-300' : 'text-white'}`}>
             Compare different workout types to discover which one matches your fitness goals and lifestyle
           </p>
           
           <div className="overflow-x-auto">
             <div className={`rounded-xl shadow-lg overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
               <div className="min-w-full">
                 {/* Table Header */}
                 <div className={`grid grid-cols-5 gap-2 sm:gap-4 p-3 sm:p-6 border-b-2 ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-teal-50 border-teal-200'}`}>
                   <div className={`font-bold text-sm sm:text-lg ${isDarkMode ? 'text-white' : 'text-teal-700'}`}>Workout Type</div>
                   <div className={`font-bold text-sm sm:text-lg ${isDarkMode ? 'text-white' : 'text-teal-700'}`}>Intensity</div>
                   <div className={`font-bold text-sm sm:text-lg ${isDarkMode ? 'text-white' : 'text-teal-700'}`}>Focus Area</div>
                   <div className={`font-bold text-sm sm:text-lg ${isDarkMode ? 'text-white' : 'text-teal-700'}`}>Best For</div>
                   <div className={`font-bold text-sm sm:text-lg ${isDarkMode ? 'text-white' : 'text-teal-700'}`}>Equipment</div>
                 </div>
                 
                 {/* Table Rows */}
                 <div className="divide-y divide-gray-200">
                   {/* Yoga Row */}
                   <div className={`grid grid-cols-5 gap-2 sm:gap-4 p-3 sm:p-6 hover:bg-teal-50 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : ''}`}>
                     <div className="flex items-center">
                       
                       <span className={`font-semibold text-sm sm:text-base ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Yoga</span>
                     </div>
                     <div className="flex items-center">
                       <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-black'}`}
                       >Low</span>
                     </div>
                     <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
                       Flexibility, Balance, Mindfulness
                     </div>
                     <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
                       Stress Relief, Beginners
                     </div>
                     <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
                       Mat only
                     </div>
                   </div>
                   
                   {/* Cardio Row */}
                   <div className={`grid grid-cols-5 gap-2 sm:gap-4 p-3 sm:p-6 hover:bg-teal-50 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : ''}`}>
                     <div className="flex items-center">
                       
                       <span className={`font-semibold text-sm sm:text-base ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Cardio</span>
                     </div>
                     <div className="flex items-center">
                       <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-black'}`}
                       >Moderate to High</span>
                     </div>
                     <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
                       Endurance, Heart Health
                     </div>
                     <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>
                       Fat Loss, Stamina
                     </div>
                     <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>
                       Shoes, treadmill/bike
                     </div>
                   </div>
                   
                   {/* Weight Lifting Row */}
                   <div className={`grid grid-cols-5 gap-2 sm:gap-4 p-3 sm:p-6 hover:bg-teal-50 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : ''}`}>
                     <div className="flex items-center">
                       
                       <span className={`font-semibold text-sm sm:text-base ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Weight Lifting</span>
                     </div>
                     <div className="flex items-center">
                       <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}
                       >High</span>
                     </div>
                     <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>
                       Strength, Muscle Building
                     </div>
                     <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>
                       Body Sculpting
                     </div>
                     <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>
                       Weights, Machines
                     </div>
                   </div>
                   
                   {/* CrossFit Row */}
                   <div className={`grid grid-cols-5 gap-2 sm:gap-4 p-3 sm:p-6 hover:bg-teal-50 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : ''}`}>
                     <div className="flex items-center">
                       
                       <span className={`font-semibold text-sm sm:text-base ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>CrossFit</span>
                     </div>
                     <div className="flex items-center">
                       <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}
                       >High</span>
                     </div>
                     <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>
                       Full Body, Power
                     </div>
                     <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>
                       Advanced Fitness
                     </div>
                     <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>
                       Weights, Ropes, Rigs
                     </div>
                   </div>
                   
                   {/* Pilates Row */}
                   <div className={`grid grid-cols-5 gap-2 sm:gap-4 p-3 sm:p-6 hover:bg-teal-50 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : ''}`}>
                     <div className="flex items-center">
                       
                       <span className={`font-semibold text-sm sm:text-base ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Pilates</span>
                     </div>
                     <div className="flex items-center">
                       <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${isDarkMode ? 'text-white' : 'text-black'}`}
                       >Low to Moderate</span>
                     </div>
                     <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>
                       Core Strength, Posture
                     </div>
                     <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>
                       Beginners, Rehab
                     </div>
                     <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}>
                       Mat, reformer
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           </div>
        </section>

             {/* Section 4 - Categories */}
             <section className={`w-full py-12 sm:py-16 px-4 overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-teal-50'}`}>
               <div className="max-w-7xl mx-auto">
                 <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 ${isDarkMode ? 'text-white' : 'text-teal-700'}`}>
                   Explore Wellness Categories
                 </h2>
                 
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                   {/* Left Side - Category Content */}
                   <div className={`p-4 sm:p-8 text-justify rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                     <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                       {categoryContent[selectedCategory].title}
                     </h3>
                     
                     <p className={`text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                       {categoryContent[selectedCategory].description}
                     </p>
                     
                     <div className="mb-6">
                       <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                         Key Benefits:
                       </h4>
                       <ul className="space-y-2">
                         {categoryContent[selectedCategory].benefits.map((benefit, index) => (
                           <li key={index} className={`flex items-start ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                             <svg className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                             </svg>
                             {benefit}
                           </li>
                         ))}
                       </ul>
                     </div>
                     
                     <div className="mb-6">
                       <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                         Pro Tip:
                       </h4>
                       <p className={`italic ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                         {categoryContent[selectedCategory].tips}
                       </p>
                     </div>
                     
                     <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-teal-900/20 border border-teal-500' : 'bg-teal-50 border border-teal-200'}`}>
                       <p className={`text-sm font-medium ${isDarkMode ? 'text-teal-300' : 'text-teal-700'}`}>
                         {categoryContent[selectedCategory].articles}
                       </p>
                     </div>
                   </div>
                   
                   {/* Right Side - Circular Category Wheel */}
                   <div className="flex justify-center overflow-hidden">
                     <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]">
                       {/* Center */}
                       <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl flex items-center justify-center z-20 border-4 border-teal-500`}>
                         <span className={`text-xs sm:text-sm lg:text-lg font-bold ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`}>CATEGORIES</span>
                       </div>
                       
                       {/* Connecting Lines - Responsive SVG */}
                       <svg className="absolute top-0 left-0 w-full h-full" style={{ zIndex: 10 }} viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
                         <circle cx="250" cy="250" r="200" fill="none" stroke="#26A69A" strokeWidth="2" strokeDasharray="5,5"/>
                         <circle cx="250" cy="250" r="120" fill="none" stroke="#26A69A" strokeWidth="1" strokeDasharray="3,3"/>
                       </svg>
                       
                       {/* Category Segments - Positioned in a perfect circle */}
                       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full" style={{ zIndex: 15 }}>
                         {/* Fitness - Top */}
                         <div 
                           onClick={() => setSelectedCategory('fitness')}
                           className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-18 sm:h-18 lg:w-22 lg:h-22 rounded-full flex flex-col items-center justify-center cursor-pointer hover:scale-125 hover:z-50 transition-all duration-300 shadow-xl border-2 border-white ${
                             selectedCategory === 'fitness' 
                               ? 'bg-gradient-to-br from-teal-500 to-teal-700 ring-4 ring-teal-300' 
                               : 'bg-gradient-to-br from-teal-400 to-teal-600'
                           }`}
                         >
                           <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
                           </svg>
                           <span className="text-[7px] sm:text-[8px] lg:text-[9px] text-white font-bold">FITNESS</span>
                         </div>
                         
                         {/* Healthy Eating - Top Right */}
                         <div 
                           onClick={() => setSelectedCategory('healthyEating')}
                           className={`absolute top-[8%] right-[8%] w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24 rounded-full flex flex-col items-center justify-center cursor-pointer hover:scale-125 hover:z-50 transition-all duration-300 shadow-xl border-2 border-white ${
                             selectedCategory === 'healthyEating' 
                               ? 'bg-gradient-to-br from-teal-500 to-teal-700 ring-4 ring-teal-300' 
                               : 'bg-gradient-to-br from-teal-500 to-teal-700'
                           }`}
                         >
                           <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
                           </svg>
                           <span className="text-[6px] sm:text-[7px] lg:text-[8px] text-white font-bold text-center">HEALTHY<br/>EATING</span>
                         </div>
                         
                         {/* Weight Loss - Right */}
                         <div 
                           onClick={() => setSelectedCategory('weightLoss')}
                           className={`absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24 rounded-full flex flex-col items-center justify-center cursor-pointer hover:scale-125 hover:z-50 transition-all duration-300 shadow-xl border-2 border-white ${
                             selectedCategory === 'weightLoss' 
                               ? 'bg-gradient-to-br from-teal-500 to-teal-700 ring-4 ring-teal-300' 
                               : 'bg-gradient-to-br from-teal-600 to-teal-800'
                           }`}
                         >
                           <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                           </svg>
                           <span className="text-[6px] sm:text-[7px] lg:text-[8px] text-white font-bold text-center">WEIGHT<br/>LOSS</span>
                         </div>
                         
                         {/* Wellness - Bottom Right */}
                         <div 
                           onClick={() => setSelectedCategory('wellness')}
                           className={`absolute bottom-[8%] right-[8%] w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24 rounded-full flex flex-col items-center justify-center cursor-pointer hover:scale-125 hover:z-50 transition-all duration-300 shadow-xl border-2 border-white ${
                             selectedCategory === 'wellness' 
                               ? 'bg-gradient-to-br from-teal-500 to-teal-700 ring-4 ring-teal-300' 
                               : 'bg-gradient-to-br from-teal-700 to-teal-900'
                           }`}
                         >
                           <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                           </svg>
                           <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-white font-bold">WELLNESS</span>
                         </div>
                         
                         {/* Healthy Mind - Bottom */}
                         <div 
                           onClick={() => setSelectedCategory('healthyMind')}
                           className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24 rounded-full flex flex-col items-center justify-center cursor-pointer hover:scale-125 hover:z-50 transition-all duration-300 shadow-xl border-2 border-white ${
                             selectedCategory === 'healthyMind' 
                               ? 'bg-gradient-to-br from-teal-500 to-teal-700 ring-4 ring-teal-300' 
                               : 'bg-gradient-to-br from-teal-800 to-teal-900'
                           }`}
                         >
                           <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                           </svg>
                           <span className="text-[6px] sm:text-[7px] lg:text-[8px] text-white font-bold text-center">HEALTHY<br/>MIND</span>
                         </div>
                         
                         {/* Sleep - Bottom Left */}
                         <div 
                           onClick={() => setSelectedCategory('sleep')}
                           className={`absolute bottom-[8%] left-[8%] w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24 rounded-full flex flex-col items-center justify-center cursor-pointer hover:scale-125 hover:z-50 transition-all duration-300 shadow-xl border-2 border-white ${
                             selectedCategory === 'sleep' 
                               ? 'bg-gradient-to-br from-teal-500 to-teal-700 ring-4 ring-teal-300' 
                               : 'bg-gradient-to-br from-teal-300 to-teal-500'
                           }`}
                         >
                           <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/>
                             <path d="M9 11h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9z"/>
                           </svg>
                           <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-white font-bold">SLEEP</span>
                         </div>
                         
                         {/* Stress Management - Left */}
                         <div 
                           onClick={() => setSelectedCategory('stressManagement')}
                           className={`absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24 rounded-full flex flex-col items-center justify-center cursor-pointer hover:scale-125 hover:z-50 transition-all duration-300 shadow-xl border-2 border-white ${
                             selectedCategory === 'stressManagement' 
                               ? 'bg-gradient-to-br from-teal-500 to-teal-700 ring-4 ring-teal-300' 
                               : 'bg-gradient-to-br from-teal-400 to-teal-600'
                           }`}
                         >
                           <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                           </svg>
                           <span className="text-[5px] sm:text-[6px] lg:text-[7px] text-white font-bold text-center leading-tight">STRESS<br/>MANAGEMENT</span>
                         </div>
                         
                         {/* Meditation - Top Left */}
                         <div 
                           onClick={() => setSelectedCategory('meditation')}
                           className={`absolute top-[8%] left-[8%] w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24 rounded-full flex flex-col items-center justify-center cursor-pointer hover:scale-125 hover:z-50 transition-all duration-300 shadow-xl border-2 border-white ${
                             selectedCategory === 'meditation' 
                               ? 'bg-gradient-to-br from-teal-500 to-teal-700 ring-4 ring-teal-300' 
                               : 'bg-gradient-to-br from-teal-500 to-teal-700'
                           }`}
                         >
                           <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                           </svg>
                           <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-white font-bold">MEDITATION</span>
                         </div>
                         
                         {/* Nutrition - Bottom Center */}
                         <div 
                           onClick={() => setSelectedCategory('nutrition')}
                           className={`absolute bottom-[25%] left-1/2 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24 rounded-full flex flex-col items-center justify-center cursor-pointer hover:scale-125 hover:z-50 transition-all duration-300 shadow-xl border-2 border-white ${
                             selectedCategory === 'nutrition' 
                               ? 'bg-gradient-to-br from-teal-500 to-teal-700 ring-4 ring-teal-300' 
                               : 'bg-gradient-to-br from-teal-600 to-teal-800'
                           }`}
                         >
                           <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
                           </svg>
                           <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-white font-bold">NUTRITION</span>
                         </div>
                         
                         {/* Self Care - Top Center */}
                         <div 
                           onClick={() => setSelectedCategory('selfCare')}
                           className={`absolute top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-22 sm:h-22 lg:w-24 lg:h-24 rounded-full flex flex-col items-center justify-center cursor-pointer hover:scale-125 hover:z-50 transition-all duration-300 shadow-xl border-2 border-white ${
                             selectedCategory === 'selfCare' 
                               ? 'bg-gradient-to-br from-teal-500 to-teal-700 ring-4 ring-teal-300' 
                               : 'bg-gradient-to-br from-teal-700 to-teal-900'
                           }`}
                         >
                           <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                           </svg>
                           <span className="text-[8px] sm:text-[9px] lg:text-[10px] text-white font-bold">SELF CARE</span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 
                 {/* Category List for Mobile */}
                 {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 lg:hidden">
                   {[
                     { name: 'Fitness', icon: '💪', key: 'fitness' },
                     { name: 'Healthy Eating', icon: '🥗', key: 'healthyEating' },
                     { name: 'Weight Loss', icon: '⚖️', key: 'weightLoss' },
                     { name: 'Wellness', icon: '🌟', key: 'wellness' },
                     { name: 'Healthy Mind', icon: '🧠', key: 'healthyMind' },
                     { name: 'Sleep', icon: '😴', key: 'sleep' },
                     { name: 'Stress Management', icon: '🧘', key: 'stressManagement' },
                     { name: 'Meditation', icon: '🧘‍♀️', key: 'meditation' },
                     { name: 'Nutrition', icon: '🥑', key: 'nutrition' },
                     { name: 'Self Care', icon: '💝', key: 'selfCare' }
                   ].map((category, index) => (
                     <div 
                       key={index} 
                       onClick={() => setSelectedCategory(category.key)}
                       className={`text-center p-4 rounded-xl cursor-pointer transition-all hover:scale-105 ${
                         selectedCategory === category.key
                           ? isDarkMode ? 'bg-teal-700' : 'bg-teal-100'
                           : isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-teal-50'
                       }`}
                     >
                       <div className="text-2xl mb-2">{category.icon}</div>
                       <h3 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{category.name}</h3>
                     </div>
                   ))}
                 </div> */}
               </div>
             </section>
        
        {/* Section 5 - Myths vs Facts - Two Column Layout */}
        <section className={`w-full text-justify py-12 sm:py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-16 px-4 max-w-7xl mx-auto">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 ${isDarkMode ? 'text-white' : 'text-teal-500'}`}>
              Myths vs Facts
            </h2>
            <p className={`text-lg sm:text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Let's debunk common wellness misconceptions with science-backed facts
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[400px] sm:min-h-[600px]">
              {/* Left Column: Myths */}
              <div className="bg-gradient-to-b from-teal-700 to-teal-500 p-6 sm:p-12 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">Myths</h3>
                <p className="text-white text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                  Common misconceptions about health and wellness that many people believe to be true, but are actually myths that can mislead our wellness journey.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-white text-base">{mythsAndFacts[currentMythFact].myth[currentSentenceIndex]}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-white text-base">{mythsAndFacts[currentMythFact].myth[(currentSentenceIndex + 1) % mythsAndFacts[currentMythFact].myth.length]}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-white text-base">{mythsAndFacts[currentMythFact].myth[(currentSentenceIndex + 2) % mythsAndFacts[currentMythFact].myth.length]}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-white rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-white text-base">{mythsAndFacts[currentMythFact].myth[(currentSentenceIndex + 3) % mythsAndFacts[currentMythFact].myth.length]}</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Facts */}
              <div className="bg-white p-6 sm:p-12 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-700 mb-4 sm:mb-6">Facts</h3>
                <p className="text-teal-700 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                  Evidence-based truths about health and wellness that can guide us toward better lifestyle choices and improved well-being.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-teal-700 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-teal-700 text-base">{mythsAndFacts[currentMythFact].fact[currentSentenceIndex]}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-teal-700 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-teal-700 text-base">{mythsAndFacts[currentMythFact].fact[(currentSentenceIndex + 1) % mythsAndFacts[currentMythFact].fact.length]}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-teal-700 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-teal-700 text-base">{mythsAndFacts[currentMythFact].fact[(currentSentenceIndex + 2) % mythsAndFacts[currentMythFact].fact.length]}</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-teal-700 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-teal-700 text-base">{mythsAndFacts[currentMythFact].fact[(currentSentenceIndex + 3) % mythsAndFacts[currentMythFact].fact.length]}</p>
                  </div>
                </div>
              </div>
            </div>
        </section>


      {/* Section 6 - 2 Minute Quiz */}
      <section className={`w-full py-12 sm:py-16 px-4 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 ${isDarkMode ? 'text-white' : 'text-teal-700'}`}>
            2 Minute Quiz
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-stretch">
            {/* Left Side - Quiz Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-xl h-full">
                <img 
                  src={quizImage} 
                  alt="Wellness Quiz" 
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Right Side - Quiz Content */}
            <div className="flex flex-col justify-center">
              {!showResults ? (
                <div className={`rounded-xl shadow-lg p-4 sm:p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  {/* Progress Bar */}
                  <div className="mb-6 sm:mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Question {currentQuestion + 1} of {quizQuestions.length}
                      </span>
                      <span className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {Math.round(((currentQuestion + 1) / quizQuestions.length) * 100)}%
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div 
                        className="h-2 bg-teal-500 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Question */}
                  <h3 className={`text-lg sm:text-xl font-bold mb-4 sm:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    {quizQuestions[currentQuestion].question}
                  </h3>

                  {/* Options */}
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        className={`w-full text-left p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 ${
                          selectedAnswers[currentQuestion] === index
                            ? 'border-teal-500 bg-teal-50'
                            : `${isDarkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-200 hover:border-gray-300'}`
                        } ${getAnswerColor(currentQuestion, index)}`}
                        disabled={selectedAnswers[currentQuestion] !== undefined}
                      >
                        <span className={`font-medium text-sm sm:text-base ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                          {String.fromCharCode(65 + index)}. {option}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between items-center">
                    <button
                      onClick={handlePrevious}
                      disabled={currentQuestion === 0}
                      className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
                        currentQuestion === 0
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-teal-500 text-white hover:bg-teal-600'
                      }`}
                    >
                      ← Previous
                    </button>
                    
                    <button
                      onClick={handleNext}
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors text-sm sm:text-base"
                    >
                      {currentQuestion === quizQuestions.length - 1 ? 'See Results' : 'Next →'}
                    </button>
                  </div>
                </div>
              ) : (
                /* Results Section */
                <div className={`rounded-xl shadow-lg p-4 sm:p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h3 className={`text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    Quiz Results
                  </h3>
                  
                  <div className="text-center mb-6 sm:mb-8">
                    <div className={`text-4xl sm:text-6xl font-bold mb-3 sm:mb-4 ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                      {calculateScore()}/{quizQuestions.length}
                    </div>
                    <p className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {calculateScore() >= 8 ? 'Excellent! You have great wellness knowledge!' :
                       calculateScore() >= 6 ? 'Good job! You know your wellness basics!' :
                       calculateScore() >= 4 ? 'Not bad! Keep learning about wellness!' :
                       'Keep learning! Wellness is a journey!'}
                    </p>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={() => {
                        setCurrentQuestion(0);
                        setSelectedAnswers({});
                        setShowResults(false);
                      }}
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors text-sm sm:text-base"
                    >
                      Take Quiz Again
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Blog;