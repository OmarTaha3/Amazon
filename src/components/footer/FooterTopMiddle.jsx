import React from 'react'
import { middleList } from "./../../constants/index";
import FooterMiddleList from "./FooterMiddleList";

const FooterTopMiddle = () => {
  return (
    <div className="w-full border-b-[1px] border-gray-500 p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 mdl:grid-cols-4 gap-6 mx-auto max-w-5xl text-gray-300 md:place-items-center md:items-start">
        {middleList.map((item) => (
          <FooterMiddleList
            key={item.id}
            title={item.title}
            listData={item.listItem[0].listData}
          />
        ))}
      </div>
    </div>
  );
}

export default FooterTopMiddle
