import React from 'react';
import './index.css';

const api= {
  key: "024b218e0e36e7c1862ccdf5ffef9c30",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..."></input>
        </div>
      </main>
    </div>
  );
}

export default App;
