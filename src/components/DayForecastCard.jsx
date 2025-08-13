import React, { Component } from "react";
import {
  WiDaySunny,
  WiRain,
  WiCloudy,
  WiSnow,
  WiThunderstorm,
  WiFog,
} from "react-icons/wi";

const getWeatherIcon = (condition, size = 40) => {
  switch (condition.toLowerCase()) {
    case "clear":
      return <WiDaySunny size={size} color="#FFD700" />;
    case "rain":
      return <WiRain size={size} color="#4682B4" />;
    case "clouds":
      return <WiCloudy size={size} color="#778899" />;
    case "snow":
      return <WiSnow size={size} color="#E0FFFF" />;
    case "thunderstorm":
      return <WiThunderstorm size={size} color="#4B0082" />;
    case "mist":
    case "fog":
    case "haze":
      return <WiFog size={size} color="#D3D3D3" />;
    default:
      return <WiDaySunny size={size} color="#FFD700" />;
  }
};

class DayForecastCard extends Component {
  render() {
    const { forecasts } = this.props;

    if (!forecasts || !Array.isArray(forecasts)) {
      return <p>Loading forecast...</p>;
    }

    return (
      <div className="forecast-container">
        <h3 className="forecast-title mb-4">3-Day Forecast</h3>
        <div className="forecast-cards row g-3">
          {forecasts.map((day, index) => (
            <div key={index} className="col-md-4 col-sm-4">
              <div className="forecast-card p-3 rounded-3 h-100">
                <h5 className="forecast-day">
                  {new Date(day.date).toLocaleDateString("en-US", {
                    weekday: "long",
                  })}
                </h5>
                <p className="forecast-date">
                  {new Date(day.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <div className="weather-icon my-3">
                  {getWeatherIcon(day.condition)}
                </div>
                <p className="weather-condition text-capitalize mb-3">
                  {day.condition}
                </p>
                <div className="temperature-range">
                  <span className="max-temp me-3">
                    {Math.round(day.maxTemp)}°
                  </span>
                  <span className="min-temp text-muted">
                    {Math.round(day.minTemp)}°
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DayForecastCard;
