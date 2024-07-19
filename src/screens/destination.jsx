import React from "react";
import "./destinations.css";
import { Link } from "react-router-dom";
import worldFlag from "/images/others/global-flag.png";
import ukFlag from "/images/others/uk-flag.png";
import usFlag from "/images/others/us-flag.png";
import indiaFlag from "/images/others/india-flag.png";
import thailandFlag from "/images/others/thailand-flag.png";
import europeFlag from "/images/others/europe-flag.png";
import { MdArrowBackIosNew } from "react-icons/md";

function destinations() {
  return (
    <>
      <div className="destinations">
        <Link to="/" className="bg-gray-100 p-4 rounded-xl font-medium">
          <MdArrowBackIosNew />
        </Link>
        <h1>Destinations</h1>
        <h2>Search By Destinations</h2>
        <div className="destination-map">
          <div className="map-images">
            <img src={worldFlag} alt="Flag" />
            <p>I'm Flexible</p>
          </div>
          <div className="map-images">
            <img src={ukFlag} alt="Flag" />
            <p>United Kingdom</p>
          </div>
          <div className="map-images">
            <img src={usFlag} alt="Flag" />
            <p>United States</p>
          </div>
          <div className="map-images">
            <img src={indiaFlag} alt="Flag" />
            <p>India</p>
          </div>
          <div className="map-images">
            <img src={thailandFlag} alt="Flag" />
            <p>Thailand</p>
          </div>
          <div className="map-images">
            <img src={europeFlag} alt="Flag" />
            <p>Europe</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default destinations;
