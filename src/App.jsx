import { useEffect, useState } from "react";

import Dashboard from "./components/Dashboard";
import WeatherInfo from "./components/WeatherInfo";
import NavBar from "./components/NavBar";
import Spinner from "./components/Spinner";
import Footer from "./components/Footer";
function App() {
  const [search, setSearch] = useState("Varanasi");
  const [today, setToday] = useState(true);
  const [celcius, setCelcius] = useState(true);
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = (value) => {
    setSearch(value);
  };
  const handleToday = (value) => {
    setToday(value);
  };
  const handleCelcius = (value) => {
    setCelcius(value);
  };
  useEffect(() => {
    const fetchWeather = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric `
      );
      const data = await res.json();
      setWeatherData(data);
    };
    fetchWeather();
  }, [search]);

  return (
    <>
      <div
        style={{ userSelect: "none" }}
        className="bg-[#F1F6F9] bg-opacity-50"
      >
        {/* Navigation Bar */}
        <NavBar
          handleSearch={handleSearch}
          handleToday={handleToday}
          handleCelcius={handleCelcius}
          className=""
        />
        {/* Main page */}
        {weatherData ? (
          <div className="px-3 grid grid-cols-4 mt-[4px]     max-w-6xl mx-auto">
            {/* Dashboard */}
            <Dashboard weatherData={weatherData} isCelcius={celcius} />
            {/* WeatherInfo */}
            <WeatherInfo
              weatherData={weatherData}
              className="col-span-2"
              isToday={today}
              isCelsius={celcius}
            />
          </div>
        ) : (
          <Spinner />
        )}
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
