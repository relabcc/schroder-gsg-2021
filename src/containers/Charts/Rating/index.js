import React, { createElement } from 'react';
import get from 'lodash/get'

import Data from '../../../contexts/data'

import Source from '../../../components/Source'

import Chart from './Chart'
import ChartMobile from './ChartMobile'

const Rating = ({ isMobile }) => {
  return (
    <Data path="/rating">
      {(data) => {
        const ratio = data[0] ? ['BBB', 'A', 'AA', 'AAA'].reduce((sum, k) => sum + +data[0][k], 0) : 0

        return (
          <>
            {data[0] && createElement(isMobile ? ChartMobile : Chart, { ratio, data: data[0] })}
            <Source>資料來源：施羅德投資，截止至{get(data[0], 'updatedAt')}。</Source>
          </>
        )
      }}
    </Data>
  );
};

export default Rating;
