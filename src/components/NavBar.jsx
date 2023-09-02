import React, { useEffect, useState } from "react";
import { FormControl } from "@mui/material";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
export default function NavBar({ handleSearch, handleToday, handleCelcius }) {
  const [pressed, setPressed] = useState(true);
  const [isToday, setIsToday] = useState(true);
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };
  useEffect(() => {
    handleCelcius(pressed);
    handleToday(isToday);
  }, [pressed, isToday]);
  return (
    <div className="bg-slate-100 shadow-md md:p-0 p-4">
      <div className=" px-3 lg:max-w-6xl mx-auto flex justify-between items-center">
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
        <div className="sm:flex hidden sm:justify-between sm:gap-10 sm:items-center">
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
            <Link to={"/"} className="md:block hidden">
              <img
                className="p-2 rounded-full hover:shadow-lg hover:rounded-full"
                src="https://static.vecteezy.com/system/resources/previews/022/123/561/original/weather-app-icon-outline-style-isolated-on-white-background-free-vector.jpg"
                alt=""
                width={100}
              />
            </Link>
          </div>
        </div>
        {/* Hamburger */}
        <div className="-mr-2 flex sm:hidden">
          <button
            type="button"
            onClick={handleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-slate-800 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span className="sr-only">Open Main Menu</span>
            {open ? (
              <FaTimes className="w-[20px] h-[20px]" />
            ) : (
              <FaBars className="w-[20px] h-[20px]" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden">
          <div className="px-2 flex justify-between pt-2 pb-3 space-y-1">
            <div className="">
              <Link to={"/"} className="md:block">
                <img
                  className="p-2 z-100 rounded-full hover:shadow-lg hover:rounded-full"
                  src="https://static.vecteezy.com/system/resources/previews/022/123/561/original/weather-app-icon-outline-style-isolated-on-white-background-free-vector.jpg"
                  alt=""
                  width={100}
                />
              </Link>
            </div>
            <div className="flex space-x-5 items-center">
              <div className="flex items-center border-slate-200 rounded-md border-2">
                <button
                  aria-pressed={isToday}
                  onClick={() => {
                    setIsToday(true);
                    handleToday(true);
                  }}
                  className={` rounded-md h-10 p-2 ${
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
