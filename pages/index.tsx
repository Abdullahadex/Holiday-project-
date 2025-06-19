import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function LandingPage() {
  const router = useRouter();

  const handleLetsDabble = () => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('dabbly_user_token');
      if (token) {
        router.push('/questionnaire');
      } else {
        router.push('/auth');
      }
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center p-8 sm:p-4"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="text-7xl sm:text-4xl font-extrabold mb-6 drop-shadow-lg text-white"
        >
          Welcome to Dabbly <span className="inline-block animate-wave">👋</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-3xl sm:text-lg mb-10 opacity-90 text-white/80 font-medium"
        >
          Feeling bored? Let's help you find something awesome to try out!
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLetsDabble}
          className="bg-white text-black font-extrabold py-1 px-3 sm:px-2 rounded-full shadow-lg text-base sm:text-sm hover:bg-white/90 transition duration-300 ease-in-out transform hover:-translate-y-1 relative overflow-hidden group min-w-[90px]"
        >
          <span className="font-extrabold tracking-widest uppercase text-xl sm:text-base drop-shadow-sm">LET'S DABBLE!</span> <span className="ml-2 text-lg sm:text-base">🎯</span>
          {/* Glowing effect */}
          <span className="absolute inset-0 rounded-full bg-white opacity-0 animate-pulse-light group-hover:opacity-75 transition-opacity duration-300"></span>
        </motion.button>
      </motion.div>
    </div>
  );
} 