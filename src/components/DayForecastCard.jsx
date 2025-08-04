import React, { Component } from 'react'


export class DayForecastCard extends Component {
  render() {
    return (
      <div className="wcard one-day-forecast shadow-effect">
        <h3>Forecast for {this.props.date}</h3>
        <img src={this.props.iconUrl} alt="weather" />
        <p>{this.props.condition}</p>
        <p>Max: {this.props.maxTemp}°C</p>
        <p>Min: {this.props.minTemp}°C</p>
      </div>
    );
  }
}

export default DayForecastCard