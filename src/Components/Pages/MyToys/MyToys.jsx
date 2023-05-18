import React from "react";
import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";

const MyToys = () => {
  return (
    <div>
        {/* add a toy button */}
      <div className="justify-end flex pe-8 mb-8">
        <Link
          className="flex gap-2 items-center font-semibold"
          to="/myToys/addAToy"
        >
          <FaPlusCircle></FaPlusCircle> Add a toy
        </Link>
      </div>
      {/*  */}
    </div>
  );
};

export default MyToys;
