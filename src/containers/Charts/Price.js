import React from 'react';

import LineChart from './LineChart'

// import Box from '../../components/Box'

import Data from '../../contexts/data'

const Price = ({ isMobile }) => {
  return (
    <Data path="/prices/IGCIA">
      {(data) => {
        const hi = data.map(({ Date, Price }) => {
          return {
            x: Date,
            y: +Price,
          }
        })
        return (
          <LineChart data={hi} isMobile={isMobile} />
        )
      }}
    </Data>
  );
};

export default Price;
