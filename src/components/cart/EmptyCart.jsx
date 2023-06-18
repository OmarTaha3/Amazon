import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import emptyCart from "../../assets/emptyCart.png";

const EmptyCart = () => {
  return (
    <motion.div
      initial={{ y: 70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex justify-center items-center flex-col md:flex-row gap-4 py-10"
    >
      <div>
        <img
          className="w-80 rounded-lg p-4 mx-auto"
          src={emptyCart}
          alt="emptyCart"
        />
      </div>
      <div className="md:w-96 w-full p-4 bg-white flex flex-col items-center rounded-md shadow-lg">
        <h1 className="font-titleFont text-xl font-bold">
          Your Cart Feels Lonely.
        </h1>
        <p className="text-sm text-center">
          Your Shopping cart lives to serve. Give it purpose - fill it with
          books, electronics, videos, etc. and make it happy
        </p>
        <Link to="/">
          <button className="mt-6 bg-yellow-300 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-8 py-2 font-titleFont font-semibold text-lg duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

export default EmptyCart
