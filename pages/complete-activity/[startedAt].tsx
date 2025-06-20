import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

interface ActivityLogEntry {
  name: string;
  icon: string;
  description: string;
  startedAt: string;
  completed?: boolean;
  completedAt?: string;
  reflection?: string;
}

export default function CompleteActivityPage() {
  const router = useRouter();
  const { startedAt } = router.query;
  const [activity, setActivity] = useState<ActivityLogEntry | null>(null);
  const [reflection, setReflection] = useState('');
  const [timer, setTimer] = useState(60);
  const [timerActive, setTimerActive] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(true);

  // Circular progress for timer
  const r = 36;
  const c = 2 * Math.PI * r;
  const timerPct = (60 - timer) / 60;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const email = localStorage.getItem('dabbly_user_email') || '';
      setUserEmail(email);
      if (email && startedAt) {
        const saved = localStorage.getItem(`dabbly_started_activities_${email}`);
        if (saved) {
          const activities: ActivityLogEntry[] = JSON.parse(saved);
          const found = activities.find(a => a.startedAt === startedAt);
          setActivity(found || null);
        }
      }
      // Timer persistence logic
      if (startedAt) {
        const timerStartKey = `dabbly_timer_start_${startedAt}`;
        let startTimestamp = localStorage.getItem(timerStartKey);
        if (!startTimestamp) {
          // Set timer start if not set
          startTimestamp = Date.now().toString();
          localStorage.setItem(timerStartKey, startTimestamp);
        }
        const elapsed = Math.floor((Date.now() - parseInt(startTimestamp, 10)) / 1000);
        const remaining = Math.max(60 - elapsed, 0);
        setTimer(remaining);
        setTimerActive(remaining > 0);
      }
      setLoading(false);
    }
  }, [startedAt]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerActive && timer > 0) {
      interval = setInterval(() => setTimer(t => t - 1), 1000);
    } else if (timer === 0) {
      setTimerActive(false);
      // Set reminder flag if not completed
      if (activity && !activity.completed && userEmail) {
        localStorage.setItem(`dabbly_reminder_incomplete_${activity.startedAt}`, '1');
      }
    }
    return () => { if (interval) clearInterval(interval); };
  }, [timerActive, timer]);

  const handleConfirm = () => {
    if (!userEmail || !activity) return;
    const saved = localStorage.getItem(`dabbly_started_activities_${userEmail}`);
    if (saved) {
      const activities: ActivityLogEntry[] = JSON.parse(saved);
      const updated = activities.map(a =>
        a.startedAt === activity.startedAt && !a.completed
          ? { ...a, completed: true, completedAt: new Date().toISOString(), reflection }
          : a
      );
      localStorage.setItem(`dabbly_started_activities_${userEmail}`, JSON.stringify(updated));
      // Remove reminder flag
      localStorage.removeItem(`dabbly_reminder_incomplete_${activity.startedAt}`);
      // Remove timer start
      localStorage.removeItem(`dabbly_timer_start_${activity.startedAt}`);
    }
    router.push('/activity-log');
  };

  if (loading || !activity) {
    return <div className="h-screen w-screen flex items-center justify-center bg-black text-white">Loading...</div>;
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-8 w-full max-w-md text-center flex flex-col items-center"
      >
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
            onClick={handleConfirm}
            disabled={timer > 0 || !reflection.trim()}
          >
            <span className="inline-flex items-center gap-1"><span className="text-lg">✅</span> Confirm</span>
          </button>
          <button
            className="flex-1 bg-red-500 text-white px-4 py-2 rounded-xl font-bold shadow-lg hover:bg-red-400 transition"
            onClick={() => router.push('/activity-log')}
          >
            <span className="inline-flex items-center gap-1"><span className="text-lg">✖️</span> Cancel</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
} 