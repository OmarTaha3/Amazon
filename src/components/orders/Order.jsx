import React from 'react'

const Order = ({ total, products, navigate,date , id }) => {
  return (
    <div className="relative border rounded-md ">
      <div className="flex items-start md:space-x-10 space-x-5 p-5 pt-8 bg-gray-100 text-sm text-gray-600 ">
        <div>
          <p className="font-bold text-xs">ORDER PLACED</p>
          <p>{date} Jun 2023</p>
        </div>
        <div>
          <p className="text-xs font-bold">TOTAL</p>
          <p>$ {total.toFixed(2)} - Delivered</p>
        </div>
        <div className="flex-1  text-blue-500 min-w-[70px] text-right">
          <p className=" text-sm sm:text-xl "> {products.length} Items</p>
        </div>
        <p className="absolute text-xs top-2 right-2 w-42 truncate">
          Order #amazon_test_20231257{id}
        </p>
      </div>
      <div className="p-5 ">
        <div className="flex gap-6 overflow-x-auto">
          {products.map((product, i) => (
            <img
              key={i}
              src={product.image}
              alt=""
              className="h-20 object-contain cursor-pointer "
              onClick={() => navigate(`/product/${product.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order
