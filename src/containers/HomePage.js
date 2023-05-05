import React from "react";

import useResponsive from "../contexts/mediaQuery/useResponsive";

import Intro from "./Intro";
import Sections from "./Sections";
import Fund from "./Fund";

const HomePage = () => {
  const { isMobile, isLaptop } = useResponsive();
  return (
    <>
      <Intro isLaptop={isLaptop} isMobile={isMobile} />
      <Sections isMobile={isMobile} />
      <Fund />
    </>
  );
};

export default HomePage;
