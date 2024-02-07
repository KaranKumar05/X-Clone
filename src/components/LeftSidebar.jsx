import React from "react";
import Logo from "../assets/logo.svg";
import ProfilePic from "../assets/Profile.jpg";

import { GoHome, GoBell } from "react-icons/go";
import { IoSearchOutline, IoPersonOutline } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { LuSquareSlash } from "react-icons/lu";
import { BiLeaf } from "react-icons/bi";

function LeftSidebar() {
  return (
    <div className="text-white flex flex-col gap-4 py-3 items-end pl-12 tablet:pr-0 mobile:w-[10%] desktop:w-[18%] desktop:items-start desktop:px-0">
      <div className="w-10 invert">
        <img src={Logo} alt="logo" />
      </div>
      <div className="flex flex-col gap-1 text-[1rem]">
        <span className="flex gap-4 items-center p-2 w-fit hover:bg-[#1D1F23] hover:rounded-full hover:cursor-pointer ">
          <span className="text-[1.7rem]">
            <GoHome />
          </span>
          <span className="hidden desktop:block">Home</span>
        </span>
        <span className="flex gap-4 items-center p-2 w-fit hover:bg-[#1D1F23] hover:rounded-full hover:cursor-pointer">
          <span className="text-[1.7rem]">
            <IoSearchOutline />
          </span>
          <span className="hidden desktop:block">Explore</span>
        </span>
        <span className="flex gap-4 items-center p-2 w-fit hover:bg-[#1D1F23] hover:rounded-full hover:cursor-pointer">
          <span className="text-[1.7rem]">
            <GoBell />
          </span>
          <span className="hidden desktop:block">Notification</span>
        </span>
        <span className="flex gap-4 items-center p-2 w-fit hover:bg-[#1D1F23] hover:rounded-full hover:cursor-pointer">
          <span className="text-[1.7rem]">
            <MdMailOutline />
          </span>
          <span className="hidden desktop:block">Messages</span>
        </span>
        <span className="flex gap-4 items-center p-2 w-fit hover:bg-[#1D1F23] hover:rounded-full hover:cursor-pointer">
          <span className="text-[1.7rem]">
            <LuSquareSlash />
          </span>
          <span className="hidden desktop:block">Grok</span>
        </span>
        <span className="flex gap-4 items-center p-2 w-fit hover:bg-[#1D1F23] hover:rounded-full hover:cursor-pointer">
          <span className="text-[1.7rem]">
            <IoPersonOutline />
          </span>
          <span className="hidden desktop:block">Profile</span>
        </span>
        <span className="flex gap-4 items-center p-2 w-fit hover:bg-[#1D1F23] hover:rounded-full hover:cursor-pointer">
          <span className="text-[1.7rem]">
            <CiCircleMore />
          </span>
          <span className="hidden desktop:block">More</span>
        </span>
      </div>
      <div>
        <button className="bg-blue-500 rounded-full ">
          <span className="hidden desktop:block py-[.6rem] px-24 font-bold">Post</span>
          <span className="desktop:hidden p-4 flex justify-center items-center text-xl">
            <BiLeaf />
          </span>
        </button>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="flex gap-4 items-center w-[3rem] desktop:w-[13rem] ">
          <span className="">
            <img
              className="rounded-full w-12 h-12"
              src={ProfilePic}
              alt="profile"
            />
          </span>
          <span className="hidden desktop:block">
            <p>Karan Kuamr</p>
            <p className="text-gray-500 text-sm">@DsAplha07</p>
          </span>
        </span>
        <span className="hidden desktop:block">
          <IoIosMore />
        </span>
      </div>
    </div>
  );
}

export default LeftSidebar;
