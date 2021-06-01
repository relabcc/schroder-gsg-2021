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

import care from './care.svg'
import rate from './rate.svg'
import mobileRate from './mobile-rate.svg'
import rise from './rise.svg'
import mobileRise from './mobile-rise.svg'
import chance from './chance.svg'
import mobileChance from './mobile-chance.svg'


const Risk = ({ innerRef }) => {
  const { isMobile } = useResponsive()
  const sets = [
    {
      title: '專業把關，致力追求收益與風險的平衡',
      imgs: [
        {
          chartTitle: '三個指數自成立以來報酬率',
          src: isMobile ? mobileRate : rate,
        },
        {
          chartTitle: '三個指數在2008年金融海嘯後不同期間的漲幅',
          src: isMobile ? mobileRise : rise,
        },
      ],
      source: '資料來源：Lipper, USD，統計指數成立以來2001/12/31~2020/3/31。Bloomberg Barclays Multiverse ex Tr A+to B-TR USDH，S&P 500 NR，Bloomberg Barclays U.S. Treasury TR。金融海嘯後的起算日為2008/10/31'
    },
    {
      title: '複合債靈活組合',
      imgs: [
        {
          src: isMobile ? mobileChance : chance,
        },
      ],
      text: '各種債券資產近5年來報酬表現',
      source: '資料來源：Bloomberg，ICE BofAML所編列之相關債券資產指數，以該指數之貨幣種類原幣計價，此為年度報酬率，2019年則統計至2019/12/31，施羅德投資整理。'
    },
  ]

  return (
    <Box ref={innerRef}>
      <Title step="三" src={care} title="以較低波動，參與收益契機" />
      <Container py={responsive('2.86em', '7.143em')}>
        <Text.h4 ml={-20}>風險與報酬的抉擇不需陷入兩難。環球收息債券指數以僅略高於美國公債指數的波動度，達到相近S＆P500美股的報酬</Text.h4>
        <Box>
          {sets.map(({ title, imgs, text, source }, index) => (
            <Box pt="6.714em" key={index}>
              <Text fontWeight="bold" fontSize={responsive('1.43em', '2em')} color="prussianBlue">{title}</Text>
              <Text fontSize={responsive('1.285em', '1.714em')}>{text}</Text>
              <Flex mt={responsive('1.57em', '3.57em')} flexDirection={responsive('column', 'row')}>
                {imgs.map(({ chartTitle, src }, k) => (
                  <Box
                    pt={responsive(k &&'3.57em', 0)}
                    px="1em" width={1} key={k}
                    borderRight={responsive('none', (imgs.length > 1 && !k) && '0.5px solid gray')}
                    borderLeft={responsive('none', k && '0.5px solid gray')}
                  >
                    <Text fontSize={responsive('1.43em', '1.714em')} fontWeight="bold">{chartTitle}</Text>
                    <Box mt="1.43em">
                      <Image src={src} />
                    </Box>
                  </Box>
                ))}
              </Flex>
              <Source>{source}</Source>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default Risk
