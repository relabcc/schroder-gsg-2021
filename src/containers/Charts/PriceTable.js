import React from 'react';
import get from 'lodash/get'

import Table from './Table'

import Data from '../../contexts/data'
import Source from '../../components/Source'

const names = [
  ['thisYear', '今年以來'],
  ['month3', '三個月'],
  ['month6', '六個月'],
  ['year1', '一年'],
  ['year2', '二年'],
  ['year3', '三年'],
  ['allTime', '成立以來'],
]

const PriceTable = ({ isMobile }) => {
  return (
    <Data path="/performance">
      {(data) => {
        if (!data.length) return null
        const table = names.map(([key, name]) => [name, data[0][key], data[2][key]])
        const note = get(data, [3, 'name'])

        const priceData = {
          th: ['報酬率，美元(%)', ...table.map(d => d[0])],
          tbody: [
            ['施羅德(環)環球收息債券\n(本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金)', ...table.map(d => d[1])],
            ['同類型基金平均值(37檔)', ...table.map(d => d[2])],
          ]
        }
        const priceDataMobile= {
          th: ['報酬率\n美元(%)', 'A美元月配\n(%)', '同類型基金\n平均值(37檔)\n(%)'],
          tbody: table,
        }

        return (
          <>
            <Table nowData={isMobile ? priceDataMobile : priceData} isMobile={isMobile} />
            <Source>{note}</Source>
          </>
        )
      }}
    </Data>
  );
};

export default PriceTable;
