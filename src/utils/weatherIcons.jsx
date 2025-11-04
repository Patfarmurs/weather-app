import React from 'react';
import { 
  Cloud, CloudRain, Sun, CloudSnow, CloudDrizzle, 
  CloudLightning, CloudFog 
} from 'lucide-react';

export const getWeatherIcon = (code, size = 40) => {
  const iconProps = { size, strokeWidth: 1.5 };
  
  if (code >= 200 && code < 300) {
    return <CloudLightning {...iconProps} className="icon-yellow" />;
  }
  if (code >= 300 && code < 400) {
    return <CloudDrizzle {...iconProps} className="icon-blue-light" />;
  }
  if (code >= 500 && code < 600) {
    return <CloudRain {...iconProps} className="icon-blue" />;
  }
  if (code >= 600 && code < 700) {
    return <CloudSnow {...iconProps} className="icon-blue-light" />;
  }
  if (code >= 700 && code < 800) {
    return <CloudFog {...iconProps} className="icon-gray" />;
  }
  if (code === 800) {
    return <Sun {...iconProps} className="icon-yellow" />;
  }
  return <Cloud {...iconProps} className="icon-gray" />;
};

export const getBackgroundClass = (weather) => {
  if (!weather) return '';
  
  const code = weather.weather[0].id;
  const hour = new Date().getHours();
  const isNight = hour < 6 || hour > 20;

  if (isNight) return 'night';
  if (code === 800) return 'sunny';
  if (code >= 200 && code < 600) return 'rainy';
  if (code >= 600 && code < 700) return 'snowy';
  return '';
};
