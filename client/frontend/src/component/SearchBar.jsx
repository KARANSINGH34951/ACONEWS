import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import { Search } from 'lucide-react'; // Modern icon

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = useCallback(
    debounce(async (value) => {
      if (value.length > 1) {
        try {
          const response = await axios.get(`https://aconews-seuh.onrender.com/suggestions?q=${value}`);
          setSuggestions(response.data);
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      } else {
        setSuggestions([]);
      }
    }, 300),
    []
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    fetchSuggestions(value);
  };

  const handleSelectSuggestion = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    onSearch(suggestion);
  };

  return (
    <div className="relative max-w-lg mx-auto mt-6 mb-6 w-full">
      {/* Search input */}
      <div className="flex items-center bg-white border border-gray-300 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-blue-500 overflow-hidden">
        <span className="pl-3 text-gray-400">
          <Search size={20} />
        </span>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          className="p-3 w-full outline-none"
          placeholder="Search for news..."
        />
        <button
          onClick={() => onSearch(searchTerm)}
          className="px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium transition"
        >
          Search
        </button>
      </div>

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <ul className="absolute w-full bg-white border border-gray-200 rounded-xl shadow-lg mt-2 z-10 overflow-hidden">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition-colors"
              onClick={() => handleSelectSuggestion(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
