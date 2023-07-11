import React from "react";

import Box from "../../components/Box";
import Text from "../../components/Text";

import { responsive } from "../../components/ThemeProvider/theme";

const Intro = () => {
  return (
    <Box.Extended
      bg="darkGreen"
      color="white"
    >
      <Box px="32px" py="64px">
        <Text fontSize={responsive("2em", "2.5em", "2.75em")} fontWeight="900">
          追求獲利 同時讓世界受益
        </Text>
        <Text my="1em" fontSize={responsive("1.25em", "1.5em", "1.75em")}>
          投資不僅可追求財富增長，更能對世界發揮影響力。
          <br />
          我們相信永續投資追求的不僅是獲利，更能讓社會受益。
        </Text>
      </Box>
    </Box.Extended>
  );
};

export default Intro;
