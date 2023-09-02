import React from "react";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

export default function SunriseSunset({ sunrise, sunset }) {
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className="bg-white mob:w-[200px] p-4 rounded-lg">
      <h1 className="text-gray-500">Sunrise and Sunset</h1>
      <div className="flex items-center gap-3 mt-6">
        <BsFillArrowUpCircleFill className="text-4xl text-yellow-500" />

        <p className="font-semibold">{sunriseTime}</p>
      </div>
      <div className="flex items-center gap-3 mt-5">
        <BsFillArrowDownCircleFill className="text-4xl text-yellow-500" />

        <p className="font-semibold">{sunsetTime}</p>
      </div>
    </div>
  );
}
