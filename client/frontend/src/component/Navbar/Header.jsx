// Header.jsx
import React, { useState } from 'react';
import WeatherInfo from './WeatherInfo';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 fixed top-0 left-0 w-full z-10 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center justify-between w-full md:w-auto">
        <img
          src="https://basicsandmorefundraising.com/wp-content/uploads/2017/10/NonprofitNewsletterBlurbGraphic.png"
          alt="Logo"
          className="h-8 w-8 md:h-12 md:w-12"
        />
        <span className="text-lg font-bold hidden md:block ml-4">ACO NEWS</span>
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fas fa-${menuOpen ? 'times' : 'bars'} text-2xl`}></i>
        </button>
      </div>
      <nav
        className={`md:flex md:items-center md:space-x-4 ${menuOpen ? 'block' : 'hidden'} md:block`}
      >
        <div
          className={`flex flex-col md:flex-row md:items-center md:space-x-4 ${menuOpen ? 'flex' : 'hidden'} md:flex`}
        >
          <div className="flex sm:hidden flex-col items-center space-y-4 md:hidden">
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm md:text-base">
              Sign In
            </div>
            <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-sm md:text-base">
              Sign Up
            </div>
          </div>
          
          <WeatherInfo />
        </div>
      </nav>
    </header>
  );
};

export default Header;
