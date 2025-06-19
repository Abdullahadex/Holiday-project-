import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface ActivityLogEntry {
  name: string;
  icon: string;
  description: string;
  startedAt: string;
}

export default function ActivityLogPage() {
  const [activities, setActivities] = useState<ActivityLogEntry[]>([]);
  const [mounted, setMounted] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const router = useRouter();

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

  if (!mounted) {
    return null; // Or a loading spinner
  }

  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col items-center p-6 pt-32">
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
              {activities.map((activity, idx) => (
                <li key={idx} className="bg-white/10 border border-white/20 rounded-xl p-4 flex items-center gap-4">
                  <span className="text-3xl">{activity.icon}</span>
                  <div className="flex-1">
                    <div className="font-bold text-lg">{activity.name}</div>
                    <div className="text-white/80 text-sm mb-1">{activity.description}</div>
                    <div className="text-xs text-white/50">Started: {new Date(activity.startedAt).toLocaleString()}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
} 