import React from "react";
import { Link } from "react-router-dom";

const Shop = ({ setVal, val }) => {
  return (
    <div>
      <div>
        <div>Shop</div>
        <Link to="/">Home</Link>
      </div>
      {val == 5 ? (
        <div>
          <button disabled>Increment</button>
          <button onClick={() => setVal(0)}>Reset</button>
        </div>
      ) : (
       <div>
         <button
          onClick={() => {
            setVal(val + 1);
          }}
          
        >
          Increment
        </button>
        </div>
      )}
    </div>
  );
};

export default Shop;
