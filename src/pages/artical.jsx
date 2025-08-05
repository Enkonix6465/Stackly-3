

import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../footer';
import { useScrollToTop } from '../hooks/useScrollToTop';
import morningWellness from '../assets/morning wellness.jpeg';
import mindfulMeditation from '../assets/mindfulMeditation.jpeg';
import nutrition from '../assets/nutrition.jpeg';

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const componentRef = useRef(null);

  // Scroll to top when component mounts
  useScrollToTop();

  // Comprehensive scroll to top solution
  useEffect(() => {
    // Scroll to absolute top
    const scrollToAbsoluteTop = () => {
      // Force scroll to absolute top first
      window.scrollTo(0, 0);
      
      // Also ensure body and document are at top
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
    
    // Immediate scroll to top
    scrollToAbsoluteTop();
    
    // Delayed scroll to handle any content loading
    const timer1 = setTimeout(scrollToAbsoluteTop, 100);
    const timer2 = setTimeout(scrollToAbsoluteTop, 500);
    const timer3 = setTimeout(scrollToAbsoluteTop, 1000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [id]); // Re-run when article ID changes

  // Ensure scroll to top on window load
  useEffect(() => {
    const handleLoad = () => {
      window.scrollTo(0, 0);
    };
    
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  // Additional scroll to top using scrollIntoView
  useEffect(() => {
    const scrollToTop = () => {
      // Force scroll to absolute top
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      
      // Also try scrollIntoView on body and document
      document.body.scrollIntoView({ behavior: 'auto', block: 'start' });
      document.documentElement.scrollIntoView({ behavior: 'auto', block: 'start' });
    };
    
    // Immediate scroll
    scrollToTop();
    
    // Scroll after a short delay
    const timer = setTimeout(scrollToTop, 50);
    
    return () => clearTimeout(timer);
  }, [id]);

  // Ref-based scroll to top after component mounts
  useEffect(() => {
    if (componentRef.current) {
      window.scrollTo(0, 0);
      componentRef.current.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, []);

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

  // Article data based on the featured articles
  const articles = {
    'morning-wellness': {
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
       `,
    },
    'mindfulness-meditation': {
      title: "Mindfulness Meditation: A Beginner's Journey",
      author: "Sarah Chen",
      authorInitial: "S",
      readTime: "8 min read",
      publishDate: "1 day ago",
      category: "Meditation",
      image: mindfulMeditation,
      content: `
        <p>Mindfulness meditation is more than just sitting quietly—it's a practice that can transform your relationship with thoughts, emotions, and the present moment. This ancient practice has been scientifically proven to reduce stress, improve focus, and enhance overall well-being.</p>
        <h2>What is Mindfulness Meditation?</h2>
        <p>Mindfulness meditation is the practice of intentionally focusing your attention on the present moment without judgment. It involves observing your thoughts and feelings as they arise, acknowledging them, and then gently returning your focus to your breath or chosen anchor. Rooted in ancient Buddhist traditions, mindfulness has gained popularity in modern wellness, neuroscience, and psychology for its proven benefits on mental clarity, emotional balance, and physical health.</p>
        <h2>The Science Behind Mindfulness</h2>
        <p>Research has shown that regular mindfulness practice can physically change your brain structure, increasing gray matter in areas associated with learning, memory, and emotional regulation while decreasing activity in the amygdala, the brain's fear center. It has been linked to lower blood pressure, improved immunity, and reduced symptoms of chronic pain.</p>
        <h2>Getting Started with Mindfulness</h2>
        <p>Begin with just 5-10 minutes daily. Find a quiet space, sit comfortably, and focus on your breath. When your mind wanders (which it will), gently bring it back without judgment. Remember, the goal isn't to stop thinking—it's to become aware of your thoughts.</p>
        <h2>Common Challenges and Solutions</h2>
        <p>Many beginners struggle with restlessness, racing thoughts, or the belief that they're "doing it wrong." These are all normal experiences. The key is to approach your practice with patience and self-compassion. Mindfulness meditation isn't about escaping life — it's about fully living it. In cultivating present-moment awareness, you create space to respond instead of react, to feel gratitude over worry, and to reconnect with yourself amidst the noise.</p>
        <h3>Dealing with a Wandering Mind</h3>
        <p>It's completely normal for your mind to wander during meditation. When you notice this happening, simply acknowledge it without judgment and gently return to your breath. Each time you bring your attention back, you're strengthening your mindfulness muscle.</p>
        <h3>Managing Physical Discomfort</h3>
        <p>If you experience physical discomfort, adjust your posture or try a different sitting position. You can also practice lying down or walking meditation. The goal is to be comfortable enough to focus on your practice.</p>
        <h3>Finding Time to Practice</h3>
        <p>Start with just 5 minutes a day and gradually increase as you become more comfortable. You can practice anywhere—while waiting in line, during your commute, or before bed. Consistency is more important than duration.</p>
        <h2>Different Types of Mindfulness Practice</h2>
        <h3>1. Breath Awareness</h3>
        <p>This is the foundation of mindfulness practice. Focus your attention on your natural breath, observing its rhythm and quality without trying to change it. This practice helps develop concentration and present-moment awareness.</p>
        <h3>2. Body Scan</h3>
        <p>Systematically bring your attention to different parts of your body, from your toes to your head. Notice sensations, tension, or relaxation in each area. This practice helps develop body awareness and can reduce physical tension.</p>
        <h3>3. Loving-Kindness Meditation</h3>
        <p>Direct well-wishes toward yourself and others. Start with yourself, then extend to loved ones, acquaintances, and even difficult people. This practice cultivates compassion and positive emotions.</p>
        <h3>4. Walking Meditation</h3>
        <p>Bring mindfulness to movement by walking slowly and deliberately, paying attention to each step and the sensations in your feet and legs. This practice can be especially helpful for those who find sitting meditation challenging.</p>
        <h2>Integrating Mindfulness into Daily Life</h2>
        <p>Mindfulness isn't just about formal meditation—it's a way of being that you can bring to any activity. Practice mindful eating by paying attention to the taste, texture, and smell of your food. Practice mindful walking by noticing the sensations in your feet and the world around you.</p>
        <p>You can also practice mindfulness during routine activities like washing dishes, brushing your teeth, or taking a shower. The key is to bring your full attention to whatever you're doing in the present moment.</p>
        <h2>The Benefits of Regular Practice</h2>
        <p>With consistent practice, you may notice improved focus and concentration, reduced stress and anxiety, better emotional regulation, and increased self-awareness. Many practitioners also report improved relationships, better sleep, and a greater sense of overall well-being.</p>
        <p>Remember that mindfulness is a skill that develops over time. Be patient with yourself and celebrate small progress. The journey of mindfulness is one of self-discovery and growth, offering endless opportunities to deepen your understanding of yourself and the world around you.</p>
      `,
    },
    'nutrition-wellness': {
      title: "The Power of Mindful Nutrition: Fueling Your Body and Mind",
      author: "Dr. Emily Rodriguez",
      authorInitial: "E",
      readTime: "6 min read",
      publishDate: "3 days ago",
      category: "Nutrition",
      image: nutrition,
      content: `
        <p>Nutrition is more than just what you eat—it's a fundamental pillar of wellness that directly impacts your physical health, mental clarity, and emotional well-being. Understanding how to nourish your body mindfully can transform your relationship with food and enhance your overall quality of life.</p>
        <h2>Understanding Mindful Nutrition</h2>
        <p>Mindful nutrition goes beyond counting calories or following strict diets. It's about developing a conscious, intentional relationship with food that honors your body's needs while respecting the journey of nourishment from farm to table. This approach encourages you to eat with awareness, gratitude, and understanding of how food affects your body and mind.</p>
        <h2>The Mind-Body Connection</h2>
        <p>What you eat directly influences your brain chemistry, energy levels, mood, and cognitive function. Research shows that a diet rich in whole foods, healthy fats, and essential nutrients can improve mental clarity, reduce inflammation, and support emotional balance. The gut-brain axis plays a crucial role in this connection, with your digestive health directly impacting your mental well-being.</p>
        <h2>Building a Balanced Plate</h2>
        <h3>1. Colorful Vegetables and Fruits</h3>
        <p>Aim to fill half your plate with a rainbow of vegetables and fruits. These provide essential vitamins, minerals, antioxidants, and fiber that support your immune system and overall health. Different colors indicate different beneficial compounds, so variety is key.</p>
        <h3>2. Quality Protein Sources</h3>
        <p>Include lean proteins like fish, poultry, legumes, and plant-based options. Protein is essential for muscle repair, hormone production, and maintaining stable blood sugar levels throughout the day.</p>
        <h3>3. Healthy Fats</h3>
        <p>Don't fear healthy fats from sources like avocados, nuts, seeds, and olive oil. These fats are crucial for brain health, hormone production, and the absorption of fat-soluble vitamins.</p>
        <h3>4. Complex Carbohydrates</h3>
        <p>Choose whole grains, sweet potatoes, and other complex carbohydrates that provide sustained energy and essential fiber for digestive health.</p>
        <h2>Practical Tips for Mindful Eating</h2>
        <ul>
          <li>Eat slowly and savor each bite</li>
          <li>Listen to your body's hunger and fullness cues</li>
          <li>Choose whole, unprocessed foods when possible</li>
          <li>Stay hydrated throughout the day</li>
          <li>Plan and prepare meals ahead of time</li>
          <li>Eat without distractions when possible</li>
          <li>Practice gratitude before meals</li>
          <li>Notice the colors, textures, and aromas of your food</li>
          <li>Chew thoroughly and put your fork down between bites</li>
          <li>Stop eating when you're 80% full</li>
        </ul>
        <h2>Understanding Food Labels and Marketing</h2>
        <p>In today's world of processed foods and clever marketing, it's essential to become a savvy consumer. Learn to read ingredient lists and nutrition labels, understanding that ingredients are listed in order of quantity. Be wary of health claims on packaging—terms like "natural," "organic," and "healthy" can be misleading.</p>
        <p>Focus on whole, single-ingredient foods when possible. If you can't pronounce an ingredient or wouldn't find it in your grandmother's kitchen, it's probably best to avoid it. Remember that the healthiest foods often don't come with labels at all—think fresh fruits, vegetables, and whole grains.</p>
        <h2>Meal Planning and Preparation</h2>
        <p>Successful mindful nutrition often starts with planning and preparation. Set aside time each week to plan your meals, create a shopping list, and prepare ingredients in advance. This approach reduces stress, saves money, and ensures you have healthy options available when you're busy or tired.</p>
        <p>Consider batch cooking on weekends, preparing healthy snacks, and keeping a well-stocked pantry with nutritious staples. Having healthy options readily available makes it much easier to make mindful choices throughout the week.</p>
        <h2>Eating for Energy and Mood</h2>
        <p>What you eat directly impacts your energy levels and mood throughout the day. Complex carbohydrates provide sustained energy, while protein helps maintain stable blood sugar levels. Healthy fats support brain function and hormone production.</p>
        <p>Pay attention to how different foods make you feel. Some people feel energized after eating protein-rich meals, while others prefer lighter, plant-based options. There's no one-size-fits-all approach—listen to your body and adjust accordingly.</p>
        <h2>Hydration and Its Impact</h2>
        <p>Proper hydration is fundamental to mindful nutrition. Water is essential for digestion, nutrient absorption, temperature regulation, and cognitive function. Many people mistake thirst for hunger, leading to unnecessary snacking.</p>
        <p>Aim to drink at least half your body weight in ounces of water daily, adjusting for activity level and climate. Consider starting your day with a glass of water and carrying a reusable water bottle with you throughout the day.</p>
        <h2>Creating Sustainable Habits</h2>
        <p>Remember that nutrition is a journey, not a destination. Focus on progress over perfection and celebrate small changes that become lasting habits. Your relationship with food should feel nourishing, not restrictive. By approaching nutrition with mindfulness and intention, you're not just feeding your body—you're nurturing your entire being.</p>
        <p>Start with one small change at a time, whether it's adding more vegetables to your meals, drinking more water, or practicing mindful eating during one meal per day. Small, consistent changes are more sustainable than dramatic overhauls.</p>
        <h2>The Social and Cultural Aspects of Eating</h2>
        <p>Food is deeply connected to culture, tradition, and social connection. Mindful nutrition doesn't mean giving up the foods you love or missing out on social experiences. Instead, it's about finding balance and making intentional choices that honor both your health and your cultural heritage.</p>
        <p>When dining with others, focus on the social connection and enjoyment of the experience rather than just the food. Practice portion control and mindful eating even in social situations, remembering that you can always enjoy your favorite foods in moderation.</p>
        <h2>Long-term Benefits of Mindful Nutrition</h2>
        <p>Over time, mindful nutrition can lead to improved energy levels, better mood regulation, enhanced cognitive function, and reduced risk of chronic diseases. It can also improve your relationship with food, reducing emotional eating and promoting a more balanced approach to nourishment.</p>
        <p>Remember that everyone's nutritional needs are unique, and what works for one person may not work for another. Trust your body's wisdom, seek guidance from qualified professionals when needed, and approach your nutrition journey with curiosity and compassion.</p>
      `,
    },
  };

  const article = articles[id];

  // Scroll to top when article changes
  useEffect(() => {
    if (article) {
      window.scrollTo(0, 0);
    }
  }, [article]);

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
    <div ref={componentRef} className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      <Header />
      {/* Navigation */}
      <nav className={`py-4 px-6 border-b ${isDarkMode ? 'border-gray-800' : 'border-white'}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate('/blog')}
            className={`flex items-center text-sm ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
          >
            ← Back to Blog
          </button>
        </div>
      </nav>

      {/* Article Layout */}
      <main className="relative pt-4">
        {/* Hero Section with Image and Initial Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-8 lg:py-16 px-4 lg:px-8">
          
          {/* Left Side: Image */}
          <div className="flex flex-col">
            {/* Image - Reduced height with border radius */}
            <div className="relative w-full h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
              <img 
                src={articleImage} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
              {/* Category Badge - Top Right of Image */}
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
          <div className="lg:pl-4 flex flex-col justify-start pt-4 lg:pt-0">
            <h1 id="article-title" className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight text-teal-500">
              {article.title}
            </h1>
            
            {/* Expanded content below title */}
            <div className={`prose max-w-none text-lg leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <p className="mb-6">
                Starting your day with intention and purpose can transform your entire life. Research shows that people who follow consistent morning routines experience higher levels of productivity, better mental health, and improved overall well-being.
              </p>
              
              <p className="mb-6">
                In today's fast-paced world, taking control of your morning can be the difference between a chaotic day and one filled with clarity and purpose. Whether you're a busy professional, a student, or someone simply looking to improve their daily life, establishing a morning wellness routine.
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
                  __html: article.content.replace(/<p>[\s\S]*?<\/p>/i, '') 
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
                    Written by {article.author}
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{article.readTime}</p>
                </div>
              </div>
              <button
                onClick={() => navigate('/blog')}
                className="px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Back to Blog
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