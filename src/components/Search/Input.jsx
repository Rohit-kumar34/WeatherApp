import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

const Input = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") {
      setQuery({ q: city });
    }
    setCity("");
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.target.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <div className="py-3 md:px-32 bg-customColor flex flex-row justify-center items-center">
      <h1 class="text-white text-sm ml-6 md:text-lg md:font-semibold">
        WeatherWise
      </h1>

      <div className="flex flex-row w-3/4 items-center justify-center space-x-4 ml-6 md:ml-40">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="search for city...."
          className="text-md font-light p-2 w-3/4 shadow-xl capitalize focus:outline-none placeholder:lowercase rounded-md"
        />

        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />

        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>

      <div className="flex flex-row w-1/2 items-center justify-center ">
        <button
          name="metric"
          className="text-xl text-white font-light transition ease-out hover:scale-125 "
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-white text-xl mx-1">|</p>
        <button
          name="imperial"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Input;
