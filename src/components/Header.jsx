import React from 'react';

const Header = () => {
  return (
    <div className="text-center mb-8 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
        Weather Forecast
      </h1>
      <p className="text-white/80 text-lg">Real-time weather updates worldwide</p>
    </div>
  );
};

export default Header;