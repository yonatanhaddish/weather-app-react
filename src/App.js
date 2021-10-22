import React from 'react';
import './index.css';

const api= {
  key: "024b218e0e36e7c1862ccdf5ffef9c30",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main className="main">
        <div className="search-box">
          <h1>Weather App</h1>
          <input type="text" className="search-bar" placeholder="Search..."></input>
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
              <div className="temp01">6°c</div>
            </div>
            <div className="day" id="day02">
              <div className="date02">Oct 24</div>
              <div className="temp02">5°c</div>
            </div>
            <div className="day" id="day03">
              <div className="date01">Oct 25</div>
              <div className="temp01">16°c</div>
            </div>
            <div className="day" id="day04">
              <div className="date01">Oct 26</div>
              <div className="temp01">9°c</div>
            </div>
            <div className="day" id="day05">
              <div className="date01">Oct 27</div>
              <div className="temp01">5°c</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
