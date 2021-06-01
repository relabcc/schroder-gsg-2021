import React from 'react'

import Allocation from '../../Charts/Allocation'

import Container from '../../../components/Container'
import Box from '../../../components/Box'
import Source from '../../../components/Source'
import Image from '../../../components/Image'
import Text from '../../../components/Text'
import Title from '../../../components/Title'
import { responsive } from '../../../components/ThemeProvider/theme'
import useResponsive from '../../../contexts/mediaQuery/useResponsive'

import global from './global.svg'
import diversity from './diversity.svg'
import mobileDiversity from './mobile-diversity.svg'
import multiple from './multiple.svg'
import mobileMultiple from './mobile-multiple.svg'
// import single from './single.svg'
// import mobileSingle from './mobile-single.svg'

// import Allocation from '../Charts/Allocation'

const sets = [
  {
    title: '主題式選債，挑選多元券種',
    Comp: ({ isMobile }) => <Image src={isMobile ? mobileDiversity : diversity} />,
    source: '資料來源：施羅德投資，2020/3/31'
  },
  {
    title: '複合債靈活組合',
    Comp: ({ isMobile }) => <Image src={isMobile ? mobileMultiple : multiple} />,
    text: '不受限參考指標，根據市場、景氣循環、投資主題以及產業變化挑選具投資價值的債券。高收益、投資級或是政府相關債券皆可布局。',
    source: '資料來源：施羅德投資。區域配置截止日期2020/04/30。'
  },
  {
    title: '避免集中單一國家',
    Comp: ({ isMobile }) => <Allocation index={2} isMobile={isMobile} fill="bgGreen" />,
    // Comp: Allocation,
    text: '不過度集中特定市場，有助分散風險，掌握各地的收益機會。',
    // source: '資料來源：施羅德投資。區域配置截止日期2020/04/30。'
  },
]

const Diversity = ({ innerRef }) => {
  const { isMobile } = useResponsive()

  return (
    <Box ref={innerRef}>
      <Title step="二" src={global} title="創新投資與多元布局" />
      <Container py={responsive('2.86em', '7.143em')}>
        <Text.h4 ml={-20}>多元分散不重壓單一國家市場，全球佈局將近60國，分散單一市場的波動風險。利用主題投資式投資，前瞻式布局降低風險波動來來源，由下而上挑選具品質的債券。</Text.h4>
        <Box>
          {sets.map(({ title, Comp, text, source }, index) => (
            <Box pt="6.714em" key={index}>
              <Text fontWeight="bold" fontSize={responsive('1.43em', '2em')} color="prussianBlue">{title}</Text>
              <Text fontSize={responsive('1.285em', '1.714em')}>{text}</Text>
              <Box mt={responsive('1.57em', '3.57em')}>
                <Comp isMobile={isMobile} />
              </Box>
              {source && <Source>{source}</Source>}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Diversity
