import React from 'react';
import { MapPin, TrendingUp, TrendingDown } from 'lucide-react';
import { getWeatherIcon } from '../utils/weatherIcons';

const CurrentWeatherCard = ({ weather, unit, onToggleUnit }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="flex items-center gap-2 text-white/80 mb-2">
            <MapPin size={20} />
            <span className="text-lg">{weather.name}, {weather.sys.country}</span>
          </div>
          <p className="text-white/60 capitalize">{weather.weather[0].description}</p>
        </div>
        <button
          onClick={onToggleUnit}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 py-2 rounded-xl text-white transition-all border border-white/30"
        >
          °{unit === 'metric' ? 'C' : 'F'} / °{unit === 'metric' ? 'F' : 'C'}
        </button>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <div className="text-7xl md:text-8xl font-bold text-white mb-2">
            {Math.round(weather.main.temp)}°
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <div className="flex items-center gap-1">
              <TrendingUp size={20} />
              <span>{Math.round(weather.main.temp_max)}°</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingDown size={20} />
              <span>{Math.round(weather.main.temp_min)}°</span>
            </div>
          </div>
        </div>
        <div className="transform hover:scale-110 transition-transform">
          {getWeatherIcon(weather.weather[0].id, 120)}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;