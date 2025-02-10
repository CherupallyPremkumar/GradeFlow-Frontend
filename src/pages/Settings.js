import React, { useState, useEffect } from 'react';

function Settings() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
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

  useEffect(() => {
    // Apply dark mode class to the body when darkMode is true
    if (darkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('darkMode', 'true'); // Persist setting in localStorage
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('darkMode', 'false'); // Persist setting in localStorage
    }
  }, [darkMode]);

  useEffect(() => {
    // Load the stored darkMode value from localStorage on initial load
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  return (
    <div className={`min-h-screen w-full ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Settings</h2>

        {/* Dark Mode Toggle */}
        <div className="flex justify-between items-center mb-6">
          <label className="text-lg">Dark Mode</label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={handleDarkModeToggle}
            className="w-6 h-6 rounded-full border-gray-600 bg-gray-600 dark:bg-blue-500 cursor-pointer transition-all duration-300"
          />
        </div>

        {/* Email Notifications Toggle */}
        <div className="flex justify-between items-center mb-6">
          <label className="text-lg">Email Notifications</label>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={handleEmailNotificationsToggle}
            className="w-6 h-6 rounded-full border-gray-600 bg-gray-600 dark:bg-blue-500 cursor-pointer transition-all duration-300"
          />
        </div>

        {/* In-App Notifications Toggle */}
        <div className="flex justify-between items-center mb-6">
          <label className="text-lg">In-App Notifications</label>
          <input
            type="checkbox"
            checked={inAppNotifications}
            onChange={handleInAppNotificationsToggle}
            className="w-6 h-6 rounded-full border-gray-600 bg-gray-600 dark:bg-blue-500 cursor-pointer transition-all duration-300"
          />
        </div>

        {/* Privacy Setting */}
        <div className="mt-6">
          <h4 className="text-xl font-semibold mb-2">Privacy</h4>
          <select
            value={privacy}
            onChange={handlePrivacyChange}
            className="p-3 w-full border rounded-lg bg-gray-200 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none transition-all duration-300"
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
            className="p-3 w-full border rounded-lg bg-gray-200 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none transition-all duration-300"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            {/* Add more languages as needed */}
          </select>
        </div>

        {/* Two-Factor Authentication Toggle */}
        <div className="flex justify-between items-center mb-6">
          <label className="text-lg">Two-Factor Authentication</label>
          <input
            type="checkbox"
            checked={twoFactorAuth}
            onChange={handleTwoFactorAuthToggle}
            className="w-6 h-6 rounded-full border-gray-600 bg-gray-600 dark:bg-blue-500 cursor-pointer transition-all duration-300"
          />
        </div>

        {/* Save Button */}
        <div className="mt-6 text-center">
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full text-lg transition-all duration-300"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;