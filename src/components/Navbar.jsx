import React, { Component } from "react";
import SearchBar from "./SearchBar.jsx";
import { WiDaySunny } from "react-icons/wi";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top bg-light bg-opacity-75 shadow-effect py-2 px-3 rounded-bottom backdrop-blur">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="navbar-brand d-flex align-items-center gap-2">
            <WiDaySunny
              size={32}
              className="text-warning weather-icon"
              style={{ animation: "pulse 2s infinite" }}
            />
            <span className="logo fs-4 fw-bold text-gradient">
              WeatherSphere
            </span>
          </div>

          {/* Search Bar */}
          <div className="d-flex align-items-center gap-3">
            <SearchBar onSearch={this.props.onSearch} />
            <button
              className="btn btn-outline-primary rounded-5 d-flex align-items-center gap-1"
              onClick={this.props.onLocationClick}
            >
              <i className="bi bi-geo-alt"></i>
              <span className="d-none d-md-inline">My Location</span>
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
