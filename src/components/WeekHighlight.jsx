import React, { useEffect, useState } from "react";
import DayOne from "./week/DayOne";
import DayTwo from "./week/DayTwo";
import DayThree from "./week/DayThree";
import DayFour from "./week/DayFour";
import DayFive from "./week/DayFive";
import DaySix from "./week/DaySix";
import DaySeven from "./week/DaySeven";

export default function WeekHighlight({ weatherData, isCelcius }) {
  const [newWeatherData, setNewWeatherData] = useState(null);
  useEffect(() => {
    const fetchWeather = async () => {
      const lat = weatherData.coord.lat;
      const lon = weatherData.coord.lon;
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric `
      );
      const data = await res.json();
      setNewWeatherData(data);
    };
    fetchWeather();
  }, [weatherData]);
  return (
    <div className="my-10 mx-2 w-full">
      <h1 className="text-2xl font-semibold ">Week Highlight</h1>
      {newWeatherData && (
        <div className="mt-5 space-x-5 flex">
          <DayOne weatherData={newWeatherData} isCelcius={isCelcius} />
          <DayTwo weatherData={newWeatherData} isCelcius={isCelcius} />
          <DayThree weatherData={newWeatherData} isCelcius={isCelcius} />
          <DayFour weatherData={newWeatherData} isCelcius={isCelcius} />
          <DayFive weatherData={newWeatherData} isCelcius={isCelcius} />
          <DaySix weatherData={newWeatherData} isCelcius={isCelcius} />
          <DaySeven weatherData={newWeatherData} isCelcius={isCelcius} />
        </div>
      )}
    </div>
  );
}
