import React from "react";

import useResponsive from "../contexts/mediaQuery/useResponsive";

// import Intro from "./Intro";
import Sections from "./Sections";
import Fund from "./Fund";
import Box from "../components/Box";

const HomePage = () => {
  const { isMobile, isLaptop } = useResponsive();
  return (
    <Box fontSize="14px" fontFamily="微軟正黑體, sans-serif">
      {/* <Intro isLaptop={isLaptop} isMobile={isMobile} /> */}
      <Box fontSize="12px">
      <Sections isMobile={isMobile} />
      <Fund />
      </Box>
    </Box>
  );
};

export default HomePage;
