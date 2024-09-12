import React, { useState } from 'react';
import Sidebar from '../component/Sidebar';  // Import the Sidebar component
import NewsFeed from '../component/NewsFeed'; // Import the NewsFeed component
import SearchBar from '../component/SearchBar'; // Import the SearchBar component

function HeroSection() {
  const [category, setCategory] = useState(''); // State for selected category
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  const handleCategoryClick = (category) => {
    setCategory(category);  // Update the selected category
  };

  const handleSearch = (term) => {
    setSearchTerm(term); // Update the search term
  };

  return (
    <div className="container mx-auto p-4">
      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Main Content Layout */}
      <div className="grid grid-cols-12 gap-4">
        {/* Sidebar (Left) */}
        <Sidebar onCategoryClick={handleCategoryClick} />

        {/* News Feed (Center) */}
        <div className="col-span-12 lg:col-span-9">
          <NewsFeed category={category} searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
