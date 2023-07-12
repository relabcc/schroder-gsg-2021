import React, { useRef } from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import themeGet from "@styled-system/theme-get";

import Box from "../../components/Box";
import Text from "../../components/Text";
import Sticky from "../../components/Sticky";
// import Container from '../../components/Container'
import { responsive } from "../../components/ThemeProvider/theme";

import useResponsive from "../../contexts/mediaQuery/useResponsive";

import PriceTable from "../Charts/PriceTable";
import BarChart from "../Charts/BarChart";

const StyledTabs = styled(Tabs)`
  position: relative;
`;

const StyleTab = styled(Tab)`
  width: ${(props) => props.width * 100}%;
  cursor: pointer;
  font-size: 1.428em;
  font-weight: bold;
  padding: 1em 1em;
  border-radius: 0;
  display: inline-block;
  text-align: center;
  background-color: ${themeGet("colors.gray")};
  transition: all ${themeGet("duration", 250)}ms;
  &:hover,
  &.react-tabs__tab--selected {
    background-color: ${themeGet("colors.darkGreen")};
    color: white;
    border-radius: 0;
  }
`;

const StyleTabList = styled(TabList)`
  border-bottom: none;
  padding: 0;
`;

const sets = [
  // {
  //   name: '投資組合',
  //   data: [
  //     {
  //       title: '產業配置',
  //       Comp: (props) => <BarChart dataPath="/industries" {...props} />,
  //     },
  //     {
  //       title: '區域配置',
  //       Comp: (props) => <BarChart dataPath="/geographical" {...props} />,
  //     },
  //   ]
  // },
  {
    name: "基金績效",
    data: [
      {
        title: "基金累積績效",
        Comp: PriceTable,
      },
    ],
  },
];

const FundTabs = ({ selectedIndex, onSelect, secPt, sticky }) => {
  const { isMobile } = useResponsive();
  const block = useRef();
  return (
    <div ref={block}>
      {sets.map(({ data }, i) => (
        <Box key={i}>
          {data.map(({ title, Comp, source }, k) => (
            <Box key={k}>

              <Comp isMobile={isMobile} />
              {/* {source && <Source mb="0">{source}</Source>} */}
            </Box>
          ))}
        </Box>
      ))}
    </div>
  );
};

export default FundTabs;
