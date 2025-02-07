import React from 'react';

function Profile() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold">Candidate Profile</h2>
      <div className="mt-6 flex items-center space-x-6">
        {/* Profile Picture */}
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500">
          <img
            src="https://via.placeholder.com/150" // Replace with dynamic profile picture
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Candidate Details */}
        <div>
          <h3 className="text-2xl font-semibold">John Doe</h3> {/* Replace with dynamic name */}
          <p className="mt-2 text-lg text-gray-600">Software Developer</p>
          <p className="mt-2 text-gray-500">Based in San Francisco, CA</p>
        </div>
      </div>

      {/* Badges */}
      <div className="mt-6 flex space-x-4">
        <div className="bg-green-500 text-white p-3 rounded-full">
          <i className="fab fa-linkedin-in"></i> {/* LinkedIn Badge */}
        </div>
        <div className="bg-gray-800 text-white p-3 rounded-full">
          <i className="fab fa-github"></i> {/* GitHub Badge */}
        </div>
        <div className="bg-blue-500 text-white p-3 rounded-full">
          <i className="fab fa-stack-overflow"></i> {/* StackOverflow Badge */}
        </div>
      </div>

      {/* Overview Section */}
      <div className="mt-6">
        <h4 className="text-xl font-semibold">Overview</h4>
        <p className="mt-2 text-gray-600">
          A highly motivated software developer with a passion for building web applications and solving complex problems.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-6">
        <h4 className="text-xl font-semibold">Skills</h4>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>SQL</li>
          <li>Python</li>
        </ul>
      </div>

      {/* Experience Section */}
      <div className="mt-6">
        <h4 className="text-xl font-semibold">Experience</h4>
        <ul className="mt-2 list-disc pl-5 text-gray-600">
          <li>Software Developer at XYZ Corp (2019 - Present)</li>
          <li>Junior Developer at ABC Ltd (2017 - 2019)</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;