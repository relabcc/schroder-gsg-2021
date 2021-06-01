import React from 'react';

import Data from '../../contexts/data'

import DividendsTable from './DividendsTable'

const SAdividendsTable = ({ isMobile }) => {
  return (
    <Data path="/dividends/ZGCIA">
      {(data) => {
        return (
          <DividendsTable data={data} title="A股南非幣月配" titleMobile={`A股\n南非幣\n月配`} isMobile={isMobile} bg="brightBlue" />
        )
      }}
    </Data>
  );
};

export default SAdividendsTable;
