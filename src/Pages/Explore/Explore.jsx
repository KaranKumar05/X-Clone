import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import ProfilePic from "../../assets/Profile.jpg";
import Logo from "../../assets/logo.svg";

import { IoImageOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineGifBox } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { GrScheduleNew } from "react-icons/gr";
import { BiPoll } from "react-icons/bi";
import { FaGlobeAmericas } from "react-icons/fa";
import Post from "../../components/Post";
import BottomNav from "../../components/bottomNav";
import RightSidebar from "../../components/RightSidebar";
import LeftSidebar from "../../components/LeftSidebar";
import { IoSearchOutline } from "react-icons/io5";
import Trends from "../../components/RightSidebar/Trends";
import Suggestion from "../../components/RightSidebar/Suggestion";
import { IoIosMore } from "react-icons/io";
import { LiaCopyrightSolid } from "react-icons/lia";

function Explore() {
  document.title = `X - Explore`;

  return (
    <div className="flex items-start justify-start gap-0 tablet:justify-center pl-0 mobile:pl-8 tablet:gap-4">
      <span className="hidden mobile:block sticky top-0 left-[5%] right-0 tablet:left-10 w-fit">
        <LeftSidebar />
      </span>
      <span className="w-[100%] mobile-landscape:w-[37rem]">
        <div className="w-100% tablet:[38rem] text-white border-r border-l border-gray-600 mb-20 mobile:mb-0">
          <header className="flex flex-col items-center  sticky top-0 left-0 right-0 backdrop-blur-md bg-black/90">
            <span className="flex items-center justify-between w-[100%] font-medium px-4">
              <span className="w-10 py-2 block mobile:hidden">
                <img className="rounded-full" src={ProfilePic} alt="" />
              </span>
              <div className=" w-[100%]  px-4 py-3 text-center">
                <div className=" flex items-center gap-3 border border-transparent text-[#737373] px-2 rounded-full bg-[#16181C] focus-within:border-blue-500 focus-within:text-blue-500 focus-within:border focus-within:bg-transparent">
                  <IoSearchOutline className="text-xl " />
                  <input
                    className="border-none outline-none bg-transparent font-medium p-2 text-white placeholder:text-[#737373] placeholder:font-medium"
                    placeholder="Search"
                    type="text"
                  />
                </div>
              </div>
              <div className="w-1/12 text-xl px-2">
                <IoSettingsOutline />
              </div>
            </span>
          </header>
          <div className="">
            <div className="w-100% py-2 rounded-xl flex flex-col ">
              <h1 className="text-xl font-bold px-4 mb-2">Trend for you</h1>
              <Trends counter="India" trend="AskBabar" posts={93} />
              <Trends counter="Pakistan" trend="AskBabar" posts={78} />
              <Trends counter="Englend" trend="Trading" posts={52} />
              <a className="text-blue-500 text-sm px-4 py-2" href="/#">
                Show more
              </a>
            </div>
          </div>

          <Post
            profilePic={ProfilePic}
            name="Karan Kumar"
            username="@DsAlpha07"
            time="1H"
            hashTags="#coding,#wenDevelopment,#development"
            img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/2d78d141-1f64-44c8-976b-7321284e5147/dfjfdbh-02721342-e03d-4748-965f-f5fd5773baba.png"
            caption="Unlock the Language of Possibilities: Dive into Coding and Shape Tomorrow's World, One Line at a Time."
            likes={455}
            blueTick={true}
          />
          <Post
            profilePic="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg"
            name="Elon Must"
            username="@ElonMusk420"
            hashTags="#gaming,#pubg,#pubgMobile,#chickenDinner"
            time="2H"
            img="https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg"
            caption="Embark on a journey fueled by horsepower and adrenaline, where every curve and rev ignites the passion for freedom and exploration. 🚗💨 "
            likes={998}
            blueTick={false}
          />
          <Post
            profilePic="https://wikisportsbio.com/wp-content/uploads/2023/11/Dani-Daniels.jpg"
            name="DaniDani"
            hashTags="#cake,#sweet,#bakery,#favurite"
            username="@DDaniles2002"
            time="3H"
            img="https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"
            caption="ndulge in a symphony of sweetness and delight, where each slice is a delectable escape into pure bliss. 🍰✨"
            likes={974}
            blueTick={true}
          />
        </div>
        <span className="block mobile:hidden">
          <BottomNav />
        </span>
      </span>
      <span className="hidden tablet:block sticky top-2 left-100% right-0">
        <div className="text-white w-[15rem] laptop:w-[19rem] laptop:[20rem] flex flex-col gap-4">
          <div className="w-[15rem] laptop:w-[19rem] bg-[#16181C] p-4 rounded-xl flex flex-col gap-4">
            <h1 className="text-xl font-bold">Who to follow</h1>
            <Suggestion
              img={ProfilePic}
              name="Karan Kumar"
              username="@DsAlpha07"
            />
            <Suggestion
              img="data:image/jpeg;base64,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"
              name="Dwayne John"
              username="@RockJohnson"
            />
            <Suggestion
              img="https://yt3.googleusercontent.com/ifZJFKoXaasijKlvMxM43d1lXCsvTjJgujLvEWCvv68e8rHKSg2OmixwdRBp_L_50uQBviQOHA=s900-c-k-c0x00ffffff-no-rj"
              name="Johnny Sins"
              username="@johnny_55"
            />
            <a className="text-blue-500 text-sm" href="/#">
              Show more
            </a>
          </div>
          <div className="flex flex-col text-[12px] px-3">
            <span className="flex justify-between">
              <p>Terms of Services</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </span>
            <span className="flex justify-between">
              <p>Accessibility</p>
              <p>Ads info</p>
              <p className="flex items-center gap-1">
                More
                <IoIosMore />
              </p>
              <p className="flex items-center">
                <LiaCopyrightSolid />
                2024 X Corp
              </p>
            </span>
          </div>
        </div>
      </span>
    </div>
  );
}

export default Explore;
