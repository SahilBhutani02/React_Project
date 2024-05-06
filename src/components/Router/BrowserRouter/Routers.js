import React, { useState } from "react";
import {Route, Routes } from "react-router-dom";
import Home from "../Home";
import Shop from "../Shop";
import Item from "../Item";
import Navbar from "../../Navbar";
const Routers = () => {
  const [val, setVal] = useState(0);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home val={val} />} />
        <Route path="/shop" element={<Shop setVal={setVal} val={val} />} />
        <Route path="/shop/:id" element={<Item setVal={setVal} val={val} />} />
      </Routes>
    </div>
  );
};

export default Routers;
