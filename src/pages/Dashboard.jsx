import React, { Component } from "react";
import CurrentWeatherCard from "../components/CurrentWeatherCard.jsx";
import WeatherDetails from "../components/WeatherDetails.jsx";
import DayForecastCard from "../components/DayForecastCard.jsx";
import {
  currentWeatherData,
  weatherDetailsData,
  oneDayForecast,
} from "../utils/dummyData.js";

export class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid p-3 p-md-4 p-lg-5">
        <div className="row gy-4 gx-3 gx-lg-4 flex justify-content-center align-items-stretch">
          <div className="col-12 col-sm-6 col-lg-5 col-xxl-3">
            <div className="h-100">
              <CurrentWeatherCard
                city={currentWeatherData.city}
                temperature={currentWeatherData.temperature}
                condition={currentWeatherData.condition}
                iconUrl={currentWeatherData.iconUrl}
                description={currentWeatherData.description}
              />
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-6 col-xxl-4">
            <div className="h-100">
              <WeatherDetails
                windspeed={weatherDetailsData.windspeed}
                humidity={weatherDetailsData.humidity}
                pressure={weatherDetailsData.pressure}
                uvIndex={weatherDetailsData.uvIndex}
              />
            </div>
          </div>

          {/* Day Forecast - Full width on mobile, then responsive */}
          <div className="col-12 col-lg-12 col-xxl-5">
            <div className="h-100">
              <DayForecastCard
                date={oneDayForecast.date}
                maxTemp={oneDayForecast.temperature.max}
                minTemp={oneDayForecast.temperature.min}
                condition={oneDayForecast.condition}
                iconUrl={oneDayForecast.iconUrl}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
