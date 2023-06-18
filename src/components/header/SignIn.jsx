import React from "react";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { Link } from "react-router-dom";

const SignIn = ({ user }) => {
  return (
    <Link to={user ? '/profile' : '/signin'}>
      <div className="headerHover">
        <p className="text-sm mdl:text-xs text-white mdl:text-lightText font-light">
          Hello, {user ? <span className="mdl:text-white font-semibold">{user.name.split(" ")[0]}</span> : "Sign in"}
          <span className=" text-sm font-semibold -mt-1 text-whiteText  block">
            Accounts & Lists
            <span className="-mr-3">
              <ArrowDropDownOutlinedIcon />
            </span>
          </span>
        </p>
      </div>
    </Link>
  );
};

export default SignIn;
