import { useEffect, useState } from "react";

import Dashboard from "./components/Dashboard";
import WeatherInfo from "./components/WeatherInfo";
import NavBar from "./components/NavBar";
import Spinner from "./components/Spinner";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${
            import.meta.env.VITE_API_KEY
          }&units=metric `
        );
        if (res.status === 404) {
          throw new Error("Something went wrong!");
        }
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await res.json();
        setWeatherData(data);
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
  }, [search]);

  return (
    <>
      <div
        style={{ userSelect: "none" }}
        className="bg-[#F1F6F9] bg-opacity-50"
      >
        <ToastContainer type="error" />
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
