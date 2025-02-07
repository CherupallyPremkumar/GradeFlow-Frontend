import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 py-4 px-6">
        {/* Logo */}
        <div className="text-xl font-bold mb-4">GradeFlow</div>

        {/* Navigation Links */}
        <ul>
          <li className="mb-4">
            <Link to="/dashboard" className="hover:text-gray-400 text-lg">
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/profile" className="hover:text-gray-400 text-lg">
              Profile
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/settings" className="hover:text-gray-400 text-lg">
              Settings
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-gray-110">
        {/* Your content goes here */}
      </div>
    </div>
  );
}

export default Navbar;