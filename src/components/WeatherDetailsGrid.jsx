import React from 'react';
import { Wind, Droplets, Eye, Gauge } from 'lucide-react';
import WeatherDetailCard from './WeatherDetailCard';

const WeatherDetailsGrid = ({ weather, unit }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <WeatherDetailCard 
        icon={Wind} 
        label="Wind Speed" 
        value={`${weather.wind.speed} ${unit === 'metric' ? 'm/s' : 'mph'}`} 
      />
      <WeatherDetailCard 
        icon={Droplets} 
        label="Humidity" 
        value={`${weather.main.humidity}%`} 
      />
      <WeatherDetailCard 
        icon={Eye} 
        label="Visibility" 
        value={`${(weather.visibility / 1000).toFixed(1)} km`} 
      />
      <WeatherDetailCard 
        icon={Gauge} 
        label="Pressure" 
        value={`${weather.main.pressure} hPa`} 
      />
    </div>
  );
};

export default WeatherDetailsGrid;
