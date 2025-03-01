import { useState } from "react";

function Card({ title, content, icon, stats }) {
  const [expanded, setExpanded] = useState(false); // Track if the card is expanded

  // Function to render stars dynamically
  const renderStars = (rating) => {
    const starsCount = Math.min(Math.floor(rating / 500), 7); // Max 7 stars
    return Array(starsCount || 1).fill("⭐").join(""); // At least 1 star
  };

  return (
    <div className="w-full">
      {/* Normal Card */}
      <div
        className={`block bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer ${
          expanded ? "mb-6" : ""
        }`}
        onClick={() => setExpanded(!expanded)} // Toggle expanded state
        aria-expanded={expanded} 
        aria-controls="expanded-content" 
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <span className="text-3xl text-gray-300">{icon}</span>
        </div>
        <p className="text-gray-400 text-sm mt-2">{content}</p>

        {/* Stats */}
        {stats && (
          <div className="mt-4">
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden relative">
              {stats.easy !== undefined && (
                <div
                  className="h-full bg-green-400 absolute left-0"
                  style={{ width: `${(stats.easy / stats.total) * 100}%` }}
                ></div>
              )}
              {stats.medium !== undefined && (
                <div
                  className="h-full bg-yellow-500 absolute left-0"
                  style={{ width: `${(stats.medium / stats.total) * 100}%` }}
                ></div>
              )}
              {stats.hard !== undefined && (
                <div
                  className="h-full bg-red-500 absolute left-0"
                  style={{ width: `${(stats.hard / stats.total) * 100}%` }}
                ></div>
              )}
            </div>
            {/* Labels */}
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              {stats.easy !== undefined && <span className="text-green-400">Easy: {stats.easy}</span>}
              {stats.medium !== undefined && <span className="text-yellow-500">Medium: {stats.medium}</span>}
              {stats.hard !== undefined && <span className="text-red-500">Hard: {stats.hard}</span>}
              {stats.repos !== undefined && <span className="text-blue-400">Repos: {stats.repos}</span>}
              {stats.followers !== undefined && <span className="text-purple-400">Followers: {stats.followers}</span>}
              {stats.connections !== undefined && <span className="text-cyan-400">Connections: {stats.connections}</span>}
              {stats.rating !== undefined && (
                <span className="text-yellow-400">{renderStars(stats.rating)}</span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Expanded Content - Pushes Leaderboard Down */}
      {expanded && (
        <div
          id="expanded-content"
          className="bg-gray-900 p-6 rounded-xl shadow-lg mt-4"
        >
          <h3 className="text-2xl font-bold text-white">{title} - Details</h3>
          <p className="text-gray-300 mt-2">{stats.details || "No additional details available."}</p>
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            onClick={() => setExpanded(false)}
            aria-label="Close details"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Card;