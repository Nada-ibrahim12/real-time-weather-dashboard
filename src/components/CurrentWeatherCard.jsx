import React, { Component } from "react";
import {
  WiDaySunny,
  WiRain,
  WiCloudy,
  WiSnow,
  WiThunderstorm,
  WiFog,
} from "react-icons/wi";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";

const getWeatherIcon = (condition, size = 60) => {
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

class CurrentWeatherCard extends Component {
  render() {
    const { city, temperature, description, iconUrl } = this.props;

    if (temperature === undefined) {
      return (
        <div className="current-weather-card">Loading current weather...</div>
      );
    }

    return (
      <div className="current-weather-card wcard shadow-effect p-4 rounded-3">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h2 className="city-name mb-2">{city}</h2>
            <p className="current-date mb-0">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="weather-description text-capitalize mb-3">
              {description}
            </p>
          </div>
          <div className="weather-icon">
            {getWeatherIcon(this.props.weatherCondition)}
          </div>
        </div>

        <div className="temperature-display d-flex align-items-center">
          <span className="current-temp display-4 fw-bold">
            {Math.round(temperature)}°
          </span>
          <div className="temp-range ms-4">
            <div className="d-flex align-items-center">
              <FaTemperatureHigh className="me-2" />
              <span>{Math.round(this.props.tempMax)}°</span>
            </div>
            <div className="d-flex align-items-center">
              <FaTemperatureLow className="me-2" />
              <span>{Math.round(this.props.tempMin)}°</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentWeatherCard;
