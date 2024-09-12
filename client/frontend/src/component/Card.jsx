import React from 'react';

const Card = ({ article }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img 
        className="w-full h-48 object-cover" 
        src={article.image || 'https://via.placeholder.com/150'} 
        alt={article.title} 
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{article.title}</h2>
        <p className="text-gray-700 mb-4">{article.description}</p>
        <a 
          href={article.image} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default Card;
