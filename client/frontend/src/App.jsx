import React, { useState } from 'react';
import Sidebar from './component/Sidebar/Sidebar';
import NewsFeed from './component/Herosection/NewsFeed';
import Header from './component/Navbar/Header';
import Footer from './component/Footer/Footer';
import Chatbot from './component/Chatbot';
import Slider from './component/Slider'; 

const App = () => {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("us");

  return (
    <>
      <Header />
      <Chatbot />

      {/* Hero Section */}
      <div className="mt-20">
        <Slider />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row p-4 gap-4">
        <aside className="hidden lg:block lg:w-1/4">
          <Sidebar
            onSelectCategory={setCategory}
            onSelectCountry={setCountry}
          />
        </aside>

        <main className="flex-grow lg:w-3/4">
          <NewsFeed category={category} country={country} />
        </main>

        <aside className="lg:hidden md:hidden">
          <Sidebar
            onSelectCategory={setCategory}
            onSelectCountry={setCountry}
          />
        </aside>
      </div>

      <Footer />
    </>
  );
};


export default App;
