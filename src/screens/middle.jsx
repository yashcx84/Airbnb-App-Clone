import React, { useState } from "react";
import productdata from "../assets/data/products-data";
import { Link } from "react-router-dom";
import "./middle.css";
import { RxCross1 } from "react-icons/rx";
import { IoShare } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

function Middle() {
  // State to keep track of the selected product
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Handler function to update the selected product
  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="middle-container">
      {selectedProduct && (
        <div className="large-image-container">
          <img src={selectedProduct.image} alt="Product Info" />
          <div className="large-image-info relative flex flex-col gap-2">
            <h4 className="text-2xl font-bold w-full">
              {selectedProduct.name}
            </h4>
            <p className="w-full">{selectedProduct.distance}</p>
            <h4 className="text-2xl font-bold w-full">
              {selectedProduct.price}
            </h4>
            <h5 className="w-full">{selectedProduct.rating}</h5>
            <button className="w-full bg-black text-white p-2 px-3 rounded-md border-none">
              Expand View
            </button>
            <button className="w-full bg-black text-white p-2 px-3 rounded-md border-none">
              <IoShare className="inline mb-1" /> Share Experience
            </button>
            <div className="w-full share-links">
              <Link className="flex gap-2 p-2 w-full rounded-md mb-2">
                <MdEmail className="mt-1" /> Email
              </Link>
              <Link className="flex gap-2 p-2 w-full rounded-md mb-2">
                <FaFacebookSquare className="mt-1" /> Facebook
              </Link>
              <Link className="flex gap-2 p-2 w-full rounded-md mb-2">
                <FaWhatsappSquare className="mt-1" /> Whatsapp
              </Link>
              <Link className="flex gap-2 p-2 w-full rounded-md mb-2">
                <BsThreeDots className="mt-1" /> More
              </Link>
            </div>
          </div>
          <RxCross1
            className="absolute top-4 left-4 bg-gray-200 text-black cursor-pointer hover:bg-gray-100 p-2 text-4xl rounded-full"
            onClick={() => setSelectedProduct(null)}
          />
        </div>
      )}
      <div className="cards">
        {productdata.map((product, index) => (
          <div
            key={index}
            className="card"
            onClick={() => handleCardClick(product)}
          >
            <div className="img-container">
              <img src={product.image} alt={product.name} className="product" />
            </div>
            <div className="information">
              <h4>{product.name}</h4>
              <p>{product.distance}</p>
              <h4>{product.price}</h4>
              <h5>{product.rating}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Middle;
