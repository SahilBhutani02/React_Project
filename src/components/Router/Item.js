import React from "react";
import { Link, useParams } from "react-router-dom";

const Item = () => {
  const { id } = useParams();
  return (
    <div>
      <Link to="/">Home</Link>
      <div>Item {id}</div>
    </div>
  );
};

export default Item;
