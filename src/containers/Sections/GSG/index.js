import React from 'react'
import Container from '../../../components/Container'
import Box from '../../../components/Box'
import Flex from '../../../components/Flex'
import Image from '../../../components/Image'
import Text from '../../../components/Text'
import Module from '../../../components/Module'
import { responsive } from '../../../components/ThemeProvider/theme'

import useResponsive from '../../../contexts/mediaQuery/useResponsive'

import ESG1 from './1-1-1.png'
import ESG2 from './1-1-2.png'
import ESG3 from './1-1-3.png'
import ESG4 from './1-1-4.png'
import chart from './1-3.png'

// import Table from '../Charts/Table'

// const tableData = {
//   th: ['AAA', 'AA', 'A', 'BBB'],
//   tbody: [['1.1%', '0.8%', '21.4%', '54.5%']]
// }

const sections = [
  {
    title: '永續投資的重要性',
    desc: '四大動力，推升永續投資為全球投資焦點。',
    content: [
      {
        src: ESG1,
        label: '政策監管',
        text: '聯合國與歐盟都建立永續投資規章，如PRI責任投資或SFDR',
      },
      {
        src: ESG2,
        label: 'ESG潮流',
        text: '主權基金陸續都將ESG納入投資評估中',
      },
      {
        src: ESG3,
        label: '資金流入',
        text: '全球ESG永續基金規模連4季創新高',
      },
      {
        src: ESG4,
        label: '績效表現亮眼',
        text: 'MSCI世界ESG指數13年有10年優於全球股市',
      },
    ],
    source: '資料來源：UN, EU, Norges Bank, GPIF, 晨星, MSCI, Schroders 整理提供, 截至2021/4/30. MSCI ACWI ESG指數於2007年9月成立，統計2008年至2020年度，以美元計算。'
  },
  {
    title: '永續投資首選施羅德',
    desc: '施羅德已將ESG貫徹於所有基金投資策略中，堅信重視「永續性」的企業，其商業模式也擁有潛藏的韌性，更能支持公司持續成長。\n\n施羅德(環)環球永續增長基金，將「永續發展」設為投資主要標準，為全方位的永續投資旗艦型股票基金。',
    subtitle: '來自內外的永續認證',
    content: [
      {
        src: '',
        label: '聯合國A+認證',
        text: '施羅德連續6年榮獲聯合國PRI責任投資最高A+評級',
      },
      {
        src: '',
        label: '集團ESG流程認證',
        text: 'ESG永續團隊&全球股票團隊共同管理',
      },
      // {
      //   src: '',
      //   label: '環境金融ESG大獎',
      //   text: '榮獲2020最佳環境金融ESG工具獎（SustainEx）',
      // },
      {
        src: '',
        label: '基金評鑑晨星認證',
        text: '晨星5顆地球永續最高評級',
      },
      // {
      //   src: '',
      //   label: 'MSCIAA評等',
      //   text: 'MSCI ESG排名全球前5%（34,000檔基金）',
      // },
    ],
    source: '資Source: UN, Environmental Finance, Morningstar, MSCI, Schroders, 2021/4/30'
  },
]

const ESG = ({ innerRef }) => {
  const { isMobile } = useResponsive()
  return (
    <Box ref={innerRef}>
      <Container py={responsive('2.86em', '7.143em')}>
        {sections.map(({ title, desc, content, source, subtitle }, i) => (
          <Box mt={i && '2em'} key={i}>
            <Text.Title lineHeight="2">{title}</Text.Title>
            <Text fontSize={responsive('1em', '1.25em')} whiteSpace="pre-wrap">{desc}</Text>
            {subtitle && <Text.SubTitle mt="1em">{subtitle}</Text.SubTitle>}
            <Module
              content={content}
            />
            <Text color="lightGray" fontSize={responsive('0.875em', '1m')}>{source}</Text>
          </Box>
        ))}
        <Box mt="1em">
          <Text.SubTitle>亮眼的投資表現</Text.SubTitle>
          <Box mt="1em">
            <Image src={chart} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default ESG
