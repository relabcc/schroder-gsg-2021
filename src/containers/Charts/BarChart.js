import React from 'react';
import map from 'lodash/map'
import groupBy from 'lodash/groupBy'
import get from 'lodash/get'

import Data from '../../contexts/data'

import Source from '../../components/Source'
import Bar from './Bar'

const toNumber = /[^%]+/

const BarChart = ({ isMobile, index, fill }) => {
  return (
    <Data path="/industries">
      {(data) => {
        console.log(data)
        const transformData = data.slice(0, data.length - 1).reverse().reduce((res, d) => {
          if (res[0]) {
            res[1].push({ x: d.產業,  y: +toNumber.exec(d.基金)[0], label: d.基金 })
            res[0].push({ x: d.產業,  y: +toNumber.exec(d.指標)[0], label: d.指標 })
            return res
          }
          res[1] = [{ x: d.產業,  y: +toNumber.exec(d.基金)[0], label: d.基金 }]
          res[0] = [{ x: d.產業,  y: +toNumber.exec(d.指標)[0], label: d.指標 }]
          return res
        }, [])
        console.log(transformData)
        return (
          <>
            <Bar data={transformData} />
            {/* <Source>資料來源：施羅德投資，截止至{get(hi, [index, 'updatedAt'])}。</Source> */}
          </>
        )
      }}
    </Data>
  );
};

export default BarChart;
