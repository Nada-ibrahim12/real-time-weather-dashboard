import React, { Component } from "react";
import {
  WiStrongWind,
  WiHumidity,
  WiBarometer,
  WiSunrise,
  WiSunset,
} from "react-icons/wi";
import { FaUmbrella } from "react-icons/fa";

class WeatherDetails extends Component {
  render() {
    const { windspeed, humidity, pressure, sunrise, sunset, precipitation } =
      this.props;

    return (
      <div className="weather-details-card wcard shadow-effect p-4 rounded-3">
        <h3 className="details-title mb-4">Weather Details</h3>
        <div className="weather-details-grid">
          <div className="detail-item">
            <WiStrongWind size={30} className="detail-icon" />
            <div>
              <p className="detail-label">Wind</p>
              <p className="detail-value">{windspeed} km/h</p>
            </div>
          </div>

          <div className="detail-item">
            <WiHumidity size={30} className="detail-icon" />
            <div>
              <p className="detail-label">Humidity</p>
              <p className="detail-value">{humidity}%</p>
            </div>
          </div>

          <div className="detail-item">
            <WiBarometer size={30} className="detail-icon" />
            <div>
              <p className="detail-label">Pressure</p>
              <p className="detail-value">{pressure} hPa</p>
            </div>
          </div>

          <div className="detail-item">
            <FaUmbrella size={25} className="detail-icon" />
            <div>
              <p className="detail-label">Precipitation</p>
              <p className="detail-value">{precipitation || "0"} mm</p>
            </div>
          </div>

          <div className="detail-item">
            <WiSunrise size={30} className="detail-icon" />
            <div>
              <p className="detail-label">Sunrise</p>
              <p className="detail-value">{sunrise}</p>
            </div>
          </div>

          <div className="detail-item">
            <WiSunset size={30} className="detail-icon" />
            <div>
              <p className="detail-label">Sunset</p>
              <p className="detail-value">{sunset}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherDetails;
