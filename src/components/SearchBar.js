import React, { useState } from 'react';
import { useSearchStore } from '../store/searchStore';
import { debounce } from 'lodash';

const SearchBar = () => {
  const { setSearchQuery } = useSearchStore();
  const [input, setInput] = useState('');

  // Debounce search input for better performance
  const handleSearch = debounce((query) => {
    setSearchQuery(query);
  }, 300); // 300ms delay

  const onChange = (e) => {
    setInput(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search candidates..."
      value={input}
      onChange={onChange}
      className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
    />
  );
};

export default SearchBar;