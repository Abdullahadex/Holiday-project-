import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const activities: { [key: string]: { name: string; description: string; difficulty: string; time: string; tools: string; icon: string; }[] } = {
  skill: [
    {
      name: "Learn to Code",
      description: "Start a free coding course online and build your first website!",
      difficulty: "Beginner",
      time: "1 hour",
      tools: "Laptop, Internet",
      icon: "💻"
    },
    {
      name: "Photography Basics",
      description: "Grab your phone and try a photo challenge: 10 creative shots in your neighborhood.",
      difficulty: "Easy",
      time: "30 mins",
      tools: "Phone/Camera",
      icon: "📷"
    },
    {
      name: "Write a Short Story",
      description: "Let your imagination run wild and write a 500-word story.",
      difficulty: "Medium",
      time: "45 mins",
      tools: "Pen & Paper or Computer",
      icon: "✍️"
    },
  ],
  fun: [
    {
      name: "Dance Challenge",
      description: "Learn a trending dance and perform it!",
      difficulty: "Easy",
      time: "20 mins",
      tools: "Music, Space to dance",
      icon: "💃"
    },
    {
      name: "DIY Craft",
      description: "Make a simple origami or paper craft.",
      difficulty: "Easy",
      time: "30 mins",
      tools: "Paper, Scissors, Markers",
      icon: "✂️"
    },
    {
      name: "Movie Quiz Night",
      description: "Host a movie trivia quiz with friends or family.",
      difficulty: "Medium",
      time: "1 hour",
      tools: "Quiz app or pen & paper",
      icon: "🎬"
    },
  ],
  challenge: [
    {
      name: "30-Day Push-Up Challenge", 
      description: "Start today! Do as many push-ups as you can, and add one more each day.",
      difficulty: "Hard",
      time: "10 mins/day",
      tools: "None",
      icon: "💪"
    },
    {
      name: "Cold Shower Dare",
      description: "Take a cold shower and see how long you last!",
      difficulty: "Medium",
      time: "5 mins",
      tools: "Shower",
      icon: "🚿"
    },
    {
      name: "No Sugar Day",
      description: "Challenge yourself to avoid all added sugar for a whole day.",
      difficulty: "Medium",
      time: "All day",
      tools: "Willpower!",
      icon: "🍭"
    },
  ],
  surprise: [
    {
      name: "Random Act of Kindness",
      description: "Do something nice for someone unexpectedly.",
      difficulty: "Easy",
      time: "15 mins",
      tools: "None",
      icon: "❤️"
    },
    {
      name: "Try a New Recipe",
      description: "Find a recipe you've never tried and cook it.",
      difficulty: "Medium",
      time: "1 hour",
      tools: "Kitchen, Ingredients",
      icon: "👨‍🍳"
    },
    {
      name: "Backyard Camping",
      description: "Set up a tent or blanket fort and camp out in your backyard or living room.",
      difficulty: "Fun",
      time: "Evening",
      tools: "Blankets, Pillows, Snacks",
      icon: "⛺"
    },
  ],
};

function shuffleArray(array: any[]) {
  return array
    .map((a: any) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);
}

function getRandomActivity(category: string) {
  const arr = activities[category] || [];
  if (arr.length === 0) return null;
  return shuffleArray(arr)[0];
}

// Keyword-resource map for API activities
const resourceMap: { [keyword: string]: { resource: string; tip: string } } = {
  walk: {
    resource: "https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC",
    tip: "Try a new route or listen to a podcast while you walk!"
  },
  draw: {
    resource: "https://www.youtube.com/watch?v=2VbP7TnG3sQ",
    tip: "Try drawing with your non-dominant hand for fun!"
  },
  cook: {
    resource: "https://tasty.co/",
    tip: "Pick a recipe with an ingredient you've never used before."
  },
  read: {
    resource: "https://www.gutenberg.org/",
    tip: "Find a free classic book to read online."
  },
  meditate: {
    resource: "https://www.insighttimer.com/meditation-timer",
    tip: "Try a 5-minute guided meditation."
  },
  clean: {
    resource: "https://www.youtube.com/watch?v=Q1y4gG6F6Lw",
    tip: "Set a timer for 10 minutes and see how much you can tidy up!"
  },
  dance: {
    resource: "https://www.youtube.com/results?search_query=dance+tutorial",
    tip: "Try a dance style you've never tried before!"
  },
  yoga: {
    resource: "https://www.doyogawithme.com/",
    tip: "Try a beginner yoga flow for relaxation."
  },
  journal: {
    resource: "https://www.journalbuddies.com/journaling-resources/journal-prompts-for-adults/",
    tip: "Write about something that made you smile today."
  },
  garden: {
    resource: "https://www.rhs.org.uk/advice/beginners-guide",
    tip: "Try planting something new or just water your plants."
  },
  photo: {
    resource: "https://www.digitalphotomentor.com/photography-challenges/",
    tip: "Try a photo challenge: capture something red, something round, and something that makes you happy."
  },
  puzzle: {
    resource: "https://www.jigsawexplorer.com/",
    tip: "Try a new type of puzzle or brain teaser."
  },
  call: {
    resource: "https://www.psychologytoday.com/us/blog/the-moment-youth/201901/the-benefits-calling-friend",
    tip: "Call a friend or family member you haven't spoken to in a while."
  },
  volunteer: {
    resource: "https://www.volunteermatch.org/",
    tip: "Find a local or virtual volunteering opportunity."
  },
  paint: {
    resource: "https://www.skillshare.com/browse/painting",
    tip: "Try painting with a new color palette."
  },
  write: {
    resource: "https://www.writersdigest.com/prompts",
    tip: "Use a random writing prompt to get started."
  },
  // Add more as you see new activities!
};

export default function OptionsPage() {
  const router = useRouter();
  const [suggestedActivity, setSuggestedActivity] = useState<any>(null);
  const [lastActivity, setLastActivity] = useState<any>(null);
  const [loadingSurprise, setLoadingSurprise] = useState(false);

  // Parse answers from query string, but only when router is ready
  const answers = React.useMemo(() => {
    if (!router.isReady) return [];
    if (typeof router.query.answers === "string") {
      try {
        return JSON.parse(router.query.answers);
      } catch {
        return [];
      }
    }
    return [];
  }, [router.isReady, router.query.answers]);

  useEffect(() => {
    if (!router.isReady) return;
    if (answers.length > 0) {
      setSuggestedActivity(getSuggestedCategory());
    } else {
      // Pick a random activity from any category as default
      const allCategories = Object.keys(activities);
      const randomCategory = allCategories[Math.floor(Math.random() * allCategories.length)];
      setSuggestedActivity(getRandomActivity(randomCategory));
    }
    // eslint-disable-next-line
  }, [router.isReady, answers]);

  if (!router.isReady) return null;

  function getSuggestedCategory() {
    const energyLevel = answers[1];
    const socialPreference = answers[2];

    let category = "";
    if (energyLevel === "Low - Want something relaxing") {
      category = "fun";
    } else if (energyLevel === "High - Bring it on!") {
      category = "challenge";
    } else {
      if (socialPreference === "Solo activity") {
        category = "skill";
      } else if (socialPreference === "Group activity") {
        category = "fun";
      } else {
        const keys = Object.keys(activities);
        category = keys[Math.floor(Math.random() * keys.length)];
      }
    }
    return getRandomActivity(category);
  }

  // Helper to get the suggested category string
  function getSuggestedCategoryString() {
    const energyLevel = answers[1];
    const socialPreference = answers[2];

    let category = "";
    if (energyLevel === "Low - Want something relaxing") {
      category = "fun";
    } else if (energyLevel === "High - Bring it on!") {
      category = "challenge";
    } else {
      if (socialPreference === "Solo activity") {
        category = "skill";
      } else if (socialPreference === "Group activity") {
        category = "fun";
      } else {
        const keys = Object.keys(activities);
        category = keys[Math.floor(Math.random() * keys.length)];
      }
    }
    return category;
  }

  // Dabble Again: fetch from API using category
  const handleDabbleAgain = async () => {
    setLoadingSurprise(true);
    try {
      const category = getSuggestedCategoryString();
      const response = await fetch(`/api/activity?type=${encodeURIComponent(category)}`);
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      const data = await response.json();
      if (!data.activity) {
        throw new Error('No activity in API response');
      }
      let resource = null, tip = null;
      for (const keyword in resourceMap) {
        if (data.activity.toLowerCase().includes(keyword)) {
          resource = resourceMap[keyword].resource;
          tip = resourceMap[keyword].tip;
          break;
        }
      }
      const dabbleActivity = {
        name: data.activity,
        description: data.type ? data.type.charAt(0).toUpperCase() + data.type.slice(1) : 'Random',
        difficulty: data.accessibility || "Varies",
        time: data.duration || "Varies",
        tools: data.link ? data.link : "Varies",
        icon: "✨",
        resource,
        tip
      };
      setLastActivity(suggestedActivity);
      setSuggestedActivity(dabbleActivity);
    } catch (e) {
      alert('Failed to fetch a new suggestion. Try again!');
    }
    setLoadingSurprise(false);
  };

  const handleSurpriseMe = async () => {
    setLoadingSurprise(true);
    try {
      const response = await fetch('/api/activity');
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      const data = await response.json();
      if (!data.activity) {
        throw new Error('No activity in API response');
      }
      let resource = null, tip = null;
      for (const keyword in resourceMap) {
        if (data.activity.toLowerCase().includes(keyword)) {
          resource = resourceMap[keyword].resource;
          tip = resourceMap[keyword].tip;
          break;
        }
      }
      const surpriseActivity = {
        name: data.activity,
        description: data.type ? data.type.charAt(0).toUpperCase() + data.type.slice(1) : 'Random',
        difficulty: data.accessibility || "Varies",
        time: data.duration || "Varies",
        tools: data.link ? data.link : "Varies",
        icon: "✨",
        resource,
        tip
      };
      setLastActivity(suggestedActivity);
      setSuggestedActivity(surpriseActivity);
    } catch (e) {
      alert('Failed to fetch a surprise activity. Try again!');
    }
    setLoadingSurprise(false);
  };

  const handleStartActivity = () => {
    if (suggestedActivity) {
      router.push({
        pathname: `/activity/${encodeURIComponent(suggestedActivity.name)}`,
        query: { activity: JSON.stringify(suggestedActivity) }
      });
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-black text-white p-4 sm:p-2">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-4 max-w-xl w-full sm:w-full"
      >
        <h1 className="text-3xl sm:text-2xl font-extrabold text-white mb-2">Your Dabble Suggestion!</h1>
        <p className="text-lg sm:text-base text-white/80">Based on your answers, here's an idea for you.</p>
      </motion.div>

      {suggestedActivity ? (
        <motion.div
          key={suggestedActivity.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="bg-black border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-2 max-w-xl w-full sm:w-full text-center transform hover:scale-105 transition-transform duration-300 relative mb-4"
        >
          <div className="absolute top-2 right-2 text-3xl sm:text-2xl">{suggestedActivity.icon}</div>
          <h2 className="text-2xl sm:text-lg font-bold text-white mb-2">{suggestedActivity.name}</h2>
          <p className="text-base sm:text-xs text-white/80 mb-3">{suggestedActivity.description}</p>
          <div className="flex justify-center flex-wrap gap-x-4 sm:gap-x-2 gap-y-2 text-white/80 font-semibold mb-4">
            <span className="flex items-center"><span className="text-xl sm:text-base mr-1">🌟</span> {suggestedActivity.difficulty}</span>
            <span className="flex items-center"><span className="text-xl sm:text-base mr-1">⏱️</span> {suggestedActivity.time}</span>
            <span className="flex items-center"><span className="text-xl sm:text-base mr-1">🛠️</span> {suggestedActivity.tools}</span>
          </div>
          {suggestedActivity.resource && suggestedActivity.tip && (
            <a
              href={suggestedActivity.resource}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-cyan-400 transition duration-300 mb-2"
            >
              Get Inspired
            </a>
          )}
          {suggestedActivity.tip && (
            <div className="text-cyan-300 text-base font-medium mb-2">💡 {suggestedActivity.tip}</div>
          )}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 justify-center mt-4 w-full">
            <button
              onClick={handleStartActivity}
              className="bg-white text-black font-bold py-2 px-6 sm:px-4 rounded-full shadow-lg hover:bg-white/90 transition duration-300 w-full sm:w-auto"
            >
              Let's Dabble
            </button>
            <button
              onClick={handleDabbleAgain}
              className="bg-black border border-white/20 text-white font-bold py-2 px-6 sm:px-4 rounded-full shadow-lg hover:bg-white/10 transition duration-300 w-full sm:w-auto"
              disabled={loadingSurprise}
            >
              {loadingSurprise ? "Loading..." : "Dabble Again"}
            </button>
            <button
              onClick={handleSurpriseMe}
              className="bg-black border border-white/20 text-white font-bold py-2 px-6 sm:px-4 rounded-full shadow-lg hover:bg-white/10 transition duration-300 w-full sm:w-auto"
              disabled={loadingSurprise}
            >
              {loadingSurprise ? "Loading..." : "Surprise Me!"}
            </button>
          </div>
        </motion.div>
      ) : (
        <div className="text-white/80">No suggestion available.</div>
      )}

      <motion.div
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-10 right-10 sm:right-2 text-7xl sm:text-4xl opacity-10 pointer-events-none"
      >
        ✨
      </motion.div>
    </div>
  );
} 