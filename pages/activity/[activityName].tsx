import React, { useEffect } from "react";
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
      // You can implement goal saving logic here (e.g., localStorage or API)
      alert(`${activityObj.name} added to your goals!`);
    }
  };

  const handleStartActivity = () => {
    if (activityObj) {
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
        alert(`Starting: ${activityObj.name}!`);
      }
    }
  };

  if (!activityObj) {
    return null; // Or a loading spinner
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-black text-white p-2 sm:p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-4 sm:mb-8 w-full max-w-xl"
      >
        <h1 className="text-xl sm:text-5xl font-extrabold text-white mb-2 sm:mb-4">Time to Dabble!</h1>
        <p className="text-base sm:text-xl text-white/80">Here's your chosen activity.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="bg-black border border-white/20 rounded-3xl shadow-2xl p-2 sm:p-8 max-w-full w-full sm:max-w-xl text-center relative"
      >
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 text-2xl sm:text-5xl">{activityObj.icon}</div>
        <h2 className="text-lg sm:text-4xl font-bold text-white mb-2 sm:mb-4">{activityObj.name}</h2>
        <p className="text-xs sm:text-lg text-white/80 mb-3 sm:mb-4">{activityObj.description}</p>
        <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-x-2 sm:gap-x-6 gap-y-2 sm:gap-y-3 text-white/80 font-semibold mb-4 sm:mb-6">
          <span className="flex items-center"><span className="text-base sm:text-2xl mr-1 sm:mr-2">🌟</span> {activityObj.difficulty}</span>
          <span className="flex items-center"><span className="text-base sm:text-2xl mr-1 sm:mr-2">⏱️</span> {activityObj.time}</span>
          <span className="flex items-center"><span className="text-base sm:text-2xl mr-1 sm:mr-2">🛠️</span> {activityObj.tools}</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center mt-4 w-full">
          <button
            onClick={handleStartActivity}
            className="bg-white text-black font-bold py-2 px-4 sm:px-6 rounded-full shadow-lg hover:bg-white/90 transition duration-300 w-full sm:w-auto"
          >
            Start Activity
          </button>
          <button
            onClick={handleAddActivityToGoals}
            className="bg-black border border-white/20 text-white font-bold py-2 px-4 sm:px-6 rounded-full shadow-lg hover:bg-white/10 transition duration-300 w-full sm:w-auto"
          >
            Add to Goals
          </button>
          <button
            onClick={getNewActivity}
            className="bg-black border border-white/20 text-white font-bold py-2 px-4 sm:px-6 rounded-full shadow-lg hover:bg-white/10 transition duration-300 w-full sm:w-auto"
          >
            New Activity
          </button>
        </div>
      </motion.div>
    </div>
  );
} 