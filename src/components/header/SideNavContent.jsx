import React from 'react'
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const SideNavContent = ({
  title,
  firstSubTitle,
  secondSubTitle,
  thirdSubTitle,
}) => {
  return (
    <div className="py-3 border-b-[1px] border-b-gray-300 ">
      <h3 className="text-lg font-titleFont font-semibold mb-1 mt-2 px-6">
        {title}
      </h3>
      <ul className='text-sm'>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {firstSubTitle}
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </li>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {secondSubTitle}
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </li>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {thirdSubTitle}
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SideNavContent;
