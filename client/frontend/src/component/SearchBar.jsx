import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import { FiSearch } from 'react-icons/fi'; 
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);


  const fetchSuggestions = useCallback(
    debounce(async (value) => {
      if (value.length > 1) {
        try {
          const response = await axios.get(`/suggestions?q=${value}`);
          setSuggestions(response.data);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
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
    <div className="relative max-w-md mx-auto mb-4">
      <div className="flex items-center w-full">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-l-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search for news"
        />
        <button
          onClick={() => onSearch(searchTerm)}
          className="p-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
        >
          <FiSearch size={20} />
        </button>
      </div>
      {suggestions.length > 0 && (
        <ul className="absolute left-0 bg-white border border-gray-200 mt-1 w-full rounded-lg shadow-lg z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 flex items-center hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelectSuggestion(suggestion)}
            >
              <FiSearch className="mr-2 text-gray-500" />
              <span>{suggestion}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
