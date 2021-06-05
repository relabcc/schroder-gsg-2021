import React from 'react'

import Container from '../../components/Container'
import Box from '../../components/Box'
import Flex from '../../components/Flex'
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
        // src={isLaptop ? mobilecover : cover}
        bg="darkGreen"
        height="auto"
        backgroundPosition={responsive('50% 90%', '50% 90%', '100% 0%')}
      >
        <Container
          pt={responsive('2em', '4em', '8em')}
          px={30}
          pb={responsive('2em', '4em', '8em')}
          color="white"
        >
          <Flex alignItems="stretch" flexDirection={responsive('column', 'row')}>
            <Box>
              <Text fontSize={responsive('2em', '2.5em', '2.75em')} fontWeight="900">除了獲利 更能受益</Text>
              <Text lineHeight="1.5" my="1em" fontSize={responsive('1.25em', '1.5em', '1.75em')}>
                投資不僅可追求財富增長，更能對世界發揮影響力。<br />
                我們相信永續投資追求的不僅是獲利，更能讓社會受益。<br />
              </Text>
            </Box>
            <Flex
              width={responsive(1, 1 / 2)}
              ml={responsive(0, '1em')}
              flexDirection="column"
              border="1px solid black"
              height={responsive('200px', 'auto')}
            >
              <Box flex={1} py={responsive('1em', '2em')}></Box>
            </Flex>
          </Flex>
        </Container>
      </BackgroundImage>
    </>
  )
}

export default Intro
