import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {


   const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect( () => {
        const fetchApi = async () => {
          const url = `http://api.openweathermap.org/data/2.5/weather?q=pokhara&appid=9353169fadb314c9e78c3c8df648fb96`
          const response = await fetch(url);
          const resJson = await response.json();    
        }
    fetchApi();
    }, [search])
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input type="search" className="inputField" onChange={() => {}} />
        </div>

        <div className="info">
          <h2 className="location">
            <i class="fa-solid fa-street-view">{city}</i>
          </h2>

          <h1 className="temp">5°C</h1>
          <h3 className="tempmin_max">Min: 5°C | Max: 5°C</h3>
        </div>

        <div className="waveone"></div>
        <div className="wavetwo"></div>
        <div className="wavethree"></div>
      </div>
    </> // React Fragment
  )
};

export default Tempapp;
