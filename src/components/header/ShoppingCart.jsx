import React from 'react'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';


const ShoppingCart = ({user}) => {
  const { products } = useSelector((state) => state.products);

  return (
    <Link to='/cart'>
      <div className="headerHover relative">
        <ShoppingCartIcon />
        <p className="text-xs font-semibold mt-3 text-wightText">
          Cart
          <span className="absolute text-xs top-0 left-6 font-semibold p-1 h-4 bg-amazon_yellow text-amazon_blue rounded-full flex justify-center items-center">
            {user ?  products.length : 0}
          </span>
        </p>
      </div>
    </Link>
  );
}

export default ShoppingCart
