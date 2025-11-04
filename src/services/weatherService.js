const API_KEY = 'baf50bb1bed5ca0ad09d860eab9b3fdf';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherByCity = async (city, unit = 'metric') => {
  const weatherRes = await fetch(
    `${BASE_URL}/weather?q=${city}&units=${unit}&appid=${API_KEY}`
  );
  const forecastRes = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
  );

  if (!weatherRes.ok || !forecastRes.ok) {
    throw new Error('City not found');
  }

  const weatherData = await weatherRes.json();
  const forecastData = await forecastRes.json();

  return { weather: weatherData, forecast: forecastData };
};

export const fetchWeatherByCoords = async (lat, lon, unit = 'metric') => {
  const weatherRes = await fetch(
    `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`
  );
  const forecastRes = await fetch(
    `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`
  );

  if (!weatherRes.ok || !forecastRes.ok) {
    throw new Error('Failed to fetch weather data');
  }

  const weatherData = await weatherRes.json();
  const forecastData = await forecastRes.json();

  return { weather: weatherData, forecast: forecastData };
};
