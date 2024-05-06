import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = ({ val }) => {
  const navigate= useNavigate()
  return (
    <div>
      <div>Home</div>
      <Link to="/shop" state={{ from: 'board' }}>Shop</Link>
      <div onClick={()=>{navigate(`/shop/${val}`)}}>{val}</div>
    </div>
  );
};

export default Home;
