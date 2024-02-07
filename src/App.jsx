import React from "react";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="flex items-start justify-start gap-0 tablet:justify-center pl-0 mobile:pl-8 tablet:gap-4 ">
      <span className="hidden mobile:block sticky top-0 left-[5%] right-0 tablet:left-10 w-fit">
        <LeftSidebar />
      </span>
      <span className="w-[100%] mobile-landscape:w-[37rem]">
        <Home />
      </span>
      <span className="hidden tablet:block sticky top-0 left-100% right-0">
        <RightSidebar />
      </span>
    </div>
  );
}

export default App;
