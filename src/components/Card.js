import { Link } from 'react-router-dom';

function Card({ title, content, icon, to }) {
  return (
    <Link to={to} className="block">
      <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 w-full sm:max-w-md md:max-w-xl lg:max-w-2xl">
        <div className="flex items-center space-x-6"> {/* Increased space between icon and title */}
          <div className="bg-blue-500 text-white p-5 rounded-full">
            {icon}
          </div>
          <div className="flex-grow">
            <h3 className="text-2xl font-semibold">{title}</h3> {/* Increased font size */}
            <p className="mt-2 text-gray-600 text-sm">{content}</p> {/* Smaller text content */}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;