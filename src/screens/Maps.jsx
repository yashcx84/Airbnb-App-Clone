import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import worldMap from "/images/others/world-map-with-flags.png";
function Maps() {
  return (
    <div className="destinations">
      <Link to="/" className="bg-gray-100 p-4 rounded-xl font-medium">
        <MdArrowBackIosNew />
      </Link>
      <h1>Maps</h1>
      <div className="maps">
        <img src={worldMap} alt="" srcset="" />
      </div>
    </div>
  );
}

export default Maps;
