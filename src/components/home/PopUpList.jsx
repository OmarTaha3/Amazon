import React from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../../state/productSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Link } from "react-router-dom";
const PopUpList = ({ item, user }) => {
  const dispatch = useDispatch();
  return (
    <ul className="w-full py-2 bg-gray-100 absolute bottom-[-170px] flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-1 border-r group-hover:bottom-[0] duration-700">
      <li
        onClick={() => {
          if (user) {
            dispatch(
              addToCart({
                id: item.id,
                title: item.title,
                description: item.description,
                price: item.price,
                category: item.category,
                image: item.image,
                quantity: 1,
              })
            );
            toast.success("Added Successfully!", {
              autoClose: 1000,
            });
          } else {
            toast.error("You should sign in first!");
          }
        }}
        className="productLi"
      >
        Add to Cart{" "}
        <span>
          <ShoppingCartIcon />
        </span>
      </li>
      <Link to={`/product/${item.id}`} className="productLi">
        <li>
          View Details
          <span className="inline-block ml-2">
            <ArrowCircleRightIcon />
          </span>
        </li>
      </Link>
    </ul>
  );
};

export default PopUpList;
