import React, { useState } from 'react';

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [inAppNotifications, setInAppNotifications] = useState(true);
  const [privacy, setPrivacy] = useState('public');
  const [language, setLanguage] = useState('English');
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const handleDarkModeToggle = () => setDarkMode(!darkMode);
  const handleEmailNotificationsToggle = () => setEmailNotifications(!emailNotifications);
  const handleInAppNotificationsToggle = () => setInAppNotifications(!inAppNotifications);
  const handlePrivacyChange = (e) => setPrivacy(e.target.value);
  const handleLanguageChange = (e) => setLanguage(e.target.value);
  const handleTwoFactorAuthToggle = () => setTwoFactorAuth(!twoFactorAuth);

  const handleSave = () => {
    // Logic for saving settings (e.g., API calls)
    console.log('Settings saved!');
  };

  return (
    <div className={`container mx-auto p-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen`}>
      <h2 className="text-3xl font-bold mb-6">Settings</h2>

      {/* Dark Mode Toggle */}
      <div className="flex items-center mb-6">
        <label className="text-lg mr-4">Dark Mode</label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={handleDarkModeToggle}
          className="w-6 h-6 rounded-lg cursor-pointer transition-colors"
        />
      </div>

      {/* Email Notifications Toggle */}
      <div className="flex items-center mb-6">
        <label className="text-lg mr-4">Email Notifications</label>
        <input
          type="checkbox"
          checked={emailNotifications}
          onChange={handleEmailNotificationsToggle}
          className="w-6 h-6 rounded-lg cursor-pointer transition-colors"
        />
      </div>

      {/* In-App Notifications Toggle */}
      <div className="flex items-center mb-6">
        <label className="text-lg mr-4">In-App Notifications</label>
        <input
          type="checkbox"
          checked={inAppNotifications}
          onChange={handleInAppNotificationsToggle}
          className="w-6 h-6 rounded-lg cursor-pointer transition-colors"
        />
      </div>

      {/* Privacy Setting */}
      <div className="mt-6">
        <h4 className="text-xl font-semibold mb-2">Privacy</h4>
        <select
          value={privacy}
          onChange={handlePrivacyChange}
          className="p-3 w-full border rounded-lg bg-gray-200 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none"
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
      </div>

      {/* Language Setting */}
      <div className="mt-6">
        <h4 className="text-xl font-semibold mb-2">Language</h4>
        <select
          value={language}
          onChange={handleLanguageChange}
          className="p-3 w-full border rounded-lg bg-gray-200 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none"
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          {/* Add more languages as needed */}
        </select>
      </div>

      {/* Two-Factor Authentication Toggle */}
      <div className="flex items-center mb-6">
        <label className="text-lg mr-4">Two-Factor Authentication</label>
        <input
          type="checkbox"
          checked={twoFactorAuth}
          onChange={handleTwoFactorAuthToggle}
          className="w-6 h-6 rounded-lg cursor-pointer transition-colors"
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