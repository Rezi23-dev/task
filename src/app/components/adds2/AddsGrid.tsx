"use client";
import Image from "next/image";
import React from "react";

const AddsGrid = () => {
  return (
    <div className="w-[1100px] mx-auto flex gap-2 pt-10">
      <div className="flex-1 flex gap-2">
        <div className="flex gap-2">
          <div className="  w-[400px] rounded-lg h-[200px] relative">
            <Image
              src="/adfad.png"
              alt="img"
              fill
              className="absolute cursor-pointer"
            />
          </div>
          <div className="bg-gray-400 w-[400px] rounded-lg h-[200px] relative">
            <Image
              src="/iamge4.png"
              alt="img"
              fill
              className="absolute cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="w-[300px] grid grid-cols-2 gap-2">
        <div className=" h-[95px]  relative ">
          <Image
            src="/c97bf7fe777fc9f54bda404d524053406525bffa.png"
            alt="img"
            fill
            className="absolute rounded-[5px] cursor-pointer"
          />
        </div>
        <div className=" h-[95px] relative">
          <Image
            src="/d415326c319594bd5bde3cf94c6cd0ad516c14da.png"
            alt="img"
            fill
            className="absolute rounded-[5px] cursor-pointer"
          />
        </div>
        <div className=" h-[95px]  relative">
          <Image
            src="/8ce77b53290bf5c3d2440e373b2cd42e5fde4eb1.png"
            alt="img"
            fill
            className="absolute rounded-[5px] cursor-pointer"
          />
        </div>
        <div className=" h-[95px]  relative">
          <Image
            src="/20b262499b28dfc732bfa433af9e0cc491432525.png"
            alt="img"
            fill
            className="absolute rounded-[5px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AddsGrid;
