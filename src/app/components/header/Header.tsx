import React from "react";
import HeaderTopRight from "../header-top-right/HeaderTopRight";

const Header = () => {
  return (
    <header className="w-[calc(100%-60px)] h-[60px] bg-[#152535] ml-[60px] flex justify-between items-center px-[200px]">
      <div className="w-[75px] h-[40px] bg-[#253241] rounded-[5px]"></div>
      <div>
        <HeaderTopRight />
      </div>
    </header>
  );
};

export default Header;
