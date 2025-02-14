import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState({
    leetcode: "",
    hackerrank: "",
    github: "",
    linkedin: "",
    tuf: "",
    gfg: "",
    codeforces: "",
    codechef: "",
  });
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setProfiles({ ...profiles, [e.target.name]: e.target.value.trim() });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // List of required fields
    const requiredFields = ["leetcode", "hackerrank", "github", "linkedin"];
    
    // Validate required fields
    for (const field of requiredFields) {
      if (!profiles[field]) {
        setError(`Please enter your ${field} username.`);
        return;
      }
    }

    try {
      // Send data to backend
      await axios.post("http://localhost:8000/save-profiles", profiles);

      // Redirect to dashboard after successful submission
      navigate("/dashboard");
    } catch (err) {
      setError("Failed to save profiles. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-black">
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl shadow-lg w-96 border border-gray-600">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Complete Your <span className="text-blue-400">Profile</span>
        </h2>

        {/* Error message */}
        {error && <div className="text-red-400 text-sm mb-4 text-center">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Required Fields */}
          {["leetcode", "hackerrank", "github", "linkedin"].map((platform) => (
            <div key={platform}>
              <label className="block text-gray-300 text-sm mb-1 capitalize">{platform} Username *</label>
              <input
                type="text"
                name={platform}
                value={profiles[platform]}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-transparent border border-gray-500 text-white rounded-lg outline-none focus:ring-2 focus:ring-red-400 transition"
                required
              />
            </div>
          ))}

          {/* Optional Fields */}
          {["tuf", "gfg", "codeforces", "codechef"].map((platform) => (
            <div key={platform}>
              <label className="block text-gray-300 text-sm mb-1 capitalize">{platform} Username (Optional)</label>
              <input
                type="text"
                name={platform}
                value={profiles[platform]}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-transparent border border-gray-500 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-2 mt-2 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
          >
            Save & Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetup;