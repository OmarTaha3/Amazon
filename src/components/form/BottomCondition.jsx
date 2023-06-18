import React, { Fragment } from "react";

const BottomCondition = ({ value, loading }) => {
  return (
    <Fragment>
      <button
        className="disabled:cursor-wait disabled:bg-yellow-100 w-full py-1.5 border-none bg-yellow-300 rounded-md text-sm hover:bg-yellow-500 duration-100 active:bg-yellow-700 shadow-md mt-4"
        type="submit"
        disabled={loading}
      >
        {value}
      </button>
      <p className="text-xs leading-4 mt-4">
        By Continuing, you agree to Amazon's{" "}
        <span className="text-blue-600 cursor-pointer hover:underline hover:text-orange-700">
          Conditions of Use
        </span>{" "}
        and{" "}
        <span className="text-blue-600 cursor-pointer hover:underline hover:text-orange-700">
          Privacy Notice
        </span>
        .
      </p>
    </Fragment>
  );
};

export default BottomCondition;
