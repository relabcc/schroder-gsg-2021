import React from 'react';
import map from 'lodash/map'
import groupBy from 'lodash/groupBy'

import Data from '../../contexts/data'

import Pie from './Pie'

const Allocation = ({ isMobile }) => {
  return (
    <Data path="/allocation">
      {(data) => {
        const hi = data.filter(d => d.Type === 'Country').map(({ Percentage, Item }) => ({
          x: Item,
          y: +Percentage.replace('%', ''),
        }))
        console.log(hi)
        return <Pie data={hi} isMobile={isMobile} />
      }}
    </Data>
  );
};

export default Allocation;
