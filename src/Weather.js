import React from "react";
export default function App() {
  return (
    <div className="Weather">
      <div class="weather-app-wrapper">
        <div class="weather-container">
          <form id="search-form">
            <div class="row">
              <div class="col-9">
                <input
                  type="search"
                  placeholder="Type a city"
                  class="form-control"
                  id="form-search-box"
                  autocomplete="off"
                />
              </div>
              <div class="col-3">
                <input
                  type="submit"
                  value="search"
                  class="btn w-100"
                  id="button-search-form"
                />
              </div>
            </div>
          </form>
          <div class="overview">
            <div class="row">
              <div class="col-6">
                <h1 id="city">New York</h1>
              </div>
              <div class="col-6">
                <div class="weather-temperature">
                  <img src="" alt="" id="icon" />
                  <strong id="temperature">19</strong>
                  <span class="units">ºC</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <ul>
                <li id="time"></li>
                <li id="date"></li>
              </ul>
            </div>
            <div class="col-6">
              <ul>
                <li id="description"></li>
                <li>
                  Humidity: <span id="humidity">0</span>%
                </li>
                <li>
                  Wind: <span id="wind">0</span> km/h
                </li>
              </ul>
            </div>
          </div>
          <div class="weather-forecast" id="forecast"></div>
        </div>
        <small>
          <a
            href="https://github.com/sallyelaineleeduffy/weather-app-wk7"
            target="_blank"
            rel="noreferrer"
          >
            Open Source Code
          </a>
          by Sally Lee-Duffy
        </small>
      </div>
    </div>
  );
}
