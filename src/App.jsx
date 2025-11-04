import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ErrorMessage from './components/ErrorMessage';
import LoadingSpinner from './components/LoadingSpinner';
import CurrentWeatherCard from './components/CurrentWeatherCard';
import WeatherDetailsGrid from './components/WeatherDetailsGrid';
import ForecastSection from './components/ForecastSection';
import Footer from './components/Footer';
import { getBackgroundClass } from './utils/weatherIcons';
import { fetchWeatherByCity, fetchWeatherByCoords } from './services/weatherService';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [unit, setUnit] = useState('metric');

  useEffect(() => {
    getCurrentLocationWeather();
  }, []);

  const getCurrentLocationWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          handleFetchWeatherByCoords(position.coords.latitude, position.coords.longitude);
        },
        () => {
          handleFetchWeather('London');
        }
      );
    } else {
      handleFetchWeather('London');
    }
  };

  const handleFetchWeatherByCoords = async (lat, lon) => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchWeatherByCoords(lat, lon, unit);
      setWeather(data.weather);
      setForecast(data.forecast);
      setCity(data.weather.name);
    } catch (err) {
      setError('Unable to fetch weather data. Please check your API key.');
    } finally {
      setLoading(false);
    }
  };

  const handleFetchWeather = async (searchCity) => {
    if (!searchCity.trim()) return;
    
    setLoading(true);
    setError('');
    try {
      const data = await fetchWeatherByCity(searchCity, unit);
      setWeather(data.weather);
      setForecast(data.forecast);
    } catch (err) {
      setError('City not found. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    handleFetchWeather(city);
  };

  const toggleUnit = () => {
    const newUnit = unit === 'metric' ? 'imperial' : 'metric';
    setUnit(newUnit);
    if (weather) {
      handleFetchWeather(weather.name);
    }
  };

  return (
    <div className={`app-container ${getBackgroundClass(weather)}`}>
      <div className="content-wrapper">
        <Header />
        <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />
        <ErrorMessage message={error} />

        {loading ? (
          <LoadingSpinner />
        ) : weather ? (
          <div className="weather-content">
            <CurrentWeatherCard 
              weather={weather} 
              unit={unit} 
              onToggleUnit={toggleUnit} 
            />
            <WeatherDetailsGrid weather={weather} unit={unit} />
            {forecast && <ForecastSection forecast={forecast} />}
          </div>
        ) : (
          <div className="loading-text">
            Loading weather data...
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}

export default App;
