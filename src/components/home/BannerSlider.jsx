import React, { useState } from "react";
import Slider from "react-slick";

const BannerSlider = ({ images }) => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "70%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "210px",
        }}
      >
        <ul
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                backgroundColor: "#131921",
                padding: "8px 0",
                outline: "2px solid #f3a847",
                cursor: "pointer",
              }
            : {
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                backgroundColor: "#232f3e",
                padding: "8px 0",
                border: "2px solid transparent",
                cursor: "pointer",
              }
        }
      >
        {i + 1}
      </div>
    ),
  };
  return (
    <div className="w-full h-full relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
