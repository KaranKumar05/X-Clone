import React from "react";

import { GoHome, GoBell } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { LuSquareSlash } from "react-icons/lu";

function BottomNav() {
  return (
    <div className="text-white fixed z-[100000] left-0 top-[92%] right-0 flex justify-between text-3xl p-4 px-6 bg-black border-t border-gray-600">
      <span>
        <GoHome />
      </span>
      <span>
        <IoSearchOutline />
      </span>
      <span>
        <LuSquareSlash />
      </span>
      <span>
        <GoBell />
      </span>
      <span>
        <MdMailOutline />
      </span>
    </div>
  );
}

export default BottomNav;
