import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
import { HashRouter as Router, Routes, Route, useNavigate, useParams, useLocation } from "react-router-dom";
import { useState } from "react";

const activities: { [key: string]: { name: string; description: string; difficulty: string; time: string; tools: string; icon: string; }[] } = {
  skill: [
    {
      name: "Learn to Code",
      description: "Start a free coding course online and build your first website!",
      difficulty: "Beginner",
      time: "1 hour",
      tools: "Laptop, Internet",
      icon: "💻"
    },
    {
      name: "Photography Basics",
      description: "Grab your phone and try a photo challenge: 10 creative shots in your neighborhood.",
      difficulty: "Easy",
      time: "30 mins",
      tools: "Phone/Camera",
      icon: "📸"
    },
    {
      name: "Write a Short Story",
      description: "Let your imagination run wild and write a 500-word story.",
      difficulty: "Medium",
      time: "45 mins",
      tools: "Pen & Paper or Computer",
      icon: "✍️"
    },
  ],
  fun: [
    {
      name: "Dance Challenge",
      description: "Learn a trending dance from YouTube and perform it!",
      difficulty: "Easy",
      time: "20 mins",
      tools: "Music, Space to dance",
      icon: "💃"
    },
    {
      name: "DIY Craft",
      description: "Make a simple origami or paper craft.",
      difficulty: "Easy",
      time: "30 mins",
      tools: "Paper, Scissors, Markers",
      icon: "🎨"
    },
    {
      name: "Movie Quiz Night",
      description: "Host a movie trivia quiz with friends or family.",
      difficulty: "Medium",
      time: "1 hour",
      tools: "Quiz app or pen & paper",
      icon: "🎬"
    },
  ],
  challenge: [
    {
      name: "30-Day Push-Up Challenge", 
      description: "Start today! Do as many push-ups as you can, and add one more each day.",
      difficulty: "Hard",
      time: "10 mins/day",
      tools: "None",
      icon: "💪"
    },
    {
      name: "Cold Shower Dare",
      description: "Take a cold shower and see how long you last!",
      difficulty: "Medium",
      time: "5 mins",
      tools: "Shower",
      icon: "🚿"
    },
    {
      name: "No Sugar Day",
      description: "Challenge yourself to avoid all added sugar for a whole day.",
      difficulty: "Medium",
      time: "All day",
      tools: "Willpower!",
      icon: "🍎"
    },
  ],
  surprise: [
    {
      name: "Random Act of Kindness",
      description: "Do something nice for someone unexpectedly.",
      difficulty: "Easy",
      time: "15 mins",
      tools: "None",
      icon: "❤️"
    },
    {
      name: "Try a New Recipe",
      description: "Find a recipe you've never tried and cook it.",
      difficulty: "Medium",
      time: "1 hour",
      tools: "Kitchen, Ingredients",
      icon: "👨‍🍳"
    },
    {
      name: "Backyard Camping",
      description: "Set up a tent or blanket fort and camp out in your backyard or living room.",
      difficulty: "Fun",
      time: "Evening",
      tools: "Blankets, Pillows, Snacks",
      icon: "⛺"
    },
  ],
};

function QuestionnairePage() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const questions = [
    {
      question: "How much time do you have?",
      options: ["Quick (15-30 mins)", "Moderate (30-60 mins)", "Long (1+ hour)"],
      icons: ["⚡", "⏰", "⌛"]
    },
    {
      question: "What's your energy level right now?",
      options: ["Low - Want something relaxing", "Medium - Ready for a challenge", "High - Bring it on!"],
      icons: ["😌", "😊", "🤩"]
    },
    {
      question: "Do you prefer to work alone or with others?",
      options: ["Solo activity", "Group activity", "Either works"],
      icons: ["👤", "👥", "🤝"]
    }
  ];

  const handleAnswer = (answer: string, index: number) => {
    setSelectedOption(index);
    setTimeout(() => {
      const newAnswers = [...answers, answer];
      setAnswers(newAnswers);
      setSelectedOption(null);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        navigate("/options", { state: { answers: newAnswers } });
      }
    }, 500);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-pink-50 overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-2xl gap-y-8 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-lg p-12 rounded-3xl shadow-2xl w-full relative"
        >
          {/* Progress Bar */}
          <div className="w-full h-2 bg-white/20 rounded-full mb-8 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-violet-600 rounded-full"
            />
          </div>

          {/* Question Counter */}
          <div className="text-violet-600 font-bold mb-4">
            Question {currentQuestion + 1} of {questions.length}
          </div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-black text-violet-800 mb-8"
          >
            {questions[currentQuestion].question}
          </motion.h2>

          <div className="flex flex-col gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: selectedOption === index ? 1.05 : 1,
                 
                }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.2 * index,
                  type: "spring",
                  stiffness: 300
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 8px 32px 0 rgba(99,102,241,0.25)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAnswer(option, index)}
                className={`relative bg-violet-600 hover:bg-violet-700 text-white text-lg px-8 py-4 rounded-full shadow-xl transition-all duration-300 font-bold hover:shadow-2xl overflow-hidden group`}
              >
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="absolute left-4 text-2xl"
                >
                  {questions[currentQuestion].icons[index]}
                </motion.div>
                <span className="ml-8">{option}</span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  animate={{ x: selectedOption === index ? "0%" : "-100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Fun decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-10 right-10 text-4xl"
            >
              ✨
            </motion.div>
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-10 left-10 text-4xl"
            >
              🌟
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-pink-50 overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-2xl gap-y-8 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-lg p-12 rounded-3xl shadow-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black text-violet-800 mb-6"
          >
            Welcome to Dabbly <span role="img" aria-label="wave">👋</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8"
          >
            Feeling bored? Let's help you find something awesome to try out!
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/questionnaire")}
            className="bg-violet-600 hover:bg-violet-700 text-white text-xl px-10 py-4 rounded-full shadow-xl transition-all duration-300 font-bold hover:shadow-2xl"
          >
            Let's Dabble 🎯
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

function OptionsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const answers = location.state?.answers || [];
  
  const getSuggestedCategory = () => {
    if (answers.length === 0) return null;
    
    const [timeAnswer, energyAnswer, socialAnswer] = answers;
    
    // Logic to determine suggested category based on answers
    if (timeAnswer.includes("Quick")) {
      if (energyAnswer.includes("Low")) return "fun";
      if (energyAnswer.includes("High")) return "challenge";
    }
    
    if (timeAnswer.includes("Long")) {
      if (energyAnswer.includes("Low")) return "skill";
      if (energyAnswer.includes("High")) return "challenge";
    }
    
    if (socialAnswer.includes("Group")) return "fun";
    if (socialAnswer.includes("Solo")) return "skill";
    
    return "surprise";
  };

  const suggestedCategory = getSuggestedCategory();

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-pink-50 overflow-hidden">
      <div className="flex flex-col w-full max-w-6xl gap-y-8 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-lg p-12 rounded-3xl shadow-2xl"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Choose Your Adventure
          </h2>
          {suggestedCategory && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <p className="text-white/90 text-lg mb-4">Based on your preferences, we think you might enjoy:</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/activity/${suggestedCategory}`)}
                className="bg-white/20 hover:bg-white/30 text-white text-xl px-8 py-4 rounded-full shadow-xl transition-all duration-300 font-bold hover:shadow-2xl mb-8"
              >
                {suggestedCategory === "skill" && "🧠 Learn a Skill"}
                {suggestedCategory === "fun" && "🎉 Have Fun"}
                {suggestedCategory === "challenge" && "🧗‍♂️ Take a Challenge"}
                {suggestedCategory === "surprise" && "✨ Surprise Me"}
              </motion.button>
            </motion.div>
          )}
          <p className="text-white/80 mb-16 text-lg">Or choose any category that interests you:</p>
          <div className="grid grid-cols-2 gap-12 w-full max-w-4xl mx-auto px-8">
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 8px 32px 0 rgba(99,102,241,0.25)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-10 flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/20 group h-44"
              onClick={() => navigate('/activity/skill')}
            >
              <span className="text-5xl mb-6 group-hover:scale-110 transition-transform">🧠</span>
              <span className="text-2xl font-bold text-white group-hover:text-white/90">Learn a Skill</span>
              <span className="text-white/70 text-sm mt-3">Expand your knowledge</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 8px 32px 0 rgba(34,197,94,0.18)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-10 flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/20 group h-44"
              onClick={() => navigate('/activity/fun')}
            >
              <span className="text-5xl mb-6 group-hover:scale-110 transition-transform">🎉</span>
              <span className="text-2xl font-bold text-white group-hover:text-white/90">Have Fun</span>
              <span className="text-white/70 text-sm mt-3">Enjoy the moment</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 8px 32px 0 rgba(253,224,71,0.18)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-10 flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/20 group h-44"
              onClick={() => navigate('/activity/challenge')}
            >
              <span className="text-5xl mb-6 group-hover:scale-110 transition-transform">🧗‍♂️</span>
              <span className="text-2xl font-bold text-white group-hover:text-white/90">Take a Challenge</span>
              <span className="text-white/70 text-sm mt-3">Push your limits</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 8px 32px 0 rgba(244,114,182,0.18)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-10 flex flex-col items-center justify-center transition-all duration-300 hover:bg-white/20 group h-44"
              onClick={() => navigate('/activity/surprise')}
            >
              <span className="text-5xl mb-6 group-hover:scale-110 transition-transform">✨</span>
              <span className="text-2xl font-bold text-white group-hover:text-white/90">Surprise Me</span>
              <span className="text-white/70 text-sm mt-3">Discover something new</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ActivityPage() {
  const { vibe } = useParams();
  const navigate = useNavigate();
  const [currentActivity, setCurrentActivity] = useState(() => {
    if (vibe && activities[vibe]) {
      const list = activities[vibe];
      return list[Math.floor(Math.random() * list.length)];
    }
    return {
      name: "Random Adventure!",
      description: "Try something new and exciting!",
      difficulty: "Any",
      time: "Any",
      tools: "Surprise!",
      icon: "🎲"
    };
  });

  const getNewActivity = () => {
    if (vibe && activities[vibe]) {
      const list = activities[vibe];
      const newActivity = list[Math.floor(Math.random() * list.length)];
      setCurrentActivity(newActivity);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-pink-50 overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-6xl gap-y-8 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-lg shadow-2xl w-full flex border border-white/20 rounded-3xl overflow-hidden"
        >
          {/* Left side - Activity Icon and Info */}
          <div className="w-1/3 bg-white/5 p-8 flex flex-col items-center justify-center border-r border-white/10">
            <motion.div
              initial={{ scale: 0.8, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="text-8xl mb-8"
            >
              {currentActivity.icon}
            </motion.div>
            <div className="space-y-4 w-full text-center">
              <div className="text-white">
                <span className="text-white/70 text-base block">Difficulty</span>
                <span className="font-medium text-lg">{currentActivity.difficulty}</span>
              </div>
              <div className="text-white">
                <span className="text-white/70 text-base block">Time</span>
                <span className="font-medium text-lg">{currentActivity.time}</span>
              </div>
              <div className="text-white">
                <span className="text-white/70 text-base block">Tools</span>
                <span className="font-medium text-lg">{currentActivity.tools}</span>
              </div>
            </div>
          </div>

          {/* Right side - Activity Details and Actions */}
          <div className="w-2/3 p-8 flex flex-col">
            <h2 className="text-4xl font-black text-white mb-6">
              {currentActivity.name}
            </h2>
            
            <p className="text-white/90 text-xl mb-8 leading-relaxed">
              {currentActivity.description}
            </p>

            <div className="mt-auto space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={getNewActivity}
                className="w-full bg-gradient-to-r from-violet-600 to-violet-700 text-white text-xl px-8 py-4 rounded-xl shadow-xl transition-all duration-300 font-bold hover:shadow-2xl flex items-center justify-center gap-3"
              >
                <span className="text-2xl">🎲</span>
                <span>Discover Another Activity</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/options")}
                className="w-full bg-white/10 hover:bg-white/20 text-white text-xl px-8 py-4 rounded-xl shadow-xl transition-all duration-300 font-bold hover:shadow-2xl flex items-center justify-center gap-3"
              >
                <span className="text-2xl">📋</span>
                <span>Back to Categories</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/")}
                className="w-full bg-white/10 hover:bg-white/20 text-white text-xl px-8 py-4 rounded-xl shadow-xl transition-all duration-300 font-bold hover:shadow-2xl flex items-center justify-center gap-3"
              >
                <span className="text-2xl">↩️</span>
                <span>Return to Home</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/questionnaire" element={<QuestionnairePage />} />
          <Route path="/options" element={<OptionsPage />} />
          <Route path="/activity/:vibe" element={<ActivityPage />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}
