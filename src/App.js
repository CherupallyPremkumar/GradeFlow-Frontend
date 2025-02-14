import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect, useState } from 'react';
import Navbar from './layouts/Navbar'; // Assuming Navbar is in the 'layouts' folder
import ErrorBoundary from './components/ErrorBoundary'; // Error boundary to handle rendering errors
import { useAuth } from './hooks/useAuth';
import LandingPage from './pages/LandingPage';
import Explore from './pages/Explore';
import ProfileSetup from './pages/ProfileSetup';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));
const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));

function App() {
  const { isAuthenticated } = useAuth(); // Check if user is authenticated
  const location = useLocation(); // Get the current route
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true'); // Retrieve dark mode setting from localStorage

  useEffect(() => {
    // Apply dark mode globally
    if (darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true'); // Persist dark mode setting
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'false'); // Persist light mode setting
    }
  }, [darkMode]);

  useEffect(() => {
    setLoading(false); // Set loading to false after initial setup
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading until the app is ready
  }

  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar/Navbar */}
      {location.pathname !== '/' && location.pathname !== '/signup' && location.pathname !== '/login' && location.pathname !== '/profile-setup' && (
        <div className="w-64">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 bg-white min-h-screen">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile-setup" element={<ProfileSetup />} />
            <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
            <Route path="/explore" element={isAuthenticated ? <Explore /> : <Navigate to="/" />} />
            <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/" />} />
            <Route path="/settings" element={isAuthenticated ? <Settings darkMode={darkMode} setDarkMode={setDarkMode} /> : <Navigate to="/" />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default function RootApp() {
  return (
    <Router>  {/* Ensure the Router wraps the entire App */}
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Router>
  );
}