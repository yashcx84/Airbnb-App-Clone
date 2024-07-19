import React from "react";
import logos from "../logos";
import airbnb from "/airbnb-fav.png";
import inbox from "/images/nav-icons/inbox.png";
import profile from "/images/nav-icons/profile.png";
import wishlist from "/images/nav-icons/wishlist.png";
import browser_logo from "/images/nav-icons/web.png";
import { Link } from "react-router-dom";

function Foot() {
  const date = new Date();
  const setDate = date.getFullYear();
  return (
    <>
      <div className="footer">
        <div className="left-footer">
          <p>© {setDate} Airbnb, Inc</p>
          <p className="dot">•</p>
          <Link to='/privacyterms'>
            <p>Privacy</p>
          </Link>
          <p className="dot">•</p>
          <Link to='/privacyterms'>
            <p>Terms</p>
          </Link>

          <p className="dot">•</p>
          <Link to='/sitemap'>
            <p>Sitemap</p>
          </Link>

          <p className="dot">•</p>
          <Link to='details'>
            <p className="last-p">Company Details</p>
          </Link>
        </div>
        <div className="right-footer">
          <p>English(IN)</p>
          <p>₹ INR</p>
          <Link to='/support'>
            <p>Support & Resources</p>
          </Link>
        </div>
      </div>

      {/* media responsive footer */}
      <div className="media-footer">
        <div className="footer-icon">
          <img src={logos.search} alt="" />
          <p>Explore</p>
        </div>
        <div className="footer-icon">
          <img src={wishlist} alt="" srcset="" />
          <p>Wishlist</p>
        </div>
        <div className="footer-icon">
          <img src={airbnb} alt="" srcset="" />
          <p>Trips</p>
        </div>
        <div className="footer-icon">
          <img src={inbox} alt="" srcset="" />
          <p>Inbox</p>
        </div>
        <div className="footer-icon">
          <img src={profile} alt="" srcset="" />
          <p>Profile</p>
        </div>
      </div>
    </>
  );
}

export default Foot;
