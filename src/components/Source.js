import React from 'react'

import Box from './Box'

const Source = ({ children, ...porps }) => {
  return (
    <Box mt="2.86em" borderTop="1px solid" pt="1em" textAlign="justify" {...porps}>
      {children}
    </Box>
  )
}

export default Source
