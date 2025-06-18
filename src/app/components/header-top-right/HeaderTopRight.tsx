import React from "react";
import { MdAttachMoney } from "react-icons/md";
import { TbBellRingingFilled } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";

const HeaderTopRight = () => {
  return (
    <div className="flex gap-[5px]">
      <div className="flex ">
        <div className="flex items-center gap-[10px] border border-t border-b border-l border-r-0 border-solid  border-[#273344]  rounded-tl-[5px] rounded-bl-[5px] px-[8px]">
          <MdAttachMoney className="bg-[#192C40] text-[#FFFFFF] rounded-[50%] " />
          <span className="text-white">10,566.12</span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded cursor-pointer">
          DEPOSIT
        </button>
      </div>
      <div className="flex items-center gap-[5px]">
        <div className="w-[40px] h-[40px] bg-[#1C2E3D] flex items-center justify-center rounded-[5px] cursor-pointer">
          <TbBellRingingFilled className="w-[28px] h-[20px] text-[#C1C9E5]" />
        </div>
        <div className="w-[40px] h-[40px] bg-[#1C2E3D] flex items-center justify-center  rounded-[5px] cursor-pointer">
          <FaUserAlt className="w-[28px] h-[20px] text-[#C1C9E5]" />
        </div>
      </div>
    </div>
  );
};

export default HeaderTopRight;
