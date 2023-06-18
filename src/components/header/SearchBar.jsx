import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { useState } from "react";
import { setCategory } from "../../state/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Mic from "./Mic";

const SearchBar = ({className}) => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.products);
  const [showMenu, setShowMenu] = useState(false);
  const [inputValue, setInputValue] = useState("OmarTaha");
  const list = (
    <ul
      onClick={() => setShowMenu(false)}
      className={` fixed w-56 left-[7px] top-[109px] md:left-[113px] lg:left-[260px] h-auto md:top-[54px] bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50 rounded-md`}
    >
      <li className="dropMenuRow" onClick={() => dispatch(setCategory("All"))}>
        All Departments
      </li>
      <li
        className="dropMenuRow"
        onClick={() => dispatch(setCategory("Men's Clothing"))}
      >
        Men's Clothing
      </li>
      <li
        className="dropMenuRow"
        onClick={() => dispatch(setCategory("Women's Clothing"))}
      >
        Women's Clothing
      </li>
      <li
        className="dropMenuRow"
        onClick={() => dispatch(setCategory("Electronics"))}
      >
        Electronics
      </li>
      <li
        className="dropMenuRow"
        onClick={() => dispatch(setCategory("Jewelery"))}
      >
        Jewelery
      </li>
    </ul>
  );

  return (
    <div className={` h-10 w-full md:w-fit rounded-md items-center flex-grow relative overflow-hidden ${className} `}>
      <span
        onMouseOver={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
        className="font-titleFont  text-sm bg-gray-200 text-amazon_blue p-2 h-full cursor-pointer hover:bg-gray-300 duration-300"
      >
        {category}
        <ArrowDropDownOutlinedIcon />
      </span>
      <span
        className="relative z-50"
        onMouseOver={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
      >
        {showMenu && list}
      </span>
      <input
        className="h-full text-base text-amazon_blue flex-grow flex-shrink-0 w-16 outline-none border-none px-2"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Mic setMicResult={setInputValue} />
      <span className="bg-amazon_yellow p-2 text-amazon_blue hover:bg-[#f3a847] duration-300 cursor-pointer">
        <SearchIcon />
      </span>
    </div>
  );
};

export default SearchBar;
