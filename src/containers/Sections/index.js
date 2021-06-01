import React, { forwardRef } from 'react'

import Box from '../../components/Box'
import { responsive } from '../../components/ThemeProvider/theme'

import Quality from './Quality'
import Diversity from './Diversity'
import Risk from './Risk'

const secs = [
  { name: '堅持品質', Comp: Quality },
  { name: '多元佈局', Comp: Diversity },
  { name: '平衡風險', Comp: Risk },
].map(({ name, Comp }) => ({
  name,
  Comp: forwardRef((p, ref) => <Comp {...p} innerRef={ref} />)
}))

const Sections = ({ isMobile }) => {
  return (
    <Box id="fund-head" pt={responsive(0, '2em')}>
      {secs.map(({ Comp, name }) => (
        <Comp />
      ))}
    </Box>
  )
}

export default Sections
