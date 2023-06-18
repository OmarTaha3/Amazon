import React from 'react'
import {
  deleteFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../state/productSlice";
import { useDispatch } from 'react-redux';

const ItemCart = ({item }) => {
  const dispatch = useDispatch()
  return (
    <div
      key={item.id}
      className="w-full border-b-[1px] border-b-gray-300 md:p-4 flex flex-col md:flex-row items-center justify-center gap-6"
    >
      <div className="md:w-2/5  mt-2">
        <img className="w-full h-44 object-contain" src={item.image} alt="" />
      </div>
      <div className="w-4/5 ">
        <h2 className="font-semibold text-lg mb-2">{item.title}</h2>
        <p className="md:pr-5 text-sm mb-2">{item.description}</p>
        <p className="text-base mb-2">
          Unit Price: <span className="font-semibold">${item.price}</span>
        </p>
        <div className="mt-5 mb-5 bg-[#f0f2f2] flex justify-center items-center w-28 py-1 text-center drop-shadow-lg rounded-md mx-auto md:mx-0 ">
          <p>Qty: </p>
          <p
            onClick={() => dispatch(decrementQuantity(item))}
            className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300"
          >
            -
          </p>
          <p className="mx-1"> {item.quantity} </p>
          <p
            onClick={() => dispatch(incrementQuantity(item))}
            className="cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300"
          >
            +
          </p>
        </div>
        <button
          onClick={() => dispatch(deleteFromCart(item))}
          className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300 block -mb-2 md:mb-1 mx-auto md:mx-0"
        >
          Delete Item
        </button>
      </div>
      <div>
        <p className="text-lg font-titleFont font-semibold mb-6 w-[70px]">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default ItemCart
