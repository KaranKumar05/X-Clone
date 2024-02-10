import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import "./style.css";
import { Link } from "react-router-dom";

function Login() {
  document.title = `X - Login`;

  return (
    <div className="parent flex flex-col justify-center items-center h-[95vh] bg-transparent ">
      <div className="flex flex-col backdrop-blur-md bg-white/10 p-4 rounded-xl">
        <span className="flex items-center justify-center border-b-2 border-white mb-4">
          <img src={Logo} alt="logo" className="invert w-12" />
          <h1 className="text-4xl font-bold text-white text-center">Login</h1>
        </span>
        <div className="textInputWrapper">
          <input placeholder="Email" type="text" className="textInput " />
        </div>
        <div className="textInputWrapper">
          <input placeholder="Password" type="text" className="textInput" />
        </div>
        <span className="self-center w-100%">
          <button className="bg-blue-600 w-[15rem] text-white px-6 py-2 rounded-md hover:bg-blue-700  transition-all ease-in duration-200">
            Login
          </button>
        </span>
        <p className="text-white text-center mt-4">
          Already Have an Account?{" "}
          <Link
            to={"/signup"}
            className="text-blue-600 hover:text-blue-700  transition-all ease-in duration-200"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
