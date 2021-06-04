import React from 'react';
import { last, max } from 'lodash';

import Data from '../../contexts/data'

import Source from '../../components/Source'
import Bar from './Bar'
import theme from '../../components/ThemeProvider/theme';

const toNumber = /[^%]+/

const BarChart = ({ isMobile, index, dataPath, fill }) => {
  return (
    <Data path={dataPath}>
      {(data) => {
        if (!data.length) return null
        const maxDomain = data.reduce((res, d) => {
          res = max([res, +toNumber.exec(d.基金)[0], +toNumber.exec(d.指標)[0]])
          return res
        }, 0)
        const source = last(data)[Object.keys(last(data))[0]]
        const keys = Object.keys(data[0])
        const transformData = data.slice(0, data.length - 1).reverse().reduce((res, d) => {
          if (res[0]) {
            res[1].push({ x: d[keys[0]],  y: +toNumber.exec(d[keys[1]])[0], label: d[keys[1]] })
            res[0].push({ x: d[keys[0]],  y: +toNumber.exec(d[keys[2]])[0], label: d[keys[2]] })
            return res
          }
          res[1] = [{ x: d[keys[0]],  y: +toNumber.exec(d[keys[1]])[0], label: d[keys[1]] }]
          res[0] = [{ x: d[keys[0]],  y: +toNumber.exec(d[keys[2]])[0], label: d[keys[2]] }]
          return res
        }, [])
        return (
          <>
            <Bar
              isMobile={isMobile}
              data={transformData}
              max={maxDomain}
              colors={[theme.colors.textGreen, theme.colors.darkGreen]}
            />
            <Source>{source}</Source>
          </>
        )
      }}
    </Data>
  );
};

export default BarChart;