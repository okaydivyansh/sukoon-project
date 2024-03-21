import React from "react";
import { Link } from "react-router-dom";
import "../styles/card.css";

const Card = ({ heading, description, link, img }) => {
  return (
    <div className="card-container">
      <div className="card-img">
        <img className="card-img" src={img} alt="test" />
      </div>
      <div className="card-content">
        <h2 className="card-heading">{heading}</h2>
        <p className="card-desc">{description}</p>
        <Link to={link} className="card-btn">
          Take Test
          <span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="0.8em"
              width="0.8em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path>
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
