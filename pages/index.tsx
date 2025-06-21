import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useIsMobile from "../hooks/useIsMobile";

export default function LandingPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  const particleCount = isMobile ? 5 : 20;

  return (
    <div className="h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-pink-900/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(particleCount)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/10 rounded-full"
                animate={{
                  x: [0, Math.random() * 1000],
                  y: [0, Math.random() * 1000],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="text-6xl sm:text-8xl md:text-9xl font-extrabold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
            >
              Welcome to Dabbly
              <span className="inline-block animate-wave ml-4">👋</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl sm:text-3xl md:text-4xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Feeling bored? Let's help you find something awesome to try out!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLetsDabble}
                className="bg-white text-black font-bold py-4 px-8 rounded-full shadow-2xl hover:bg-gray-200 transition-colors duration-300 text-lg min-w-[200px] group relative overflow-hidden"
              >
                <span className="relative z-10">LET'S DABBLE!</span>
                <motion.span
                  className="ml-2 text-xl inline-block"
                  animate={{
                    rotate: [0, -15, 15, -15, 15, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  🎯
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 