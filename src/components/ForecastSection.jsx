import React from 'react';
import ForecastCard from './ForecastCard';

const ForecastSection = ({ forecast }) => {
  const getDailyForecast = () => {
    const daily = {};
    forecast.list.forEach(item => {
      const date = new Date(item.dt * 1000).toLocaleDateString();
      if (!daily[date]) {
        daily[date] = item;
      }
    });
    return Object.values(daily).slice(0, 5);
  };

  return (
    <div className="forecast-section">
      <h2 className="forecast-title">5-Day Forecast</h2>
      <div className="forecast-grid">
        {getDailyForecast().map((day, index) => (
          <ForecastCard key={index} day={day} />
        ))}
      </div>
    </div>
  );
};

export default ForecastSection;