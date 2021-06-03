import React from 'react'
import Container from '../../../components/Container'
import Box from '../../../components/Box'
import Image from '../../../components/Image'
import Text from '../../../components/Text'
import { responsive } from '../../../components/ThemeProvider/theme'

import useResponsive from '../../../contexts/mediaQuery/useResponsive'

import photo1 from './3-1.png'
import photo2 from './3-2.png'

const photo = [
  {
    src: photo1,
    width: responsive('100%', '75%')
  },
  {
    src: photo2,
  }
]

const SustainEx = ({ innerRef }) => {
  const { isMobile } = useResponsive()

  return (
    <Box ref={innerRef}>
      <Container py={responsive('2.86em', '7.143em')}>
        <Text.Title>獨家量化分析工具－SustainEx</Text.Title>
        <Text>以量化來評估企業在各個面向對外部性的影響，透過SustainEx模組分析並給予永續評分。作為投資團隊管理投資組合的重要依據之一。</Text>
        {photo.map((d, i) => (
          <Box mx="auto" width={d.width} mt={responsive('1em', '2em')} key={i}>
            <Image src={d.src} />
          </Box>
        ))}
      </Container>
    </Box>
  )
}

export default SustainEx
