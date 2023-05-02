import React, { useEffect, useState } from 'react'

import Box from '../../components/Box'
import { responsive } from '../../components/ThemeProvider/theme'

import GSG from './GSG'
import Feature from './Feature'
import SustainEx from './SustainEx'

const secs = [
  { name: '永續投資重要性', Comp: GSG },
  { name: '多元佈局', Comp: Feature },
  { name: '平衡風險', Comp: SustainEx },
]

const Sections = () => {
  return (
    <Box id="fund-head" pt={responsive(0, '2em')}>
      {secs.map(({ Comp, name }, i) => (
        <Comp key={name} />
      ))}
    </Box>
  )
}

export default Sections
