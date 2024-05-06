import React from "react";

const Contact = ({ setVal, val, reset }) => {
  const handleReset = () => {
    setVal(0);
    reset(true);
    setTimeout(() => reset(false), 2000);
  };

  return (
    <div>
      <button
        onClick={() => {
          setVal(val + 1);
        }}
        disabled={val === 5}
      >
        Increment
      </button>
      {val === 5 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};

export default Contact;
