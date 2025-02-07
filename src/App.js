import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect, useState } from 'react';
import Navbar from './layouts/Navbar'; // Assuming Navbar is in the 'layouts' folder
 // Custom hook to handle authentication
import ErrorBoundary from './components/ErrorBoundary'; // Error boundary to handle rendering errors
import { useAuth } from './hooks/useAuth';

// Lazy load pages
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));
const Login = lazy(() => import('./pages/Login'));

function App() {
  const { isAuthenticated } = useAuth(); // Check if user is authenticated
  const location = useLocation(); // Get the current route
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading state to false after initial check
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading until the app is ready
  }

  return (
    <div className="flex">
      {/* Conditionally render Navbar based on the current route */}
      {location.pathname !== '/' && <Navbar />}
      
      <div className="flex-1 p-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Public Route */}
            <Route path="/" element={<Login />} />
            
            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
            />
            <Route
              path="/profile"
              element={isAuthenticated ? <Profile /> : <Navigate to="/" />}
            />
            <Route
              path="/settings"
              element={isAuthenticated ? <Settings /> : <Navigate to="/" />}
            />
            
            {/* Catch-all Route for 404 */}
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