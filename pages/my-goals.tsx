import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

interface Goal {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export default function GoalsPage() {
  const router = useRouter();
  const [goals, setGoals] = useState<Goal[]>([]);
  const [newGoal, setNewGoal] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const email = localStorage.getItem('dabbly_user_email');
      setUserEmail(email || '');
      if (email) {
        const savedGoals = localStorage.getItem(`dabbly_goals_${email}`);
        setGoals(savedGoals ? JSON.parse(savedGoals) : []);
      }
    }
  }, []);

  useEffect(() => {
    if (userEmail) {
      localStorage.setItem(`dabbly_goals_${userEmail}`, JSON.stringify(goals));
    }
  }, [goals, userEmail]);

  const handleAddGoal = () => {
    if (newGoal.trim()) {
      setGoals((prevGoals) => [
        ...prevGoals,
        {
          id: Date.now(),
          text: newGoal,
          completed: false,
          createdAt: new Date(),
        },
      ]);
      setNewGoal('');
    }
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

  return (
    <div className="h-screen w-screen bg-black">
      <div className="h-full w-full max-w-3xl mx-auto px-4 sm:px-2 py-6 sm:py-4 flex flex-col">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-2 sm:gap-0">
          <h1 className="text-4xl sm:text-2xl font-bold text-white text-center w-full">
            My Goals
          </h1>
        </div>

        {/* Add new goal section */}
        <div className="flex mb-8">
          <input
            type="text"
            placeholder="Add a new goal..."
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            className="flex-1 bg-white/10 border border-white/20 px-6 sm:px-4 py-4 sm:py-3 rounded-l-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all text-lg sm:text-base"
          />
          <button
            onClick={handleAddGoal}
            className="bg-white text-black font-bold px-6 sm:px-4 py-4 sm:py-3 rounded-r-xl shadow-lg hover:bg-white/90 transition duration-300 text-lg sm:text-base"
          >
            Add
          </button>
        </div>

        {/* Goals list */}
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence>
            {goals.length === 0 ? (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-white/60 text-center mt-16 text-lg sm:text-base"
                >
                  No goals yet. Start by adding one!
                </motion.div>
                <div className="w-full flex justify-center mt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push('/')}
                    className="w-full sm:w-auto bg-white text-black font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-white/90 transition duration-300 flex items-center justify-center gap-2 text-lg sm:text-base"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back
                  </motion.button>
                </div>
              </>
            ) : (
              goals.map((goal) => (
                <motion.div
                  key={goal.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`flex flex-col sm:flex-row items-center justify-between bg-white/5 border border-white/10 rounded-xl px-6 sm:px-4 py-4 sm:py-3 mb-4 ${goal.completed ? 'opacity-60 line-through' : ''}`}
                >
                  <div className="flex items-center gap-4 w-full">
                    <input
                      type="checkbox"
                      checked={goal.completed}
                      onChange={() => toggleGoal(goal.id)}
                      className="form-checkbox h-5 w-5 text-white/80 focus:ring-white/50"
                    />
                    <span className="text-lg sm:text-base text-white">{goal.text}</span>
                  </div>
                  <button
                    onClick={() => deleteGoal(goal.id)}
                    className="text-white/60 hover:text-red-400 font-bold text-xl mt-2 sm:mt-0"
                  >
                    &times;
                  </button>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
} 