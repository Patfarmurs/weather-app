import React from 'react';
import { getWeatherIcon } from '../utils/weatherIcons';

const ForecastCard = ({ day }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-all text-center">
      <p className="text-white/80 font-semibold mb-3">
        {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
      </p>
      <div className="flex justify-center mb-3">
        {getWeatherIcon(day.weather[0].id, 32)}
      </div>
      <p className="text-white text-xl font-bold">
        {Math.round(day.main.temp)}°
      </p>
      <p className="text-white/60 text-sm capitalize mt-1">
        {day.weather[0].main}
      </p>
    </div>
  );
};

export default ForecastCard;