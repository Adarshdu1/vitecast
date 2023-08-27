import React, { useEffect, useState } from "react";

export default function Visibility({ visible }) {
  const [good, setGood] = useState(null);
  const [average, setAverage] = useState(null);
  const [poor, setPoor] = useState(null);
  const [visibility, setVisibility] = useState(null);

  useEffect(() => {
    setVisibility(visible / 1000);
    if (visibility >= 10) {
      setGood(true);
      setPoor(false);
      setAverage(false);
    } else if (visibility >= 5 && visibility < 10) {
      setAverage(true);
      setGood(false);
      setPoor(false);
    } else {
      setPoor(true);
      setGood(false);
      setAverage(false);
    }
  }, [visible, visibility]);

  return (
    <div className="bg-white p-4 w-[200px] rounded-lg">
      <h1 className="text-gray-500">Visibility</h1>
      <div className="mt-6 flex space-x-10  items-center">
        <div className="whitespace-nowrap">
          <span className="text-5xl font-bold">{visibility} </span>
          <span className="text-gray-500">km</span>
        </div>
        <div
          className={`border rounded-full ${poor && "bg-red-100"} ${
            good && "bg-green-100"
          } ${average && "bg-yellow-100"}`}
        >
          <div className={`p-3 rounded-full ${good && "bg-green-500"}`}></div>
          <div
            className={`p-3 rounded-full ${average && "bg-yellow-500"}`}
          ></div>
          <div className={`p-3 rounded-full ${poor && "bg-red-500"}`}></div>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-5">
        <p className="text-gray-500">Status: </p>

        <p
          className={`font-semibold ${poor && "text-red-500"} ${
            good && "text-green-500"
          } ${average && "text-yellow-500"}`}
        >
          {good && "Good"}
          {average && "Average"}
          {poor && "Poor"}
        </p>
      </div>
    </div>
  );
}
