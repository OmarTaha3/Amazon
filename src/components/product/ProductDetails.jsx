import React from "react";
import { addToCart } from "../../state/productSlice";
import StarIcon from "@mui/icons-material/Star";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";


const ProductDetails = ({product}) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const rate = Math.round(product.rating.rate);
  const restStars = 5 - rate;

  return (
    <div className="container mx-auto grid mb-10 mdl:gap-8">
      <div className="w-full h-full  px-4 md:col-span-4 ">
        <div>
          <h2 className="font-titleFont pb-4 rounded-md font-semibold text-xl ">
            Product Details Page
          </h2>
          <div className="w-full bg-white mdl:px-4 px-2 mdl:py-10 py-4 pb-4 rounded-md flex flex-col md:flex-row products-center items-center justify-center gap-6">
            <div className="mdl:w-2/5 mt-2">
              <img
                className="w-full mdl:h-[500px] object-contain"
                src={product.image}
                alt=""
              />
            </div>
            <div className="mdl:w-3/5 px-2 ">
              <h2 className="font-semibold mdl:text-4xl mb-6">
                {product.title}
              </h2>
              <p className="mdl:pr-5 mdl:text-lg mb-6 text-gray-500 max-w-[650px]">
                {product.description}
              </p>
              <div className="text-yellow-400 mb-6 mt-3">
                {Array(rate)
                  .fill()
                  .map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                <span className="text-gray-300">
                  {Array(restStars)
                    .fill()
                    .map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                </span>
              </div>
              <p className="text-base mb-4">
                Unit Price:{" "}
                <span className="font-semibold">${product.price}</span>
              </p>
              <p className="text-base mb-4">
                Category:{" "}
                <span className="font-semibold">{product.category}</span>
              </p>
              <button
                onClick={() => {
                  if (user) {
                    dispatch(
                      addToCart({
                        id: product.id,
                        title: product.title,
                        description: product.description,
                        price: product.price,
                        category: product.category,
                        image: product.image,
                        quantity: 1,
                      })
                    );
                    toast.success("Added Successfully!", {
                      autoClose: 1000,
                    });
                  } else {
                    toast.error("You should sign in first!");
                  }
                }}
                className="border-none py-1.5 px-2 bg-yellow-300 rounded-md text-sm hover:bg-yellow-500 duration-300 active:bg-yellow-700 shadow-md mt-4 block -mb-2 md:mb-1 mx-auto md:mx-0"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
