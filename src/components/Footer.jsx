import React from "react";

export default function Footer() {
  return (
    <div className="mt-5 border-t-2 border-slate-200 bg-slate-200 bg-opacity-80 shadow-md">
      <div className="p-3 max-w-6xl text-gray-800 mx-auto flex flex-col justify-center items-center">
        <p className="text-justify">
          All rights reserved <b>|</b> Copyright &copy; 2023
        </p>
        <p className="whitespace-nowrap">
          Made using{" "}
          <a href="https://openweathermap.org/">
            <b>OpenWeatherAPI</b>
          </a>{" "}
          and{" "}
          <a href="https://unsplash.com/developers">
            {" "}
            <b>UnsplashAPI</b>
          </a>
        </p>
      </div>
    </div>
  );
}
