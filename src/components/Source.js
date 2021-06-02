import React from 'react'

import Box from './Box'

const Source = ({ children, ...porps }) => {
  return (
    <Box pt="1em" textAlign="justify" {...porps}>
      {children}
    </Box>
  )
}

export default Source
