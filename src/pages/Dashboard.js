import { useState } from 'react';
import Card from '../components/Card'; // Ensure the path to Card component is correct

const platforms = [
  { title: "LeetCode", content: "Competitive coding and DSA practice.", icon: <i className="fas fa-code"></i>, to: "/leetcode" },
  { title: "GitHub", content: "Version control and open-source contributions.", icon: <i className="fab fa-github"></i>, to: "/github" },
  { title: "LinkedIn", content: "Professional networking and job opportunities.", icon: <i className="fab fa-linkedin"></i>, to: "/linkedin" },
  { title: "HackerRank", content: "Coding challenges and skill assessments.", icon: <i className="fas fa-laptop-code"></i>, to: "/hackerrank" },
  { title: "CodeChef", content: "Competitive programming contests.", icon: <i className="fas fa-utensils"></i>, to: "/codechef" },
  { title: "CodeForces", content: "Algorithmic contests and problem-solving.", icon: <i className="fas fa-bolt"></i>, to: "/codeforces" },
  { title: "GFG", content: "DSA tutorials and coding problems.", icon: <i className="fas fa-book"></i>, to: "/gfg" },
];

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPlatforms = platforms.filter(platform =>
    platform.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search platform..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
      />

      {/* Grid for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredPlatforms.map((platform, index) => (
          <Card
            key={index}
            title={platform.title}
            content={platform.content}
            icon={platform.icon}
            to={platform.to}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;