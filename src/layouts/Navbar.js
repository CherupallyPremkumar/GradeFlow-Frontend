import { Link, useNavigate } from "react-router-dom";
import { Menu, Home, Settings} from "lucide-react"; // Importing icons
import { useState } from "react";
import profilePic from '../assets/35FB2CC7-E2A5-410A-8392-34EDBCE37180_1_105_c.jpeg';


function Navbar() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const user = {
    name: "John Doe",
    profilePic: profilePic,
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white ${
          isSidebarOpen ? "w-64" : "w-20"
        } py-4 px-6 flex flex-col justify-between h-screen transition-all duration-300`}
      >
        <div>
          {/* Sidebar Toggle Button */}
          <button
            className="text-white mb-6 focus:outline-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <div className="text-2xl font-bold mb-6 text-center"> 
            {isSidebarOpen ? "GradeFlow" : "GF"}
          </div>

          {/* Navigation Links */}
          <nav>
            <ul>
              <li className="mb-4">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
                >
                  <Home className="w-5 h-5" />
                  {isSidebarOpen && <span className="text-lg">Dashboard</span>}
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="/settings"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
                >
                  <Settings className="w-5 h-5" />
                  {isSidebarOpen && <span className="text-lg">Settings</span>}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Clickable Profile Section */}
        <div
          className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition"
          onClick={() => navigate("/profile")}
        >
          <img
            src={user.profilePic}
            alt="Profile"
            className="w-10 h-10 rounded-full border border-gray-400 object-cover"
          />
          {isSidebarOpen && (
            <span className="text-lg font-medium truncate">{user.name}</span>
          )}
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