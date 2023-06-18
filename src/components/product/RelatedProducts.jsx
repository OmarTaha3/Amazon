import { useState } from "react";
import Slider from "react-slick";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from "react-router-dom";

const RelatedProducts = ({ relProducts }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };
  const [ref, useRef] = useState(null);
  return (
    <div className="w-full bg-white p-3 ">
      <div className="w-full relative max-w-screen-xl mx-auto ">
        <h2 className="font-titleFont py-4 rounded-md font-semibold text-xl">
          Related Products
        </h2>
        {relProducts.length > 3 && (
          <div className="w-full flex justify-end pr-5 gap-3 ">
            <button
              className="bg-yellow-300 rounded-full p-2 font-semibold hover:bg-yellow-500 duration-300 active:bg-yellow-700"
              onClick={ref?.slickPrev}
            >
              <ChevronLeftIcon />
            </button>
            <button
              className="bg-yellow-300 rounded-full p-2 font-semibold hover:bg-yellow-500 duration-300 active:bg-yellow-700"
              onClick={ref?.slickNext}
            >
              <ChevronRightIcon />
            </button>
          </div>
        )}
        <Slider {...settings} ref={useRef}>
          {relProducts.map((product,i) => (
            <div key={i} className="h-auto border-[1px] border-gray-200 py-8 rounded-md z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative ">
              <div className="relative w-full h-auto flex products-center justify-center px-4 group">
                <img
                  className="w-52 h-64 object-contain"
                  src={product.image}
                  alt="ProductImg"
                />
              </div>
              <div className="px-4 z-10 bg-white pb-10">
                <div className="flex products-center justify-between items-center">
                  <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue">
                    {product.title.slice(0, 25)}
                  </h2>
                  <p className="text-sm text-gray-600 font-semibold">
                    $ {product.price}
                  </p>
                </div>
                <div></div>
                <Link to={`/product/${product.id}`}>
                  <button className="absolute bottom-0 left-[50%] translate-x-[-50%] mt-2 mb-8 w-[calc(100%_-_20px)] border-none bg-yellow-300 rounded-md py-1 font-semibold hover:bg-yellow-500 duration-300 active:bg-yellow-700">
                    Product details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RelatedProducts;
