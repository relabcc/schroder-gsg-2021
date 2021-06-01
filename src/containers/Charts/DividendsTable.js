import React, { useMemo } from 'react';

import Table from './Table'

const formatDate = d => {
  const [y, m] = d.split('/')
  return `20${y}\n${+m}月`
}

const DividendsTable = ({ data, title, titleMobile, isMobile, bg }) => {
  const dividnesData = useMemo(() => {
    const sliced = data.slice(0, 12)
    if (isMobile) {
      return {
        th: [titleMobile, '當月\n配息率\n%', '年化\n配息率\n%', '當期\n報酬率\n%(含息)'],
        tbody: sliced.map(d => [formatDate(d['基準日']), d['當月配息率(%)'], d['年化配息率(%)'], d['當期報酬率(含息)(%)']])
      }
    }
    return sliced.reverse().reduce((res, d, index) => {
      res.th[index + 1] = formatDate(d['基準日'])
      res.tbody[0][index + 1] = d['當月配息率(%)']
      res.tbody[1][index + 1] = d['年化配息率(%)']
      res.tbody[2][index + 1] = d['當期報酬率(含息)(%)']
      return res;
    }, { th: [title], tbody: [['當月配息率%'], ['年化配息率%'], ['當期報酬率%(含息)']]})
  }, [isMobile, title, titleMobile, data])
  return (
    <Table nowData={dividnesData} bg={bg} />
  )
};

export default DividendsTable;
