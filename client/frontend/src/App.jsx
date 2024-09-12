import React, { useState } from 'react';
import Sidebar from './component/Sidebar';
import NewsFeed from './component/NewsFeed';
import Headers from './component/Header';
import Footer from './component/Footer';

const App = () => {
  const [category, setCategory] = useState('general');
  const [country, setCountry] = useState('us');

  const handleSelectCategory = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  const handleSelectCountry = (selectedCountry) => {
    setCountry(selectedCountry);
  };

  return (
    <>
    <Headers/>
       <div className="flex">
      <Sidebar 
        onSelectCategory={handleSelectCategory} 
        onSelectCountry={handleSelectCountry} 
      />
      <div className="flex-grow p-4">
        <NewsFeed category={category} country={country} />
      </div>
    </div>

    <Footer/>
    </>
    
   
  );
};

export default App;
