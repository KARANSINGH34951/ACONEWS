import React from 'react';

const Sidebar = ({ onSelectCategory, onSelectCountry }) => {
  const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];
  const countries = [
    { name: 'United States', code: 'us' },
    { name: 'United Kingdom', code: 'gb' },
    { name: 'Canada', code: 'ca' },
    { name: 'Australia', code: 'au' },
    { name: 'India', code: 'in' },
  ];

  return (
    <div className="w-64 bg-gray-100 p-6 shadow-lg h-full rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Categories</h2>
      <ul className="space-y-4 mb-6">
        {categories.map(category => (
          <li
            key={category}
            className="cursor-pointer text-lg font-medium text-gray-700 hover:text-white hover:bg-blue-500 transition-colors duration-300 p-2 rounded-lg"
            onClick={() => onSelectCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Countries</h2>
      <ul className="space-y-4">
        {countries.map(country => (
          <li
            key={country.code}
            className="cursor-pointer text-lg font-medium text-gray-700 hover:text-white hover:bg-blue-500 transition-colors duration-300 p-2 rounded-lg"
            onClick={() => onSelectCountry(country.code)}
          >
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
