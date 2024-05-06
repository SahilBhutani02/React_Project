import React, { useState } from "react";
import Contact from "./Contact";
import Navbar from "../Navbar";

const About = () => {
  const [val, setVal] = useState(0);
  const [reset, setReset] = useState(false);

  return (
    <div>
      <Navbar />
      
      {val}
      <Contact setVal={setVal} val={val} reset={setReset} />
      {reset ? (
        <p style={{ backgroundColor: "green", color: "white" }}>Done</p>
      ) : (
        <p style={{ backgroundColor: val == 5 ? "red" : "", color: "white" }}>
          Done
        </p>
      )}
    </div>
  );
};

export default About;
