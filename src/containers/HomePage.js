import React, { useState } from "react";
import { StickyContainer, Sticky } from "react-sticky";

import useResponsive from "../contexts/mediaQuery/useResponsive";

import Intro from "./Intro";
import Sections from "./Sections";
import Fund from "./Fund";
import BackToTop from "./BackToTop";

const HomePage = () => {
  const { isMobile, isLaptop } = useResponsive();
  return (
    <StickyContainer>
      <Intro isLaptop={isLaptop} isMobile={isMobile} />
      <Sections isMobile={isMobile} />
      <Fund noSticky />
      <Sticky bottomOffset={-880}>
        {({ isSticky, distanceFromBottom }) => (
          <BackToTop
            isSticky={isSticky}
            distanceFromBottom={distanceFromBottom}
            zIndex={999}
          />
        )}
      </Sticky>
    </StickyContainer>
  );
};

export default HomePage;
