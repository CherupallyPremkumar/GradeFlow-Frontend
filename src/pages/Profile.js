import React, { useState, useEffect } from 'react';
import profilePic from '../assets/35FB2CC7-E2A5-410A-8392-34EDBCE37180_1_105_c.jpeg';
function Profile() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dummy API call to simulate fetching profile data
    const fetchProfileData = async () => {
      try {
        // Replace this with your actual API endpoint
        const response = await fetch('/api/profile'); // This URL will be updated when you integrate real API
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  // Dummy profile data in case the API call fails or is not yet available
  const dummyProfileData = {
    name: 'John Doe',
    jobTitle: 'Software Developer',
    location: 'San Francisco, CA',
    profilePicture: profilePic,
    overview: 'A highly motivated software developer with a passion for building web applications and solving complex problems.',
    skills: ['JavaScript', 'React', 'Node.js', 'SQL', 'Python'],
    experience: [
      'Software Developer at XYZ Corp (2019 - Present)',
      'Junior Developer at ABC Ltd (2017 - 2019)',
    ]
  };

  const profile = profileData || dummyProfileData;

  return (
    <div className="flex flex-col flex-1 p-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-screen text-white">
      <h2 className="text-3xl font-bold mb-6">Candidate Profile</h2>

      {loading ? (
        <div className="text-center mt-6 text-gray-400">Loading...</div>
      ) : (
        <>
          {/* Profile Header */}
          <div className="flex items-center space-x-6 mb-6">
            {/* Profile Picture */}
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500">
              <img
                src={profile.profilePicture}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Candidate Details */}
            <div>
              <h3 className="text-2xl font-semibold">{profile.name}</h3>
              <p className="mt-2 text-lg">{profile.jobTitle}</p>
              <p className="mt-2 text-gray-400">Based in {profile.location}</p>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
            <h4 className="text-xl font-semibold">Overview</h4>
            <p className="mt-2 text-gray-400">{profile.overview}</p>
          </div>

          {/* Skills Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
            <h4 className="text-xl font-semibold">Skills</h4>
            <ul className="mt-2 list-disc pl-5 text-gray-400">
              {profile.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Experience Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
            <h4 className="text-xl font-semibold">Experience</h4>
            <ul className="mt-2 list-disc pl-5 text-gray-400">
              {profile.experience.map((exp, index) => (
                <li key={index}>{exp}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;