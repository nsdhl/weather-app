import React from "react";
import "./css/style.css";

const Tempapp = () => {
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input type="search" className="inputField" onChange={() => {}} />
        </div>

        <div className="info">
          <h2 className="location">
            <i class="fa-solid fa-street-view">Kathmandu </i>
          </h2>

          <h1 className="temp">5°C</h1>
          <h3 className="tempmin_max">Min: 5°C | Max: 5°C</h3>
        </div>

        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
    </> // React Fragment
  );
};

export default Tempapp;
