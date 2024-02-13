import React from 'react'
import like_btn from './assets/products/heart.png'
import image01 from './assets/products/img01.jpg'
import image02 from './assets/products/img02.jpg'
import image03 from './assets/products/img03.jpg'
import image04 from './assets/products/img04.jpg'
import image05 from './assets/products/img05.jpg'
import image06 from './assets/products/img06.jpg'
import image07 from './assets/products/img07.jpg'
import image08 from './assets/products/img08.jpg'
import image09 from './assets/products/img09.jpg'
import image010 from './assets/products/img010.jpg'
import image011 from './assets/products/img011.jpg'
import image012 from './assets/products/img012.jpg'
import image013 from './assets/products/img013.jpg'
import image014 from './assets/products/img014.jpg'
import image015 from './assets/products/img015.jpg'
import image016 from './assets/products/img016.jpg'

function Middle() {
    return (
        <div className="cards">
            <div className='card'>
                <div className="img-container">
                    <img src={image01} alt="" className="product" srcset="" />
                    <img src={like_btn} className='like-btn' />
                </div>
                <div className="information">
                    <h4>Heraclion, Greece</h4>
                    <p>6,036 kilometers away</p>
                    <h4>₹26,175 <span style={{ color: 'var(--color-tertary)' }}>night</span></h4>
                    <h5>★ 4.4</h5>
                </div>
            </div>
            {/* 2 */}
            <div className='card'>
                <div className="img-container">
                    <img src={image02} alt="" className="product" srcset="" />

                    <img src={like_btn} className='like-btn' />
                </div>
                <div className="information">
                    <h4>Mikonous, Greece</h4>
                    <p>5,420 kilometers away</p>
                    <h4>₹19,149 <span style={{ color: 'var(--color-tertary)' }}>night</span></h4>
                    <h5>★ 4.4</h5>
                </div>
            </div>
            {/* 3 */}
            <div className='card'>
                <div className="img-container">
                    <img src={image03} alt="" className="product" srcset="" />
                    <img src={like_btn} className='like-btn' />
                </div>
                <div className="information">
                    <h4>Abirim, Israel</h4>
                    <p>2,514 kilometers away</p>
                    <h4>₹32,149 <span style={{ color: 'var(--color-tertary)' }}>night</span></h4>
                    <h5>★ 5</h5>
                </div>
            </div>
            {/* 4 */}
            <div className='card'>
                <div className="img-container">
                    <img src={image04} alt="" className="product" srcset="" />
                    <button>Guest Favourite</button>
                    <img src={like_btn} className='like-btn' />
                </div>
                <div className="information">
                    <h4>Oia, Greece</h4>
                    <p>3,515 kilometers away</p>
                    <h4>₹24,149 <span style={{ color: 'var(--color-tertary)' }}>night</span></h4>
                    <h5>★ 4.56</h5>
                </div>
            </div>
            {/* 5 */}
            <div className='card'>
                <div className="img-container">
                    <img src={image05} alt="" className="product" srcset="" />
                    <img src={like_btn} className='like-btn' />
                </div>
                <div className="information">
                    <h4>Ghilsang, khangwa</h4>
                    <p>4,112 kilometers away</p>
                    <h4>₹3,149 <span style={{ color: 'var(--color-tertary)' }}>night</span></h4>
                    <h5>★ 5.2</h5>
                </div>
            </div>
            {/* 6 */}
            <div className='card'>
                <div className="img-container">
                    <img src={image06} alt="" className="product" srcset="" />
                    <button>Guest Favourite</button>
                    <img src={like_btn} className='like-btn' />
                </div>
                <div className="information">
                    <h4>Paros, Greece</h4>
                    <p>6,144 kilometers away</p>
                    <h4>₹3,149 <span style={{ color: 'var(--color-tertary)' }}>night</span></h4>
                    <h5>★ 5</h5>
                </div>
            </div>
            {/* 7 */}
            <div className='card'>
                <div className="img-container">
                    <img src={image07} alt="" className="product" srcset="" />
                    <img src={like_btn} className='like-btn' />
                </div>
                <div className="information">
                    <h4>Tekoa, Israel</h4>
                    <p>1,420 kilometers away</p>
                    <h4>₹14,149 <span style={{ color: 'var(--color-tertary)' }}>night</span></h4>
                    <h5>★ 4.55</h5>
                </div>
            </div>
            {/* 8 */}
            <div className='card'>
                <div className="img-container">
                    <img src={image08} alt="" className="product" srcset="" />
                    <img src={like_btn} className='like-btn' />
                </div>
                <div className="information">
                    <h4>Syris, Greece</h4>
                    <p>3,550 kilometers away</p>
                    <h4>₹40,149 <span style={{ color: 'var(--color-tertary)' }}>night</span></h4>
                    <h5>★ 4.4</h5>
                </div>
            </div>
            {/* 9 */}
            <div className='card'>
                <div className="img-container">
                    <img src={image09} alt="" className="product" srcset="" />
                    <img src={like_btn} className='like-btn' />
                </div>
                <div className="information">
                    <h4>Rakwana, Shreelanka</h4>
                    <p>564 kilometers away</p>
                    <h4>₹4,149 <span style={{ color: 'var(--color-tertary)' }}>night</span></h4>
                    <h5>★ 4.35</h5>
                </div>
            </div>
            {/* 10 */}
            <div className='card'>
                <div className="img-container">
                    <img src={image010} alt="" className="product" srcset="" />
                    <img src={like_btn} className='like-btn' />
                </div>
                <div className="information">
                    <h4>Meuing Chieng, Thailand</h4>
                    <p>6,520 kilometers away</p>
                    <h4>₹39,149 <span style={{ color: 'var(--color-tertary)' }}>night</span></h4>
                    <h5>★ 4.44</h5>
                </div>
            </div>
            {/* 11 */}
            <div className='card'>
                <div className="img-container">
                    <img src={image011} alt="" className="product" srcset="" />
                    <img src={like_btn} className='like-btn' />
                </div>
                <div className="information">
                    <h4>Traitenros, Greece</h4>
                    <p>4,520 kilometers away</p>
                    <h4>₹32,149 <span style={{ color: 'var(--color-tertary)' }}>night</span></h4>
                    <h5>★ 4.99</h5>
                </div>
            </div>
            {/* 12 */}
            <div className='card'>
                <div className="img-container">
                    <img src={image012} alt="" className="product" srcset="" />
                    <img src={like_btn} className='like-btn' />
                </div>
                <div className="information">
                    <h4>Guryong, Greece</h4>
                    <p>4,550 kilometers away</p>
                    <h4>₹23,149 <span style={{ color: 'var(--color-tertary)' }}>night</span></h4>
                    <h5>★ 4.8</h5>
                </div>
            </div>
            {/* 13 */}
            <div className='card'>
                <div className="img-container">
                    <img src={image013} alt="" className="product" srcset="" />
                    <button>Guest Favourite</button>
                    <img src={like_btn} className='like-btn' />
                </div>
                <div className="information">
                    <h4>Naggar, India</h4>
                    <p>865 kilometers away</p>
                    <h4>₹4,145 <span style={{ color: 'var(--color-tertary)' }}>night</span></h4>
                    <h5>★ 5</h5>
                </div>
            </div>
            {/* 14 */}
            <div className='card'>
                <div className="img-container">
                    <img src={image014} alt="" className="product" srcset="" />
                    <img src={like_btn} className='like-btn' />
                </div>
                <div className="information">
                    <h4>Jaipur, India</h4>
                    <p>132 kilometers away</p>
                    <h4>₹5,149 <span style={{ color: 'var(--color-tertary)' }}>night</span></h4>
                    <h5>★ 4.88</h5>
                </div>
            </div>
            {/* 15 */}
            <div className='card'>
                <div className="img-container">
                    <img src={image015} alt="" className="product" srcset="" />
                    <button>Guest Favourite</button>
                    <img src={like_btn} className='like-btn' />
                </div>
                <div className="information">
                    <h4>Munnar, India</h4>
                    <p>483 kilometers away</p>
                    <h4>₹13,149 <span style={{ color: 'var(--color-tertary)' }}>night</span></h4>
                    <h5>★ 4.3</h5>
                </div>
            </div>
            {/* 16 */}
            <div className='card'>
                <div className="img-container">
                    <img src={image016} alt="" className="product" srcset="" />
                    <img src={like_btn} className='like-btn' />
                </div>
                <div className="information">
                    <h4>Empiroro, Greece</h4>
                    <p>4,545 kilometers away</p>
                    <h4>₹39,149 <span style={{ color: 'var(--color-tertary)' }}>night</span></h4>
                    <h5>★ 4.8</h5>
                </div>
            </div>
        </div>
    )
}

export default Middle
