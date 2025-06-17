import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleLetsDabble = () => {
    navigate("/auth");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="text-6xl font-extrabold mb-4 drop-shadow-lg text-white"
        >
          Welcome to Dabbly <span className="inline-block animate-wave">👋</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl mb-8 opacity-90 text-gray-300"
        >
          Feeling bored? Let's help you find something awesome to try out!
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLetsDabble}
          className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg hover:bg-purple-700 transition duration-300 ease-in-out transform hover:-translate-y-1 relative overflow-hidden group"
        >
          Let's Dabble! <span className="ml-2">🎯</span>
          {/* Glowing effect */}
          <span className="absolute inset-0 rounded-full bg-purple-600 opacity-0 animate-pulse-light group-hover:opacity-75 transition-opacity duration-300"></span>
        </motion.button>
      </motion.div>

      {/* Removed Animated background elements */}
    </div>
  );
} 