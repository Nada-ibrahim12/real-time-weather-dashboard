import { useState, useEffect } from "react";

export default function useGeolocation(defaultCity = "Cairo") {
  const [location, setLocation] = useState({
    name: defaultCity,
    coords: null,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation({
            name: "Current Location",
            coords: {
              lat: pos.coords.latitude,
              lon: pos.coords.longitude,
            },
          });
        },
        () => {
          setLocation({ name: defaultCity, coords: null });
        }
      );
    } else {
      setLocation({ name: defaultCity, coords: null });
    }
  }, [defaultCity]);

  return location;
}
