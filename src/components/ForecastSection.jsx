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
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
      <h2 className="text-2xl font-bold text-white mb-6">5-Day Forecast</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {getDailyForecast().map((day, index) => (
          <ForecastCard key={index} day={day} />
        ))}
      </div>
    </div>
  );
};

export default ForecastSection;