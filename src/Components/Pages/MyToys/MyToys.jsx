import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaPlusCircle, FaRegStarHalf, FaStar, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";
import Rating from "react-rating";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const { user } = useContext(AuthContext);
  const [sorting, setSorting] = useState("aes");

  const url = `https://toy-marketplace-server-side-nine.vercel.app/myToys?email=${user?.email}&query=${sorting}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [url]);

  const handleSort = (event) => {
    setSorting(event.target.value);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://toy-marketplace-server-side-nine.vercel.app/addAToy/${id}`,
          {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const updatedToys = toys.filter((toy) => toy._id !== id);
              setToys(updatedToys);
            }
          });
      }
    });
  };
  return (
    <div>
      <h2 className="text-center font-bold text-5xl mt-4 mb-6 text-slate-600">
        My <span className="text-orange-400">Toys</span>
      </h2>
      <hr className="border w-2/4 mx-auto mb-8" />
      {/* sort by price */}
      <div className="justify-between flex px-8 mb-8">
        <select
          value={sorting}
          onChange={handleSort}
          className="select select-info w-full max-w-xs"
        >
          <option selected>
            Sort By price
          </option>
          <option value="asc">Bigger to smaller</option>
          <option value="dsc">Smaller to bigger</option>
        </select>
        {/* add a toy button */}
        <Link
          className="flex gap-2 items-center font-semibold"
          to="/myToys/addAToy"
        >
          <FaPlusCircle></FaPlusCircle> Add a toy
        </Link>
      </div>
      {/* cards */}
      <div className="px-8">
        {toys?.map((toy) => (
          <div
            key={toy._id}
            className="card card-compact md:card-side bg-base-100 shadow-xl mb-4 md:h-52"
          >
            <figure>
              <img
                className="md:h-full md:w-48 p-3 border border-5"
                src={toy?.photo}
                alt="Image not found"
              />
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
              <div className="card-actions justify-end gap-4">
                <Link
                  to={`/myToys/${toy._id}`}
                  className="text-2xl text-blue-400 cursor-pointer"
                >
                  <FaEdit></FaEdit>
                </Link>
                <FaTrash
                  onClick={() => handleDelete(toy._id)}
                  className="text-2xl cursor-pointer"
                ></FaTrash>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyToys;
