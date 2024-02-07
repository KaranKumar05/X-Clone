import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import ProfilePic from "../assets/Profile.jpg";
import Logo from "../assets/logo.svg";

import { IoImageOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineGifBox } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { GrScheduleNew } from "react-icons/gr";
import { BiPoll } from "react-icons/bi";
import { FaGlobeAmericas } from "react-icons/fa";
import Post from "../components/Post";
import BottomNav from "../components/bottomNav";

function Home() {
  return (
    <>
      <div className="w-100% tablet:[38rem] text-white border-r border-l border-gray-600 mb-20 mobile:mb-0">
        <header className="flex flex-col items-center border-b-[1px] border-gray-600  mobile:sticky top-0 left-0 right-0 backdrop-blur-md bg-black/40">
          <span className="flex justify-between items-center w-[100%] px-4">
            <span className="w-10 py-2 block mobile:hidden">
              <img className="rounded-full" src={ProfilePic} alt="" />
            </span>
            <span className="w-10 invert block mobile:hidden">
              <img src={Logo} alt="logo" />
            </span>
            <div className="text-xl px-2 block mobile:hidden">
              <IoSettingsOutline />
            </div>
          </span>
          <span className="flex items-center w-[100%] font-medium">
            <div className="active w-1/2  px-4 py-3 text-center hover:cursor-pointer hover:bg-white/10">
              For You
            </div>
            <div className="w-1/2 px-4 py-3 text-center hover:cursor-pointer hover:bg-white/10 text-[#71767B]">
              Following
            </div>
            <div className="text-xl px-2 hidden mobile:block">
              <IoSettingsOutline />
            </div>
          </span>
        </header>
        <div className="flex-col hidden mobile:flex">
          <div className="flex gap-4 py-4 px-2 border-b-[1px] border-gray-600">
            <span>
              <img
                className="w-11 h-w-11 rounded-full"
                src={ProfilePic}
                alt=""
              />
            </span>
            <span className="flex flex-col gap-4 w-full">
              <input
                className="text-xl bg-transparent outline-none border-none"
                type="text"
                placeholder="What is happening?!"
              />
              <p className="text-sm text-blue-500 flex items-center gap-2">
                <FaGlobeAmericas />
                Everyone can reply
              </p>
              <hr className="border-gray-600" />
              <span className="flex justify-between items-center">
                <span className="flex text-blue-500 gap-4">
                  <IoImageOutline className="cursor-pointer" />
                  <IoLocationOutline className="cursor-pointer" />
                  <MdOutlineGifBox className="cursor-pointer" />
                  <BsEmojiSmile className="cursor-pointer" />
                  <GrScheduleNew className="cursor-pointer" />
                  <BiPoll className="cursor-pointer" />
                </span>
                <span>
                  <button className="bg-blue-500 px-4 py-1 rounded-full hover:cursor-pointer">
                    Post
                  </button>
                </span>
              </span>
            </span>
          </div>
          <span className="self-center">
            <p className="text-sm text-blue-500 py-4">Show 333 posts</p>
          </span>
          <hr className="border-gray-600" />
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
        <Post
          profilePic="https://hips.hearstapps.com/hmg-prod/images/gettyimages-492532708-copy.jpg"
          name="Ven Desial"
          hashTags="#fastandfouris,#cars,#movies"
          username="@VenD@2002"
          time="4H"
          img="https://m.media-amazon.com/images/I/71jXv6GypvL._AC_UF1000,1000_QL80_.jpg"
          caption="Speed, Thrills, and Furious Frenzy: Buckle Up for the Ride of Your Life!"
          likes={721}
          blueTick={false}
        />
        <Post
          profilePic="https://media.npr.org/assets/img/2024/01/31/gettyimages-1975322989-2b2089d910152fe9b2167d40cf36a7c00d2718d8-s1100-c50.jpg"
          name="Mark Zerk"
          hashTags="#connect,#connection,#popular,#joinWithMe"
          username="@markBerg_420"
          time="6H"
          img="https://www.searchenginejournal.com/wp-content/uploads/2023/07/threads-an-instagram-app-live-64a6d519b8b56-sej.jpg"
          caption="Connect, Share, Discover: Your Digital Tapestry Awaits with Threads."
          likes={274}
          blueTick={true}
        />
      </div>
      <span className="block mobile:hidden">
        <BottomNav />
      </span>
    </>
  );
}

export default Home;
