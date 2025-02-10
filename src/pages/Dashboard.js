import { useEffect, useState } from "react";
import { useDashboardStore } from "../store/useDashboardStore";
import Card from "../components/Card";
import StatsCard from "../components/StatsCard";

function Dashboard() {
  const { platforms, leaderboard, fetchDashboardData, loading, error } = useDashboardStore();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  const filteredPlatforms = platforms.filter(platform =>
    platform.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    platform.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col flex-1 p-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-screen text-white">
      {/* Header with Search */}
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

      {loading && <p className="text-gray-400">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Grid for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {filteredPlatforms.map((platform, index) => (
          <Card
            key={index}
            title={platform.title}
            content={platform.content}
            icon={platform.icon}
            to={platform.to}
            stats={platform.stats}
          />
        ))}
      </div>

      {/* Additional Features Below Cards */}
      <div className="mt-10">
        {/* User Stats Overview */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4">User Statistics Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatsCard title="Total Problems Solved" value="835" color="blue" />
            <StatsCard title="GitHub Repositories" value="45" color="green" />
            <StatsCard title="LinkedIn Connections" value="1,200" color="yellow" />
            <StatsCard title="CodeChef Contests" value="32" color="red" />
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mt-6">
          <h3 className="text-2xl font-bold mb-4">Leaderboard</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="p-2">Rank</th>
                <th className="p-2">Name</th>
                <th className="p-2">Platform</th>
                <th className="p-2">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((user, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="p-2">{index + 1}</td>
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.platform}</td>
                  <td className="p-2 font-bold text-blue-300">{user.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;