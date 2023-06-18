import React from "react";
import { Fragment, useState } from "react";
import { ArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router";

const NeedHelp = () => {
  const navigate = useNavigate();
  const [showHelps, setShowHelps] = useState(false);
  return (
    <div className="text-xs text-gray-600 mt-4 cursor-pointer w-fit">
      {showHelps ? (
        <Fragment>
          <p className="group ">
            <ArrowRight className="rotate-90" />
            <span
              onClick={() => setShowHelps(!showHelps)}
              className="text-xs  text-blue-600 group-hover:underline group-hover:text-orange-700"
            >
              Need help ?
            </span>
          </p>
          <span
            onClick={() => navigate("/resetPassword")}
            className="mb-1.5 ml-6 block text-xs text-blue-600 hover:underline hover:text-orange-700"
          >
            Forget your password ?
          </span>
          <span className="ml-6  block text-xs text-blue-600 hover:underline hover:text-orange-700">
            Other issues with Sign-In
          </span>
        </Fragment>
      ) : (
        <Fragment>
          <p className="group">
            <ArrowRight />
            <span
              onClick={() => setShowHelps(!showHelps)}
              className="text-xs text-blue-600 group-hover:underline group-hover:text-orange-700"
            >
              Need help ?
            </span>
          </p>
        </Fragment>
      )}
    </div>
  );
};

export default NeedHelp;
