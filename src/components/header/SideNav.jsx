import React, { Fragment } from "react";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideNavContent from "./SideNavContent";
import { useNavigate } from "react-router";

const SideNav = ({ setSideNav, user }) => {
  const navigate = useNavigate()
  const contentList = [
    {
      title: "Digital Content & Devices",
      firstSubTitle: "Amazon Music",
      secondSubTitle: "Kindle E-readers & Books",
      thirdSubTitle: "Amazon Appstore",
    },
    {
      title: "Shop By Department",
      firstSubTitle: "Electronics",
      secondSubTitle: "Computers",
      thirdSubTitle: "Smart Home",
    },
    {
      title: "Programs & Features",
      firstSubTitle: "Gift Cards",
      secondSubTitle: "Amazon live",
      thirdSubTitle: "International Shopping",
    },
    {
      title: "Help & Settings",
      firstSubTitle: "Your Account",
      secondSubTitle: "Customer Service",
      thirdSubTitle: "Contact us",
    },
  ];

  return (
    <Fragment>
      <div
        onClick={() => setSideNav(false)}
        className="w-full h-screen fixed top-0 left-0 bg-amazon_blue bg-opacity-50 "
      ></div>
      <div className="h-screen text-black fixed top-0 left-0  bg-opacity-50">
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-[80%] md:w-[350px]  h-full bg-white border border-black z-10"
        >
          <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
            <AccountCircleIcon style={{ fontSize: "2.5rem" }} />
            <h3 className="font-titleFont font-bold text-lg tracking-wide">
              Hello,{" "}
              {user ? (
                user.name.split(" ")[0]
              ) : (
                <span
                  onClick={() => navigate("/signin")}
                  className="cursor-pointer"
                >
                  {" "}
                  Sign in
                </span>
              )}
            </h3>
          </div>
          {contentList.map((content, index) => (
            <SideNavContent key={index} {...content} />
          ))}
          <span
            onClick={() => setSideNav(false)}
            className="cursor-pointer absolute top-0 left-[220px] md:left-[360px] w-10 h-10 text-white flex items-center justify-center"
          >
            <CloseIcon fontSize="large" />
          </span>
        </motion.div>
      </div>
    </Fragment>
  );
};

export default SideNav;
