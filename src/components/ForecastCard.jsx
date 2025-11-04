import React from 'react';
import { getWeatherIcon } from '../utils/weatherIcons';

const ForecastCard = ({ day }) => {
  return (
    <div className="forecast-card">
      <p className="forecast-day">
        {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
      </p>
      <div className="forecast-icon">
        {getWeatherIcon(day.weather[0].id, 32)}
      </div>
      <p className="forecast-temp">
        {Math.round(day.main.temp)}°
      </p>
      <p className="forecast-description">
        {day.weather[0].main}
      </p>
    </div>
  );
};

export default ForecastCard;