import React from 'react'

import Box from './Box'
import Flex from './Flex'
import Text from './Text'
import Image from './Image'
import Container from './Container'
import { responsive } from './ThemeProvider/theme'

const Title = ({ src, step, title, ...props }) => {
  return (
    <Box bg="gray" py={responsive('1.5rem', '2.5rem')} {...props}>
      <Container>
        <Flex alignItems="center">
          {src && (
            <Box width={responsive('5.715em', '10%')} >
              <Image src={src} />
            </Box>
          )}
          <Flex
            fontWeight="bold"
            flexDirection={responsive('column', 'row')}
            ml={responsive('0.86em', '1.86em')} >
            {step && <Text.SubTitle color="darkBlue">特色{step}</Text.SubTitle>}
            <Text.SubTitle ml={responsive(0, '0.5em')} color="darkGreen">{title}</Text.SubTitle>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Title
