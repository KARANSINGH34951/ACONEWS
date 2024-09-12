import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
const Header = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState({ lat: null, lon: null });

  useEffect(() => {
    
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lon: longitude });
      },
      (error) => {
        console.error('Error getting location:', error);
      }
    );
  }, []);

  useEffect(() => {
    if (location.lat && location.lon) {
    
      axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          lat: location.lat,
          lon: location.lon,
          appid: `${import.meta.env.VITE_WEATHER_API_KEY}`, 
          units: 'metric', 
        }
      })
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
    }
  }, [location]);

  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between flex-wrap">
      <div className="flex items-center space-x-4">
        <img
          src="https://basicsandmorefundraising.com/wp-content/uploads/2017/10/NonprofitNewsletterBlurbGraphic.png"  
          alt="Logo"
          className="h-8 w-8 md:h-12 md:w-12"
        />
        <span className="text-lg font-bold hidden md:block">ACO NEWS</span>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <i className="fas fa-clock text-yellow-300"></i>
          <span className="hidden md:block">{time}</span>
        </div>
        {weather && (
          <div className="flex items-center space-x-2">
            <i className="fas fa-cloud-sun text-gray-200"></i> 
            <span>{Math.round(weather.main.temp)}°C</span>
            <span>{weather.weather[0].description}</span>
          </div>
        )}
        <div className="flex space-x-2">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm md:text-base">
            Sign In
          </div>
          <div className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-sm md:text-base">
            Sign Up
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
