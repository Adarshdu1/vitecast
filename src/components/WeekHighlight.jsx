import React, { useEffect, useState } from "react";
import DayOne from "./week/DayOne";
import DayTwo from "./week/DayTwo";
import DayThree from "./week/DayThree";
import DayFour from "./week/DayFour";
import DayFive from "./week/DayFive";
import DaySix from "./week/DaySix";
import DaySeven from "./week/DaySeven";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function WeekHighlight({ weatherData, isCelcius }) {
  const [newWeatherData, setNewWeatherData] = useState(null);
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const lat = weatherData.coord.lat;
        const lon = weatherData.coord.lon;
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
            import.meta.env.VITE_API_KEY
          }&units=metric `
        );
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await res.json();
        setNewWeatherData(data);
      } catch (error) {
        toast(error.message, {
          position: "top-right",
          autoClose: 2000,
          icon: "🚫",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    };
    fetchWeather();
  }, [weatherData]);
  return (
    <div className="my-10 sm:block flex flex-col items-center lg:mx-2 lg:pl-0 sm:pl-5 w-full">
      <ToastContainer type="error" />
      <h1 className="text-2xl font-semibold ">Week Highlight</h1>
      {newWeatherData && (
        <div className="mt-5 xlg:space-x-2 xlg:flex xmd:grid xmd:grid-cols-3 xmd:gap-4 grid grid-cols-2 gap-4">
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
