import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function QuestionnairePage() {
  const router = useRouter();
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
        router.push({
          pathname: "/options",
          query: { answers: JSON.stringify(newAnswers) }
        });
      }
    }, 500);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black overflow-hidden p-2 sm:p-4">
      <div className="flex flex-col items-center w-full max-w-2xl gap-y-8 text-center px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black border border-white/20 p-4 sm:p-12 rounded-3xl shadow-2xl w-full relative"
        >
          <div className="w-full h-2 bg-white/20 rounded-full mb-8 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-white rounded-full"
            />
          </div>

          <div className="text-white font-bold mb-4 text-base sm:text-lg">
            Question {currentQuestion + 1} of {questions.length}
          </div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-3xl font-black text-white mb-8"
          >
            {questions[currentQuestion].question}
          </motion.h2>

          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full max-w-xs flex flex-col items-center">
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
                  className="relative bg-white text-black text-base px-4 sm:px-6 py-3 rounded-full shadow-xl transition-all duration-300 font-bold hover:shadow-2xl overflow-hidden group w-full mb-4"
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
        </motion.div>
      </div>
    </div>
  );
} 