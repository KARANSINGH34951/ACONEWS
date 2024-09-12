
import React from 'react';

const categories = [
  'general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'
];

const Sidebar = ({ onCategorySelect }) => {
  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map(category => (
          <li key={category}>
            <button
              className="text-blue-500 hover:underline"
              onClick={() => onCategorySelect(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
