import React, { useRef } from 'react';
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import themeGet from '@styled-system/theme-get';

import Box from '../../components/Box'
import Source from '../../components/Source'
import Text from '../../components/Text'
import Sticky from '../../components/Sticky'
// import Container from '../../components/Container'
import { responsive } from '../../components/ThemeProvider/theme'

import useResponsive from '../../contexts/mediaQuery/useResponsive'

import Allocation from '../Charts/Allocation'
import Price from '../Charts/Price'
import PriceTable from '../Charts/PriceTable'
import USDividendsTable from '../Charts/USDividendsTable'
import SADividendsTable from '../Charts/SADividendsTable'
import BarChart from '../Charts/BarChart';

const StyledTabs = styled(Tabs)`
position: relative;
`

const StyleTab = styled(Tab)`
  width: ${props => props.width * 100}%;
  cursor: pointer;
  font-size: 1.428em;
  font-weight: bold;
  padding: 1em 1em;
  border-radius: 0;
  display: inline-block;
  text-align: center;
  background-color: ${themeGet('colors.gray')};
  transition: all ${themeGet('duration', 250)}ms;
  &:hover,
  &.react-tabs__tab--selected {
    background-color: ${themeGet('colors.darkGreen')};
    color: white;
    border-radius: 0;
  }
`

const StyleTabList = styled(TabList)`
  border-bottom: none;
  padding: 0;
`

const sets = [
  {
    name: '投資組合',
    data: [
      {
        title: '產業配置',
        Comp: (props) => <BarChart dataPath="/industries" {...props} />,
      },
      {
        title: '區域配置',
        Comp: (props) => <BarChart dataPath="/geographical" {...props} />,
      },
    ]
  },
  {
    name: '基金績效',
    data: [
      {
        title: '基金績效',
        Comp: PriceTable,
      },
      // {
      //   title: '淨值走勢',
      //   Comp: Price,
      //   source: '資料來源：施羅德投資。'
      // },
    ]
  },
]

const FundTabs = ({ selectedIndex, onSelect, secPt, sticky }) => {
  const { isMobile } = useResponsive()
  const block = useRef()
  return (
    <StyledTabs
      selectedIndex={selectedIndex}
      onSelect={(i) => {
        onSelect(i)
        // window.gaTrackClick(sets[i].name)
        if (isMobile) {
          window.scrollBy({ top: block.current.getBoundingClientRect().top - 40 })
        }
      }}
    >
      <Box is={sticky || isMobile ? Sticky : 'div'}>
        <Box mx={responsive(-10, 0)}>
          <StyleTabList>
            {sets.map(({ name }) => (
              <StyleTab key={name} width={1 / sets.length} data-name={name} className="data-tabs">{name}</StyleTab>
            ))}
          </StyleTabList>
        </Box>
      </Box>
      <div ref={block}>
        {/* <Box pt="5rem" fontWeight="bold" fontSize={responsive('1.43em', '2em')} color="prussianBlue">
          <Text>施羅德(環)環球收息債券</Text>
          <Text>(本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金)</Text>
        </Box> */}
        {sets.map(({ data }, i) => (
          <TabPanel key={i}>
            {data.map(({ title, Comp, source }, k) =>(
              <Box key={k}>
                <Text fontWeight="bold" fontSize={responsive('1.285em', '1.57em')} pt={responsive('2rem', '3rem')} pb="2rem">{title}</Text>
                <Comp isMobile={isMobile} />
                {source && <Source>{source}</Source>}
              </Box>
            ))}
          </TabPanel>
        ))}
      </div>
    </StyledTabs>
  );
};

export default FundTabs;
