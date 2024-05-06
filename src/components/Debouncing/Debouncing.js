import React, { useEffect, useState } from "react";
import { BASE_API_URL } from "../../utils/apiUrl";
import Navbar from "../Navbar";

const Debouncing = () => {
  const [name, setName] = useState("");

  async function Api() {
    var response = await fetch(BASE_API_URL);
    var data = await response.json();

    data.map((item, index) => {
      if (index < 5) {
        return console.log(item.id);
      }
    });
  }

  useEffect(() => {
    Api();
  }, []);

  useEffect(() => {
    const debounce = setTimeout(() => {
      console.log(name);
    }, 1000);

    return () => {
      clearTimeout(debounce);
    };
  }, [name]);

  return (
    <div>
      <Navbar />

      <div>Debouncing</div>
      <input
        placeholder="enter name"
        style={{ padding: 5, margin: 5 }}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default Debouncing;
