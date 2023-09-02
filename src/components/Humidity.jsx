import React, { useEffect, useState } from "react";

export default function Humidity({ humidRate }) {
  const [humid, setHumid] = useState(null);
  const [normal, setNormal] = useState(null);
  const [dry, setDry] = useState(null);
  const [humidity, setHumidity] = useState(null);
  useEffect(() => {
    setHumidity(humidRate);
    if (humidity >= 60) {
      setHumid(true);
      setDry(false);
      setNormal(false);
    } else if (humidity >= 30 && humidity < 60) {
      setNormal(true);
      setHumid(false);
      setDry(false);
    } else {
      setDry(true);
      setHumid(false);
      setNormal(false);
    }
  }, [humidRate, humidity]);

  return (
    <div className="bg-white mob:w-[200px] p-4 rounded-lg">
      <h1 className="text-gray-500">Humidity</h1>
      <div className="mt-6 flex space-x-10  items-center">
        <div className="whitespace-nowrap">
          <span className="text-5xl font-bold">{humidity} </span>
          <span className="text-gray-500 text-xl">%</span>
        </div>
        <div
          className={`border rounded-full ${dry && "bg-red-100"} ${
            normal && "bg-green-100"
          } ${humid && "bg-yellow-100"}`}
        >
          <div className={`p-3 rounded-full ${normal && "bg-green-500"}`}></div>
          <div className={`p-3 rounded-full ${humid && "bg-yellow-500"}`}></div>
          <div className={`p-3 rounded-full ${dry && "bg-red-500"}`}></div>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-5">
        <p className="text-gray-500">Status: </p>

        <p
          className={`font-semibold ${dry && "text-red-500"} ${
            normal && "text-green-500"
          } ${humid && "text-yellow-500"}`}
        >
          {dry && "Fully Dry"}
          {normal && "Good Quality"}
          {humid && "Humid"}
        </p>
      </div>
    </div>
  );
}
