import React from "react";
import Adds from "../adds/Adds";
import AddsGrid from "../adds2/AddsGrid";

const Container = () => {
  return (
    <main className="bg-[#1C2E3D] w-[100%] h-[100vh] px-[200px]">
      <Adds />
      <AddsGrid />
    </main>
  );
};

export default Container;
