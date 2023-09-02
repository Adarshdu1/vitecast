import React, { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import iso31661 from "iso-3166-1";
export default function WindStatus({ wind, city, country }) {
  const [windSpeed, setWindSpeed] = useState(null);
  const [cityName, setCityName] = useState(null);
  const [countryName, setCountryName] = useState(null);
  useEffect(() => {
    let changeWind = wind * 3.6;

    setWindSpeed(changeWind.toFixed(1));
    setCityName(city);
    const cntName = country
      ? iso31661.whereAlpha2(country).country ?? country
      : null;
    setCountryName(cntName ?? country);
  }, [wind, city, country]);
  return (
    <div className="bg-white p-4 mob:w-[200px] rounded-lg">
      <h1 className="text-gray-500">Wind Status</h1>
      <div className="mt-6">
        <span className="text-5xl font-bold">{windSpeed} </span>
        <span className="text-gray-500">km/h</span>
      </div>
      <div className="flex items-center gap-3 mt-5">
        <div className="rounded-full bg-blue-200 w-8 h-8 text-center flex items-center justify-center">
          <MdLocationOn className="text-blue-500" />
        </div>

        <p className="font-semibold">
          {cityName}, {countryName}
        </p>
      </div>
    </div>
  );
}
