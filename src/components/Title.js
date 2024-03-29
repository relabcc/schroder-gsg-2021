import React from 'react'

import Box from './Box'
import Flex from './Flex'
import Text from './Text'
import Image from './Image'
import { responsive } from './ThemeProvider/theme'

const Title = ({ src, step, title, titleColor, titleFontSize, ...props }) => {
  return (
    <Box.Extended bg="gray" py={responsive('3em', '2em')} {...props}>
      <Box p="16px">
        <Flex alignItems="center">
          {src && (
            <Box width={responsive('5.715em', '10%')} >
              <Image src={src} />
            </Box>
          )}
          <Flex
            fontWeight="bold"
            flexDirection={responsive('column', 'row')}
            alignItems={responsive('flex-start', 'center')}
            ml={src && responsive('0.86em', '1.86em')} >
            {step && <Text.SubTitle color="darkBlue">特色{step}</Text.SubTitle>}
            <Text.SubTitle ml={step && responsive(0, '0.5em')} titleFontSize={titleFontSize} color={titleColor || "darkGreen"}>{title}</Text.SubTitle>
          </Flex>
        </Flex>
      </Box>
    </Box.Extended>
  )
}

export default Title
