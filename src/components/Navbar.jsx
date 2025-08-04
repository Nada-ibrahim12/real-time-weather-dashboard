import { style } from "framer-motion/client";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid py-3">
        <div className=" rounded-5 bg-opacity-25 shadow-sm bg-light p-2 pe-4 ps-4">
          <div className="d-flex justify-content-between align-items-center">
            <div className="logo">
              <p className="m-0 ms-3">Weather</p>
            </div>
            <div className="search-bar w-50">
              <input
                type="search"
                id="search"
                className="bg-white bg-opacity-25 border-0 rounded-5 shadow-effect w-75 p-2"
                placeholder="Search for city"
                aria-label="Search"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
