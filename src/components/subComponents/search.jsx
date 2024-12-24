import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Search({ setResult }) {
  const [input, setInput] = useState('');

  const fetchData = (value) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        const result = json.filter((user) =>
          user.name?.toLowerCase().includes(value.toLowerCase())
        );
        setResult(result);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg py-2 mt-8 w-full max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Search Your Favorite Tutor"
        className="flex-1 p-3 text-gray-700 outline-none rounded-l-lg"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button
        className="bg-orange-500 text-white px-6 py-3 rounded-r-lg hover:bg-orange-600 transition duration-200 flex items-center gap-2"
      >
        <FaSearch className="text-white" />
        Search
      </button>
    </div>
  );
}
