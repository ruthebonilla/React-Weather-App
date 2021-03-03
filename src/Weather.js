import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true, 
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      tempmax: response.data.main.temp_max,
      tempmin: response.data.main.temp_min,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/10d@2x.png",
      date: "Tuesday March 2, 2021 07:00pm",
    });
  
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="form-group w-50">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Enter a city"
                    autoFocus="on"
                    autoComplete="off"
                  />
                </div>

                <button type="submit" value="search" className="btn btn-search">
                  search
                </button>

                <button className="btn btn-current">current ▽</button>
              </form>

              <p class="greeting">Hello!</p>
              <h1>{weatherData.city} </h1>
              <p className="description">{weatherData.description}</p>

              <div className="row">
                <div className="col">
                  <div className="temp-now">
                    <strong>{Math.round(weatherData.temperature)}</strong>
                    <span className="units">
                      <a href="/" className="unitLink">
                        °F
                      </a>
                      |
                      <a href="/" className="unitLink">
                        °C
                      </a>
                    </span>
                  </div>
                </div>

                <div className="col">
                  <ul className="temp-info">
                    <li>Humidity: {weatherData.humidity}%</li>
                    <li>Wind: {Math.round(weatherData.wind)} mph</li>
                    <li>
                      <span>H: {Math.round(weatherData.tempmax)}°</span>&ensp;
                      <span>L: {Math.round(weatherData.tempmin)}°</span>
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              <p className="current-date">
                -last updated-
                <br />
                {weatherData.date}
              </p>

              <img src={weatherData.iconUrl} alt={weatherData.description} />

              <div className="row"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "06e918cbeda5078872c6886bf7421496";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
