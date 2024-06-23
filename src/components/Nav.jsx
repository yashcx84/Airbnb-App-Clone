import React, { useState } from "react";
import logos from "../logos";
import iconsData from "../assets/data/icons-data";
import "../app.css";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import langData from "../assets/data/language-data";

function Nav() {
  const [isTranslated, setIsTranslated] = useState(false);
  const toggleTranslation = () => {
    setIsTranslated(!isTranslated);
  };

  //state to manage the language Container
  const [languageContainer, setlanguageContainer] = useState(false);
  const languageDiv = () => {
    setlanguageContainer(!languageContainer);
  };

  // toggle Close Button for langauge Container
  const closeLanguageContainer = () => {
    setlanguageContainer(false);
  };

  return (
    <div className="nav-container">
      <div className="upper-nav justify-around">
        <img src={logos.airbnb} alt="Airbnb Logo" />
        <div className="assets">
          <Link to="/stays" className="stays">
            Stays
          </Link>
          <Link to="/experiences">Experiences</Link>
        </div>
        <div className="profile">
          <Link to="/homes">Airbnb your home</Link>
          <img src={logos.web} alt="Web Logo" onClick={languageDiv} />
          {/* Conditionally render the language container */}
          {languageContainer && (
            <div className="languageContainer overflow-scroll">
              {/* Content of the language container */}
              <h1 className="text-2xl font-semibold py-4 border-b flex justify-between sticky top-0 bg-white">
                Language & Regions{" "}
                <RxCross1
                  className="text-gray-500 cursor-pointer hover:bg-gray-100 p-2 text-4xl rounded-full"
                  onClick={closeLanguageContainer}
                />
              </h1>
              <h1 className="my-4 font-semibold">
                Suggested languages and regions
              </h1>
              <div className="flex w-full flex-wrap justify-start gap-2 overflow-scroll">
                {langData.map((e) => (
                  <div className="language hover:bg-gray-100 w-44 cursor-pointer px-5 py-3 rounded-md">
                    <p className="font-bold">{e.language}</p>
                    <p>{e.region}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="profile-icon" onClick={toggleTranslation}>
            <div className={`toggleDiv ${isTranslated ? "translated" : ""}`}>
              <div className="top">
                <p>My Account</p>
                <p>
                  Notifications<div className="dot"></div>
                </p>
                <p>Trips</p>
                <p>Settings</p>
              </div>
              <div className="bottom">
                <p>Help Center</p>
                <p>LogOut</p>
              </div>
            </div>
            <img className="img01" src={logos.menu} alt="Menu Icon" />
            <img className="img02" src={logos.user} alt="User Logo" />
          </div>
        </div>
      </div>
      <div className="media-nav">
        <div className="nav-search">
          <img src={logos.search} alt="Search Icon" />
          <div className="search-content">
            <h3>Anywhere</h3>
            <p>Any week • Add guests</p>
          </div>
        </div>
        <img src={logos.filter} alt="Filter Logo" />
      </div>
      <div className="below-nav">
        <div className="tab-bar">
          <div className="tab-boxes destination-box">
            <Link to="/destinations">
              <div className="minibox">
                <h3>Where</h3>
                <p>Search Destinations</p>
              </div>
            </Link>
          </div>
          <div className="tab-boxes">
            <Link to="/dates">
              <div className="minibox">
                <h3>When</h3>
                <p>Add Dates</p>
              </div>
            </Link>
          </div>
          <div className=" tab-boxes tab-search-box">
            <div className="minibox">
              <h3>Who</h3>
              <p>Add Guests</p>
            </div>
            <Link to="/guests">
              <img src={logos.search} alt="Search Logo" />
            </Link>
          </div>
        </div>
      </div>
      <div className="bottom-nav">
        <div className="icons-container">
          {iconsData.map((e) => (
            <div className="icon">
              <img src={e.image} />
              <p>{e.text}</p>
            </div>
          ))}
        </div>
        <div className="buttons">
          <div className="filter">
            <img src={logos.filter} alt="Filter Logo" />
            <Link to="/filters">
              <p to="/category/filter">Filter</p>
            </Link>
          </div>
          <div className="toggle-btn">
            <Link
              to="/Taxes"
              className="flex justify-center align-middle gap-2"
            >
              <p className="mt-2">Display Before Taxes</p>
              <img src={logos.toggleBtn} alt="Toggle Button" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
