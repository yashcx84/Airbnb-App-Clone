import React from 'react'
import { LuIndianRupee } from "react-icons/lu";
import { CiDollar } from "react-icons/ci";
import { MdArrowBackIosNew, MdCurrencyPound } from "react-icons/md";
import { MdCurrencyYen } from "react-icons/md";
import { MdCurrencyBitcoin } from "react-icons/md";
import { TbCurrencyEthereum } from "react-icons/tb";
import { TbCurrencyCent } from "react-icons/tb";
import { TbCurrencyBahraini } from "react-icons/tb";
import { Link } from 'react-router-dom';


function Currency() {
  return (
    <div className="destinations">
         <Link to="/" className="bg-gray-100 p-4 rounded-xl font-medium">
        <MdArrowBackIosNew />
      </Link>
        <h1>Currency</h1>
        <h2>Choose Your Currency</h2>
        <div className="destination-map">
            <div className="map-images">
            <LuIndianRupee  className='currency-icon text-5xl p-3'/>
            <p>Rupees</p>
            </div>
            <div className="map-images">
            <CiDollar className='currency-icon text-5xl p-3'/>
            <p>Doller</p>
            </div>
            <div className="map-images">
            <MdCurrencyPound className='currency-icon text-5xl p-3'/>
            <p>Pound</p>
            </div>
            <div className="map-images">
            <MdCurrencyYen className='currency-icon text-5xl p-3'/>
            <p>Yen</p>
            </div>
            <div className="map-images">
            <MdCurrencyBitcoin className='currency-icon text-5xl p-3'/>
            <p>Rupees</p>
            </div>
            <div className="map-images">
            <TbCurrencyEthereum className='currency-icon text-5xl p-3'/>
            <p>Ethereum</p>
            </div>
            <div className="map-images">
            <TbCurrencyCent className='currency-icon text-5xl p-3'/>
            <p>Cent</p>
            </div>
            <div className="map-images">
            <TbCurrencyBahraini className='currency-icon text-5xl p-3'/>
            <p>Bahraini</p>
            </div>
        </div>
    </div>
  )
}

export default Currency