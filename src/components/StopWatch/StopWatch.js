import React, { useState } from "react";
import Navbar from "../Navbar";
import dayjs from "dayjs"

const StopWatch = () => {
  const [count, setCount] = useState(0);
  const [timing, setTiming] = useState();

 const dob =dayjs("2002-11-05").format('DD/MM/YYYY')

  function Start() {
    const watch = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    setTiming(watch);
  }

  function Reset() {
    setCount(0);
  }

  function Pause() {
    clearInterval(timing);
  }

  return (
    <div>
      <Navbar />

      <div>StopWatch</div>
      <p>{count}</p>
      <div>
        <button onClick={() => Start()}>start</button>
        <button onClick={() => Reset()}>reset</button>
        <button onClick={() => Pause()}>pause</button>
      </div>
      {dob}
      
    </div>
  );
};

export default StopWatch;
