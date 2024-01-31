import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

const DailyForecast = ({ title, items }) => {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-white ">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
            <p className="pt-2">{`${item.description}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;
