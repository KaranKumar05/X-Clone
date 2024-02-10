import React, { useEffect, useState } from "react";
import LeftSidebar from "../components/LeftSidebar";
import Home from "./Home/Home";
import RightSidebar from "../components/RightSidebar";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Explore from "./Explore/Explore";
import Notifications from "./Notification/Notifications";
import Gork from "./Grok/Grok";
import Profile from "./Profile/Profile";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import Loader from "../components/Loader";

function Index() {
 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loader />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/grok" element={<Gork />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Index;
