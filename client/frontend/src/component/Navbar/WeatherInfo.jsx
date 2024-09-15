// WeatherInfo.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherInfo = () => {
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
      axios
        .get('https://api.openweathermap.org/data/2.5/weather', {
          params: {
            lat: location.lat,
            lon: location.lon,
            appid: `${import.meta.env.VITE_WEATHER_API_KEY}`,
            units: 'metric',
          },
        })
        .then((response) => {
          setWeather(response.data);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [location]);

  return (
    <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
      <div className="flex items-center space-x-3">
        <i className="fas fa-clock text-yellow-300"></i>
        <span>{time}</span>
      </div>
      {weather && (
        <div className="flex items-center space-x-3">
          <i className="fas fa-cloud-sun text-gray-200"></i>
          <span>{Math.round(weather.main.temp)}°C</span>
          <span>{weather.weather[0].description}</span>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
