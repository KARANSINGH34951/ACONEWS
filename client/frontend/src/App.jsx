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
      <Headers />
      {/* <HeadlineSlider /> */}
      <div className="flex flex-col lg:flex-row mt-20">
       
        <div className="hidden lg:block lg:w-1/4 lg:pr-4">
          <Sidebar 
            onSelectCategory={handleSelectCategory} 
            onSelectCountry={handleSelectCountry} 
          />
        </div>

        
        <div className="flex-grow p-4 lg:w-3/4">
          <NewsFeed category={category} country={country} />
        </div>

       
        <div className="lg:hidden">
          <Sidebar 
            onSelectCategory={handleSelectCategory} 
            onSelectCountry={handleSelectCountry} 
          />
        </div>
      </div>
      {/* <PopupNotification /> */}
      <Footer />
    </>
  );
};

export default App;
