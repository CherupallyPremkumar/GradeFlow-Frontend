import React, { useState } from 'react';

function Settings() {
  const [email, setEmail] = useState('example@example.com');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSave = () => {
    // Logic for saving settings (e.g., API calls)
    console.log('Settings saved!');
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold">Settings</h2>

      {/* Email Section */}
      <div className="mt-6">
        <h4 className="text-xl font-semibold">Email</h4>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="mt-2 p-2 w-full border rounded"
        />
      </div>

      {/* Password Section */}
      <div className="mt-6">
        <h4 className="text-xl font-semibold">Password</h4>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className="mt-2 p-2 w-full border rounded"
        />
      </div>

      {/* Save Button */}
      <div className="mt-6">
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white p-3 rounded-full"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Settings;