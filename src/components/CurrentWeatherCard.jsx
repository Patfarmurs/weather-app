import React from 'react';
import { MapPin, TrendingUp, TrendingDown } from 'lucide-react';
import { getWeatherIcon } from '../utils/weatherIcons';

const CurrentWeatherCard = ({ weather, unit, onToggleUnit }) => {
  return (
    <div className="current-weather-card">
      <div className="weather-header">
        <div>
          <div className="location-info">
            <MapPin size={20} />
            <span>{weather.name}, {weather.sys.country}</span>
          </div>
          <p className="weather-description">{weather.weather[0].description}</p>
        </div>
        <button onClick={onToggleUnit} className="unit-toggle">
          °{unit === 'metric' ? 'C' : 'F'} / °{unit === 'metric' ? 'F' : 'C'}
        </button>
      </div>

      <div className="weather-main">
        <div className="temperature-display">
          <div className="main-temperature">
            {Math.round(weather.main.temp)}°
          </div>
          <div className="temp-range">
            <div className="temp-item">
              <TrendingUp size={20} />
              <span>{Math.round(weather.main.temp_max)}°</span>
            </div>
            <div className="temp-item">
              <TrendingDown size={20} />
              <span>{Math.round(weather.main.temp_min)}°</span>
            </div>
          </div>
        </div>
        <div className="weather-icon-large">
          {getWeatherIcon(weather.weather[0].id, 120)}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
