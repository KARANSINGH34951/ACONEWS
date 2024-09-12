import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NewsFeed() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/news')
      .then(response => {
        setNews(response.data.articles);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching news:", error);
        setError("Failed to load news.");
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    setLoading(true);
    axios.get('http://localhost:5000/search', { params: { q: searchTerm } })
      .then(response => {
        setNews(response.data.articles);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching search news:", error);
        setError("Failed to load search results.");
        setLoading(false);
      });
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for news"
        className="p-2 border border-gray-300 rounded"
      />
      <button onClick={handleSearch} className="ml-2 bg-blue-500 text-white p-2 rounded">Search</button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((article, index) => (
          <div key={index} className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={article.image || 'https://via.placeholder.com/150'} alt={article.title} />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-700 mb-4">{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsFeed;
