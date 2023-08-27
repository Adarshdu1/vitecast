import React, { useEffect, useState } from "react";
import { MdSunny } from "react-icons/md";
import {
  BsCloudDrizzleFill,
  BsCloudSun,
  BsCloudsFill,
  BsCloudyFill,
  BsFillCloudDrizzleFill,
  BsSnow3,
  BsSun,
} from "react-icons/bs";
import { WiDayThunderstorm } from "react-icons/wi";
import { LiaCloudSunRainSolid } from "react-icons/lia";
import { TbMist } from "react-icons/tb";
import { LuGauge } from "react-icons/lu";
export default function Dashboard({ weatherData, isCelcius }) {
  const cityName = weatherData.name;
  const countryCode = weatherData.sys.country;
  const [temperature, setTemperature] = useState(null);
  const timezone = weatherData.timezone;
  const [localTime, setLocalTime] = useState(null);
  const [localDay, setLocalDay] = useState(null);
  const condition = weatherData.weather[0].main;
  const description =
    weatherData.weather[0].description[0].toUpperCase() +
    weatherData.weather[0].description.slice(1);
  const id = weatherData.weather[0].id;
  const [pressure, setPressure] = useState(null);
  const [image, setImage] = useState(null);
  useEffect(() => {
    try {
      const fetchImage = async () => {
        const res = await fetch(
          `https://api.unsplash.com/photos/random?query=${cityName}&client_id=${
            import.meta.env.VITE_UNSPLASH_API_KEY
          }&orientation=landscape`
        );
        if (res.status === 403 || !res.ok || res.status === 429) {
          throw new Error("Unsplash API Limit Exceeded");
        }
        const data = await res.json();
        setImage(data.urls.regular);
      };
      fetchImage();
    } catch (error) {
      console.log(error);
    }
  }, [cityName]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timezone) {
        const date = new Date();
        const utc = date.getTime() + timezone * 1000 - 330 * 60000;
        const nd = new Date(utc);
        setLocalTime(nd.toLocaleTimeString());
        const daysOfWeek = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        setLocalDay(daysOfWeek[nd.getDay()]);
      }
    }, 1000);
    const changePressure = weatherData.main.pressure * 0.75006216827;
    setPressure(changePressure.toFixed(2));
    const temp = weatherData.main.temp;
    if (!isCelcius) {
      const fahrenheit = (temp * 9) / 5 + 32;
      setTemperature(fahrenheit.toFixed(1));
    } else {
      setTemperature(temp.toFixed(1));
    }
    return () => clearInterval(intervalId);
  }, [timezone, isCelcius, weatherData]);
  return (
    <div className="">
      <div className="flex flex-col items-center">
        <div className="">
          {id >= 200 && id <= 232 && (
            <WiDayThunderstorm className="text-gray-500 mt-10 text-center text-[200px]" />
          )}
          {id >= 300 && id <= 321 && (
            <BsFillCloudDrizzleFill className="text-gray-500 mt-10 text-center text-[200px]" />
          )}
          {id >= 500 && id <= 504 && (
            <LiaCloudSunRainSolid className="text-gray-500 mt-10 text-center text-[200px]" />
          )}
          {id >= 520 && id <= 531 && (
            <BsCloudDrizzleFill className="text-gray-500 mt-10 text-center text-[200px]" />
          )}
          {id >= 600 && id <= 622 && id === 511 && (
            <BsSnow3 className="text-gray-500 mt-10 text-center text-[200px]" />
          )}
          {id >= 701 && id <= 781 && (
            <TbMist className="text-gray-500 mt-10 text-center text-[200px]" />
          )}
          {id === 800 && (
            <MdSunny className="text-yellow-500 mt-10 text-center text-[200px]" />
          )}
          {id === 801 && (
            <BsCloudSun className="text-gray-500 mt-10 text-center text-[200px]" />
          )}
          {id === 802 && (
            <BsCloudyFill className="text-gray-500 mt-10 text-center text-[200px]" />
          )}
          {id >= 803 && id <= 804 && (
            <BsCloudsFill className="text-gray-500 mt-10 text-center text-[200px]" />
          )}
        </div>
        <div className="flex items-center gap-2 mt-5">
          <span className="text-3xl font-bold">{temperature}</span>
          <span> {isCelcius ? "°C" : "°F"}</span>
        </div>
        <div className="flex items-center gap-4 mt-3">
          <span className=" font-semibold text-xl">{localDay}</span>
          <span>{localTime}</span>
        </div>
      </div>
      <div className="mt-5 flex justify-center">
        <hr className="border-slate-200 w-[250px]" />
      </div>
      <div className="mt-5">
        <div className="flex justify-start items-center gap-4">
          <div className="">
            {id >= 200 && id <= 232 && (
              <WiDayThunderstorm className="text-gray-500 text-2xl" />
            )}
            {id >= 300 && id <= 321 && (
              <BsFillCloudDrizzleFill className="text-gray-500 text-2xl" />
            )}
            {id >= 500 && id <= 504 && (
              <LiaCloudSunRainSolid className="text-gray-500 text-2xl" />
            )}
            {id >= 520 && id <= 531 && (
              <BsCloudDrizzleFill className="text-gray-500 text-2xl" />
            )}
            {id >= 600 && id <= 622 && id === 511 && (
              <BsSnow3 className="text-gray-500 text-2xl" />
            )}
            {id >= 701 && id <= 781 && (
              <TbMist className="text-gray-500 text-2xl" />
            )}
            {id === 800 && <BsSun className="text-yellow-500 text-2xl" />}
            {id === 801 && <BsCloudSun className="text-gray-500 text-2xl" />}
            {id === 802 && <BsCloudyFill className="text-gray-500 text-2xl" />}
            {id >= 803 && id <= 804 && (
              <BsCloudsFill className="text-gray-500 text-2xl" />
            )}
          </div>
          <div className="font-semibold">{condition}</div>
        </div>
        {description !== condition && (
          <div className="flex px-10 justify-start items-center gap-4 mt-1">
            {description}
          </div>
        )}
        <div className="flex justify-start items-center gap-4 mt-2">
          <div className="">
            <LuGauge className="text-blue-500 text-2xl" />
          </div>
          <div className="font-semibold">
            <span>Pressure -</span>
            <span className="font-normal"> {pressure} mm Hg</span>
          </div>
        </div>
        <div className="relative mt-10">
          <p className="absolute top-0 left-0  shadow-lg border hover:border-blue-400 backdrop-filter backdrop-blur-md rounded-full px-2 mt-1 mx-1 whitespace-nowrap bg-gray-100 hover:bg-white hover:text-blue-500">
            {cityName}, {countryCode}
          </p>
          <img
            className="rounded-xl w-60 h-[180px]"
            src={
              image ??
              "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2022/07/28/1242338-varanasi-tourism.jpg?im=FitAndFill=(1200,900)"
            }
            alt="Varanasi"
          />
        </div>
      </div>
    </div>
  );
}
