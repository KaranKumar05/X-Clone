import { useState } from "react";
import React from "react";
import Logo from "../assets/logo.svg";

function Notification({ img, name, message }) {
  return (
    <div className="flex border-b border-gray-600 gap-4 py-3 px-6 cursor-pointer">
      <span className="w-fit">
        <img
          className={`w-12 h-12 rounded-full ${img == Logo ? "invert" : ""}`}
          src={img}
          alt="profile"
        />
      </span>
      <span className="flex gap-2">
        <p className="hover:underline">{name}</p>
        <p>{message}</p>
      </span>
    </div>
  );
}

export default Notification;
