import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6 text-center">
      {/* Hero Section */}
      <div className="max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">Welcome to GradeFlow</h1>
        <p className="text-lg text-gray-300 mb-6">
          The all-in-one platform for candidates, recruiters, and companies to streamline job applications and hiring processes.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg">Login</Link>
          <Link to="/signup" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg">Sign Up</Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid md:grid-cols-3 gap-6 text-center max-w-4xl">
        <div className="p-6 bg-gray-800 rounded-lg">
          <h3 className="text-2xl font-semibold">For Candidates</h3>
          <p className="text-gray-400 mt-2">Optimize your resume, track job applications, and get hired faster.</p>
          <Link to="/signup" className="text-blue-400 mt-3 block">Join as Candidate →</Link>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg">
          <h3 className="text-2xl font-semibold">For Recruiters</h3>
          <p className="text-gray-400 mt-2">Find top talent and streamline your hiring process with AI-powered insights.</p>
          <Link to="/signup" className="text-blue-400 mt-3 block">Join as Recruiter →</Link>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg">
          <h3 className="text-2xl font-semibold">For Companies</h3>
          <p className="text-gray-400 mt-2">Manage your hiring pipeline and collaborate with recruiters efficiently.</p>
          <Link to="/signup" className="text-blue-400 mt-3 block">Join as Company →</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
