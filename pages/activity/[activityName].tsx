import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function ActivityPage() {
  const router = useRouter();
  const { activityName, activity } = router.query;
  let activityObj: any = null;
  try {
    activityObj = activity ? JSON.parse(activity as string) : null;
  } catch {
    activityObj = null;
  }

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!activityObj) {
      router.replace("/options");
    }
  }, [activityObj, router]);

  const getNewActivity = () => {
    router.push("/questionnaire");
  };

  const handleAddActivityToGoals = () => {
    if (activityObj) {
      let currentGoals = [];
      let userEmail = '';
      if (typeof window !== 'undefined') {
        userEmail = localStorage.getItem('dabbly_user_email') || '';
        const savedGoals = localStorage.getItem(`dabbly_goals_${userEmail}`);
        currentGoals = savedGoals ? JSON.parse(savedGoals) : [];
      }
      const newGoal = {
        id: Date.now(),
        text: activityObj.name,
        completed: false,
        createdAt: new Date(),
      };
      const updatedGoals = [...currentGoals, newGoal];
      if (userEmail) {
        localStorage.setItem(`dabbly_goals_${userEmail}`, JSON.stringify(updatedGoals));
      }
      alert(`${activityObj.name} added to your goals!`);
    }
  };

  const handleStartActivity = () => {
    if (activityObj) {
      let startedActivities = [];
      let userEmail = '';
      if (typeof window !== 'undefined') {
        userEmail = localStorage.getItem('dabbly_user_email') || '';
        const saved = localStorage.getItem(`dabbly_started_activities_${userEmail}`);
        startedActivities = saved ? JSON.parse(saved) : [];
      }
      const logEntry = {
        name: activityObj.name,
        icon: activityObj.icon,
        description: activityObj.description,
        startedAt: new Date(),
      };
      startedActivities.push(logEntry);
      if (userEmail) {
        localStorage.setItem(`dabbly_started_activities_${userEmail}`, JSON.stringify(startedActivities));
      }
      const videoLinks: { [key: string]: string } = {
        "Learn to Code": "https://www.youtube.com/@freecodecamp",
        "Photography Basics": "https://www.youtube.com/@petermckinnon",
        "Write a Short Story": "https://www.youtube.com/@brandonsanderson",
        "Dance Challenge": "https://www.youtube.com/@MattSDance",
        "DIY Craft": "https://www.youtube.com/@5MinuteCraftsYouTube",
        "Movie Quiz Night": "https://www.youtube.com/@CinemaSins",
        "30-Day Push-Up Challenge": "https://www.youtube.com/@ATHLEANX",
        "Cold Shower Dare": "https://www.youtube.com/@wimhof1",
        "No Sugar Day": "https://www.youtube.com/@DrEricBergDC",
        "Random Act of Kindness": "https://www.youtube.com/@soulpancake",
        "Try a New Recipe": "https://www.youtube.com/@babishculinaryuniverse",
        "Backyard Camping": "https://www.youtube.com/@rei"
      };
      const link = videoLinks[activityObj.name];
      if (link) {
        window.open(link, '_blank');
      } else {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3500);
      }
    }
  };

  if (!activityObj) {
    return null; // Or a loading spinner
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-black text-white p-4 sm:p-2">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-4 sm:mb-8 max-w-xl w-full sm:w-full"
      >
        <h1 className="text-3xl sm:text-xl font-extrabold text-white mb-2 sm:mb-4">Time to Dabble!</h1>
        <p className="text-lg sm:text-base text-white/80">Here's your chosen activity.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="bg-black border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-2 max-w-xl w-full sm:w-full text-center relative"
      >
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-3xl sm:text-2xl">{activityObj.icon}</div>
        <h2 className="text-2xl sm:text-lg font-bold text-white mb-2 sm:mb-4">{activityObj.name}</h2>
        <p className="text-base sm:text-xs text-white/80 mb-3 sm:mb-4">{activityObj.description}</p>
        <div className="flex justify-center flex-wrap gap-x-6 sm:gap-x-2 gap-y-2 text-white/80 font-semibold mb-4 sm:mb-6">
          <span className="flex items-center"><span className="text-xl sm:text-base mr-1 sm:mr-2">🌟</span> {activityObj.difficulty}</span>
          <span className="flex items-center"><span className="text-xl sm:text-base mr-1 sm:mr-2">⏱️</span> {activityObj.time}</span>
          <span className="flex items-center"><span className="text-xl sm:text-base mr-1 sm:mr-2">🛠️</span> {activityObj.tools}</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 justify-center mt-4 w-full">
          <button
            onClick={handleStartActivity}
            className="bg-white text-black font-bold py-2 px-6 sm:px-4 rounded-full shadow-lg hover:bg-white/90 transition duration-300 w-full sm:w-auto"
          >
            Start Activity
          </button>
          <button
            onClick={handleAddActivityToGoals}
            className="bg-black border border-white/20 text-white font-bold py-2 px-6 sm:px-4 rounded-full shadow-lg hover:bg-white/10 transition duration-300 w-full sm:w-auto"
          >
            Add to Goals
          </button>
          <button
            onClick={getNewActivity}
            className="bg-black border border-white/20 text-white font-bold py-2 px-6 sm:px-4 rounded-full shadow-lg hover:bg-white/10 transition duration-300 w-full sm:w-auto"
          >
            New Activity
          </button>
        </div>
      </motion.div>
      {showToast && (
        <Toast message={`When you finish, don't forget to mark your activity as done!`} />
      )}
    </div>
  );
}

// Simple Toast component
function Toast({ message }: { message: string }) {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-3 rounded-full shadow-lg z-50 text-lg font-semibold animate-fade-in-out">
      {message}
    </div>
  );
}

// Add animation to index.css:
// .animate-fade-in-out { animation: fadeInOut 3.5s; }
// @keyframes fadeInOut { 0% { opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { opacity: 0; } } 