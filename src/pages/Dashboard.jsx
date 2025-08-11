import React, { useEffect, useState } from "react";
import axios from "axios";
import CurrentWeatherCard from "../components/CurrentWeatherCard";
import WeatherDetails from "../components/WeatherDetails";
import DayForecastCard from "../components/DayForecastCard";

const Dashboard = ({ cities, onRemoveCity }) => {
  const API_KEY = "c222aa796ed432a92e23429bf0c2a4db";
  const [weatherData, setWeatherData] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      if (cities.length === 0) {
        setWeatherData([]);
        setForecastData([]);
        setLoading(false);
        return;
      }

      try {
        const weatherPromises = cities.map((city) =>
          city.coords
            ? axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${city.coords.lat}&lon=${city.coords.lon}&appid=${API_KEY}&units=metric`
              )
            : axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${API_KEY}&units=metric`
              )
        );

        const forecastPromises = cities.map((city) =>
          city.coords
            ? axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${city.coords.lat}&lon=${city.coords.lon}&appid=${API_KEY}&units=metric`
              )
            : axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city.name}&appid=${API_KEY}&units=metric`
              )
        );

        const [weatherResults, forecastResults] = await Promise.all([
          Promise.all(weatherPromises),
          Promise.all(forecastPromises),
        ]);

        setWeatherData(weatherResults.map((res) => res.data));
        setForecastData(
          forecastResults.map((res) => formatForecast(res.data.list))
        );
      } catch (error) {
        console.error("Error fetching weather:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [cities]);

  const formatForecast = (list) => {
    const daily = {};
    list.forEach((item) => {
      const date = new Date(item.dt * 1000).toLocaleDateString();
      if (!daily[date]) {
        daily[date] = {
          date: item.dt * 1000,
          maxTemp: item.main.temp_max,
          minTemp: item.main.temp_min,
          condition: item.weather[0].main,
          icon: item.weather[0].icon,
        };
      } else {
          if (item.main.temp_max > daily[date].maxTemp)
            daily[date].maxTemp = item.main.temp_max;
          if (item.main.temp_min < daily[date].minTemp)
            daily[date].minTemp = item.main.temp_min;
      }
    });

    return Object.values(daily)
      .slice(1, 4) 
      .map((day) => ({
        ...day,
        date: new Date(day.date),
      }));
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center">
          <div
            className="spinner-border text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <h2 className="mt-3 text-muted">Loading Weather Data...</h2>
        </div>
      </div>
    );

  if (!weatherData.length)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div
          className="text-center p-5 bg-light rounded-3 shadow-sm"
          style={{ maxWidth: "500px" }}
        >
          <div className="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="#dc3545"
              className="bi bi-cloud-slash"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M3.112 5.112a3.125 3.125 0 0 0-.17.613C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13H11l-1-1H3.781C2.231 12 1 10.785 1 9.318c0-1.365 1.064-2.513 2.46-2.666l.446-.05v-.447c0-.075.006-.152.018-.231l-.812-.812zm2.55-1.45-.725-.725A5.512 5.512 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773a3.2 3.2 0 0 1-1.516 2.711l-.736-.737C14.996 11.45 15 11.223 15 11v-1a4 4 0 0 0-4-4h-.5l-.021-.083A3.5 3.5 0 0 0 8.5 3H7.414l-1.78-1.78-1.77 1.77 1.618 1.618z"
              />
              <path d="M13.879 10.414a2.5 2.5 0 0 0-3.465 3.465l3.465-3.465zm.707.707-3.465 3.465a2.501 2.501 0 0 0 3.465-3.465zm-4.56-1.096a3.5 3.5 0 1 1 4.949 4.95 3.5 3.5 0 0 1-4.95-4.95z" />
            </svg>
          </div>
          <h2 className="text-danger mb-3">Weather Data Unavailable</h2>
          <button
            className="btn btn-primary"
            onClick={() => window.location.reload()}
          >
            <i className="bi bi-arrow-clockwise me-2"></i>
            Try Again
          </button>
        </div>
      </div>
    );
  return (
    <div className="weather-app-container">
      <div className="container py-4">
        <div className="navbar-spacer"></div>

        <div className="row g-4">
          {weatherData.map((weather, index) => (
            <div key={`${weather.name}-${index}`} className="col-md-6">
              <div className="city-container shadow-lg mb-4 p-3 rounded-3 position-relative">
                <button
                  className="btn btn-sm btn-danger position-absolute top-0 end-0 m-2"
                  onClick={() => onRemoveCity(index)}
                  title="Remove location"
                  style={{
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    zIndex: 1000
                  }}
                >
                  <i className="bi bi-x-lg"></i>
                </button>

                <div className="row g-3">
                  <div className="col-lg-6">
                    <CurrentWeatherCard
                      city={weather.name}
                      temperature={weather.main.temp}
                      description={weather.weather[0].description}
                      weatherCondition={weather.weather[0].main}
                      tempMax={weather.main.temp_max}
                      tempMin={weather.main.temp_min}
                    />
                  </div>

                  <div className="col-lg-6">
                    <WeatherDetails
                      windspeed={weather.wind.speed}
                      humidity={weather.main.humidity}
                      pressure={weather.main.pressure}
                      sunrise={formatTime(weather.sys.sunrise)}
                      sunset={formatTime(weather.sys.sunset)}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <DayForecastCard forecasts={forecastData[index]} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
