import React from 'react'
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const DeliverPlace = () => {
  return (
    <div className="headerHover hidden lg:inline-flex">
      <LocationOnOutlinedIcon />
      <p className="text-sm text-lightText font-light">
        Deliver to
        <span className="block text-sm font-semibold -mt-1 text-whiteText">
          Egypt
        </span>
      </p>
    </div>
  );
}

export default DeliverPlace
