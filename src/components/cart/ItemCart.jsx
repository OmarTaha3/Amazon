import React from "react";
import { resetCart } from "../../state/productSlice";
import ItemCartList from "./ItemCartList";
import { useSelector, useDispatch } from "react-redux";

const ItemCart = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full bg-white px-4 md:col-span-4 pb-4">
      <div className="font-titleFont flex items-center justify-between border-b-[1px] p-4">
        <h2 className="text-3xl font-medium">Shopping Cart</h2>
        <h4 className="text-1xl font-normal">Subtotal</h4>
      </div>
      <div>
        {products.map((item) => (
          <ItemCartList item={item} />
        ))}
      </div>
      <button
        onClick={() => dispatch(resetCart())}
        className="bg-red-500 py-2 px-10 rounded-lg text-white mt-4 hover:bg-red-700 active:bg-red-900 duration-300 font-titleFont font-semibold text-lg tracking-wide "
      >
        Clear Cart
      </button>
    </div>
  );
};

export default ItemCart;
