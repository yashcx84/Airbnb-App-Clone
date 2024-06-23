import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from "react-router-dom";

function Taxes() {
  return (
    <div className="destinations">
      <Link to="/" className="bg-gray-100 p-4 rounded-xl font-medium">
        <MdArrowBackIosNew />
      </Link>
      <h1>Taxes</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dolorum
        veritatis vel aliquam! Blanditiis voluptas, accusamus cum molestias
        quidem harum reiciendis unde cumque error. Iure, dolor nemo temporibus
        dolores nostrum magnam exercitationem facilis debitis.
      </p>
      <Link to="/" className="mt-8 bg-black text-white p-4 px-6 rounded-xl">
        Proceed
      </Link>
    </div>
  );
}

export default Taxes;
