import React, { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoManSharp } from "react-icons/io5";
import { FaBaby } from "react-icons/fa6";
import { MdOutlinePets } from "react-icons/md";

function Guests() {
  const [adults, setAdults] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  const handleAdultClick = () => {
    setAdults(adults + 1);
  };

  const handleInfantClick = () => {
    setInfants(infants + 1);
  };

  const handlePetClick = () => {
    setPets(pets + 1);
  };

  return (
    <div className="destinations">
      <Link to="/" className="bg-gray-100 p-4 rounded-xl font-medium">
        <MdArrowBackIosNew />
      </Link>
      <h1>Guests</h1>
      <h2>Add Guests</h2>
      <div className="destination-map">
        <div className="map-images" onClick={handleAdultClick}>
          <IoManSharp className="text-2xl guest-icon" />
          <p>Adults</p>
          <p className="p-4 bg-gray-100 px-5 rounded-md">{adults}</p>
        </div>
        <div className="map-images" onClick={handleInfantClick}>
          <FaBaby className="text-2xl guest-icon" />
          <p>Infants</p>
          <p className="p-4 bg-gray-100 px-5 rounded-md">{infants}</p>
        </div>
        <div className="map-images" onClick={handlePetClick}>
          <MdOutlinePets className="text-2xl guest-icon" />
          <p>Pets</p>
          <p className="p-4 bg-gray-100 px-5 rounded-md">{pets}</p>
        </div>
      </div>
      <Link to="/" className="mt-8 bg-black text-white p-4 px-6 rounded-xl">
        Proceed
      </Link>
    </div>
  );
}

export default Guests;
