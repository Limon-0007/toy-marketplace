import React from "react";
import { ToastContainer, toast } from "react-toastify";

const AddAToy = () => {
  const handleAddAToy = (event) => {
    // const notify = () => toast("Wow so easy!");
    event.preventDefault();
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
    const newToy = {
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
    // console.log(newToy);
    fetch("http://localhost:5000/addAToy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
            alert("Toy added successfully");
        //   <div className="toast toast-center">
        //     <div className="alert alert-success">
        //       <div>
        //         <span>Toy added successfully.</span>
        //       </div>
        //     </div>
        //   </div>;
        form.reset()
        }
      });
  };

  return (
    <div className="card mx-auto w-full max-w-md font-semibold shadow-2xl bg-base-100 mb-4">
      <form onSubmit={handleAddAToy} className="card-body">
        <h2 className="text-3xl font-bold">Add a Toy!</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              name="photo"
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
            placeholder="Description"
            required
          ></textarea>
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Add a Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
