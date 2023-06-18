import React from "react";

import PaymentWidget from "./PaymentWidget";
import ItemCart from "./ItemCart";

const LoadedCart = ({ totalPrice }) => {
  return (
    <div className="container mx-auto grid xl:grid-cols-5 md:gap-8">
      <ItemCart  />
      <PaymentWidget totalPrice={totalPrice} />
    </div>
  );
};

export default LoadedCart;
