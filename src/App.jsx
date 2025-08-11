import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  const [cities, setCities] = useState(() => {
    const saved = localStorage.getItem("weatherCities");
    return saved ? JSON.parse(saved) : [{ name: "Cairo", coords: null }];
  });

  useEffect(() => {
    localStorage.setItem("weatherCities", JSON.stringify(cities));
  }, [cities]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCities([
            {
              name: "My Location",
              coords: { lat: latitude, lon: longitude },
            },
          ]);
        },
        () => {
          setCities([{ name: "Cairo", coords: null }]);
        }
      );
    } else {
      setCities([{ name: "Cairo", coords: null }]);
    }
  }, []);

  const handleAddCityByName = (cityName) => {
    setCities((prev) => {
      if (
        prev.some((city) => city.name.toLowerCase() === cityName.toLowerCase())
      ) {
        return prev; 
      }
      return [...prev, { name: cityName, coords: null }];
    });
  };


  const handleLocationClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCities((prev) => [
            ...prev,
            {
              name: "My Location",
              coords: { lat: latitude, lon: longitude },
            },
          ]);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const handleRemoveCity = (indexToRemove) => {
  setCities(prev => {
    const newCities = [...prev];
    newCities.splice(indexToRemove, 1);
    return newCities;
  });
};

  return (
    <Router>
      <div className="app-container">
        <Navbar
          onLocationClick={handleLocationClick}
          onSearch={handleAddCityByName}
        />

        <div className="content-container">
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard cities={cities} onRemoveCity={handleRemoveCity} />
              }
            />
            <Route
              path="/dashboard"
              element={
                <Dashboard cities={cities} onRemoveCity={handleRemoveCity} />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
