import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaEdit, FaInfo, FaPlusCircle, FaTrash, FaUpload } from "react-icons/fa";

const MyToys = () => {
  const toys = useLoaderData();
  console.log(toys);
  return (
    <div>
      <h2 className="text-center font-bold text-5xl mt-4 mb-6 text-slate-600">
        My <span className="text-orange-400">Toys</span>
      </h2>
      <hr className="border w-2/4 mx-auto mb-8" />
      {/* add a toy button */}
      <div className="justify-end flex pe-8 mb-8">
        <Link
          className="flex gap-2 items-center font-semibold"
          to="/myToys/addAToy"
        >
          <FaPlusCircle></FaPlusCircle> Add a toy
        </Link>
      </div>
      {/* cards */}
      <div className="px-8">
        {toys.map((toy) => (
          <div
            key={toy._id}
            className="card card-side bg-base-100 shadow-xl mb-4 h-52"
          >
            <figure>
              <img className="h-full w-48 p-3 border border-5" src={toy?.photo} alt="Image not found" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl">{toy.name}</h2>
              <div>
              <p className="font-semibold">Seller: {toy.sellerName}</p>
              <p className="font-medium text-sm">Price: {toy.price} taka</p>
              <p className="font-medium text-sm">Quantity: {toy.quantity}</p>
              </div>
              <div className="card-actions justify-end gap-4">
                <Link className="text-2xl text-blue-400 cursor-pointer"><FaEdit></FaEdit></Link>
                <FaTrash className="text-2xl cursor-pointer"></FaTrash>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyToys;
