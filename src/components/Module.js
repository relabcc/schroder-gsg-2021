import React from 'react'

import Box from './Box'
import Flex from './Flex'
import Image from './Image'
import Text from './Text'
import { responsive } from './ThemeProvider/theme'

const Module = ({ content, logoWidth, vertical, leftWidth, ...props }) => (
  <Flex
    pb="0.5em"
    mx={responsive(0, '-1em')}
    alignItems="center"
    mt={responsive('1em', '1.25em')}
    flexDirection={responsive('column', vertical ? 'column' : 'row')}
    {...props}
  >
    {content.map(({ src, title, label, text }, k, { length }) => (
      <Flex
        mx="1em"
        pb={responsive('0.5em', '1em')}
        alignItems="center"
        flexDirection={vertical ? responsive('column', 'row') : 'column'}
        width={responsive(1, vertical ? 1 : 1 / length)}
        key={k}
      >
        <Box width={leftWidth} mr={vertical && responsive(0, '2em')}>
          <Text.SubTitle textAlign="center" whiteSpace="pre-wrap">{title}</Text.SubTitle>
          <Box width={logoWidth || '50%'} mx="auto" mt="1em">
            <Image src={src} />
          </Box>
          {label && <Text.SubTitle textAlign="center" py="1em">{label}</Text.SubTitle>}
        </Box>
        <Text fontSize={responsive('1em', '1.25em')}>{text}</Text>
      </Flex>
    ))}
  </Flex>
)

export default Module
