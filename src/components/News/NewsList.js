import React from "react";
import NewsCard from "./NewsCard";
import { Constants } from "../../utils/constants";
import Navbar from "../Navbar";
const NewsList = () => {
  return (
    <div className="bg-dark-clr sm:py-[46px] py-[20px]">
      <Navbar />

      <div className="container">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6">
          {Constants.newsData.map((item, index) => (
            <NewsCard
              key={index}
              item={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsList;
