import React from 'react'
import Container from '../../../components/Container'
import Box from '../../../components/Box'
import Flex from '../../../components/Flex'
import Source from '../../../components/Source'
import Image from '../../../components/Image'
import Text from '../../../components/Text'
import Title from '../../../components/Title'
import { responsive } from '../../../components/ThemeProvider/theme'

import useResponsive from '../../../contexts/mediaQuery/useResponsive'

import Rating from '../../Charts/Rating'

import trophy from './trophy.svg'
import health from './health.svg'
import unrecycle from './unrecycle.svg'
import phone from './phone.svg'
import coin from './coin.svg'

// import Table from '../Charts/Table'

// const tableData = {
//   th: ['AAA', 'AA', 'A', 'BBB'],
//   tbody: [['1.1%', '0.8%', '21.4%', '54.5%']]
// }

const sets = [
  {
    name: '醫保製藥',
    src: health,
    text: '醫保製藥，為深具成長前景的投資主題，且與景氣循環低度相關。'
  },
  {
    name: '非循環消費',
    src: unrecycle,
    text: '民生必需品產業，與景氣循環相關度低，且具有穩定的現金流量，屬於防禦性較高的產業。'
  },
  {
    name: '通訊娛樂',
    src: phone,
    text: '影音娛樂＆無線電信＆網路寬頻，營收獲利較不受景氣循環影響，更是防疫概念熱門標的。'
  },
  {
    name: '金融機構',
    src: coin,
    text: '主要投資大型跨國金融集團發行的主順位優先金融債券，具備良好企業體質和較佳的償債能力。'
  },
]

const Quality = ({ innerRef }) => {
  const { isMobile } = useResponsive()
  return (
    <Box ref={innerRef}>
      <Title step="一" src={trophy} title="主動管理堅持好品質" />
      <Container py={responsive('2.86em', '7.143em')}>
        <Text.h4 ml={-20}>
          追求好品質標的，於各類型債、各種評等以及各產業中尋找兼具品質與價值的債券，主動管理動態調整布局，嚴控下檔風險。
        </Text.h4>
        <Text mt="7.143rem" fontWeight="bold" color="prussianBlue" fontSize={responsive('1.43em', '2em')}>投資組合以高品質投資級債券為主</Text>
        <Text mt="3.57rem" fontWeight="bold" fontSize={responsive('1.285em', '1.714em')}>信評配置</Text>
        {/* <Box mt="1.43em">
          <Table tbodyAlign="center" thAlign="center" fontSize="1.57em" nowData={tableData} noMobile />
        </Box> */}
        <Box mt="3.57em">
          <Rating isMobile={isMobile} />
        </Box>
        <Text mt="5.714rem" fontWeight="bold" color="prussianBlue" fontSize={responsive('1.43em', '2em')}>「三大非循環性產業＋金融機構」建構主要配置</Text>
        <Text fontSize={responsive('1.285em', '1.714em')}>因應市場波動劇烈，調整布局至非循環性產業，並挑選金融機構的次順位債，打造好品質的組合。</Text>
        <Flex mt="3.57em" flexDirection={responsive('column', 'row')}>
          {sets.map(({ name, src, text}, index) => (
            <Box key={index} width={responsive(1, (1 / sets.length))}>
              <Flex alignItems="center" justifyContent={responsive('auto', 'center')}>
                {isMobile && (
                  <Box width="6.428em">
                    <Image src={src} />
                  </Box>
                )}
                <Box mx={responsive('0.86em', '3em')} flex={1}>
                  <Text textAlign={responsive('left', 'center')} fontSize={responsive('1.43em', '1.714em')} fontWeight="bold">{name}</Text>
                  {isMobile && (
                    <Text textAlign="left" fontSize="1.14em">{text}</Text>
                  )}
                </Box>
              </Flex>
              {isMobile && (index !== sets.length - 1) && (
                <Box color="bgGreen" textAlign="center" fontSize="2.5em" fontWeight="bold" py="1.5rem">
                  +
                </Box>
              )}
            </Box>
          ))}
        </Flex>
        {!isMobile && (
          <>
            <Flex py="2.14em">
              {sets.map(({ src }, index) => (
                <Box px="3em" position="relative" width={1 / sets.length} key={index}>
                  <Box px="1em">
                    <Image src={src} />
                  </Box>
                  {index !== sets.length - 1 && (
                    <Box color="bgGreen" fontSize="4.5em" fontWeight="bold" position="absolute" top="50%" right="0" transform="translate(50%, -50%)">
                      +
                    </Box>
                  )}
                </Box>
              ))}
            </Flex>
            <Flex>
              {sets.map(({ text }, index) => (
                <Box mx="3em" width={1 / sets.length} key={index}>
                  <Text textAlign="left" fontSize="1.25em">{text}</Text>
                </Box>
              ))}
            </Flex>
          </>
        )}
        <Source>
          資料來源：施羅德投資，2020/3/31
        </Source>
      </Container>
    </Box>
  )
}

export default Quality
