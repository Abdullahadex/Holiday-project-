import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
import { HashRouter as Router, Routes, Route, useNavigate, useParams } from "react-router-dom";

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

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-violet-200 to-pink-100">
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
            onClick={() => navigate("/options")}
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
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
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
          <p className="text-white/80 mb-16 text-lg">What sparks your interest today?</p>
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
  let activity;
  if (vibe && activities[vibe]) {
    const list = activities[vibe];
    activity = list[Math.floor(Math.random() * list.length)];
  } else {
    activity = {
      name: "Random Adventure!",
      description: "Try something new and exciting!",
      difficulty: "Any",
      time: "Any",
      tools: "Surprise!",
      icon: "🎲"
    };
  }
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex flex-col items-center w-full max-w-2xl gap-y-8 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-lg p-10 shadow-2xl w-full max-w-md flex flex-col border border-white/20 rounded-3xl"
        >
          <span className="text-7xl mb-6">{activity.icon}</span>
          <h2 className="text-3xl font-black text-white mb-4">
            {activity.name}
          </h2>
          <p className="text-white/90 mb-6 text-lg">{activity.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full justify-center">
            <span className="bg-white/20 text-white px-4 py-2 rounded-full font-medium">Difficulty: {activity.difficulty}</span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full font-medium">Time: {activity.time}</span>
            <span className="bg-white/20 text-white px-4 py-2 rounded-full font-medium">Tools: {activity.tools}</span>
          </div>
          <div className="flex flex-col gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/options")}
              className="bg-white text-purple-600 text-lg px-8 py-3 rounded-full shadow-xl transition-all duration-300 font-bold hover:shadow-2xl hover:bg-opacity-90"
            >
              Try Another
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/")}
              className="text-white hover:text-white/80 text-base transition-colors"
            >
              Back to Home
            </motion.button>
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
          <Route path="/options" element={<OptionsPage />} />
          <Route path="/activity/:vibe" element={<ActivityPage />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}
