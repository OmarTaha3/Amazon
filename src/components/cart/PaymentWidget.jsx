import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PaymentWidget = ({totalPrice}) => {
  return (
    <div className="lgl:sticky lgl:top-[140px] w-full h-52  xl:col-span-1 col-span-4 flex justify-center  items-center mt-[20px] md:mt-0">
      <div className="w-full  md:w-1/2 xl:w-full -mt-[30px]  bg-white flex flex-col justify-center  items-center p-4">
        <div className=" bg-white">
          <p className="flex gap-2 items-start text-sm">
            <span>
              <CheckCircleIcon className="text-green-500" />
            </span>
            Your order qualifies for FREE Shipping Choose this option at
            checkout. See details....
          </p>
        </div>
        <div>
          <p className="font-semibold px-10 py-1 flex items-center gap-2 justify-between">
            Total:
            <span className="text-lg font-bold">${totalPrice}</span>
          </p>
        </div>
        <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-500 border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default PaymentWidget;
