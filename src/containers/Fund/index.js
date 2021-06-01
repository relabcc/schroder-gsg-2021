import React, { useState } from 'react'
import 'react-tabs/style/react-tabs.css';

import Container from '../../components/Container'
// import Box from '../../components/Box'
import Title from '../../components/Title'
import { responsive } from '../../components/ThemeProvider/theme'

// import Flex from '../../components/Flex'

import FundTabs from './Tabs'

import paper from './paper.svg'
const Fund = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <Title src={paper} title="基金資料" />
      <Container py={responsive('2.86em', '7.143em')}>
        <FundTabs selectedIndex={activeTab} onSelect={setActiveTab} />
      </Container>
    </>
  )
}

export default Fund
