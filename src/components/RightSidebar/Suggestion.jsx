import React from "react";

function Suggestion({ img, name, username }) {
  return (
    <span className="flex justify-between items-center">
      <span className="flex gap-2">
        <img
          className="w-[50px] h-[50px] rounded-full"
          src={img}
          alt="Profile"
        />
        <span>
          <p>{name}</p>
          <p className="text-gray-500 text-sm">{username}</p>
        </span>
      </span>
      <button className="bg-blue-500 px-4 py-1 rounded-full hover:cursor-pointer ">
        Follow
      </button>
    </span>
  );
}

export default Suggestion;
