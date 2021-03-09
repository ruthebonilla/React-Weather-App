import React from "react";
import DateStamp from "./DateStamp";
import WeatherIcon from "./WeatherIcon";
import WeatherUnits from "./WeatherUnits";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <p class="greeting">Hello!</p>
      <h1>{props.data.city} </h1>
      <p className="description">{props.data.description}</p>

      <div className="row">
        <div className="col">
          <WeatherUnits fahrenheit={props.data.temperature} />
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

      <p className="current-date">
        -last updated-
        <br />
        <DateStamp date={props.data.date} />
      </p>
      <WeatherIcon code={props.data.icon} />

      <div className="row"></div>
    </div>
  );
}
