import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo192.png"
import { Constants } from "../../utils/constants";

const NewsCard = ({ item }) => {
  return (
    <div className="product-one mb-4 product-update card-p border-0 news-card">
      <div className="product-img relative">
        <img src={logo} alt="stars-small" className="img-video" />
      </div>
      <div className="product-content">
        <h2 className="clamp-2">{item.content}</h2>
        <h6 className="mt-1">{item.timing}</h6>
        <Link href="#" className="conflict-resolve mt-3 btn-read">
          {Constants.readMore}
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
