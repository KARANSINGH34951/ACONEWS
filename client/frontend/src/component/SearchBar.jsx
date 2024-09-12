import React, { useState } from 'react';
import axios from 'axios';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex justify-center mb-8">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for news"
        className="p-2 w-full max-w-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
