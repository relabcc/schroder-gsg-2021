import React from 'react'

import Box from './Box'
import { responsive } from './ThemeProvider/theme'

const Source = ({ children, ...props }) => {
  return (
    <Box
      mt="1.5em"
      mb={responsive('4.5em', '5em')}
      borderTop="1px solid"
      pt="1em"
      textAlign="justify"
      fontSize="14px"
      {...props}
    >
      {children}
    </Box>
  )
}

export default Source
