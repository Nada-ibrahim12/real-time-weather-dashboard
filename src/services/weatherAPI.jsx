import axios from "axios";

const BASE_URL = "http://api.weatherapi.com/v1";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getCurrentWeather = async (city) => {
  const response = await axios.get(`${BASE_URL}/current.json`, {
    params: { key: API_KEY, q: city },
  });
  return response.data;
};

export const getForecast = async (city, days = 3) => {
  const response = await axios.get(`${BASE_URL}/forecast.json`, {
    params: { key: API_KEY, q: city, days },
  });
  return response.data;
};
