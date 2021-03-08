import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import HourlyForecast from "./HourlyForecast";

export default function WeatherForecast(props){
const [loaded, setLoaded]=useState (false);
const [forecast, setForecast]=useState(null);

    function handleForecastResponse(response) {
        setForecast(response.data);
        setLoaded(true);
    }
    
    if (loaded && props.city === forecast.city.name) {
        return (
          <div className="WeatherForecast row">
            <HourlyForecast data={forecast.list[0]} />
            <HourlyForecast data={forecast.list[1]} />
            <HourlyForecast data={forecast.list[2]} />
            <HourlyForecast data={forecast.list[3]} />
            <HourlyForecast data={forecast.list[4]} />
          </div>
        );
    }else{
    let apiKey="06e918cbeda5078872c6886bf7421496";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(url).then(handleForecastResponse);
    return null;
    }
}