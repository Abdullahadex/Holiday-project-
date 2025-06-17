import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Goals from "./components/Goals";
import AuthPage from "./components/AuthPage";
import LandingPage from "./home";

interface Goal {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

const activities: { [key: string]: { name: string; description: string; difficulty: string; time: string; tools: string; icon: string; videoId: string; }[] } = {
  skill: [
    {
      name: "Learn to Code",
      description: "Start a free coding course online and build your first website!",
      difficulty: "Beginner",
      time: "1 hour",
      tools: "Laptop, Internet",
      icon: "��",
      videoId: "dQw4w9WgXcQ" // FreeCodeCamp's most popular video
    },
    {
      name: "Photography Basics",
      description: "Grab your phone and try a photo challenge: 10 creative shots in your neighborhood.",
      difficulty: "Easy",
      time: "30 mins",
      tools: "Phone/Camera",
      icon: "��",
      videoId: "dQw4w9WgXcQ" // Peter McKinnon's photography basics
    },
    {
      name: "Write a Short Story",
      description: "Let your imagination run wild and write a 500-word story.",
      difficulty: "Medium",
      time: "45 mins",
      tools: "Pen & Paper or Computer",
      icon: "✍️",
      videoId: "dQw4w9WgXcQ" // Brandon Sanderson's writing lecture
    },
  ],
  fun: [
    {
      name: "Dance Challenge",
      description: "Learn a trending dance from YouTube and perform it!",
      difficulty: "Easy",
      time: "20 mins",
      tools: "Music, Space to dance",
      icon: "��",
      videoId: "dQw4w9WgXcQ" // Matt Steffanina's dance tutorial
    },
    {
      name: "DIY Craft",
      description: "Make a simple origami or paper craft.",
      difficulty: "Easy",
      time: "30 mins",
      tools: "Paper, Scissors, Markers",
      icon: "��",
      videoId: "dQw4w9WgXcQ" // 5-Minute Crafts channel
    },
    {
      name: "Movie Quiz Night",
      description: "Host a movie trivia quiz with friends or family.",
      difficulty: "Medium",
      time: "1 hour",
      tools: "Quiz app or pen & paper",
      icon: "��",
      videoId: "dQw4w9WgXcQ" // CinemaSins channel
    },
  ],
  challenge: [
    {
      name: "30-Day Push-Up Challenge", 
      description: "Start today! Do as many push-ups as you can, and add one more each day.",
      difficulty: "Hard",
      time: "10 mins/day",
      tools: "None",
      icon: "💪",
      videoId: "dQw4w9WgXcQ" // Athlean-X's push-up challenge
    },
    {
      name: "Cold Shower Dare",
      description: "Take a cold shower and see how long you last!",
      difficulty: "Medium",
      time: "5 mins",
      tools: "Shower",
      icon: "��",
      videoId: "dQw4w9WgXcQ" // Wim Hof's cold shower method
    },
    {
      name: "No Sugar Day",
      description: "Challenge yourself to avoid all added sugar for a whole day.",
      difficulty: "Medium",
      time: "All day",
      tools: "Willpower!",
      icon: "��",
      videoId: "dQw4w9WgXcQ" // Dr. Eric Berg's sugar detox
    },
  ],
  surprise: [
    {
      name: "Random Act of Kindness",
      description: "Do something nice for someone unexpectedly.",
      difficulty: "Easy",
      time: "15 mins",
      tools: "None",
      icon: "❤️",
      videoId: "dQw4w9WgXcQ" // SoulPancake's kindness video
    },
    {
      name: "Try a New Recipe",
      description: "Find a recipe you've never tried and cook it.",
      difficulty: "Medium",
      time: "1 hour",
      tools: "Kitchen, Ingredients",
      icon: "👨‍��",
      videoId: "dQw4w9WgXcQ" // Binging with Babish channel
    },
    {
      name: "Backyard Camping",
      description: "Set up a tent or blanket fort and camp out in your backyard or living room.",
      difficulty: "Fun",
      time: "Evening",
      tools: "Blankets, Pillows, Snacks",
      icon: "⛺",
      videoId: "dQw4w9WgXcQ" // REI's camping guide
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
    <div className="h-screen w-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-2xl gap-y-8 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black border border-white/20 p-12 rounded-3xl shadow-2xl w-full relative"
        >
          <div className="w-full h-2 bg-white/20 rounded-full mb-8 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-white rounded-full"
            />
          </div>

          <div className="text-white font-bold mb-4">
            Question {currentQuestion + 1} of {questions.length}
          </div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-black text-white mb-8"
          >
            {questions[currentQuestion].question}
          </motion.h2>

          <div className="flex flex-col items-center gap-4">
            <div className="w-72">
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
                    boxShadow: "0 8px 32px 0 rgba(255,255,255,0.25)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer(option, index)}
                  className="relative bg-white text-black text-base px-6 py-3 rounded-full shadow-xl transition-all duration-300 font-bold hover:shadow-2xl overflow-hidden group w-full mb-4"
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
          </div>

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
              className="absolute bottom-10 left-10 text-5xl"
            >
              🚀
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function OptionsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers } = location.state || { answers: [] };
  const [suggestedActivity, setSuggestedActivity] = useState<any>(null);

  useEffect(() => {
    if (answers.length > 0) {
      setSuggestedActivity(getSuggestedCategory());
    }
  }, [answers]);

  const getSuggestedCategory = () => {
    const energyLevel = answers[1]; // "Low", "Medium", "High"
    const socialPreference = answers[2]; // "Solo", "Group", "Either"

    if (energyLevel === "Low - Want something relaxing") {
      return getRandomActivity("fun");
    } else if (energyLevel === "High - Bring it on!") {
      return getRandomActivity("challenge");
    } else {
      // Medium energy, consider social preference
      if (socialPreference === "Solo activity") {
        return getRandomActivity("skill");
      } else if (socialPreference === "Group activity") {
        return getRandomActivity("fun");
      } else {
        return getRandomActivity(Object.keys(activities)[Math.floor(Math.random() * Object.keys(activities).length)]);
      }
    }
  };

  const getRandomActivity = (category: string) => {
    const categoryActivities = activities[category];
    return categoryActivities[Math.floor(Math.random() * categoryActivities.length)];
  };

  const handleGoBack = () => {
    navigate("/questionnaire");
  };

  const handleDabbleAgain = () => {
    setSuggestedActivity(getSuggestedCategory());
  };

  const handleStartActivity = () => {
    if (suggestedActivity) {
      navigate(`/activity/${suggestedActivity.name}`, { state: { activity: suggestedActivity } });
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-4"
      >
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">Your Dabble Suggestion!</h1>
        <p className="text-base sm:text-lg text-white/80">Based on your answers, here's an idea for you.</p>
      </motion.div>

      {suggestedActivity ? (
        <motion.div
          key={suggestedActivity.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="bg-black border border-white/20 rounded-3xl shadow-2xl p-4 sm:p-6 max-w-xl w-full text-center transform hover:scale-105 transition-transform duration-300 relative mb-4"
        >
          <div className="absolute top-2 right-2 text-3xl sm:text-4xl">{suggestedActivity.icon}</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{suggestedActivity.name}</h2>
          <p className="text-sm sm:text-base text-white/80 mb-3">{suggestedActivity.description}</p>
          <div className="flex justify-center flex-wrap gap-x-3 sm:gap-x-4 gap-y-2 text-white/80 font-semibold mb-4">
            <span className="flex items-center"><span className="text-lg sm:text-xl mr-1">🌟</span> {suggestedActivity.difficulty}</span>
            <span className="flex items-center"><span className="text-lg sm:text-xl mr-1">⏱️</span> {suggestedActivity.time}</span>
            <span className="flex items-center"><span className="text-lg sm:text-xl mr-1">🛠️</span> {suggestedActivity.tools}</span>
          </div>
          <button
            onClick={handleStartActivity}
            className="bg-white text-black text-base sm:text-lg px-6 py-2 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/90 w-full sm:w-auto"
          >
            Start Dabbling!
          </button>
        </motion.div>
      ) : (
        <p className="text-lg text-white/80">Generating your suggestion...</p>
      )}

      <div className="mt-2 flex flex-wrap justify-center gap-3">
        <button
          onClick={handleDabbleAgain}
          className="bg-white text-black px-4 sm:px-5 py-2 rounded-full shadow-lg transition-all duration-300 hover:bg-white/90 transform hover:-translate-y-1 w-full sm:w-auto"
        >
          Dabble Again!
        </button>
        <button
          onClick={handleGoBack}
          className="bg-white/10 text-white border border-white/20 px-4 sm:px-5 py-2 rounded-full shadow-lg transition-all duration-300 hover:bg-white/20 transform hover:-translate-y-1 w-full sm:w-auto"
        >
          Go Back
        </button>
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="fixed top-10 left-10 text-6xl opacity-10 pointer-events-none"
      >
        🌀
      </motion.div>
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-10 right-10 text-7xl opacity-10 pointer-events-none"
      >
        ✨
      </motion.div>
    </div>
  );
}

interface ActivityPageProps {
  onAddGoal: (text: string) => void;
}

function ActivityPage({ onAddGoal }: ActivityPageProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { activity } = location.state || {};

  useEffect(() => {
    if (!activity) {
      navigate("/options"); // Redirect if no activity is found
    }
  }, [activity, navigate]);

  const getNewActivity = () => {
    navigate("/options");
  };

  const handleAddActivityToGoals = () => {
    if (activity) {
      onAddGoal(activity.name);
      alert(`${activity.name} added to your goals!`);
    }
  };

  const handleStartActivity = () => {
    if (activity) {
      const videoIds: { [key: string]: string } = {
        "Learn to Code": "rfscVS0vtbw",
        "Photography Basics": "CemKKi57d9U",
        "Write a Short Story": "WJ9-mtGCNxE",
        "Dance Challenge": "CQYELiTtUs8",
        "DIY Craft": "6QqBvy_yO_M",
        "Movie Quiz Night": "playlist?list=PLmZTDWJGfRq0jZtXzQz8QJQz8QJQz8QJQ",
        "30-Day Push-Up Challenge": "IODxDxX7oi4",
        "Cold Shower Dare": "pYaczenJlq8",
        "No Sugar Day": "lEXBxijQREo",
        "Random Act of Kindness": "nwAYpLVyeFU",
        "Try a New Recipe": "AnvHDuEz-iY",
        "Backyard Camping": "ZgHvdm9MhYU"
      };
      
      const videoId = videoIds[activity.name];
      if (videoId) {
        if (videoId.startsWith('playlist')) {
          window.open(`https://www.youtube.com/${videoId}`, '_blank');
        } else {
          window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
        }
      } else {
        alert(`Starting: ${activity.name}!`);
      }
    }
  };

  if (!activity) {
    return null; // Or a loading spinner
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-4 sm:mb-8"
      >
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-2 sm:mb-4">Time to Dabble!</h1>
        <p className="text-lg sm:text-xl text-white/80">Here's your chosen activity.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="bg-black border border-white/20 rounded-3xl shadow-2xl p-4 sm:p-8 max-w-xl w-full text-center relative"
      >
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-3xl sm:text-5xl">{activity.icon}</div>
        <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">{activity.name}</h2>
        <p className="text-base sm:text-lg text-white/80 mb-3 sm:mb-4">{activity.description}</p>
        <div className="flex justify-center flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 text-white/80 font-semibold mb-4 sm:mb-6">
          <span className="flex items-center"><span className="text-xl sm:text-2xl mr-1 sm:mr-2">🌟</span> {activity.difficulty}</span>
          <span className="flex items-center"><span className="text-xl sm:text-2xl mr-1 sm:mr-2">⏱️</span> {activity.time}</span>
          <span className="flex items-center"><span className="text-xl sm:text-2xl mr-1 sm:mr-2">🛠️</span> {activity.tools}</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
          <button
            onClick={handleStartActivity}
            className="bg-white text-black text-base px-6 py-2 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/90 w-full sm:w-auto"
          >
            Begin Activity
          </button>
          <button
            onClick={handleAddActivityToGoals}
            className="bg-white text-black text-base px-6 py-2 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/90 w-full sm:w-auto"
          >
            Add to My Goals
          </button>
        </div>
      </motion.div>

      <div className="mt-4 sm:mt-8 flex space-x-4">
        <button
          onClick={getNewActivity}
          className="bg-white/10 text-white border border-white/20 px-4 sm:px-6 py-2 rounded-full shadow transition-all duration-300 hover:bg-white/20 w-full sm:w-auto"
        >
          Explore Other Dabbles
        </button>
      </div>

      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 text-8xl opacity-10"
      >
        💡
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 left-10 text-9xl opacity-10"
      >
        ⚙️
      </motion.div>
    </div>
  );
}

function AppContent() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('dabbly_user_token') !== null;
  });

  const [goals, setGoals] = useState<Goal[]>(() => {
    const savedGoals = localStorage.getItem('dabbly_goals');
    return savedGoals ? JSON.parse(savedGoals) : [];
  });

  const initialNavigationDone = useRef(false);

  useEffect(() => {
    localStorage.setItem('dabbly_goals', JSON.stringify(goals));
  }, [goals]);

  const addGoal = (text: string) => {
    const newGoal: Goal = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  const toggleGoal = (id: number) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === id ? { ...goal, completed: !goal.completed } : goal
      )
    );
  };

  const deleteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  const onLoginSuccess = () => {
    setIsAuthenticated(true);
    navigate('/questionnaire');
  };

  useEffect(() => {
    if (!initialNavigationDone.current) {
      if (isAuthenticated) {
        navigate('/questionnaire');
      } else {
        navigate('/');
      }
      initialNavigationDone.current = true;
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('dabbly_user_token');
    localStorage.removeItem('dabbly_user_email');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <div className="font-sans antialiased bg-black text-white h-screen overflow-hidden">
      <nav className="p-4 border-b border-white/20 flex justify-between items-center fixed w-full top-0 z-10 bg-black/80 backdrop-blur-lg">
        <div>
          {isAuthenticated && (
            <>
              <button
                onClick={() => navigate('/my-goals')}
                className="mr-4 text-white hover:text-white/80 font-medium"
              >
                My Goals
              </button>
              <button
                onClick={handleLogout}
                className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-white/90"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      <main className="h-full pt-16 overflow-y-auto">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage onLoginSuccess={onLoginSuccess} />} />
            <Route path="/questionnaire" element={<QuestionnairePage />} />
            <Route path="/options" element={<OptionsPage />} />
            <Route
              path="/activity/:activityName"
              element={<ActivityPage onAddGoal={addGoal} />}
            />
            <Route
              path="/my-goals"
              element={<Goals goals={goals} toggleGoal={toggleGoal} onDeleteGoal={deleteGoal} onAddGoal={addGoal} />}
            />
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
