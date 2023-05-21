import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaRegStarHalf, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import UseTitle from "../../Hooks/UseTitle";

const ViewDetails = () => {
  UseTitle("View Details")
  const toy = useLoaderData();
  console.log(toy)
  const [clicked, setClicked] = useState(false);
  const {
    _id,
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

  const handleFavorite = (id) => {
    setClicked(true);
    const storedToyIds = localStorage.getItem("toy-collection");
    let storedToyId = [];

    if (storedToyIds) {
      storedToyId = JSON.parse(storedToyIds);
    }

    storedToyId.push(id);
    const updatedToyIds = JSON.stringify(storedToyId);
    localStorage.setItem("toy-collection", updatedToyIds);

    if (!clicked) {
      let timerInterval;
      Swal.fire({
        title: "Added to favorite successfully!",
        html: "I will close in <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
    }
  };

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
          <p className="flex items-center gap-2">Ratings: <Rating className="text-orange-400 text-lg"
                        placeholderRating={ratings}
                        emptySymbol={
                          
                          <FaRegStarHalf></FaRegStarHalf>
                        }
                        placeholderSymbol={
                          <FaStar></FaStar>
                        }
                        fullSymbol={
                          <FaStar></FaStar>
                        }
                      /></p>
        </div>
        <div className="card-actions justify-end">
          <button
            className="cursor-pointer text-2xl"
            onClick={() => handleFavorite(_id)}
            disabled={clicked}
          >
            {!clicked ? (
              <FaRegHeart></FaRegHeart>
            ) : (
              <FaHeart className="text-red-600"></FaHeart>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
