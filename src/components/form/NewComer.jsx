import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NewComer = () => {
  return (
    <Fragment>
      <div className="w-full text-xs text-gray-600 my-4 flex items-center">
        <span className="w-1/3 h-[1px] bg-zinc-400 "></span>
        <span className="w-1/3 text-center">New to Amazon?</span>
        <span className="w-1/3 h-[1px] bg-zinc-400"></span>
      </div>
      <Link to="/registration" className="w-full">
        <button className="w-full py-1.5 border  bg-white rounded-md text-sm hover:bg-gray-50 duration-100 active:bg-white shadow-[0_2px_5px_0_rgba(213,217,217,.5)]">
          Create your Amazon account
        </button>
      </Link>
    </Fragment>
  );
};

export default NewComer;
