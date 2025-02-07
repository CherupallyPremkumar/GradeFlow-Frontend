import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Navigate after login success
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy check for login credentials (you can replace this with API logic)
    if (email === 'test@example.com' && password === '123') {
      // Store a dummy auth token in localStorage
      localStorage.setItem('authToken', 'dummy-token'); // Replace 'dummy-token' with actual token from your API response

      // Navigate to dashboard after successful login
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h2 className="login-title">Login</h2>

        {/* Error message */}
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="input-field" 
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password" className="input-label">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="input-field" 
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Login
          </button>
        </form>

        <div className="signup-link">
          <p>Don't have an account? <a href="/signup" className="signup-link-text">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;