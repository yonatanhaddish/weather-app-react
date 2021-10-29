import moment from "moment";
import React, { useState } from "react";
import "./index.css";

const api = {
  key: "024b218e0e36e7c1862ccdf5ffef9c30",
  base: "https://api.openweathermap.org/data/2.5/forecast",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}?q=${query}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((data) => {
          setWeather(data);
          setQuery("");
          console.log(data);
        })
        .catch(function() {
          console.log('error');
          alert("error");
        });
    }
  };
  // console.log(data.city.name);

  return (
    <div className="app">
      <main className="main">
        <div className="search-box">
          <h1>Weather App</h1>
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          ></input>
        </div>
        {typeof weather.list != "undefined" ? (
          <div className="weather-box">
            <div className="current-weather">
              <div className="location">{weather.city.name}, {weather.city.country}</div>
              <div className="date">{moment().format("LL")}</div>
              <div className="temprature">
                {Math.round(weather.list[0].main.temp)}°c
              </div>
              <div className="status">{weather.list[0].weather[0].main}</div>
            </div>
            <div className="forecast-weather">
              <div className="day" id="day01">
                <div className="date01">
                  {moment.unix(weather.list[4].dt).format("dddd")}
                </div>
                <div className="temp">
                  {Math.round(weather.list[4].main.temp)}°c
                </div>
              </div>
              <div className="day" id="day02">
                <div className="date01">
                  {moment.unix(weather.list[12].dt).format("dddd")}
                </div>
                <div className="temp">
                  {Math.round(weather.list[12].main.temp)}°c
                </div>
              </div>
              <div className="day" id="day03">
                <div className="date01">
                  {moment.unix(weather.list[20].dt).format("dddd")}
                </div>
                <div className="temp">
                  {Math.round(weather.list[20].main.temp)}°c
                </div>
              </div>
              <div className="day" id="day04">
                <div className="date01">
                  {moment.unix(weather.list[28].dt).format("dddd")}
                </div>
                <div className="temp">
                  {Math.round(weather.list[28].main.temp)}°c
                </div>
              </div>
              <div className="day" id="day05">
                <div className="date01">
                  {moment.unix(weather.list[36].dt).format("dddd")}
                </div>
                <div className="temp">
                  {Math.round(weather.list[36].main.temp)}°c
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;

