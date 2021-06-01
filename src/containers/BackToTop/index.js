import React from 'react'

import Container from '../../components/Container'
import Button from '../../components/Button'
import Arrow from '../../components/Arrow'

import { responsive } from '../../components/ThemeProvider/theme'

const BackToTop = () => {
  return (
    <Container textAlign="center" pb="4em">
        <Button.transparent
          fontSize={responsive('1em', '1.5em')}
          onClick={() => {
            window.scrollTo({ let: 0, top: 0, behavior: 'smooth' })
            window.gaTrackClick('返回頂端')
          }}
        >
          <Arrow width="2em" my="0.5em" transform="rotate(180deg)" />
          <br />
          返回頂端
        </Button.transparent>
    </Container>
  )
}

export default BackToTop
