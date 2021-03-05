import React from "react";
import DateStamp from "./DateStamp";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <p class="greeting">Hello!</p>
      <h1>{props.data.city} </h1>
      <p className="description">{props.data.description}</p>

      <div className="row">
        <div className="col">
          <div className="temp-now">
            <strong>{Math.round(props.data.temperature)}</strong>
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
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
            <li>
              <span>H: {Math.round(props.data.tempmax)}°</span>&ensp;
              <span>L: {Math.round(props.data.tempmin)}°</span>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="current-date">
        -last updated-
        <br />
        <DateStamp date={props.data.date} />
      </p>
      <WeatherIcon code={props.data.icon}  />
      
      <div className="row"></div>
    </div>
  );
}
