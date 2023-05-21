import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";

const AddAToy = () => {
  const { user } = useContext(AuthContext);

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event);
  };

  const handleAddAToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const quantity = form.quantity.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const subCategory = selectedValue;
    const price = form.price.value;
    const priceNumber = parseFloat(price)
    const ratings = form.ratings.value;
    const details = form.details.value;
    const newToy = {
      photo,
      quantity,
      name,
      sellerName,
      email,
      subCategory,
      priceNumber,
      ratings,
      details,
    };
    // console.log(newToy);
    fetch("https://toy-marketplace-server-side-nine.vercel.app/addAToy", {
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
          let timerInterval;
          Swal.fire({
            title: "Toy added successfully!",
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
          form.reset();
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
              defaultValue={user?.email}
              placeholder="Seller Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Sub category</span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              // value={selectedValue}
              onChange={handleChange}
            >
              <option disabled value="">
                Select one
              </option>
              <option value="Bamboo_Buddy">Bamboo Buddy</option>
              <option value="Pawsome_Panda">Pawsome Panda</option>
              <option value="Bamboo_Breeze">Bamboo Breeze</option>
            </select>
          </div>
        </div>
        {/* Price & Ratings */}
        <div className="grid grid-cols-2 gap-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="textg"
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
