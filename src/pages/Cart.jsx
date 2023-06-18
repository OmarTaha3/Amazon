import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EmptyCart from "../components/cart/EmptyCart";
import LoadedCart from "../components/cart/LoadedCart";
import withGuard from "../util/withGuard";

const Cart = () => {
  const { products } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);
  const [totalPrice, setTotalPrice] = useState("");
  useEffect(() => {
    let total = 0;
    products.map((item) => {
      total += item.price * item.quantity;
      return setTotalPrice(total.toFixed(2));
    });
  });

  return (
    <div className="font-bodyFont bg-gray-100 w-full p-4 ">
      {user && products.length > 0 ? (
        <LoadedCart totalPrice={totalPrice} />
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default withGuard(Cart);
