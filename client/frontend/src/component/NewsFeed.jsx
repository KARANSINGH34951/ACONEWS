import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';  
import SearchBar from './SearchBar';  
import ShimmerCard from './ShimmerCard';  
import ShimmerSearchBar from './ShimmerSearchBar';  // Import the ShimmerSearchBar component
import ErrorComponent from './ErrorComponent'; // Import the ErrorComponent

const NewsFeed = ({ category, country }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);

  useEffect(() => {
    fetchNews(category, country, currentPage);
  }, [category, country, currentPage]);

  const fetchNews = (category, country, page) => {
    setLoading(true);

    const pageSize = page === 1 ? 6 : 4; // 6 articles on page 1, 4 articles on page 2

    axios.get(`http://localhost:5000/news`, {
      params: {
        category: category,
        page: page,
        pageSize: pageSize,
        country: country
      }
    })
      .then(response => {
        setNews(response.data.articles);
        setTotalArticles(response.data.totalArticles);
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
    axios.get('/search', { params: { q: searchTerm } })
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

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const pageSize = currentPage === 1 ? 6 : 4;
  const totalPages = Math.ceil(totalArticles / pageSize);

  if (loading) {
    return (
      <div className="p-4">
        <ShimmerSearchBar />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <ErrorComponent />;
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
      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-l-lg"
        >
          Previous
        </button>
        <span className="px-4 py-2 border-t border-b border-blue-500">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NewsFeed;
