import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

interface ActivityLogEntry {
  name: string;
  icon: string;
  description: string;
  startedAt: string;
  completed?: boolean;
  completedAt?: string;
  reflection?: string;
  rating?: number;
  review?: string;
}

export default function ActivityLogPage() {
  const [activities, setActivities] = useState<ActivityLogEntry[]>([]);
  const [mounted, setMounted] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [modalActivity, setModalActivity] = useState<ActivityLogEntry | null>(null);
  const [reflection, setReflection] = useState('');
  const [timer, setTimer] = useState(60); // 60 seconds
  const [timerActive, setTimerActive] = useState(false);

  // Circular progress for timer
  const timerPct = (60 - timer) / 60;
  const r = 36;
  const c = 2 * Math.PI * r;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const email = localStorage.getItem('dabbly_user_email');
      setUserEmail(email || '');
      if (email) {
        const saved = localStorage.getItem(`dabbly_started_activities_${email}`);
        setActivities(saved ? JSON.parse(saved) : []);
      }
      setMounted(true);
    }
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerActive && timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    } else if (timer === 0) {
      setTimerActive(false);
    }
    return () => { if (interval) clearInterval(interval); };
  }, [timerActive, timer]);

  const markAsCompleted = (startedAt: string) => {
    if (!userEmail) return;
    const updatedActivities = activities.map((activity) => {
      if (activity.startedAt === startedAt && !activity.completed) {
        return { ...activity, completed: true, completedAt: new Date().toISOString() };
      }
      return activity;
    });
    setActivities(updatedActivities);
    localStorage.setItem(`dabbly_started_activities_${userEmail}`, JSON.stringify(updatedActivities));
  };

  const openCompletionModal = (activity: ActivityLogEntry) => {
    setModalActivity(activity);
    setReflection('');
    setTimer(60); // 1 minute
    setTimerActive(true);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalActivity(null);
    setReflection('');
    setTimer(60);
    setTimerActive(false);
  };

  const confirmCompletion = () => {
    if (!userEmail || !modalActivity) return;
    const updatedActivities = activities.map((activity) => {
      if (activity.startedAt === modalActivity.startedAt && !activity.completed) {
        return { ...activity, completed: true, completedAt: new Date().toISOString(), reflection };
      }
      return activity;
    });
    setActivities(updatedActivities);
    localStorage.setItem(`dabbly_started_activities_${userEmail}`, JSON.stringify(updatedActivities));
    closeModal();
  };

  if (!mounted) {
    return null; // Or a loading spinner
  }

  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col items-center p-6 mt-32">
      <div className="w-full max-w-2xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Activity Log</h1>
          <button
            onClick={() => router.push('/dashboard')}
            className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-white/90 transition"
          >
            Back to Dashboard
          </button>
        </div>
        {activities.length === 0 ? (
          <div className="text-center text-white/70 mt-20 text-lg">No activities started yet.</div>
        ) : (
          <div className="max-h-[60vh] overflow-y-auto overflow-x-hidden custom-scrollbar pr-2">
            <ul className="space-y-4">
              {[...activities].reverse().map((activity) => (
                <li key={activity.startedAt} className="bg-white/10 border border-white/20 rounded-xl p-4 flex items-center gap-4">
                  <span className="text-3xl">{activity.icon}</span>
                  <div className="flex-1">
                    <div className="font-bold text-lg">{activity.name}</div>
                    <div className="text-white/80 text-sm mb-1">{activity.description}</div>
                    <div className="text-xs text-white/50 mb-1">Started: {new Date(activity.startedAt).toLocaleString()}</div>
                    {activity.completed ? (
                      <>
                        <div className="text-green-400 text-xs font-bold">Completed: {activity.completedAt ? new Date(activity.completedAt).toLocaleString() : ''}</div>
                        {/* Rating and review removed */}
                        {activity.reflection && (
                          <div className="text-white/70 text-xs mt-1 italic">Reflection: {activity.reflection}</div>
                        )}
                      </>
                    ) : (
                      <button
                        onClick={() => router.push(`/complete-activity/${encodeURIComponent(activity.startedAt)}`)}
                        className="mt-1 bg-green-500 text-white px-3 py-1 rounded-lg text-xs font-semibold hover:bg-green-400 transition"
                      >
                        Mark as Completed
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* Completion Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8 w-full max-w-md text-center flex flex-col items-center"
              style={{ zIndex: 10 }}
            >
              <div className="flex flex-col items-center w-full">
                <span className="text-4xl mb-2">⏳</span>
                <h2 className="text-2xl font-extrabold text-white mb-2 tracking-tight">Complete Activity</h2>
                <div className="mb-4 text-white/80 text-base">Step 1: Wait for the timer.<br/>Step 2: Share a quick reflection.</div>
                <div className="flex flex-col items-center mb-6">
                  <svg width="90" height="90" className="block mx-auto mb-2">
                    <circle cx="45" cy="45" r={r} fill="none" stroke="#222" strokeWidth="10" />
                    <circle
                      cx="45" cy="45" r={r}
                      fill="none"
                      stroke="#22d3ee"
                      strokeWidth="10"
                      strokeDasharray={c}
                      strokeDashoffset={c - timerPct * c}
                      strokeLinecap="round"
                      style={{ transition: 'stroke-dashoffset 0.6s cubic-bezier(.4,2,.6,1)' }}
                    />
                    <text x="50%" y="54%" textAnchor="middle" fill="#fff" fontSize="1.5em" fontWeight="bold">{timer}s</text>
                  </svg>
                  <div className="text-cyan-200 text-xs font-semibold tracking-wide">Please wait for the timer to finish</div>
                </div>
                <div className="w-full mb-4">
                  <label className="block text-white/80 text-sm font-bold mb-1 flex items-center gap-2" htmlFor="reflection"><span className="text-lg">✍️</span> Reflection</label>
                  <textarea
                    id="reflection"
                    className="w-full rounded-xl p-3 bg-white/20 border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-cyan-300 focus:outline-none transition-all resize-none min-h-[70px]"
                    placeholder="What did you learn or enjoy?"
                    value={reflection}
                    onChange={e => setReflection(e.target.value)}
                    disabled={timer > 0}
                  />
                </div>
                <div className="flex gap-4 justify-center w-full mt-2">
                  <button
                    className="flex-1 bg-cyan-500 text-white px-4 py-2 rounded-xl font-bold shadow-lg hover:bg-cyan-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={confirmCompletion}
                    disabled={timer > 0 || !reflection.trim()}
                  >
                    <span className="inline-flex items-center gap-1"><span className="text-lg">✅</span> Confirm</span>
                  </button>
                  <button
                    className="flex-1 bg-red-500 text-white px-4 py-2 rounded-xl font-bold shadow-lg hover:bg-red-400 transition"
                    onClick={closeModal}
                  >
                    <span className="inline-flex items-center gap-1"><span className="text-lg">✖️</span> Cancel</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 