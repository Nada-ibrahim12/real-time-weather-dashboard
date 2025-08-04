import React, { Component } from "react";

export class WeatherDetails extends Component {
  render() {
    return (
      <div className="wcard weather-details-card shadow-effect">
        <h3 className="weather-details-title">
          Weather Details 
        </h3>
        <div className="weather-details-info">
          <p className="weather-details-wind">
            Today - {this.props.windspeed} km/h
          </p>
          <p className="weather-details-humidity">
            Humidity: {this.props.humidity}%
          </p>
          <p className="weather-details-pressure">
            Pressure: {this.props.pressure} hPa
          </p>
          <p className="weather-details-UV-index">
            UV Index: {this.props.uvIndex}
          </p>
        </div>
      </div>
    );
  }
}

export default WeatherDetails;
