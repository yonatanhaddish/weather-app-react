// import moment from 'moment';
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
        {(typeof weather.list != "undefined") ? (
          <div>
            <div className="weather-box">
              <div className="current-weather">
                <div className="location">{weather.city.name}</div>
                <div className="date">llll</div>
                <div className="temprature">44°c</div>
                {/* <div className="status">{weather.city.country}</div> */}
              </div>
              <div className="forecast-weather">
                <div className="day" id="day01">
                  <div className="date01">Oct 23</div>
                  {/* <div className="temp">{Math.round(weather.list[1].main.temp)}°c</div> */}
                </div>
                <div className="day" id="day02">
                  <div className="date01">Oct 24</div>
                  {/* <div className="temp">{Math.round(weather.list[2].main.temp)}°c</div> */}
                </div>
                <div className="day" id="day03">
                  <div className="date01">Oct 25</div>
                  {/* <div className="temp">{Math.round(weather.list[3].main.temp)}°c</div> */}
                </div>
                <div className="day" id="day04">
                  <div className="date01">Oct 26</div>
                  {/* <div className="temp">{Math.round(weather.list[4].main.temp)}°c</div> */}
                </div>
                <div className="day" id="day05">
                  <div className="date01">Oct 27</div>
                  {/* <div className="temp">{Math.round(weather.list[5].main.temp)}°c</div> */}
                </div>
              </div>
            </div>
          </div>
        ) : ('')
        }
      </main>
    </div>
  );
}

export default App;

// api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid={API key}
