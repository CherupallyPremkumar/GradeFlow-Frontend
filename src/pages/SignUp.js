import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUp.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Here, you can integrate an API call to register the user
    localStorage.setItem('authToken', 'dummy-signup-token');

    // Redirect to dashboard after sign up
    navigate('/dashboard');
  };

  return (
    <div className="signup-page">
      <div className="signup-form">
        <h2 className="signup-title">Sign Up</h2>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSignUp}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
              type="password" 
              id="confirmPassword" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </form>

        <div className="login-link">
          <p>Already have an account? <a href="/" className="login-link-text">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;