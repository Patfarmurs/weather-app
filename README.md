# ☀️ Weather Forecast Application

A modern, responsive weather forecast application built with React and Tailwind CSS. This application provides real-time weather data and 5-day forecasts for locations worldwide, featuring an intuitive user interface with dynamic backgrounds that adapt to current weather conditions.

![Weather App Demo](./assets/demo-screenshot.png)

## 🌟 Features

- **Real-Time Weather Data**: Get current weather conditions for any city worldwide
- **5-Day Forecast**: View detailed weather predictions for the upcoming week
- **Geolocation Support**: Automatically detects and displays weather for your current location
- **Temperature Unit Toggle**: Switch seamlessly between Celsius and Fahrenheit
- **Dynamic Backgrounds**: Beautiful gradient backgrounds that change based on weather conditions and time of day
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Comprehensive Weather Metrics**: 
  - Temperature (current, high, low)
  - Wind speed
  - Humidity levels
  - Visibility
  - Atmospheric pressure
- **Weather Icons**: Intuitive visual representations of weather conditions
- **Search Functionality**: Quick city search with real-time results
- **Error Handling**: User-friendly error messages and loading states

## 🚀 Live Demo

[View Live Demo](#) _(Add your deployed application link here)_

## 📸 Screenshots


## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS
- **Icons**: Lucide React
- **API**: OpenWeatherMap API
- **Language**: JavaScript (ES6+)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher) or yarn
- A modern web browser
- OpenWeatherMap API key ([Get it here](https://openweathermap.org/api))

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weather-forecast-app.git
   cd weather-forecast-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```bash
   touch .env
   ```
   
   Add your OpenWeatherMap API key:
   ```env
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

4. **Update the API configuration**
   
   Open `src/services/weatherService.js` and update the API key:
   ```javascript
   const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📦 Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```


## 🎨 Component Architecture

### **Presentational Components**
- `Header`: Application title and tagline
- `SearchBar`: City search input with keyboard support
- `ErrorMessage`: User-friendly error notifications
- `LoadingSpinner`: Loading state indicator
- `CurrentWeatherCard`: Main weather display with temperature and conditions
- `WeatherDetailCard`: Reusable card for individual weather metrics
- `WeatherDetailsGrid`: Grid layout for multiple weather details
- `ForecastCard`: Individual forecast day component
- `ForecastSection`: 5-day forecast container
- `Footer`: API attribution

### **Service Layer**
- `weatherService.js`: Handles all API calls to OpenWeatherMap
  - `fetchWeatherByCity()`: Fetch weather by city name
  - `fetchWeatherByCoords()`: Fetch weather by coordinates

### **Utilities**
- `weatherIcons.js`: Weather icon logic and background gradient generation

## 🔑 API Configuration

This application uses the [OpenWeatherMap API](https://openweathermap.org/api). You'll need to:

1. Sign up for a free account at [OpenWeatherMap](https://openweathermap.org/api)
2. Generate an API key from your account dashboard
3. Add the API key to your `.env` file
4. Note: Free tier includes 1,000 API calls per day

### API Endpoints Used:
- Current Weather Data: `/weather`
- 5-Day Forecast: `/forecast`

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## 🎯 Key Features for Developers

This project demonstrates:

1. **Modern React Patterns**
   - Functional components with hooks
   - useState for state management
   - useEffect for side effects
   - Component composition

2. **Clean Architecture**
   - Separation of concerns
   - Service layer pattern
   - Reusable components
   - Utility functions

3. **API Integration**
   - Async/await pattern
   - Error handling
   - Loading states
   - Environment variables

4. **Responsive Design**
   - Mobile-first approach
   - Flexbox and CSS Grid
   - Tailwind CSS utilities

5. **User Experience**
   - Smooth animations
   - Loading indicators
   - Error messages
   - Keyboard navigation

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Patrick Mukula**
- GitHub: [Patfarmurs](https://github.com/Patfarmurs)


## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [Lucide](https://lucide.dev/) for the beautiful icon set
- [Vite](https://vitejs.dev/) for the lightning-fast build tool

## 📧 Contact

For questions or feedback, please reach out:
- Email: patrickkeita80@yahoo.com

## 🔄 Future Enhancements

- [ ] Add hourly forecast
- [ ] Implement weather alerts and notifications
- [ ] Save favorite locations
- [ ] Add weather maps
- [ ] Dark/Light theme toggle
- [ ] Multiple language support
- [ ] Air quality index
- [ ] UV index display
- [ ] Historical weather data
- [ ] Progressive Web App (PWA) support

---

**⭐ If you found this project helpful, please consider giving it a star!**

Made with ❤️ and React