import React from 'react'

import Box from '../../components/Box'
import Button from '../../components/Button'
import Arrow from '../../components/Arrow'

import { responsive } from '../../components/ThemeProvider/theme'

const BackToTop = ({ isSticky, distanceFromBottom, ...props }) => {
  console.log(isSticky, distanceFromBottom)
  return (
    <Box textAlign="right" px={!isSticky && "1em"} position={isSticky ? 'fixed' : 'relative'} bottom={isSticky && "1em"} right={isSticky && "1em"} {...props}>
      <Button.transparent
        fontSize={responsive('1em', '1.5em')}
        px="0"
        onClick={() => {
          window.scrollTo({ let: 0, top: 0, behavior: 'smooth' })
          window.gaTrackClick('返回頂端')
        }}
      >
        <Arrow width="2em" my="0.5em" transform="rotate(180deg)" />
        <br />
        返回頂端
      </Button.transparent>
    </Box>
  )
}

export default BackToTop
