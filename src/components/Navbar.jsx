import { style } from "framer-motion/client";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";

export class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid py-3">
        <div className=" rounded-5 bg-opacity-25 shadow-sm bg-light p-2 pe-4 ps-4">
          <div className="d-flex justify-content-between align-items-center">
            <div className="logo">
              <p className="m-0 ms-3">Weather</p>
            </div>
            <SearchBar />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
