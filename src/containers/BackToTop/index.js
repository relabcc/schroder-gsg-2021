import React from 'react'

import Box from '../../components/Box'
import Button from '../../components/Button'
import Arrow from '../../components/Arrow'

import { responsive } from '../../components/ThemeProvider/theme'

const BackToTop = () => {
  return (
    <Box position="fixed" right="1em" bottom="2em">
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
