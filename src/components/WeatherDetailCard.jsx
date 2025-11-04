import React from 'react';

const WeatherDetailCard = ({ icon: Icon, label, value }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="text-white/80" size={24} />
        <span className="text-white/60 text-sm">{label}</span>
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
};

export default WeatherDetailCard;