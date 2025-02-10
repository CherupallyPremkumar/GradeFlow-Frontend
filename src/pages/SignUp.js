import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Prepare data in application/x-www-form-urlencoded format
      const data = new URLSearchParams();
      data.append('username', email);
      data.append('password', password);

      // Make API call to register the user
      const response = await axios.post('https://localhost:8000/register', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.status === 200) {
        // Redirect to login page on successful registration
        navigate('/login');
      }
    } catch (err) {
      // Handle error if the API call fails
      if (err.response && err.response.data) {
        setError(err.response.data.detail || 'An error occurred');
      } else {
        setError('An error occurred');
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md shadow-lg rounded-2xl p-8 border border-white/20">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Join <span className="text-blue-400">GradeFlow</span>
        </h2>

        {/* Error message */}
        {error && <div className="text-red-400 text-sm mb-4 text-center">{error}</div>}

        {/* Sign-up form */}
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block text-gray-300 text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-transparent border border-gray-500 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-transparent border border-gray-500 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 bg-transparent border border-gray-500 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-2 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
          >
            Sign Up
          </button>
        </form>

        {/* Link to login page */}
        <div className="text-center text-gray-400 text-sm mt-4">
          Already have an account? 
          <Link to="/login" className="text-blue-400 hover:text-blue-500 transition ml-1">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;