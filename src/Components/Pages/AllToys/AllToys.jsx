import React, { useEffect, useState } from "react";
import { FaInfo, FaRegStarHalf, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";
import UseTitle from "../../Hooks/UseTitle";

const AllToys = () => {
  // const toys = useLoaderData();
  const [toys, setToys] = useState([])
  UseTitle("All Toys")

  useEffect(() => {
    fetch("https://toy-marketplace-server-side-nine.vercel.app/addAToy")
    .then(res => res.json())
    .then(data => setToys(data))
  }, [])


  const HandleSearch = (event) => {
    event.preventDefault()
    const form = event.target
    const search = form.text.value

    useEffect(() => {
      fetch(`https://toy-marketplace-server-side-nine.vercel.app/toySearch/${search}`)
      .then(res => res.json())
      .then(data => setToys(data))
    }, [search])

  }
  return (
    <div>
      <h2 className="text-center font-bold text-5xl mt-4 mb-6 text-slate-600">
        All <span className="text-orange-400">Toys</span>
      </h2>
      <hr className="border w-2/4 mx-auto mb-8" />
      {/* cards */}
      <form onSubmit={HandleSearch} className="form-control">
      <div className="flex gap-4 ps-8 mb-8">
      <input type="text" name="text" placeholder="Search" className="input input-bordered" />
      <input className="py-2 px-2 font-semibold bg-slate-700 text-white rounded" type="submit" value="search" />
      </div>
    </form>
      <div className="px-8">
        {toys?.map((toy) => (
          <div
            key={toy._id}
            className="card card-compact md:card-side bg-base-100 shadow-xl mb-4 md:h-52"
          >
            <figure>
              <img className="md:h-full md:w-48 p-3 border border-5" src={toy?.photo} alt="Image not found" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl">{toy.name}</h2>
              <div>
              <p className="font-semibold">Seller: {toy.sellerName}</p>
              <p className="font-medium text-sm">Price: {toy.price} taka</p>
              <p className="font-medium text-sm">Quantity: {toy.quantity}</p>
              </div>
              <Rating className="text-orange-400"
                        placeholderRating={toy.ratings}
                        emptySymbol={
                          
                          <FaRegStarHalf></FaRegStarHalf>
                        }
                        placeholderSymbol={
                          <FaStar></FaStar>
                        }
                        fullSymbol={
                          <FaStar></FaStar>
                        }
                      />
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
