import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email === 'test@example.com' && password === '123') {
      localStorage.setItem('authToken', 'dummy-token');
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
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

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300">
            Sign In
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