import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const ViewDetails = () => {
  const toy = useLoaderData();
  const {
    name,
    details,
    photo,
    email,
    price,
    quantity,
    ratings,
    sellerName,
    subCategory,
  } = toy;
  
  return (
    <div className="card w-96 mx-auto bg-base-100 shadow-xl mb-4">
      <figure>
        <img src={photo} alt="Image not found" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{name}</h2>
        <div className="font-semibold text-sm">
          <p>Product details: {details}</p>
          <p>Seller: {sellerName}</p>
          <p>Email: {email}</p>
          <p>Price: {price} taka</p>
          <p>Quantity: {quantity}</p>
          <p>Sub category: {subCategory}</p>
          <p>Ratings: {ratings} star</p>
        </div>
        <div className="card-actions justify-end">
          <Link
            to="/allToys"
            className="font-semibold bg-slate-700 px-4 py-2 rounded text-white flex items-center gap-1"
          >
            <FaArrowLeft></FaArrowLeft> Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
