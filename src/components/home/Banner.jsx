import React from "react";
import bannerImgOne from "../../assets/banner/bannerImgOne.jpg";
import bannerImgTwo from "../../assets/banner/bannerImgTwo.jpg";
import bannerImgThree from "../../assets/banner/bannerImgThree.jpg";
import bannerImgFour from "../../assets/banner/bannerImgFour.jpg";
import BannerSlider from "./BannerSlider";

const Banner = () => {
  
    const images = [bannerImgOne,bannerImgTwo,bannerImgThree,bannerImgFour]
  return(
    <BannerSlider images={images}/>
  );
};

export default Banner;
