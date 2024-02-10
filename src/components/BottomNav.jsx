import React from "react";

import { GoHome, GoBell } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { LuSquareSlash } from "react-icons/lu";
import { Link } from "react-router-dom";
import { BiLeaf } from "react-icons/bi";


function BottomNav() {
  return (
    <div className="flex flex-col fixed z-[100000] left-0 top-[79%] right-0">
      <span className="flex justify-end p-4">
        <button className="bg-blue-500 rounded-full">
          <span className="mobile:hidden p-4 flex justify-center items-center text-xl text-white">
            <BiLeaf />
          </span>
        </button>
      </span>
      <div className="text-white flex justify-between text-3xl p-6 px-6 backdrop-blur-md bg-black/10">
        <Link className="cursor-pointer" to={"/home"}>
          <GoHome />
        </Link>
        <Link className="cursor-pointer" to={"/explore"}>
          <IoSearchOutline />
        </Link>
        <Link className="cursor-pointer" to={"/grok"}>
          <LuSquareSlash />
        </Link>
        <Link className="cursor-pointer" to={"/notifications"}>
          <GoBell />
        </Link>
        <Link className="cursor-pointer" to={"/home"}>
          <MdMailOutline />
        </Link>
      </div>
    </div>
  );
}

export default BottomNav;
