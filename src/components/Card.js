import { Link } from 'react-router-dom';

function Card({ title, content, icon, to, stats }) {
  return (
    <Link to={to} className="block bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <span className="text-3xl text-gray-300">{icon}</span>
      </div>
      <p className="text-gray-400 text-sm mt-2">{content}</p>

      {/* Progress Bar for LeetCode */}
      {stats && (
        <div className="mt-4">
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-400"
              style={{ width: `${(stats.easy / stats.total) * 100}%` }}
            ></div>
            <div
              className="h-full bg-yellow-500"
              style={{ width: `${(stats.medium / stats.total) * 100}%` }}
            ></div>
            <div
              className="h-full bg-red-500"
              style={{ width: `${(stats.hard / stats.total) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span className="text-green-400">Easy: {stats.easy}</span>
            <span className="text-yellow-500">Medium: {stats.medium}</span>
            <span className="text-red-500">Hard: {stats.hard}</span>
          </div>
        </div>
      )}
    </Link>
  );
}

export default Card;