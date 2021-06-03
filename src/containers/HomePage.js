import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint'

import useResponsive from '../contexts/mediaQuery/useResponsive'

import Intro from './Intro'
import SideInfo from './SideInfo/Loadable'
import Sections from './Sections/Loadable'
import Fund from './Fund/Loadable'
import BackToTop from './BackToTop/Loadable'

const HomePage = () => {
  const { isMobile, isLaptop } = useResponsive()
  const [showSide, setShowSide] = useState(true)
  return (
    <>
      <Intro isLaptop={isLaptop} isMobile={isMobile} />
      <Sections isMobile={isMobile} />
      <Waypoint
        onEnter={() => {
          setShowSide(false)
          // window.gaScolledIn('基金資料')
        }}
        onLeave={({ currentPosition }) => currentPosition === 'below' && setShowSide(true)}
      />
      <Fund noSticky />
      <BackToTop />
      {/* {showSide && !isMobile && <SideInfo />} */}
    </>
  )
}

export default HomePage
