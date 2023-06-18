import React from "react";
import logo from "./../../assets/logo.png";
import egflag from "./../../assets/egflag.png";
const FooterBottomMiddle = () => {
  return (
    <div className="w-full flex gap-6 items-center justify-center py-6">
      <img className="w-20 pt-3" src={logo} alt="" />
      <p className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
        English
      </p>
      <div className="flex gap-2 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
        <img className="w-6" src={egflag} alt="flagImg" />
        <p>Egypt</p>
      </div>
    </div>
  );
};

export default FooterBottomMiddle;
