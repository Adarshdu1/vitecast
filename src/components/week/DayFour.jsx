import React, { useEffect, useState } from "react";
import {
  BsCloudDrizzleFill,
  BsCloudSun,
  BsCloudsFill,
  BsCloudyFill,
  BsFillCloudDrizzleFill,
  BsSnow3,
} from "react-icons/bs";
import { LiaCloudSunRainSolid } from "react-icons/lia";
import { MdSunny } from "react-icons/md";
import { TbMist } from "react-icons/tb";
import { WiDayThunderstorm } from "react-icons/wi";

export default function DayFour({ weatherData, isCelcius }) {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [timezone, setTimezone] = useState(null);
  const date = new Date();
  const utc = date.getTime() + timezone * 1000 - 330 * 60000;
  const nd = new Date(utc);
  const idx = (nd.getDay() + 3) % 7;
  const day = weekDays[idx];
  const [minTemp, setMinTemp] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    setTimezone(weatherData.city.timezone);

    setId(weatherData.list[20].weather[0].id);
    if (isCelcius) {
      const tmp = weatherData.list[20].main.temp_min;
      setMinTemp(tmp.toFixed(0));
      const tmp2 = weatherData.list[20].main.temp_max;
      setMaxTemp(tmp2.toFixed(0));
    } else {
      const tmp = weatherData.list[20].main.temp_min;
      const fahrenheit = (tmp * 9) / 5 + 32;
      setMinTemp(fahrenheit.toFixed(0));
      const tmp2 = weatherData.list[20].main.temp_max;
      const fahrenheit2 = (tmp2 * 9) / 5 + 32;
      setMaxTemp(fahrenheit2.toFixed(0));
    }
  }, [weatherData, isCelcius]);
  return (
    <div className="bg-white w-[200px] p-4 rounded-lg">
      <h1 className="text-center font-bold">{day}</h1>
      <div className="flex justify-center">
        {id >= 200 && id <= 232 && (
          <WiDayThunderstorm className="text-gray-500 mt-5 text-3xl" />
        )}
        {id >= 300 && id <= 321 && (
          <BsFillCloudDrizzleFill className="text-gray-500 mt-5 text-3xl" />
        )}
        {id >= 500 && id <= 504 && (
          <LiaCloudSunRainSolid className="text-gray-500 mt-5 text-3xl" />
        )}
        {id >= 520 && id <= 531 && (
          <BsCloudDrizzleFill className="text-gray-500 mt-5 text-3xl" />
        )}
        {id >= 600 && id <= 622 && id === 511 && (
          <BsSnow3 className="text-gray-500 mt-5 text-3xl" />
        )}
        {id >= 701 && id <= 781 && (
          <TbMist className="text-gray-500 mt-5 text-3xl" />
        )}
        {id === 800 && <MdSunny className="text-yellow-500 mt-5 text-3xl" />}
        {id === 801 && <BsCloudSun className="text-gray-500 mt-5 text-3xl" />}
        {id === 802 && <BsCloudyFill className="text-gray-500 mt-5 text-3xl" />}
        {id >= 803 && id <= 804 && (
          <BsCloudsFill className="text-gray-500 mt-5 text-3xl" />
        )}
      </div>
      <div className="mt-5 mb-4 flex justify-center space-x-2 items-center">
        <div className="text-2xl font-semibold">{maxTemp}° </div>
        <div className="text-gray-500 mt-1"> {minTemp}°</div>
      </div>
    </div>
  );
}
