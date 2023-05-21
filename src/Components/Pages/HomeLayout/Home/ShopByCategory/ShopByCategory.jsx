import React, { useEffect, useState } from "react";
import { FaRegStar, FaRegStarHalf, FaStar, FaStarHalf } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const ShopByCategory = () => {
  const [pandas, setPandas] = useState([]);
  const [clicked, setClicked] = useState([]);

  const bamboo = (event) => {
    setClicked(event);
    fetch(`https://toy-marketplace-server-side-nine.vercel.app/myToys/${event}`)
      .then((res) => res.json())
      .then((data) => setPandas(data));
  };

  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-side-nine.vercel.app/myToys/Bamboo_Buddy`
    )
      .then((res) => res.json())
      .then((data) => setPandas(data));
  }, []);

  return (
    <div className="px-8">
      <h2 className="text-slate-700 text-center text-5xl font-bold mt-20 mb-14">
        Shop by <span className="text-orange-600">Category</span>
      </h2>
      <Tabs>
        <TabList>
          <div className="flex justify-evenly font-semibold cursor-pointer">
            <Tab
              onClick={() => bamboo("Bamboo_Buddy")}
              className={clicked === "Bamboo_Buddy" ? "text-orange-600" : ""}
            >
              Bamboo Buddy
            </Tab>
            <Tab
              onClick={() => bamboo("Pawsome_Panda")}
              className={clicked === "Pawsome_Panda" ? "text-orange-600" : ""}
            >
              Pawsome Panda
            </Tab>
            <Tab
              onClick={() => bamboo("Bamboo_Breeze")}
              className={clicked === "Bamboo_Breeze" ? "text-orange-600" : ""}
            >
              Bamboo Breeze
            </Tab>
          </div>
        </TabList>

        {/* tab 1 */}
        <div className="mt-6 mb-10 border-4 p-4 rounded">
          {/* tab panel 1 */}
          <TabPanel>
            <div className="grid grid-cols-3 gap-4">
              {pandas.map((panda) => (
                <div className="card bg-base-100 shadow-xl" key={panda._id}>
                  <figure>
                    <img
                      className="h-48 w-full"
                      src={panda.photo}
                      alt="Image not found"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="font-semibold">
                      <h2 className="card-title text-2xl">{panda.name}</h2>
                      <p>Price: {panda.price}</p>
                      <p>Quantity: {panda.quantity}</p>
                    </div>
                    <Rating className="text-orange-400"
                        placeholderRating={panda.ratings}
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
                      <Link
                        className="py-2 px-4 font-semibold bg-slate-900 text-white hover:bg-slate-700 duration-200 rounded"
                        to={`/allToys/${panda._id}`}
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          {/* tab panel 2 */}
          <TabPanel>
            <div className="grid grid-cols-3 gap-4">
              {pandas.map((panda) => (
                <div className="card bg-base-100 shadow-xl" key={panda._id}>
                  <figure>
                    <img
                      className="h-48 w-full"
                      src={panda.photo}
                      alt="Image not found"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="font-semibold">
                      <h2 className="card-title text-2xl">{panda.name}</h2>
                      <p>Price: {panda.price}</p>
                      <p>Quantity: {panda.quantity}</p>
                    </div>
                    <div className="card-actions justify-end">
                      <Link
                        className="py-2 px-4 font-semibold bg-slate-900 text-white hover:bg-slate-700 duration-200 rounded"
                        to={`/allToys/${panda._id}`}
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          {/* tab panel 3 */}
          <TabPanel>
            <div className="grid grid-cols-3 gap-4">
              {pandas.map((panda) => (
                <div className="card bg-base-100 shadow-xl" key={panda._id}>
                  <figure>
                    <img
                      className="h-48 w-full"
                      src={panda.photo}
                      alt="Image not found"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="font-semibold">
                      <h2 className="card-title text-2xl">{panda.name}</h2>
                      <p>Price: {panda.price}</p>
                      <p>Quantity: {panda.quantity}</p>
                    </div>
                    <div className="card-actions justify-end">
                      <Link
                        className="py-2 px-4 font-semibold bg-slate-900 text-white hover:bg-slate-700 duration-200 rounded"
                        to={`/allToys/${panda._id}`}
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
