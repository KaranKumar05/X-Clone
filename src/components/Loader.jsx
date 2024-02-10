import React from "react";
import "./style.css";
import Logo from "../assets/logo.svg";

function Loader() {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="flex flex-col gap-2 justify-center items-center loaderContainer">
        <img src={Logo} className="w-12 invert" alt="" />
        <div class="loader"></div>
      </div>
    </div>
  );
}

export default Loader;
