import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const FooterTop = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Fragment>
      {!user && (
        <div className="w-full bg-white p-6">
          <div className="border-t-[1px] border-b-[1px] py-8 text-center">
            <p className="text-sm mb-1">See Personalized Recommendations</p>
            <Link to="/signin">
              <button className="mb-1 w-64 border-none bg-yellow-300 rounded-md py-1 hover:bg-yellow-500 duration-300 active:bg-yellow-700">
                Sign In
              </button>
            </Link>
            <p className="text-xs mt-1">
              New Customer ?{" "}
              <Link
                className="text-blue-600 ml-1 hover:underline hover:text-orange-700"
                to="/registration"
              >
                Start Here
              </Link>
              .
            </p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default FooterTop;
