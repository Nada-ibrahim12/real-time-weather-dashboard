import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div className="container mx-auto ">
        <div className="flex justify-between items-center py-4 ">
          <div className="logo text-xl font-bold ">
            <h1>Weather Dashboard</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar
