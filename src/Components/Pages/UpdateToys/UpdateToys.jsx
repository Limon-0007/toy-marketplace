import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import UseTitle from "../../Hooks/UseTitle";

const UpdateToys = () => {
  const UpdateToy = useLoaderData();
  UseTitle("Update Toys")
  const {details, email, name, photo, price, quantity, ratings, sellerName, subCategory, _id} = UpdateToy
  const handleUpdateToy = (event) => {
    event.preventDefault()
    const form = event.target;
    const photo = form.photo.value;
    const quantity = form.quantity.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const details = form.details.value;
    const updatedToy = {
      photo,
      quantity,
      name,
      sellerName,
      email,
      subCategory,
      price,
      ratings,
      details,
    };

    fetch(`http://localhost:5000/addAToy/${_id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(updatedToy)
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            Swal.fire({
                icon: 'success',
                title: 'Updated Successfully!',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  };

  return (
    <div className="card mx-auto w-full max-w-md font-semibold shadow-2xl bg-base-100 mb-4">
      <form onSubmit={handleUpdateToy} className="card-body">
        <h2 className="text-3xl font-bold">Update Toy!</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              name="photo"
              defaultValue={photo}
              placeholder="photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              placeholder="Available Quantity"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        {/* name */}
        <div className="grid grid-cols-2 gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Product Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller name</span>
            </label>
            <input
              type="text"
              name="sellerName"
              defaultValue={sellerName}
              placeholder="Seller name"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        {/* Email & Sub category */}
        <div className="grid grid-cols-2 gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={email}
              placeholder="Seller Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub category</span>
            </label>
            <input
              type="text"
              name="subCategory"
              defaultValue={subCategory}
              placeholder="Sub Category"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        {/* Price & Ratings */}
        <div className="grid grid-cols-2 gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              placeholder="Price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Ratings</span>
            </label>
            <input
              type="text"
              name="ratings"
              defaultValue={ratings}
              placeholder="Ratings"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        {/* description */}

        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Details</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            name="details"
            defaultValue={details}
            placeholder="Description"
            required
          ></textarea>
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Update toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateToys;
