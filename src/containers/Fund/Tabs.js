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
  background-color: ${themeGet('colors.lightGray')};
  transition: all ${themeGet('duration', 250)}ms;
  &:hover,
  &.react-tabs__tab--selected {
    background-color: ${themeGet('colors.prussianBlue')};
    color: ${themeGet('colors.ceruleanBlue')};
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
        title: '國家分佈',
        Comp: (props) => <Allocation {...props} index={0} />,
      },
      {
        title: '債券類別',
        Comp: (props) => <Allocation {...props} index={1} fill="bgGreen" />,
      },
    ]
  },
  {
    name: '基金績效',
    data: [
      {
        title: '基金表現',
        Comp: PriceTable,
      },
      {
        title: '淨值走勢',
        Comp: Price,
        source: '資料來源：施羅德投資。'
      },
    ]
  },
  {
    name: '配息紀錄',
    data: [
      {
        Comp: USDividendsTable,
      },
      {
        Comp: SADividendsTable,
        source: '資料來源：Lipper, 施羅德投資，以美元和南非幣原幣別計算。本基金成立日期為2016/11/30。同當月配息率(%):每單位配息金額/除息日資產淨值、年化配息率為當月配息率*12、當月報酬率(含息)為當月之含息總報酬。基金配息率不代表基金報酬率，且過去配息率不代表未來配息率；基金淨值可能因市場因素而上下波動。基金實際配息及相關配息時間依基金管理機構通知為準。固定收益分配類型基金會定期將基金收益分配予投資人，投資人應當了解依其原始投資日期之不同，基金的配息可能由基金的收益或本金中支付。任何涉及由本金支出的部份，可能導致原始投資金額減損。'
      },
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
        <Box pt="5rem" fontWeight="bold" fontSize={responsive('1.43em', '2em')} color="prussianBlue">
          <Text>施羅德(環)環球收息債券</Text>
          <Text>(本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金)</Text>
        </Box>
        {sets.map(({ data }, i) => (
          <TabPanel key={i}>
            {data.map(({ title, Comp, source }, k) =>(
              <Box key={k}>
                <Text fontWeight="bold" fontSize={responsive('1.285em', '1.57em')} pt={responsive('5rem', '8rem')} pb="3rem">{title}</Text>
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
