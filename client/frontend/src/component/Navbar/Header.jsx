import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://basicsandmorefundraising.com/wp-content/uploads/2017/10/NonprofitNewsletterBlurbGraphic.png"
            alt="Logo"
            className="h-10 w-10 md:h-12 md:w-12"
          />
          <span className="text-xl md:text-2xl font-bold ml-3">ACO NEWS</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <WeatherInfo />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign In
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-blue-500 mt-2 py-4 flex flex-col items-center space-y-4">
          <WeatherInfo />
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded">
            Sign In
          </button>
          <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-6 rounded">
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
