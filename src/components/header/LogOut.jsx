import React from "react";
import { auth } from "../../firebase.js";
import { logout } from "../../state/authSlice.js";
import { useDispatch } from "react-redux";
import { Logout } from "@mui/icons-material";
import { toast } from "react-toastify";

const LogOut = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
        toast.success("Logged Out Successfully!", {
          autoClose: 1000,
        });
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <div
      onClick={handleLogOut}
      className="flex flex-col justify-center items-center headerHover relative "
    >
      <Logout />
      <p className="hidden mdl:inline-flex text-xs font-semibold text-white">
        Log out
      </p>
    </div>
  );
};

export default LogOut;
