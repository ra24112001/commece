import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const colorPalette = {
  light_pink: "#d3b9b1",
  pale_yellow: "#FCFFE0",
  muted_green: "#BACD92",
  grayish_teal: "#75A47F",
  off_white: "#F6F5F2",
  blush_pink: "#E1ACAC",
  cream: "#FFFFEC",
  rust: "#CA8787",
};

const Head = () => {
  const { blush_pink, muted_green } = colorPalette;
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle changes in the search input field
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <section
      className="head bg-dark text-white py-3"
      style={{ backgroundColor: muted_green }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <div className="left d-flex align-items-center">
          <i className="fa fa-phone mr-2" style={{ color: blush_pink }}></i>
          <label className="mb-0"> +1 1111 111 111</label>
          <i
            className="fa fa-envelope ml-3 mr-2"
            style={{ color: blush_pink }}
          ></i>
          <label className="mb-0">
            <a href="mailto:LUCA.help@gmail.com" className="text-white">
              LUCA.help@gmail.com
            </a>
          </label>
        </div>
        <div className="right">
          {/* Button to add a product */}
          <Link to="/add-product" className="add_pro">
            Add Product
          </Link>
        </div>
      </div>
      <section className="search">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link to="/home" className="text-decoration-none" color=" #d3b9b1">
              <h1 style={{ color: "#d3b9b1" }}>LUCA</h1>
            </Link>
          </div>
          {/* Search input field with search icon */}
          <div className="search-bar">
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <i className="fa fa-search search-icon"></i>
            </div>
          </div>
          <div className="icons d-flex">
            <Link to="/profile" className="text-dark mx-3">
              <i className="fa fa-user" style={{ color: "#d3b9b1" }}></i>
            </Link>
            <Link to="/cart" className="text-dark">
              <i className="fa fa-shopping-cart" style={{ color: "#d3b9b1" }}></i>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Head;
