function StatsCard({ title, value, color }) {
    const colorClasses = {
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      yellow: 'bg-yellow-500',
      red: 'bg-red-500',
    };
  
    return (
      <div className={`bg-gradient-to-br ${colorClasses[color] || 'bg-gray-800'} p-5 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:shadow-xl`}>
        <h4 className="text-xl font-semibold text-white">{title}</h4>
        <p className="text-2xl font-bold text-white mt-2">{value}</p>
      </div>
    );
  }
  
  export default StatsCard;