import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Seattle",
    description: "showers",
    temperature: 8,
    humidity: 86,
    wind: 5,
    imgUrl: "http://openweathermap.org/img/wn/10d@2x.png",
  };

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
                  autofocus="on"
                  autoComplete="off"
                />
              </div>

              <button type="submit" value="search" className="btn btn-search">
                search
              </button>

              <button className="btn btn-current">current ▽</button>
            </form>

            <p class="greeting">Hello!</p>
            <h1>{weatherData.city}</h1>
            <p className="description">{weatherData.description}</p>

            <div className="row">
              <div className="col">
                <div className="temp-now">
                  <strong>{weatherData.temperature}</strong>
                  <span className="units">
                    <a href="/" className="unitLink">
                      °C
                    </a>
                    |
                    <a href="/" className="unitLink">
                      °F
                    </a>
                  </span>
                </div>
              </div>

              <div className="col">
                <ul className="temp-info">
                  <li>Humidity: {weatherData.humidity}%</li>
                  <li>Wind: {weatherData.wind}mph</li>
                  <li>
                    <span>H: 9°</span>&ensp;
                    <span>L: 7°</span>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <p className="current-date">
              -last updated-
              <br />
              Sunday Jan. 31, 2021
              <br />
              11:00
            </p>

            <img src={weatherData.imgUrl} alt="current weather icon" />

            <div className="row"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

