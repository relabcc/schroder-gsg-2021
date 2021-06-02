import React from 'react'
import { isArray } from 'lodash'

import Container from '../../../components/Container'
import Box from '../../../components/Box'

import Image from '../../../components/Image'
import Module from '../../../components/Module'
import Text from '../../../components/Text'
import Title from '../../../components/Title'
import { responsive } from '../../../components/ThemeProvider/theme'
import useResponsive from '../../../contexts/mediaQuery/useResponsive'

import icon2_1 from './2-1.png'
import icon2_2 from './2-2.png'
import icon2_3 from './2-3.png'
import icon2_1_1 from './2-1-1.png'
import icon2_1_2 from './2-1-2.png'
import icon2_1_3 from './2-1-3.png'
import icon2_2_1 from './2-2-1.png'
import icon2_2_2_1 from './2-2-2-1.png'
import icon2_2_2_2 from './2-2-2-2.png'
import icon2_2_2_3 from './2-2-2-3.png'
import icon2_2_2_4 from './2-2-2-4.png'
import icon2_3_1 from './2-3-1.png'

const sets = [
  {
    title: '聚焦永續的三大選股方向\n　',
    src: icon2_1
  },
  {
    title: '永續投資策略\n　',
    src: icon2_2
  },
  {
    title: '永續團隊與\n主動參與的投資角色',
    src: icon2_3
  },
]

const data = [
  {
    title: '聚焦永續的三大選股方向',
    step: '一',
    src: icon2_1,
    vertical: true,
    leftWidth: responsive('100%', '10%'),
    logoWidth: responsive('50%', '100%'),
    content: [
      [
        {
          title: '永續環境',
          src: icon2_1_1,
          text: '企業營運或產品有利環境與能源永續利用。例如：全球風力發電龍頭、美國最大農機等標的。',
        },
        {
          title: '創新未來',
          src: icon2_1_2,
          text: '企業主要業務或服務能夠提供人更美好未來。例如：全球最大軟體服務公司。',
        },
        {
          title: '健康生活',
          src: icon2_1_3,
          text: '企業產品為讓人擁有健康生活與生活模式。例如：全球最大抗癌製藥廠、歐洲最大運動品牌。',
        },
      ]
    ]
  },
  {
    title: '永續投資策略',
    step: '二',
    src: icon2_2,
    subTitle: ['主動排除爭議性產業，有助投資人避開未來潛藏的ESG永續風險', '質化深入分析－永續評分架構'],
    content: [
      icon2_2_1,
      [
        {
          label: '對環境的尊重',
          src: icon2_2_2_1,
          text: '企業與供應商否對環境產生重大的正/負面影響',
        },
        {
          label: '公平公正對待員工、供應商和客戶',
          src: icon2_2_2_2,
          text: '企業是否提供合理的薪資、工作環境以及公平對待',
        },
        {
          label: '良好的企業公民',
          src: icon2_2_2_3,
          text: '企業經營是否遵守法規並保持高道德標準',
        },
        {
          label: '資金運用的謹慎性',
          src: icon2_2_2_4,
          text: '企業資金分配是否考量長期風險和報酬，並維持透明度並保持與股東之間的溝通',
        },
      ]
    ]
  },
  {
    title: '永續團隊與主動參與的投資角色',
    step: '三',
    text: '結合集團研究資源，分析師、數據團隊，以及專長於永續投資的分析專家們，協助全球股票團隊管理基金。除了尋找投資機會，也透過投資者的影響力積極參與議合，鼓勵引導企業以永續發展為經營策略。',
    src: icon2_3,
    content: [
      icon2_3_1
    ]
  }
]

const Feature = ({ innerRef }) => {
  const { isMobile } = useResponsive()

  return (
    <Box ref={innerRef}>
      <Container py={responsive('2.86em', '7.143em')}>
        <Text.Title>施羅德(環)環球永續增長基金三大特色</Text.Title>
        <Module content={sets} />
      </Container>
      {data.map(({ title, step, src, subTitle, text, vertical, leftWidth, logoWidth, content }, i) => (
        <Box key={i}>
          <Title title={title} src={src} step={step}  />
          <Container py="2em">
            <Text>{text}</Text>
            {content.map((d, i) => isArray(d) ? (
              <Box mt={i && responsive('1em', '2em')}>
                {subTitle && <Text.SubTitle>({i + 1}){subTitle[i]}</Text.SubTitle>}
                <Module content={d} vertical={vertical} leftWidth={leftWidth} logoWidth={logoWidth} />
              </Box>
            ) : (
              <Box mt={i && responsive('1em', '2em')}>
                {subTitle && <Text.SubTitle>({i + 1}){subTitle[i]}</Text.SubTitle>}
                <Box mt="1em">
                  <Image src={d} />
                </Box>
              </Box>
            ))}
          </Container>
        </Box>
      ))}
    </Box>
  )
}

export default Feature
