import React from "react";
import Header from "./components/header/Header";
import LeftSide from "./components/leftSide/LeftSide";
import Container from "./components/container/Container";

const page = () => {
  return (
    <main>
      <LeftSide />
      <Header />
      <Container />
    </main>
  );
};

export default page;
