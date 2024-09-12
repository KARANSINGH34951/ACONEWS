import React from 'react';

const Sidebar = ({ onSelectCategory }) => {
  const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

  return (
    <div className="w-64 bg-gray-100 p-6 shadow-lg h-full rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Categories</h2>
      <ul className="space-y-4">
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

      <div>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum facilis, ullam blanditiis placeat commodi ex quaerat aspernatur doloribus provident deserunt impedit explicabo sunt, praesentium aut cumque nisi, dignissimos quos delectus veniam officiis! Aspernatur, quam voluptatum. Quas amet voluptates optio eveniet ratione assumenda incidunt distinctio in accusantium doloremque non, recusandae ad! Dignissimos neque, numquam, ut impedit quo ex, tempora perspiciatis nam inventore hic harum in officia cumque ipsa culpa error incidunt? Laboriosam perferendis ex autem voluptas exercitationem blanditiis sit.</h2>
      </div>
    </div>
  );
};

export default Sidebar;
