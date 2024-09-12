import React, { useState } from 'react';
import Sidebar from './component/Sidebar';
import NewsFeed from './component/NewsFeed';
import Header from './component/Header';  // Assuming you have a Header component

const App = () => {
  const [category, setCategory] = useState('general');

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  return (
    <div className="flex flex-col h-screen">
      
      <Header />

      
      <div className="flex flex-1">
        
        <Sidebar onSelectCategory={handleCategorySelect} />

        
        <div className="flex-1 p-6 bg-gray-50">
          <NewsFeed category={category} />
        </div>
      </div>
    </div>
  );
};

export default App;
