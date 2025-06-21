import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FaCheckCircle, FaFire, FaMedal, FaBullseye, FaTasks, FaBell, FaUserCircle } from 'react-icons/fa';

interface Goal {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
}

interface ActivityLogEntry {
  name: string;
  icon: string;
  description: string;
  startedAt: string;
}

const MOTIVATIONAL_QUOTES = [
  "Keep going, you're doing great!",
  "Every step counts!",
  "Small progress is still progress.",
  "You are capable of amazing things.",
  "Stay positive, work hard, make it happen!"
];

function getToday() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

// Helper for circular progress
function CircularProgress({ value, max }: { value: number; max: number }) {
  const pct = max === 0 ? 0 : (value / max) * 100;
  const r = 36;
  const c = 2 * Math.PI * r;
  return (
    <svg width="90" height="90" className="block mx-auto">
      <circle cx="45" cy="45" r={r} fill="none" stroke="#222" strokeWidth="10" />
      <circle
        cx="45" cy="45" r={r}
        fill="none"
        stroke="#22d3ee"
        strokeWidth="10"
        strokeDasharray={c}
        strokeDashoffset={c - (pct / 100) * c}
        strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 0.6s cubic-bezier(.4,2,.6,1)' }}
      />
      <text x="50%" y="54%" textAnchor="middle" fill="#fff" fontSize="1.5em" fontWeight="bold">{Math.round(pct)}%</text>
    </svg>
  );
}

export default function DashboardPage() {
  const [userName, setUserName] = useState('');
  const [goals, setGoals] = useState<Goal[]>([]);
  const [activities, setActivities] = useState<ActivityLogEntry[]>([]);
  const [completedCount, setCompletedCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [badges, setBadges] = useState<string[]>([]);
  const [quote, setQuote] = useState('');
  const [reminders, setReminders] = useState<{ startedAt: string; name: string }[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const name = localStorage.getItem('dabbly_user_name') || '';
      setUserName(name);
      const email = localStorage.getItem('dabbly_user_email') || '';
      const savedGoals = localStorage.getItem(`dabbly_goals_${email}`);
      setGoals(savedGoals ? JSON.parse(savedGoals) : []);
      const savedActivities = localStorage.getItem(`dabbly_started_activities_${email}`);
      setActivities(savedActivities ? JSON.parse(savedActivities) : []);
    }
  }, []);

  useEffect(() => {
    // Progress: completed goals
    setCompletedCount(goals.filter(g => g.completed).length);
    // Streak: count consecutive days with at least one activity
    const days: Set<string> = new Set();
    activities.forEach(a => days.add(a.startedAt.slice(0, 10)));
    let streakCount = 0;
    let d = new Date();
    while (days.has(d.toISOString().slice(0, 10))) {
      streakCount++;
      d.setDate(d.getDate() - 1);
    }
    setStreak(streakCount);
    // Badges
    const newBadges: string[] = [];
    if (activities.length > 0) newBadges.push('First Activity');
    if (activities.length >= 5) newBadges.push('5 Activities');
    if (streakCount >= 3) newBadges.push('3-Day Streak');
    if (completedCount >= 5) newBadges.push('Goal Crusher');
    setBadges(newBadges);
    // Motivational quote
    setQuote(MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)]);
  }, [goals, activities, completedCount]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const reminderKeys = Object.keys(localStorage).filter(k => k.startsWith('dabbly_reminder_incomplete_'));
      const email = localStorage.getItem('dabbly_user_email') || '';
      const savedActivities = localStorage.getItem(`dabbly_started_activities_${email}`);
      let acts: ActivityLogEntry[] = [];
      if (savedActivities) acts = JSON.parse(savedActivities);
      const reminderList = reminderKeys.map(key => {
        const startedAt = key.replace('dabbly_reminder_incomplete_', '');
        const found = acts.find(a => a.startedAt === startedAt);
        return found ? { startedAt, name: found.name } : null;
      }).filter(Boolean) as { startedAt: string; name: string }[];
      setReminders(reminderList);
    }
  }, [activities]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-zinc-900 to-black text-white p-0 md:p-0 flex flex-col items-center relative overflow-x-hidden">
      {/* Greeting & quote */}
      <div className="w-full max-w-4xl text-center mt-8 mb-4">
        <h1 className="text-5xl font-extrabold mb-2 drop-shadow-lg">Welcome{userName ? `, ${userName}` : ''}!</h1>
        <div className="mb-6 text-xl text-cyan-200/80 italic animate-fade-in-slow">{quote}</div>
      </div>
      {/* Stats Row */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 mb-12 w-full max-w-4xl justify-center px-2 sm:px-0 overflow-x-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
        {/* Goals Progress Card */}
        <div className="flex-1 flex-shrink bg-white/10 backdrop-blur-lg rounded-3xl p-4 sm:p-6 flex flex-col items-center shadow-2xl border border-white/10 sm:hover:scale-105 transition-transform duration-300 min-w-[200px] max-w-[350px] mx-auto mb-4 sm:mb-0">
          <CircularProgress value={completedCount} max={goals.length || 1} />
          <div className="mt-4 text-xl sm:text-2xl font-bold flex items-center gap-2"><FaCheckCircle style={{ color: '#22d3ee' }} className="animate-bounce" /> Goals Completed</div>
          <div className="text-2xl sm:text-3xl font-extrabold mt-2">{completedCount} / {goals.length || 1}</div>
        </div>
        {/* Streak Card */}
        <div className="flex-1 flex-shrink bg-gradient-to-br from-orange-500/30 via-orange-400/20 to-yellow-200/10 backdrop-blur-lg rounded-3xl p-4 sm:p-6 flex flex-col items-center shadow-2xl border border-orange-400/40 sm:hover:scale-105 transition-transform duration-300 min-w-[200px] max-w-[350px] mx-auto mb-4 sm:mb-0">
          <FaFire style={{ color: '#ef4444' }} className="text-5xl mb-2 animate-bounce drop-shadow-[0_0_8px_red]" />
          <div className="text-xl sm:text-2xl font-bold text-orange-200">Day Streak</div>
          <div className="text-2xl sm:text-3xl font-extrabold mt-2 text-orange-100">{streak}</div>
        </div>
        {/* Badges Card */}
        <div className="flex-1 flex-shrink bg-gradient-to-br from-yellow-400/30 via-yellow-200/20 to-white/10 backdrop-blur-lg rounded-3xl p-4 sm:p-6 flex flex-col items-center shadow-2xl border border-yellow-300/40 sm:hover:scale-105 transition-transform duration-300 min-w-[200px] max-w-[350px] mx-auto">
          <FaMedal style={{ color: '#fde047' }} className="text-5xl mb-2 drop-shadow-[0_0_8px_gold]" />
          <div className="text-xl sm:text-2xl font-bold text-yellow-200">Badges</div>
          <div className="text-2xl sm:text-3xl font-extrabold mt-2 text-yellow-100">{badges.length}</div>
        </div>
      </div>
      {/* Main Content Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-40 mb-20 justify-center items-stretch px-2 sm:px-0">
        {/* Recent Activities Card */}
        <div className="flex-1 min-w-[180px] max-w-[210px] h-[340px] overflow-hidden bg-white/10 backdrop-blur-2xl rounded-3xl p-4 sm:p-6 shadow-2xl border-2 border-cyan-300/40 sm:hover:border-cyan-300/80 sm:hover:shadow-[0_0_32px_8px_rgba(34,211,238,0.7)] sm:hover:scale-105 transition-transform duration-300 flex flex-col items-center mx-auto mb-8 lg:mb-0 sm:mb-0">
          <div className="flex flex-col items-center mb-6">
            <FaTasks style={{ color: '#22d3ee' }} className="text-5xl sm:text-6xl animate-pulse drop-shadow-[0_0_16px_cyan] mb-2" />
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-cyan-100 text-center">Recent Activities</h2>
          </div>
          {activities.length === 0 ? (
            <div className="text-white/60 text-lg text-center">No activities started yet.</div>
          ) : (
            <ol className="relative border-l-4 border-cyan-400/30 ml-6 space-y-10 w-full max-w-xs max-h-64 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-cyan-400/60 scrollbar-track-transparent">
              {activities.slice(-3).reverse().map((activity, idx) => (
                <li key={idx} className="mb-0 ml-4 flex items-start gap-4">
                  <div className="w-7 h-7 bg-cyan-400 rounded-full border-4 border-cyan-900 flex items-center justify-center text-2xl text-white shadow-lg animate-pulse">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg text-cyan-100">{activity.name}</div>
                    <div className="text-white/70 text-sm">Started: {new Date(activity.startedAt).toLocaleString()}</div>
                  </div>
                </li>
              ))}
            </ol>
          )}
          <button
            onClick={() => router.push('/activity-log')}
            className="mt-8 w-[120px] sm:w-[140px] text-base font-extrabold px-4 py-2 rounded-xl shadow-xl bg-cyan-500 text-white hover:bg-cyan-400 hover:shadow-[0_0_16px_4px_rgba(34,211,238,0.7)] transition-all duration-200 border-2 border-cyan-300/80 focus:outline-none focus:ring-4 focus:ring-cyan-300/40 mx-auto"
          >
            View All
          </button>
        </div>
        {/* Achievements Card */}
        <div className="flex-1 min-w-[180px] max-w-[210px] h-[340px] overflow-hidden bg-white/10 backdrop-blur-2xl rounded-3xl p-4 sm:p-6 shadow-2xl border-2 border-yellow-300/40 sm:hover:border-yellow-300/80 sm:hover:shadow-[0_0_32px_8px_rgba(253,224,71,0.7)] sm:hover:scale-105 transition-transform duration-300 flex flex-col items-center mx-auto mb-8 lg:mb-0 sm:mb-0">
          <div className="flex flex-col items-center mb-4">
            <FaMedal style={{ color: '#fde047' }} className="text-5xl sm:text-6xl drop-shadow-[0_0_16px_gold] mb-2" />
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-yellow-100 text-center">Achievements</h2>
          </div>
          {badges.length === 0 && (
            <div className="text-white/70 text-lg mb-6 text-center">No badges yet! Start an activity to earn your first badge.</div>
          )}
          <button
            onClick={() => router.push('/questionnaire')}
            className="mt-4 mb-4 bg-yellow-400 text-black font-extrabold text-2xl px-8 py-4 rounded-3xl shadow-2xl hover:bg-yellow-300 hover:shadow-[0_0_32px_8px_rgba(253,224,71,0.9)] transition-all duration-200 border-4 border-yellow-200/90 focus:outline-none focus:ring-4 focus:ring-yellow-200/60 animate-bounce max-w-xs mx-auto"
            style={{ letterSpacing: '0.05em', textShadow: '0 2px 8px #fff200' }}
          >
            Start
          </button>
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              {badges.filter(badge => badge !== 'First Activity').map((badge, idx) => (
                <div key={idx} className="bg-yellow-400/30 text-yellow-100 px-6 py-2 rounded-full font-bold shadow border border-yellow-300/30 animate-fade-in-slow flex items-center gap-2 text-base">
                  <FaMedal style={{ color: '#fde047' }} /> {badge}
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Reminders Card */}
        <div className="flex-1 min-w-[180px] max-w-[210px] h-[340px] overflow-hidden bg-white/10 backdrop-blur-2xl rounded-3xl p-4 sm:p-6 shadow-2xl border-2 border-purple-300/40 sm:hover:border-purple-300/80 sm:hover:shadow-[0_0_32px_8px_rgba(196,181,253,0.7)] sm:hover:scale-105 transition-transform duration-300 flex flex-col items-center mx-auto sm:mb-0">
          <div className="flex flex-col items-center mb-4">
            <FaBell style={{ color: '#a78bfa' }} className="text-5xl sm:text-6xl animate-pulse drop-shadow-[0_0_16px_purple] mb-2" />
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-purple-100 text-center">Reminders</h2>
          </div>
          {reminders.length === 0 ? (
            <div className="text-white/70 text-lg mb-6 text-center">No pending activities. You're all caught up!</div>
          ) : (
            <div className="flex flex-col gap-3 w-full items-center">
              {reminders.map(rem => (
                <div key={rem.startedAt} className="bg-purple-400/20 text-purple-100 px-3 py-2 rounded-xl font-semibold shadow border border-purple-300/30 flex flex-col items-center w-full">
                  <div className="mb-1 text-sm text-center">
                    <span className="font-bold">{rem.name}</span><br/>
                    <span className="text-white/80">You started this activity. Mark it as completed when you're done!</span>
                  </div>
                  <button
                    className="bg-purple-500 text-white px-3 py-1 rounded-lg text-xs font-bold hover:bg-purple-400 transition mt-1"
                    onClick={() => router.push(`/complete-activity/${encodeURIComponent(rem.startedAt)}`)}
                  >
                    Complete Now
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Mobile Only: Stack Cards Vertically with Extra Gap */}
      <style jsx>{`
        @media (max-width: 640px) {
          .dashboard-mobile-stack {
            flex-direction: column !important;
            gap: 2.5rem !important;
            margin-top: 2.5rem !important;
            margin-bottom: 2.5rem !important;
          }
        }
      `}</style>
      <style jsx global>{`
        @keyframes fade-in-slow {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-slow {
          animation: fade-in-slow 1.2s ease;
        }
        @keyframes spin-slow {
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
} 