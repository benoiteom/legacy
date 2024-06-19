import React, { useState, useEffect } from "react";

export default function Weather() {
  const [temperature, setTemperature] = useState('--');

  // useEffect(() => {
  //   const apiKey = '055ae4ff6ef240a685b02033242702';
  //   const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London&aqi=no`;

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setTemperature(data.current.temp_f);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching weather data:', error);
  //     });
  // }, []);

  return (
    <div className="weather">
      <p>{temperature} °F</p>
      <p>-- °  -  -- °  --%</p>
    </div>
  );
}
