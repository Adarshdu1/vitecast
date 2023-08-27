import React, { useEffect, useState } from "react";
import TodayHighlight from "./TodayHighlight";
import Location from "./Location";
import WeekHighlight from "./WeekHighlight";

export default function WeatherInfo({ weatherData, isToday, isCelsius }) {
  const [todayData, setTodayData] = useState(weatherData);
  const [position, setPosition] = useState(null);
  const [city, setCity] = useState(null);
  const [today, setToday] = useState(null);
  useEffect(() => {
    setTodayData(weatherData);
    setPosition([weatherData.coord.lat, weatherData.coord.lon]);
    setCity(weatherData.name);
    setToday(isToday);
  }, [weatherData, isToday]);
  return (
    <div className="col-span-3">
      {today ? (
        <TodayHighlight weatherData={todayData} />
      ) : (
        <WeekHighlight weatherData={todayData} isCelcius={isCelsius} />
      )}

      <Location position={position} city={city} />
    </div>
  );
}
