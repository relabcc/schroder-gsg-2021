import React from 'react'

import Box from './Box'

const Source = ({ children, ...porps }) => {
  return (
    <Box pt="0.5em" color="lightGray" borderTop="1px solid black" mt="0.5em" textAlign="justify" {...porps}>
      {children}
    </Box>
  )
}

export default Source
