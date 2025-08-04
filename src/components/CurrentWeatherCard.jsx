import React, { Component } from "react";

export class CurrentWeatherCard extends Component {
  render() {
    return (
      <div className="wcard current-weather-card shadow-effect">
        <h2 className="current-weather-title city">
          Today - {this.props.city}
        </h2>
        <div className="current-weather-info">
          <p className="current-weather-temperature">
            Temperature: {this.props.temperature}°C
          </p>
          <p className="current-weather-condition">
            {this.props.condition}
          </p>
          <img
            className="current-weather-icon"
            src={this.props.iconUrl}
            alt={this.props.description}
          />
        </div>
      </div>
    );
  }
}

export default CurrentWeatherCard;
