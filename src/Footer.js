import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <h5>
        coded by{" "}
        <a
          href="https://www.linkedin.com/in/ruth-bonilla-05a2321bb/"
          target="_blank"
        >
          Ruth Bonilla
        </a>{" "}
        and is{" "}
        <a href="https://github.com/ruthebonilla/weather-react" target="_blank">
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a href="https://sad-hodgkin-5170fa.netlify.app/" target="_blank">
          on Netlify
        </a>
      </h5>
    </div>
  );
}
