import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WiCelsius, WiHumidity, WiBarometer, WiThermometer } from 'weather-icons-react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '9590fa6f738ef51f6424d10d0df6d8fd';
        const city = 'Karlskrona';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-4 mb-4 text-white">
      {loading ? (
        <p>Loading weather data...</p>
      ) : (
        <div>
          <h2 className="mb-2 text-2xl font-bold">Weather Information</h2>
          <p>City: {weatherData.name}</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <br></br>
          <div className="flex items-center">
            <span className="mr-4"><WiHumidity size={24} /> {weatherData.main.humidity}%</span>
            <span className="mr-4"><WiBarometer size={24} /> {weatherData.main.pressure} hPa</span>
            <span><WiThermometer size={24} /> {weatherData.main.feels_like} °C</span>
          </div>
          <br></br>
        </div>
      )}
    </div>
  );
};

export default Weather;
