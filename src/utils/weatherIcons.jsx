import { 
  Cloud, CloudRain, Sun, CloudSnow, CloudDrizzle, 
  CloudLightning, CloudFog 
} from 'lucide-react';

export const getWeatherIcon = (code, size = 40) => {
  const iconProps = { size, strokeWidth: 1.5 };
  
  if (code >= 200 && code < 300) {
    return <CloudLightning {...iconProps} className="text-yellow-300" />;
  }
  if (code >= 300 && code < 400) {
    return <CloudDrizzle {...iconProps} className="text-blue-300" />;
  }
  if (code >= 500 && code < 600) {
    return <CloudRain {...iconProps} className="text-blue-400" />;
  }
  if (code >= 600 && code < 700) {
    return <CloudSnow {...iconProps} className="text-blue-100" />;
  }
  if (code >= 700 && code < 800) {
    return <CloudFog {...iconProps} className="text-gray-400" />;
  }
  if (code === 800) {
    return <Sun {...iconProps} className="text-yellow-400" />;
  }
  return <Cloud {...iconProps} className="text-gray-300" />;
};

export const getBackgroundGradient = (weather) => {
  if (!weather) return 'from-blue-400 via-blue-500 to-blue-600';
  
  const code = weather.weather[0].id;
  const hour = new Date().getHours();
  const isNight = hour < 6 || hour > 20;

  if (isNight) return 'from-indigo-900 via-purple-900 to-pink-900';
  if (code === 800) return 'from-sky-400 via-blue-400 to-blue-500';
  if (code >= 200 && code < 600) return 'from-gray-600 via-gray-700 to-gray-800';
  if (code >= 600 && code < 700) return 'from-blue-200 via-blue-300 to-blue-400';
  return 'from-blue-400 via-blue-500 to-cyan-500';
};
