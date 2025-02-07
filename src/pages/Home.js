// src/pages/Home.js
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to GradeFlow</h1>
      <Button text="Get Started" onClick={() => alert('Let\'s get started!')} />
    </div>
  );
};

export default Home;