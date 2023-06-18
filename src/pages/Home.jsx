import React from "react";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";
import { ToastContainer } from "react-toastify";



const Home = () => {
  return (
    <div className="bg-gray-100">
      <Banner />
      <div className="-mt-14 mdl:-mt-24 xl:-mt-36 py-10">
        <Products />
      </div>
      <ToastContainer style={{ boxShadow: "none" }} />
    </div>
  );
};

export default Home;
