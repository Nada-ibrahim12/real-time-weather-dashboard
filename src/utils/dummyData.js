export const currentWeatherData = {
    city: "Cairo",
    temperature: 32,
    condition: "Sunny",
    iconUrl: "https://cdn.weatherapi.com/weather/64x64/day/113.png",
    description: "Clear sky"
};

export const weatherDetailsData = {
    windspeed: 15,
    humidity: 40,
    pressure: 1012,
    uvIndex: 6
};

export const oneDayForecast = {
    date: "2025-08-02",
    temperature: {
        max: 34,
        min: 24
    },
    condition: "Partly cloudy",
    iconUrl: "https://cdn.weatherapi.com/weather/64x64/day/116.png"
};

export const threeDayForecast = [
    {
        date: "2025-08-02",
        maxTemp: 34,
        minTemp: 24,
        condition: "Partly cloudy",
        iconUrl: "https://cdn.weatherapi.com/weather/64x64/day/116.png"
    },
    {
        date: "2025-08-03",
        maxTemp: 35,
        minTemp: 25,
        condition: "Sunny",
        iconUrl: "https://cdn.weatherapi.com/weather/64x64/day/113.png"
    },
    {
        date: "2025-08-04",
        maxTemp: 33,
        minTemp: 23,
        condition: "Rain showers",
        iconUrl: "https://cdn.weatherapi.com/weather/64x64/day/296.png"
    }
];
