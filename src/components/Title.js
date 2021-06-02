import React from 'react'

import Container from './Container'
import Box from './Box'
import Flex from './Flex'
import Image from './Image'
import Text from './Text'
import { responsive } from './ThemeProvider/theme'

const Title = ({ src, step, title, ...props }) => {
  return (
    <Box bg="gray" py={responsive('2.85em', '4.43em')} {...props}>
      <Container>
        <Flex alignItems="center">
          <Box width={responsive('5.715em', '10%')} >
            <Image src={src} />
          </Box>
          <Box fontWeight="bold" ml={responsive('0.86em', '1.86em')} >
            {step && <Text fontSize={responsive('1.428em', '1.86em')} color="darkBlue">特色{step}</Text>}
            <Text color="darkGreen" fontSize={responsive('1.85em', '2.86em')}>{title}</Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Title
