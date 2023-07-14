import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9353169fadb314c9e78c3c8df648fb96`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
      setCity(resJson);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p> No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-street-view"></i>
                {search}
              </h2>

              {city.main ? (
                <h1 className="temp">{city.main.temp}</h1>
              ) : (
                <p>No Temperature Data</p>
              )}

              {city.main ? (
                <h3 className="tempmin_max">
                  Min: {city.main.temp_min}°C | Max: {city.main.temp_max}°C
                </h3>
              ) : (
                <p>No Temperature Data</p>
              )}
              {/* <h3 className="tempmin_max">Min: 5°C | Max: 5°C</h3> */}
            </div>

            <div className="waveone"></div>
            <div className="wavetwo"></div>
            <div className="wavethree"></div>
          </div>
        )}
      </div>
    </> // React Fragment
  );
};

export default Tempapp;
