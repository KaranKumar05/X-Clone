import { useState } from "react";
import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { IoIosMore } from "react-icons/io";
import { FaRegComment } from "react-icons/fa6";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoMdStats } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";

function Post({
  name,
  username,
  time,
  likes,
  img,
  blueTick,
  caption,
  hashTags,
  profilePic
}) {
  const [like, setLike] = useState(true);
  const [bookmark, setBookmark] = useState(true);
  const [currentLikes, setCurrentLikes] = useState(likes);

  let tags = hashTags.split(",");

  const likeHandler = () => {
    setLike(!like);
    if (like) {
      setCurrentLikes(currentLikes + 1);
    } else {
      setCurrentLikes(currentLikes - 1);
    }
  };

  const saveHandler = () => {
    setBookmark(!bookmark);
  };

  return (
    <div className="px-4 py-2 flex gap-4 border-b border-gray-600 w-full">
      <span className="w-fit">
        <img
          className=" w-12 h-12 rounded-full"
          src={profilePic}
          alt="profile"
        />
      </span>
      <span className="flex flex-col justify-center gap-4 w-[80%]">
        <span className="flex justify-between items-center">
          <span className="flex gap-2 items-center">
            <p className="flex items-center gap-2 hover:underline hover:cursor-pointer">
              {name}
              {blueTick ? <BsPatchCheckFill className="text-blue-500" /> : null}
            </p>
            <p className="text-gray-500 text-sm">{username} - </p>
            <p className="text-gray-500 text-sm">{time}</p>
          </span>
          <IoIosMore className="text-gray-500" />
        </span>

        <span>
          <p>{caption}</p>
        </span>
        <span className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <span key={index} className=" text-blue-500">
              <p>{tag}</p>
            </span>
          ))}
        </span>

        <span className="w-fit border border-[#71767B] rounded-2xl">
          <img className="rounded-2xl" src={img} alt="Post image" />
        </span>
        <span className="flex justify-between text-gray-500 text-[1.2rem]">
          <span className="flex items-center gap-1 mobile:gap-2">
            <FaRegComment className="hover:cursor-pointer" />
            <p className="text-[.95rem]">322</p>
          </span>
          <span className="flex items-center gap-1 mobile:gap-2">
            <FaRetweet className="hover:cursor-pointer" />
            <p className="text-[.95rem]">29</p>
          </span>
          <span
            onClick={likeHandler}
            className="hover:cursor-pointer flex items-center gap-1 mobile:gap-2"
          >
            {like ? <FaRegHeart /> : <FaHeart className="text-red-600" />}
            <p className="text-[.95rem]">{currentLikes}</p>
          </span>
          <span className="flex items-center gap-1 mobile:gap-2">
            <IoMdStats className="hover:cursor-pointer" />
            <p className="text-[.95rem]">1.1K</p>
          </span>
          <span className="flex items-center gap-2 mobile:gap-4">
            <span onClick={saveHandler} className="hover:cursor-pointer">
              {bookmark ? (
                <FaRegBookmark />
              ) : (
                <FaBookmark className="text-yellow-400" />
              )}
            </span>
            <IoShareSocialOutline className="hover:cursor-pointer" />
          </span>
        </span>
      </span>
    </div>
  );
}

export default Post;
