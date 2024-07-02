import React from "react";
import { Link } from "react-router-dom";



const Search = () => {
  return (
    <>
      <section className="search">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link to="/home" className="text-decoration-none" color=" #d3b9b1">
            <h1 style={{ color: "#d3b9b1" }}>LUCA</h1>

            </Link>
          </div>
          <div className="icons d-flex">
            <Link to="/profile" className="text-dark mx-3">
            <i className="fa fa-user" style={{ color: "#d3b9b1" }}></i>
            </Link>
            <Link to="/cart" className="text-dark">
            <i className="fa fa-shopping-bag" style={{ color: "#d3b9b1" }}></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
