import React, { useState } from 'react';
import './index.css';

const api= {
  key: "024b218e0e36e7c1862ccdf5ffef9c30",
  base: "https://api.openweathermap.org/data/2.5/forecast",
  baset: "https://api.openweathermap.org/data/2.5/weather",
  keyt: "5bb216c75f6edf82eda28a4bb30b0263"
};


function App() {

  const [query, setQuery]= useState('');
  const [weather, setWeather]= useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.baset}?q=${query}&units=metric&appid=${api.keyt}`)
        .then(res => res.json())
        .then(result => setWeather(result));
        setQuery('')
        // console.log(query);
    }
    
  }

  return (
    <div className="app">
      <main className="main">
        <div className="search-box">
          <h1>Weather App</h1>
          <input type="text" className="search-bar" placeholder="Search..." 
            onChange={e => setQuery(e.target.value)} value={query}
              onKeyPress={search}></input>
        </div>
        <div className="weather-box">
          <div className="current-weather">
            <div className="location">Toronto, CA</div>
            <div className="date">Friday 22 October 2021</div>
            <div className="temprature">6°c</div>
            <div className="status">Cloudy</div>
          </div>
          <div className="forecast-weather">
            <div className="day" id="day01">
              <div className="date01">Oct 23</div>
              <div className="temp">6°c</div>
            </div>
            <div className="day" id="day02">
              <div className="date01">Oct 24</div>
              <div className="temp">5°c</div>
            </div>
            <div className="day" id="day03">
              <div className="date01">Oct 25</div>
              <div className="temp">16°c</div>
            </div>
            <div className="day" id="day04">
              <div className="date01">Oct 26</div>
              <div className="temp">9°c</div>
            </div>
            <div className="day" id="day05">
              <div className="date01">Oct 27</div>
              <div className="temp">5°c</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

// api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid={API key}