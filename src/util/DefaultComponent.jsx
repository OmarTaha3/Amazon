import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";

const DefaultComponent = () => {
  return (
    <div className="flex items-center justify-center mt-5">
      <motion.div
        initial={{ x: 70, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="md:w-96 w-full p-4 bg-white flex flex-col items-center rounded-md shadow-lg"
      >
        <h1 className="font-titleFont text-xl font-bold mb-3">
          Our Valuable, Guest{" "}
          <FavoriteIcon
            style={{
              color: "red",
              position: "relative",
              top: "-5px",
              fontSize: "30px",
            }}
          />
        </h1>
        <p className="text-sm text-center">
          You should sign in first to see this page!{" "}
          <span className="block">
            Or, Continue your shopping with best luck
          </span>
        </p>
        <Link to="/">
          <button className="mt-6 bg-yellow-300 rounded-md cursor-pointer hover:bg-yellow-500 active:bg-yellow-700 px-8 py-2 font-titleFont  text-lg duration-300">
            Continue Shopping
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default DefaultComponent;
