import React from "react";
import { Link } from "react-router-dom";

const ReturnsAndOrders = () => {
  return (
    <Link to='/orders'>
      <div className="headerHover hidden lg:block">
        <p className="text-xs text-lightText font-light ">
          Returns
          <span className="block text-sm font-semibold -mt-1 text-whiteText">
            &Orders
          </span>
        </p>
      </div>
    </Link>
  );
};

export default ReturnsAndOrders;
