import React from "react";
import "./destinations.css";
import { CiCalendar } from "react-icons/ci";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";



function dates() {
  return (
    <div className="destinations">
        <Link to="/" className="bg-gray-100 p-4 rounded-xl font-medium">
          <MdArrowBackIosNew />
        </Link>
      <h1>Dates</h1>
      <h2>How Long You Want To Stay?</h2>
      <div className="destination-map mb-12">
        <div className="map-images">
          <p>For <span>Days</span></p>
        </div>
        <div className="map-images">
          <p>For <span>Weeks</span></p>
        </div>
        <div className="map-images">
          <p>For <span>Months</span></p>
        </div>
      </div>
      <h2>When You Want To Go?</h2>
      <div className="destination-map">
        <div className="map-images">
        <CiCalendar className="date-icon"/>
          <p>July</p>
        </div>
        <div className="map-images">
        <CiCalendar className="date-icon"/>
          <p>August</p>
        </div>
        <div className="map-images">
        <CiCalendar className="date-icon"/>
          <p>September</p>
        </div>
        <div className="map-images">
        <CiCalendar className="date-icon"/>
          <p>October</p>
        </div>
        <div className="map-images">
        <CiCalendar className="date-icon"/>
          <p>November</p>
        </div>
      </div>
    </div>
  );
}

export default dates;
