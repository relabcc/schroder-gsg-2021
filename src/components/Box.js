import React, { forwardRef } from "react";
import styled from "styled-components";
import tag from "clean-tag";
import {
  space,
  layout,
  typography,
  position,
  color,
  borderRadius,
  zIndex,
  border,
  flex,
  opacity,
  style,
} from "styled-system";

import blacklist from "./utils/blacklist";
import injectProps from "./utils/injectProps";
import { responsive } from "./ThemeProvider/theme";
import Text from "./Text";

const Box = styled(tag)`
  ${space}
  ${layout}
  ${position}
  ${typography}
  ${color}
  ${position}
  ${zIndex}
  ${border}
  ${flex}
  ${borderRadius}
  ${opacity}
  ${injectProps("whiteSpace")}
  ${injectProps("overflow")}
  ${injectProps("transform")}
  ${injectProps("transition")}
  ${injectProps("pointerEvents")}
  ${style({
    prop: "zOrder",
    cssProperty: "zIndex",
    key: "zOrder",
  })}
  ${({ onClick }) => onClick && "cursor: pointer;"}
`;

Box.defaultProps = {
  blacklist,
};

Box.displayName = "Box";

Box.inline = (props) => (
  <Box is="span" display="inline-block" verticalAlign="middle" {...props} />
);
Box.fullAbs = (props) => (
  <Box position="absolute" top="0" bottom="0" left="0" right="0" {...props} />
);
Box.absCenter = (props) => (
  <Box position="absolute" top="50%" left="50%" {...props} />
);
Box.SubTitle = forwardRef((props, ref) => (
  <Box
    ref={ref}
    fontWeight="bold"
    color="titleBlue"
    fontSize={responsive("1.5em", "1.875em")}
    {...props}
  />
));
Box.Title = forwardRef(({ children, ...props }, ref) => (
  <Box
    ref={ref}
    pb="0.25em"
    mb="2em"
    color="titleBlue"
    {...props}
  >
    <Text.Title>{children}</Text.Title>
  </Box>
));

Box.Extended = forwardRef((props, ref) => (
  <Box
    ref={ref}
    {...props}
    px={responsive("calc((100vw - 100%) / 2)", "16px")}
    mx={responsive("calc((100% - 100vw) / 2)", "0")}
    borderRadius={responsive(0, "14px")}
  />
));

export default Box;
