import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';  
import Card from './Card';  
import CategorySidebar from './Sidebar'; 

function NewsFeed() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('general');

  useEffect(() => {
    fetchNews();
  }, [selectedCategory]);

  const fetchNews = () => {
    setLoading(true);
    axios.get(`http://localhost:5000/news?category=${selectedCategory}`)
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
    axios.get('http://localhost:5000/search', { params: { q: searchTerm, category: selectedCategory } })
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

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

  return (
    <div className="flex">
      <CategorySidebar onCategorySelect={handleCategorySelect} /> 
      <div className="container mx-auto p-4 flex-1">
        <SearchBar onSearch={handleSearch} />  

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {news.length ? (
            news.map((article, index) => (
              <Card key={index} article={article} /> 
            ))
          ) : (
            <p>No news available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
