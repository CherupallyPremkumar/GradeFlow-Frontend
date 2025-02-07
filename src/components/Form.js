// src/components/Form.js
import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, grade });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        className="border p-2 w-full"
      />
      <input
        type="number"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        placeholder="Enter grade"
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">
        Submit
      </button>
    </form>
  );
};

export default Form;