import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        margin: 10,
        padding: 10,
        backgroundColor: "whitesmoke",
      }}
    >
      <Link to="/">Routers</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/stopwatch">StopWatch</Link>
      <Link to="/debouncing">Debouncing</Link>
      <Link to="/news">News</Link>
    </div>
  );
};

export default Navbar;
