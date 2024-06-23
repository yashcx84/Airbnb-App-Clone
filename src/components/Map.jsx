import React from "react";
import logos from "../logos";
import { Link } from "react-router-dom";

function Map() {
  return (
    <div className="Map">
      <Link className="Map" to="/maps">
        <div className="map-container">
          <p>Show Map</p>
          <img src={logos.map} alt="map" srcset="" />
        </div>
      </Link>
    </div>
  );
}

export default Map;
