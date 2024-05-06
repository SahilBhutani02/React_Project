import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Shop from "../Shop";
import Item from "../Item";

const Routing = () => {
  const [val, setVal] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home val={val} />,
    },
    {
      path: "/shop",
      element: <Shop setVal={setVal} val={val} />,
    },
    {
      path: "/shop/:id",
      element: <Item setVal={setVal} val={val} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routing;
