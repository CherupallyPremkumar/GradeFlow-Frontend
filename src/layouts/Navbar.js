import { Link, useNavigate } from 'react-router-dom';
import profilePic from '../assets/35FB2CC7-E2A5-410A-8392-34EDBCE37180_1_105_c.jpeg';
function Navbar() {
  const navigate = useNavigate();

  const user = {
    name: "John Doe",
    profilePic: profilePic, // Public folder path
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white w-64 py-4 px-6 flex flex-col justify-between h-screen">
        <div>
          {/* Logo */}
          <div className="text-xl font-bold mb-6">GradeFlow</div>

          {/* Navigation Links */}
          <nav>
            <ul>
              <li className="mb-4">
                <Link to="/dashboard" className="hover:text-gray-400 text-lg">
                  Dashboard
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/settings" className="hover:text-gray-400 text-lg">
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Clickable Profile Section */}
        <div 
          className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition"
          onClick={() => navigate('/profile')}
        >
          <img 
            src={user.profilePic} 
            alt="Profile" 
            className="w-10 h-10 rounded-full border border-gray-400 object-cover" 
          />
          <span className="text-lg font-medium truncate">{user.name}</span>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 bg-gray-100">
        {/* Page content goes here */}
      </main>
    </div>
  );
}

export default Navbar;