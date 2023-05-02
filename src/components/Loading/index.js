import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

import Text from "../Text";
import Box from "../Box";

const Lens = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 80.3 80.2"
  >
    <g>
      <path
        fill="#002A5E"
        d="M38.1,59c-10.4-1.1-17.9-10.5-16.8-20.9c1-8.8,7.9-15.8,16.8-16.8V0C15.9,1.2-1.1,20.1,0.1,42.3
		c1.1,20.5,17.5,36.9,38,38V59z"
      />
      <path
        fill="#002A5E"
        d="M42.2,0v21.3C52.6,22.4,60.1,31.8,59,42.2C58,51,51.1,58,42.2,59v21.3c22.2-1.2,39.2-20.1,38-42.3
		C79.1,17.5,62.7,1.1,42.2,0z"
      />
    </g>
  </svg>
);

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  animation: ${spin} 2s infinite;
`;

export default function Loading({ text, ...props }) {
  return (
    <Box textAlign="center" {...props}>
      <Loader>
        <Lens />
      </Loader>
      <Text fontSize="1em" mt="1em">
        {text}
      </Text>
    </Box>
  );
}

Loading.propTypes = {
  text: PropTypes.string,
};

Loading.defaultProps = {
  text: "Loading...",
  width: "5em",
};
