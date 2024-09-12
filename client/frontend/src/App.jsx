// src/App.jsx
import React from 'react';
import Header from './component/Header';  // Your existing Header component
import NewsFeed from './component/NewsFeed';

const App = () => {
  

  return (
    <div className="app-container">
      <Header />
      
      {/* <NewsFeed query={query} /> */}
      <NewsFeed/>
    </div>
  );
};

export default App;
