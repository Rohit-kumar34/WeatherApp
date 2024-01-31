import "./App.css";
import Input from "./components/Search/Input";
import TimeLocation from "./components/TImeLocation";
import TemperatureDetails from "./components/TemperatureDetails";
import DailyForecast from "./components/DailyForecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "Delhi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getFormattedWeatherData({ ...query, units }).then(
        (data) => {
          setWeather(data);
        }
      );
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div>
      <Input setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div className="mx-auto max-w-screen-lg mt-2 py-8 px-32 bg-customColor border-black">
          <TimeLocation weather={weather} />
          <TemperatureDetails weather={weather} />
          <DailyForecast title="Daily Forecast" items={weather.daily} />
        </div>
      )}
    </div>
  );
}

export default App;
