import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Order from "../components/orders/Order";
import withGuard from "../util/withGuard";


const Orders = () => {
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.products);
  const threeProducts = data.slice(0, 3);
  const twoProducts = data.slice(4, 6);
  const sixProducts = data.slice(7, 13);

  let totalThree = 0;
  threeProducts.map((item) => (totalThree += item.price));
  let totalTwo = 0;
  twoProducts.map((item) => (totalTwo += item.price));
  let totalSix = 0;
  sixProducts.map((item) => (totalSix += item.price));

  return (
    <div className="max-w-screen-lg mx-auto p-5">
      <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
        My Orders{" "}
        <span className="text-gray-400 float-right text-base mt-2 ">
          {" "}
          - Static Page
        </span>
      </h1>
      <h2>3 Orders</h2>
      <div className="mt-5 space-y-5">
        <Order
          total={totalThree}
          products={threeProducts}
          navigate={navigate}
          date={15}
          id={320}
        />
        <Order
          total={totalTwo}
          products={twoProducts}
          navigate={navigate}
          date={10}
          id={293}
        />
        <Order
          total={totalSix}
          products={sixProducts}
          navigate={navigate}
          date={5}
          id={279}
        />
      </div>
    </div>
  );
};

export default withGuard(Orders);
