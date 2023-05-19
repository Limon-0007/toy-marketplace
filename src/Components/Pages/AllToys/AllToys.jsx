import React from "react";
import { FaInfo } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const toys = useLoaderData();
  return (
    <div>
      <h2 className="text-center font-bold text-5xl mt-4 mb-6 text-slate-600">
        All <span className="text-orange-400">Toys</span>
      </h2>
      <hr className="border w-2/4 mx-auto mb-8" />
      {/* cards */}
      <div className="px-8">
        {toys?.map((toy) => (
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
              <div className="card-actions justify-end">
                <Link to={`/allToys/${toy._id}`} className="bg-slate-600 text-white font-semibold px-3 py-2 rounded flex gap-1 items-center hover:bg-slate-950 duration-200"><FaInfo></FaInfo> view details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
