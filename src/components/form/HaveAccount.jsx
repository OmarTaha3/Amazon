import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { ArrowRight } from "@mui/icons-material";

const HaveAccount = () => {
  return (
    <Fragment>
      <div className="mt-4 h-[10px] bg-gradient-to-b from-[#00000024] to-transparent via-[#00000008_3px] after:block after:content-['']  after:w-full after:h-[5px] after:bg-gradient-to-r after:from-white after:via-transparent after:to-white"></div>
      <p className="text-xs leading-4 mt-2 mb-1">
        Already have an account?{" "}
        <Link to="/signin" className="group">
          <span className="text-blue-600 cursor-pointer group-hover:underline group-hover:text-orange-700">
            Sign in
          </span>
          <ArrowRight className="w-4 h-4 -ml-1 text-blue-600 group-hover:text-orange-700" />
        </Link>
      </p>
      <p className="text-xs -mt-3 group">
        Buying for work?{" "}
        <span className="text-blue-600 cursor-pointer hover:underline hover:text-orange-700">
          Create a free business account
        </span>
        <ArrowRight className="w-4 h-4 -ml-1 text-blue-600 group-hover:text-orange-700" />
      </p>
    </Fragment>
  );
};

export default HaveAccount;
