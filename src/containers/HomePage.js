import React from "react";

import useResponsive from "../contexts/mediaQuery/useResponsive";

import Intro from "./Intro";
import Sections from "./Sections";
import Box from "../components/Box";

const HomePage = ({ section }) => {
  const { isMobile, isLaptop } = useResponsive();
  return (
    <Box
      color="#002a5e"
      fontSize="12px"
      fontFamily={`"Microsoft JhengHei", "Noto Sans", Arial, sans-serif`}
    >
      {section === 1 && <Intro isLaptop={isLaptop} isMobile={isMobile} />}
      <Box fontSize="10px">
        <Sections isMobile={isMobile} section={section} />
      </Box>
    </Box>
  );
};

export default HomePage;
