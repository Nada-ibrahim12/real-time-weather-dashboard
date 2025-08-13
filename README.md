# 🌤️ Real-Time Weather Dashboard

**Real-Time Weather Dashboard** is a modern, responsive weather application built with **React 19** and **Vite**.  
It allows users to view **real-time weather conditions** and a **3-day forecast** for multiple cities, using the [OpenWeather API](https://openweathermap.org/api).  
The app supports **search by city**, **geolocation-based weather retrieval**, and **persistent data storage** using **Local Storage**.

---

## 🚀 Features

- **Real-Time Weather Data** – Live temperature, condition, humidity, pressure, wind speed, and sunrise/sunset.
- **3-Day Forecast** – Displays upcoming weather trends.
- **Search by City** – Quickly add cities by name.
- **My Location Support** – Detect and display your current location's weather.
- **City Management** – Add or remove cities from the dashboard.
- **Local Storage Persistence** – Cities remain saved even after a page refresh.
- **Responsive** – Mobile-friendly design.

---

## 🛠️ Tech Stack

**Core:**
- React 19  
- React Router DOM 7  
- Axios  
- Vite

**Styling & UI:**
- Bootstrap 5  
- React Bootstrap  
- FontAwesome Icons  
- React Icons  

**Development Tools:**
- ESLint (with React Hooks plugin)  
- Dotenv for environment variables

---

## 📂 Project Structure

```

src/
│── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── CurrentWeatherCard.jsx
│   ├── WeatherDetails.jsx
│   ├── DayForecastCard.jsx
│
│── pages/
│   ├── Dashboard.jsx
│   ├── NotFound.jsx
│
│── App.jsx
│── index.js

````

---

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nada-ibrahim12/real-time-weather-dashboard
   cd real-time-weather-dashboard
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Add your OpenWeather API key**

   * Create a `.env` file in the project root.
   * Add:

     ```env
     VITE_WEATHER_API_KEY=your_api_key_here
     ```

4. **Run the application**

   ```bash
   npm run dev
   ```

5. **Build for production**

   ```bash
   npm run build
   ```

6. **Preview the production build**

   ```bash
   npm run preview
   ```

---

## 🌍 API Reference

Weather data is fetched from **OpenWeather**:

* **Current Weather:**
  `https://api.openweathermap.org/data/2.5/weather`
* **3-Day Forecast:**
  `https://api.openweathermap.org/data/2.5/forecast`

**Query Parameters:**

* `q` – City name (e.g., `q=Cairo`)
* `lat`, `lon` – Coordinates for geolocation-based weather
* `appid` – API Key
* `units` – Metric for °C (default is Kelvin)

---

## 🎯 Usage

* **Search for a City:** Enter a city name in the search bar and click Search.
* **Add My Location:** Click **My Location** to get your current weather.
* **Remove a City:** Click the ❌ icon on a city card.
* **Persistent Storage:** Cities remain saved using **Local Storage**.

---

## 📌 Future Improvements

* 🌙 Dark mode
* 📅 7-day extended forecast
* 🌐 Multi-language support


---

If you’d like, I can also make a **GitHub-ready version with screenshots and a live demo badge** so it looks polished when someone visits your repo. That will make it stand out immediately.
```
