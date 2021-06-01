import React from 'react'

import Container from '../../components/Container'
import Box from '../../components/Box'
import Button from '../../components/Button'
import Text from '../../components/Text'
import Arrow from '../../components/Arrow'
import BackgroundImage from '../../components/BackgroundImage'

import { responsive } from '../../components/ThemeProvider/theme'

import cover from './cover.jpg'
// import coverWebP from './cover.webp'
import mobilecover from './mobile-cover.jpg'
// import mobilecoverWebP from './mobile-cover.webp'

const scrollToName = (isMobile) => {
  window.gaTrackClick('了解更多')
  const tab = document.querySelector('.flexible-tab-container')
  let fundsPos = document.getElementById('fund-head').getBoundingClientRect().top
  if (!isMobile) {
    if (tab.classList.contains('flexible-fixed-header')) {
      fundsPos -= 40
    } else {
      fundsPos -= 120
    }
  }
  window.scrollBy({ left: 0, top: fundsPos, behavior: 'smooth' })
}

const Intro = ({ isLaptop, isMobile }) => {
  return (
    <>
      <BackgroundImage
        // src={isLaptop ? (window.Modernizr.webp ? mobilecoverWebP : mobilecover) : (window.Modernizr.webp ? coverWebP : cover)}
        src={isLaptop ? mobilecover : cover}
        height="auto"
        backgroundPosition={responsive('50% 90%', '50% 90%', '100% 0%')}
      >
        <Container
          pt={responsive('2em', '2em', '4em', '8em')}
          px={30}
          pb={['14em', null, '20em', '25em', '4em', null, '10em']}
          color="white"
        >
          <Box width={responsive(1, null, 8 / 12)}>
            <Text fontSize={responsive('2em', '2.5em', '2.75em')} fontWeight="bold">全天候守護資產</Text>
            <Text my="1em" fontSize={responsive('1.25em', '1.5em', '1.75em')} fontWeight="bold">
            投資氣候捉摸不定，施羅德環球收息債券團隊構築防護網。無懼大環境的變數，培育複合債組合，細心呵護您的資產。
            </Text>
          </Box>
        </Container>
      </BackgroundImage>
      <Container pt="2em">
        <Text.h3>變動的市場 不變的核心組合</Text.h3>
        <Text.h4 my="1em">
          面對低收益和高波動的投資環境，投資人該如何獲得持續性的收入與減少波動對投資的衝擊？追求品質、多元配置、不受參考指標限制的環球收息債券策略投資方法是實現這些目標的關鍵。
        </Text.h4>
        <Box textAlign="center" my={responsive('2em', '4em')}>
          <Button.transparent fontSize={responsive('1em', '1.5em')} onClick={() => scrollToName(isMobile)}>
            <Arrow width="2em" my="0.5em" />
            <br />
            了解更多
          </Button.transparent>
        </Box>
      </Container>
    </>
  )
}

export default Intro
