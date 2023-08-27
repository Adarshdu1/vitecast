import React, { useEffect, useState } from "react";
import WindStatus from "./WindStatus";
import SunriseSunset from "./SunriseSunset";
import Humidity from "./Humidity";
import Visibility from "./Visibility";

export default function TodayHighlight({ weatherData }) {
  const [todayData, setTodayData] = useState(weatherData);
  const [position, setPosition] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [visibility, setVisibility] = useState(null);
  const [wind, setWind] = useState(null);
  const [city, setCity] = useState(null);
  const [country, setCountry] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  useEffect(() => {
    setTodayData(weatherData);
    setPosition([weatherData.coord.lat, weatherData.coord.lon]);
    setHumidity(weatherData.main.humidity);
    setVisibility(weatherData.visibility);
    setWind(weatherData.wind.speed);
    setCity(weatherData.name);
    setCountry(weatherData.sys.country);
    setSunrise(weatherData.sys.sunrise);
    setSunset(weatherData.sys.sunset);
  }, [weatherData]);
  return (
    <div className="my-10 mx-2 w-full">
      <h1 className="text-2xl font-semibold ">Today Highlight</h1>

      <div className="mt-5 space-x-5 flex">
        <WindStatus wind={wind} city={city} country={country} />
        <SunriseSunset sunrise={sunrise} sunset={sunset} />
        <Humidity humidRate={humidity} />
        <Visibility visible={visibility} />
      </div>
    </div>
  );
}
