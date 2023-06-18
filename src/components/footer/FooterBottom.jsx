import React from "react";
import { bottomList } from "../../constants/index";

const FooterBottom = () => {

  const allLinks = bottomList.map((item) => (
    <div className="group flex items-center justify-start flex-col" key={item.id}>
      <h3 className="text-white w-24 text-[12px] group-hover:underline leading-2 mb-[2bx] cursor-pointer">
        {item.title}
      </h3>
      <p className="text-[12px] w-24  group-hover:underline leading-2 cursor-pointer">
        {item.des}
      </p>
    </div>
  ));

  return (
    <div className="w-full bg-footerBottom py-8 px-4 ">
      <div className="grid grid-cols-3 md:grid-cols-5 mdl:grid-cols-6 lgl:grid-cols-7 gap-4 place-content-center mx-auto text-gray-400 max-w-5xl ">
        {allLinks}
      </div>
      <div className="w-full mt-10  flex flex-col items-center place-items-center justify-center gap-4">
        <div className="w-full  flex items-center justify-center text-center md:gap-6 gap-4">
          <p className="text-xs text-white hover:underline  cursor-pointer">
            Conditions of Use
          </p>
          <p className="text-xs text-white hover:underline  cursor-pointer">
            Privacy Notice
          </p>
          <p className="text-xs text-white hover:underline  cursor-pointer">
            Your Ads Privacy Choices
          </p>
        </div>
        <div>
          <p className="text-xs text-white">
            © 2023, Omar Taha, Software Engineer
          </p>
          <p className="mb-2 text-xs mt-1 text-white w-full text-center">
            +201276412078
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
