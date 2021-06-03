import React, { useState } from 'react'
import 'react-tabs/style/react-tabs.css';

import Container from '../../components/Container'
import Text from '../../components/Text'
import Title from '../../components/Title'
import { responsive } from '../../components/ThemeProvider/theme'

// import Flex from '../../components/Flex'

import FundTabs from './Tabs'

const Fund = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <Title title="基金資料" />
      <Container py={responsive('2.86em', '7.143em')}>
        <FundTabs selectedIndex={activeTab} onSelect={setActiveTab} />
      </Container>
    </>
  )
}

export default Fund
