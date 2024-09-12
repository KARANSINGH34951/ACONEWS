import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';  
import SearchBar from './SearchBar';  

const NewsFeed = ({ category }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  const fetchNews = (category) => {
    setLoading(true);
    axios.get(`http://localhost:5000/news?category=${category}`)
      .then(response => {
        setNews(response.data.articles);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching news:", error);
        setError("Failed to load news.");
        setLoading(false);
      });
  };

  const handleSearch = (searchTerm) => {
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
    <div className="p-4">
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.length ? (
          news.map((article, index) => (
            <Card key={index} article={article} />
          ))
        ) : (
          <p>No news available.</p>
        )}
      </div>
    </div>
  );
};

export default NewsFeed;
