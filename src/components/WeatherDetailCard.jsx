import React from 'react';

const WeatherDetailCard = ({ icon: Icon, label, value }) => {
  return (
    <div className="detail-card">
      <div className="detail-header">
        <Icon className="icon-white" size={24} />
        <span className="detail-label">{label}</span>
      </div>
      <p className="detail-value">{value}</p>
    </div>
  );
};

export default WeatherDetailCard;
