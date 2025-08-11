import React, { Component } from "react";
import { FiSearch, FiX } from "react-icons/fi";

export class SearchBar extends Component {
  state = {
    query: "",
    isFocused: false,
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.query.trim()) {
      this.props.onSearch(this.state.query);
      this.setState({ query: "" });
    }
  };

  handleClear = () => {
    this.setState({ query: "" });
  };

  handleFocus = () => {
    this.setState({ isFocused: true });
  };

  handleBlur = () => {
    this.setState({ isFocused: false });
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className={`search-form d-flex align-items-center transition-all ${
          this.state.isFocused ? "focused" : ""
        }`}
      >
        <div className="search-input-container position-relative w-100">
          <FiSearch className="search-icon" />
          <input
            type="search"
            value={this.state.query}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            className="form-control search-input bg-white bg-opacity-50 border-0 rounded-5 shadow-effect px-5 py-2"
            placeholder="Search city..."
            aria-label="Search city"
          />
          {this.state.query && (
            <button
              type="button"
              onClick={this.handleClear}
              className="btn btn-link clear-btn position-absolute end-0 top-50 translate-middle-y"
            >
              <FiX />
            </button>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary rounded-5 ms-2 px-3 py-2 d-none d-md-block"
          disabled={!this.state.query.trim()}
        >
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
