import React from "react";
import HeaderBottom from "./HeaderBottom";
import Logo from "./Logo";
import DeliverPlace from "./DeliverPlace";
import SearchBar from "./SearchBar";
import SignIn from "./SignIn";
import ReturnsAndOrders from "./ReturnsAndOrders";
import ShoppingCart from "./ShoppingCart";
import { useSelector } from "react-redux";
import LogOut from "./LogOut";
import { ToastContainer } from "react-toastify";

const Header = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className=" top-0 ">
      <div className=" w-full bg-amazon_blue text-white px-3 sm:px-0 md:px-0 lgl:px-6 py-3 flex items-center justify-center  mdl:gap-0 lg:gap-3">
        <Logo />
        <DeliverPlace />
        <SearchBar className="hidden md:flex" />
        <SignIn user={user} />
        <ReturnsAndOrders />
        <ShoppingCart user={user} />
        {user && <LogOut />}
      </div>
      <div className="w-full bg-amazon_blue px-2 pb-4 flex md:hidden ">
        <SearchBar className={"flex md:hidden mx-auto "} />
      </div>
      <HeaderBottom user={user} />
      <ToastContainer />
    </div>
  );
};

export default Header;
