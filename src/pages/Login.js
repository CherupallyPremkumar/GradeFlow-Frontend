import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);  // Keep track of loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Form validation
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    setLoading(true);  // Set loading state to true when login starts
    setError(''); // Clear previous errors

    try {
      // Send credentials to the backend
      const response = await fetch('http://localhost:8000/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'username': email,
          'password': password,
        }).toString(),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful, navigate to the dashboard
        console.log(data)
        localStorage.setItem("authToken",data.message)
        navigate('/dashboard');
      } else {
        setError(data.detail || 'Invalid email or password');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while trying to log in.');
    } finally {
      setLoading(false);  // Set loading state back to false after login is complete
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-black">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-96 border border-gray-600">
        <h2 className="text-3xl font-semibold text-center text-white">Login</h2>
        <p className="text-gray-300 text-center mb-6">Sign in to continue</p>

        {error && <div className="text-red-400 text-center mb-4">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300 disabled:opacity-50"
            disabled={loading}  // Disable the button while loading
          >
            {loading ? 'Logging In...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-300">
            Don't have an account? 
            <button onClick={() => navigate('/signup')} className="text-blue-400 hover:text-blue-500 ml-1">
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;