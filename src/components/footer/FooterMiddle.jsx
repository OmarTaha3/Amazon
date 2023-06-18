import React from "react";

import ScrollToTop from "./ScrollToTop";
import FooterTopMiddle from "./FooterTopMiddle";
import FooterBottomMiddle from "./FooterBottomMiddle";

const FooterMiddle = () => {
  return (
    <div className="w-full bg-amazon_light text-white">
      <ScrollToTop />
      <FooterTopMiddle />
      <FooterBottomMiddle/>
    </div>
  );
};

export default FooterMiddle;
