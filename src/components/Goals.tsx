import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Goal {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

interface GoalsProps {
  goals: Goal[];
  toggleGoal: (id: number) => void;
  deleteGoal: (id: number) => void;
  onAddGoal: (text: string) => void;
}

export default function Goals({ goals, toggleGoal, deleteGoal, onAddGoal }: GoalsProps) {
  const [newGoal, setNewGoal] = useState('');
  const navigate = useNavigate();

  const handleAddGoal = () => {
    if (newGoal.trim()) {
      onAddGoal(newGoal);
      setNewGoal('');
    }
  };

  return (
    <div className="h-screen w-screen bg-black">
      <div className="h-full w-full max-w-3xl mx-auto px-4 py-6 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-white">
            My Goals
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="text-white hover:text-white/80 font-medium flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </motion.button>
        </div>

        {/* Add new goal section */}
        <div className="flex gap-4 mb-8">
          <input
            type="text"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddGoal()}
            placeholder="What's your next goal?"
            className="flex-1 max-w-sm bg-white/10 backdrop-blur-sm text-white placeholder-white/50 px-4 py-3 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all border border-white/20"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddGoal}
            className="bg-white text-black px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all whitespace-nowrap hover:bg-white/90"
          >
            Add Goal
          </motion.button>
        </div>

        {/* Goals list */}
        <div className="flex-1 overflow-y-auto custom-scrollbar space-y-4">
          <AnimatePresence>
            {goals.map((goal) => (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4 group hover:bg-white/20 transition-all border border-white/20"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleGoal(goal.id)}
                  className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors ${
                    goal.completed
                      ? 'bg-white border-transparent'
                      : 'border-white/50'
                  }`}
                >
                  {goal.completed && (
                    <motion.svg
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-4 h-4 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </motion.svg>
                  )}
                </motion.button>
                
                <span
                  className={`flex-1 text-lg ${
                    goal.completed ? 'line-through text-white/40' : 'text-white'
                  }`}
                >
                  {goal.text}
                </span>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => deleteGoal(goal.id)}
                  className="opacity-0 group-hover:opacity-100 text-white/50 hover:text-white transition-all"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty state */}
          {goals.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
            >
              <span className="text-6xl mb-4 block">✨</span>
              <p className="text-white/80 text-lg">
                No goals yet! Add your first goal above.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
} 