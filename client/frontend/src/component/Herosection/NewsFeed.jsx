// NewsFeed.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar';
import NewsGrid from './NewsGrid';
import Pagination from './Pagination';
import ShimmerSearchBar from '../Shimmer/ShimmerSearchBar';

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
    const pageSize = page === 1 ? 6 : 4;

    axios
      .get(`https://aconews-seuh.onrender.com/news`, {
        params: {
          category: category,
          page: page,
          pageSize: pageSize,
          country: country,
        },
      })
      .then((response) => {
        setNews(Array.isArray(response.data.articles) ? response.data.articles : []);
        setTotalArticles(response.data.totalArticles || 0);
        console.log(response.data.totalArticles);

        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
        setError('Failed to load news.');
        setLoading(false);
      });
  };

  const handleSearch = (searchTerm) => {
    setLoading(true);
    axios
      .get('https://aconews-seuh.onrender.com/search', { params: { q: searchTerm } })
      .then((response) => {
        setNews(Array.isArray(response.data.articles) ? response.data.articles : []);
        setLoading(false);
        console.log(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching search news:', error);
        setError('Failed to load search results.');
        setLoading(false);
      });
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const pageSize = currentPage === 1 ? 6 : 4;
  const totalPages = Math.ceil(totalArticles / pageSize);

  return (
    <div className="p-4">
      <SearchBar onSearch={handleSearch} />
      {loading && <ShimmerSearchBar />}
      <NewsGrid news={news} loading={loading} error={error} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default NewsFeed;
