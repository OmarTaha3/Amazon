import React from "react";
import StarIcon from "@mui/icons-material/Star";
import PopUpList from "./PopUpList";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../state/productSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ProductsList = ({ data }) => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);
  const filteredData = data.filter(
    (product) => product.category === category.toLowerCase()
  );
  const allData = data;
  data = category === "All" ? allData : filteredData;
  return data.map((item) => {
    const rate = Math.round(item.rating.rate);
    const restStars = 5 - rate;
    return (
      <div
        key={item.id}
        className="bg-white h-auto border-[1px] border-gray-100 py-8 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
      >
        <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">
          {item.category}
        </span>
        <div className="relative w-full h-auto flex items-center justify-center px-4 group">
          <Link to={`/product/${item.id}`}>
            <img
              className="w-52 h-64 object-contain"
              src={item.image}
              alt="ProductImg"
            />
          </Link>
          <PopUpList item={item} user={user} />
        </div>
        <div className="px-4 z-10 bg-white pb-10">
          <div className="flex items-center justify-between">
            <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue">
              {item.title.slice(0, 25)}
            </h2>
            <p className="text-sm text-gray-600 font-semibold">
              {"$"}
              {item.price}
            </p>
          </div>
          <div>
            <p className="text-sm ">{item.description.slice(0, 100)}...</p>
            <div className="text-yellow-400 mb-2 mt-3">
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
          </div>
          <button
            onClick={() => {
              if (user) {
                dispatch(
                  addToCart({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    category: item.category,
                    image: item.image,
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
            className="absolute bottom-0 left-[50%] translate-x-[-50%] mt-2 mb-8 w-[calc(100%_-_20px)] border-none bg-yellow-300 rounded-md py-1 font-semibold hover:bg-yellow-500 duration-300 active:bg-yellow-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  });
};

export default ProductsList;
