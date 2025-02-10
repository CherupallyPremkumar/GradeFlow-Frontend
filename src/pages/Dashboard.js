import { useState } from 'react';
import Card from '../components/Card'; // Ensure correct path
const platforms = [
  { 
    title: "LeetCode", 
    content: "Competitive coding and DSA practice.", 
    icon: <i className="fas fa-code"></i>, 
    to: "/leetcode",
    stats: { easy: 120, medium: 80, hard: 30, total: 230 } // Solved problems
  },
  { title: "GitHub", content: "Version control and open-source contributions.", icon: <i className="fab fa-github"></i>, to: "/github" },
  { title: "LinkedIn", content: "Professional networking and job opportunities.", icon: <i className="fab fa-linkedin"></i>, to: "/linkedin" },
  { title: "HackerRank", content: "Coding challenges and skill assessments.", icon: <i className="fas fa-laptop-code"></i>, to: "/hackerrank" },
  { title: "CodeChef", content: "Competitive programming contests.", icon: <i className="fas fa-utensils"></i>, to: "/codechef" },
  { title: "CodeForces", content: "Algorithmic contests and problem-solving.", icon: <i className="fas fa-bolt"></i>, to: "/codeforces" },
  { title: "GFG", content: "DSA tutorials and coding problems.", icon: <i className="fas fa-book"></i>, to: "/gfg" },
  { title: "TUF+", content: "DSA tutorials and coding problems.", icon: <i className="fas fa-tuf"></i>, to: "/tuf" },
];
function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPlatforms = platforms.filter(platform =>
    platform.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col flex-1 p-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-screen text-white">
      {/* Header with Search Bar */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">Dashboard</h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-3 border border-gray-600 rounded-lg w-72 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Grid for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredPlatforms.map((platform, index) => (
          <Card
            key={index}
            title={platform.title}
            content={platform.content}
            icon={platform.icon}
            to={platform.to}
            stats={platform.stats} // Pass stats data
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;