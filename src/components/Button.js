// src/components/Button.js
const Button = ({ text, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {text}
      </button>
    );
  };
  
  export default Button;