import React, { Component } from 'react'

export class SearchBar extends Component {
  render() {
    return (
        <div className="search-bar w-50">
                      <input
                        type="search"
                        id="search"
                        className="bg-white bg-opacity-25 border-0 rounded-5 shadow-effect w-75 p-2"
                        placeholder="Search for city"
                        aria-label="Search"
                      />
                    </div>
    )
  }
}

export default SearchBar
