import React from 'react'
import logos from './logos'
import airbnb from './assets/airbnb-fav.png'
import inbox from './assets/inbox.png'
import profile from './assets/profile.png'
import wishlist from './assets/wishlist.png'
import browser_logo from './assets/web.png';

function Foot() {
  const date = new Date();
  const setDate = date.getFullYear();
  return (
    <>
    <div className='footer'>
        <div className="left-footer">
            <p>© {setDate} Airbnb, Inc</p>
            <p className='dot'>•</p>
            <p>Privacy</p>
            <p className='dot'>•</p>
            <p>Term</p>
            <p className='dot'>•</p>
            <p>Sitemap</p>
            <p className='dot'>•</p>
            <p className='last-p'>Company Details</p>
        </div>
        <div className="right-footer">
            <img src={browser_logo} alt="Browser Logo" srcset="" />
            <p>English(IN)</p>
            <p>₹ INR</p>
            <p>Support & Resources</p>
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
  )
}

export default Foot
