import React from 'react';

const Sidebar = ({ onSelectCategory, onSelectCountry }) => {
  const categories = [
    'general', 
    'business', 
    'entertainment', 
    'health', 
    'science', 
    'sports', 
    'technology'
  ];
  const countries = [
    { name: 'United States', code: 'us' },
    { name: 'United Kingdom', code: 'gb' },
    { name: 'Canada', code: 'ca' },
    { name: 'Australia', code: 'au' },
    { name: 'India', code: 'in' }
  ];

  return (
    <div className="w-full sm:w-64 bg-gray-100 p-6 shadow-lg h-full rounded-lg flex flex-col">
     
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Categories</h2>
      <ul className="flex flex-wrap gap-4 mb-6">
        {categories.map((category) => (
          <li
            key={category}
            className="cursor-pointer text-lg font-medium text-gray-700 hover:text-white hover:bg-blue-500 transition-colors duration-300 p-3 rounded-lg flex-1 min-w-[120px] text-center"
            onClick={() => onSelectCategory(category)}
            aria-label={`Select ${category.charAt(0).toUpperCase() + category.slice(1)} category`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </li>
        ))}
      </ul>

      {/* Countries Section */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Countries</h2>
      <ul className="flex flex-wrap gap-4">
        {countries.map((country) => (
          <li
            key={country.code}
            className="cursor-pointer text-lg font-medium text-gray-700 hover:text-white hover:bg-blue-500 transition-colors duration-300 p-3 rounded-lg flex-1 min-w-[120px] text-center"
            onClick={() => onSelectCountry(country.code)}
            aria-label={`Select ${country.name}`}
          >
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
