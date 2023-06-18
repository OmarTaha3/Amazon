import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SideNav from "./SideNav";
import { useNavigate } from "react-router";

const HeaderBottom = ({ user }) => {
  const [sideNav, setSideNav] = useState(false);
  const navigate = useNavigate();
  return (
    <div className=" relative z-40 w-full px-4 h-[36px] bg-amazon_light text-white flex items-center justify-center md:justify-start">
      {/* Start List Item */}
      <ul className="flex justify-center items-center gap-2 text-sm tracking-wide">
        <li onClick={() => setSideNav(true)} className="headerHover">
          <MenuIcon className="mr-1" /> All
        </li>
        <li
          onClick={() => navigate("/orders")}
          className="headerHover inline-flex md:hidden"
        >
          Returns & Orders
        </li>
        <li className="headerHover hidden md:inline-flex">Today's Deals</li>
        <li className="headerHover hidden md:inline-flex">Customer Service</li>
        <li className="headerHover hidden md:inline-flex">Gift Cards</li>
        <li className="headerHover hidden md:inline-flex">Registry</li>
        <li className="headerHover hidden md:inline-flex">Sell</li>
      </ul>
      {/* End List Item */}

      {/* Start Side Nav */}
      {sideNav && <SideNav setSideNav={setSideNav} user={user} />}
      {/* End Side Nav */}
    </div>
  );
};

export default HeaderBottom;
