import React, { useEffect, useState } from "react";
import { FormControl } from "@mui/material";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
export default function NavBar({ handleSearch, handleToday, handleCelcius }) {
  const [pressed, setPressed] = useState(true);
  const [isToday, setIsToday] = useState(true);
  useEffect(() => {
    handleCelcius(pressed);
    handleToday(isToday);
  }, [pressed, isToday]);
  return (
    <div className="bg-slate-100 shadow-md">
      <div className=" px-3 max-w-6xl mx-auto flex justify-between items-center">
        <div className="">
          <div className="">
            <FormControl>
              <div className="">
                <div className="">
                  <SearchBar onSearch={handleSearch} />
                </div>
              </div>
            </FormControl>
          </div>
        </div>
        <div className="flex justify-between gap-10 items-center">
          <div className="flex items-center border-2 border-slate-200 rounded-md">
            <button
              aria-pressed={isToday}
              onClick={() => {
                setIsToday(true);
                handleToday(true);
              }}
              className={`rounded-md p-2 h-10 ${
                isToday && "bg-white text-blue-500"
              } hover:text-blue-500 border-r hover:shadow-lg`}
            >
              Today
            </button>
            <button
              aria-pressed={isToday}
              onClick={() => {
                setIsToday(false);
                handleToday(false);
              }}
              className={`rounded-md p-2 h-10 ${
                !isToday && "bg-white text-blue-500"
              } hover:text-blue-500 hover:shadow-lg`}
            >
              Week
            </button>
          </div>
          <div className="flex space-x-10 items-center">
            <div className="border-2 border-slate-200 hover:shadow-sm rounded-md">
              <button
                aria-pressed={pressed}
                onClick={() => {
                  setPressed(true);
                  handleCelcius(true);
                }}
                className={`rounded-md p-2 h-10 w-10 ${
                  pressed && "bg-white text-blue-500"
                }   hover:shadow-lg  hover:text-blue-500 border-r`}
              >
                °C
              </button>
              <button
                aria-pressed={!pressed}
                onClick={() => {
                  setPressed(false);
                  handleCelcius(false);
                }}
                className={`rounded-md p-2 h-10 w-10 ${
                  !pressed && "bg-white text-blue-500"
                }   hover:shadow-lg hover:text-blue-500`}
              >
                °F
              </button>
            </div>
            <Link to={"/"}>
              <img
                className="p-2 rounded-full hover:shadow-lg hover:rounded-full"
                src="https://static.vecteezy.com/system/resources/previews/022/123/561/original/weather-app-icon-outline-style-isolated-on-white-background-free-vector.jpg"
                alt=""
                width={100}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
