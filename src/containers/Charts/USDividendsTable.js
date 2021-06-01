import React from 'react';

import Data from '../../contexts/data'

import DividendsTable from './DividendsTable'

const SAdividendsTable = ({ isMobile }) => {
  return (
    <Data path="/dividends/IGCIA">
      {(data) => {
        return (
          <DividendsTable data={data} title="A股美元月配" titleMobile={`A股\n美元\n月配`} isMobile={isMobile} />
        )
      }}
    </Data>
  );
};

export default SAdividendsTable;
