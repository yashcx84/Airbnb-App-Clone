import {React, useState, useRef, useEffect} from 'react'
import logos from './logos'
import './app.css'

function Nav() {
  const [isTranslated, setIsTranslated] = useState(false);

  const toggleTranslation = () => {
    setIsTranslated(!isTranslated);
  };
  return (
    <>
    <div className='nav-container'>
      <div className="upper-nav">
        <img src={logos.airbnb} alt="" />
        <div className="assets">
          <a href="#" className='stays'>Stays</a>
          <a href="#">Experiences</a>
          <a href="#">Online Experiences</a>
        </div>
        <div className="profile" >
          <a href="#">Airbnb your home</a>
          <img src={logos.web} alt="" srcset="" />
          <div className="profile-icon" onClick={toggleTranslation}>
          <div className={`toggleDiv ${isTranslated ? 'translated' : ''}`}>
          <div className="top"><p>My Account</p>
        <p>Notifications 
          <div className="dot"></div>
          </p>
        <p>Trips</p>
        <p>Settings</p></div>
        <div className="bottom">
        <p>Help Center</p>
        <p>LogOut</p>
        </div>
        
      </div>
            <img className='img01' src={logos.menu} alt="menu-icon" />
            <img className='img02' src={logos.user} alt="user_logo" />
          </div>
        </div>
      </div>
      <div className="media-nav">
      <div className="nav-search">
        <img src={logos.search} alt="Search-Icon" />
        <div className="search-content"> <h3>Anywhere</h3>
        <p>Any week • Add guests</p>
        </div>
      </div>
      <img src={logos.filter} alt="Filter- Logo" />
    </div>
      <div className="below-nav">
        <div className="tab-bar">
          <div className='tab-boxes destination-box'>
            <div className="minibox"><h3>Where</h3>
              <p>Search Destinations</p>
              </div>
          </div>
          <div className='tab-boxes'>
            <div className="minibox">
              <h3>Check-In</h3>
              <p>Add Dates</p>
            </div>
          </div>
          <div className='tab-boxes'>
            <div className="minibox">
              <h3>Checkout</h3>
              <p>Add Dates</p>
            </div>
          </div>
          <div className='tab-boxes tab-search-box'>
            <div className="minibox">
              <h3>Who</h3>
              <p>Add Guests</p>
            </div>
            <img src={logos.search} alt="Search-Logo" />
          </div>
        </div>
      </div>
      <div className="bottom-nav">
        <div className="icons-container">
          <div className="icon ">
            <img src={logos.camping} alt="Camping-logo" />
            <p>Camping</p>
          </div>
          <div className="icon">
            <img src={logos.island} alt="island-logo" />
            <p>Island</p>
          </div>
          <div className="icon visited">
            <img src={logos.earthHomes} alt="earthhomes-logo" />
            <p>EarthHomes</p>
          </div>
          <div className="icon">
            <img src={logos.island} alt="island-logo" />
            <p>Island</p>
          </div>
          <div className="icon">
            <img src={logos.earthHomes} alt="earthhomes-logo" />
            <p>EarthHomes</p>
          </div>
          <div className="icon">
            <img src={logos.boats} alt="boats-logo" />
            <p>Boats</p>
          </div>
          <div className="icon">
            <img src={logos.earthHomes} alt="earthhomes-logo" />
            <p>EarthHomes</p>
          </div>
          <div className="icon">
            <img src={logos.boats} alt="boats-logo" />
            <p>Boats</p>
          </div>

          <div className="icon">
            <img src={logos.vineyards} alt="vineyard-logo" />
            <p>Vineyards</p>
          </div>
          <div className="icon">
            <img src={logos.vineyards} alt="park-logo" />
            <p>Parks</p>
          </div>
          <div className="icon">
            <img src={logos.boats} alt="boats-logo" />
            <p>Boats</p>
          </div>
          <div className="icon">
            <img src={logos.vineyards} alt="vineyard-logo" />
            <p>Vineyards</p>
          </div>
          <div className="icon">
            <img src={logos.nationalPark} alt="park-logo" />
            <p>Parks</p>
          </div>
          <div className="icon">
            <img src={logos.vineyards} alt="vineyard-logo" />
            <p>Vineyards</p>
          </div>

        </div>
        <div className="buttons">
          <div className="filter">
            <img src={logos.filter} alt="Filter logo" />
            <p>Filter</p>
          </div>
          <div className="toggle-btn">
            <p>Display Before Taxes</p>
            <img src={logos.toggleBtn} alt="Toogle Button" srcset="" />
          </div>
        </div>
      </div>
    </div>
    {/* media responsive navigation */}

    </>
  )
}

export default Nav
