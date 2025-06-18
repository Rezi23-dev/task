import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMiniGiftTop } from "react-icons/hi2";
import { RiVipCrown2Fill } from "react-icons/ri";
import { GiBowTieRibbon, GiCrownedHeart, GiTrophyCup } from "react-icons/gi";
import { PiCoinsBold, PiNumberCircleSevenBold } from "react-icons/pi";
import { FaCircleDot } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";
import { FaDiceFive, FaRegStar } from "react-icons/fa";
import { TbPlayCardStar } from "react-icons/tb";
import { IoEarthSharp, IoTimerOutline } from "react-icons/io5";
import { AiOutlineMessage, AiOutlineSchedule } from "react-icons/ai";
import { BsFillGrid1X2Fill } from "react-icons/bs";

const LeftSide = () => {
  return (
    <div className="absolute w-[60px] h-[100vh] bg-[#273344] flex flex-col items-center justify-content-center">
      <div className="w-[40px] h-[40px] flex justify-center items-center">
        <RxHamburgerMenu className="w-[20px] h-[20px] text-[#C1C9E5] cursor-pointer" />
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center ">
        <HiMiniGiftTop className="w-[20px] h-[20px] text-[#C1C9E5] cursor-pointer" />
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center ">
        <RiVipCrown2Fill className="w-[20px] h-[20px] text-[#C1C9E5] cursor-pointer" />
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center ">
        <GiTrophyCup className="w-[20px] h-[20px] text-[#C1C9E5] cursor-pointer" />
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center ">
        <PiNumberCircleSevenBold className="w-[20px] h-[20px] text-[#C1C9E5] cursor-pointer" />
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center ">
        <GiCrownedHeart className="w-[20px] h-[20px] text-[#C1C9E5] cursor-pointer" />
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center ">
        <FaCircleDot className="w-[20px] h-[20px] text-[#C1C9E5] cursor-pointer" />
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center ">
        <PiCoinsBold className="w-[20px] h-[20px] text-[#C1C9E5] cursor-pointer" />
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center ">
        <GiBowTieRibbon className="w-[20px] h-[20px] text-[#C1C9E5] cursor-pointer" />
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center ">
        <IoIosRocket className="w-[20px] h-[20px] text-[#C1C9E5] cursor-pointer" />
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center ">
        <FaDiceFive className="w-[20px] h-[20px] text-[#C1C9E5] cursor-pointer" />
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center ">
        <TbPlayCardStar className="w-[20px] h-[20px] text-[#C1C9E5] cursor-pointer" />
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center ">
        <FaRegStar className="w-[20px] h-[20px] text-[#C1C9E5] cursor-pointer" />
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center ">
        <IoTimerOutline className="w-[20px] h-[20px] text-[#C1C9E5] cursor-pointer" />
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center ">
        <AiOutlineSchedule className="w-[20px] h-[20px] text-[#C1C9E5] cursor-pointer" />
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center ">
        <BsFillGrid1X2Fill className="w-[20px] h-[20px] text-[#C1C9E5] cursor-pointer" />
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center ">
        <AiOutlineMessage className="w-[20px] h-[20px] text-[#C1C9E5] cursor-pointer" />
      </div>
      <div className="w-[40px] h-[40px] flex justify-center items-center ">
        <IoEarthSharp className="w-[20px] h-[20px] text-[#C1C9E5] cursor-pointer" />
      </div>
    </div>
  );
};

export default LeftSide;
