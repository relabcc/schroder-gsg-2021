import React from 'react'

import Box from './Box'
import { responsive } from './ThemeProvider/theme'

const Source = ({ children, ...porps }) => {
  return (
    <Box mt="1.5em" mb={responsive('8.5rem', '10em')} borderTop="1px solid" pt="1em" textAlign="justify" {...porps}>
      {children}
    </Box>
  )
}

export default Source
