import React from "react";
import { IoIosMore } from "react-icons/io";


function Trends({counter, trend, posts}) {
  return (
    <span className="hover:bg-[#1D1F23] px-4 py-2  transition-all">
      <span className="flex justify-between">
        <p className="text-gray-500 text-sm">Trending in {counter}</p>
        <IoIosMore className="hover:cursor-pointer" />
      </span>
      <p className="text-[1rem]">#{trend}</p>
      <p className="text-gray-500 text-sm">{posts}K posts</p>
    </span>
  );
}

export default Trends;
