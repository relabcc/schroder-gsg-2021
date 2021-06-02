import React from 'react';
import map from 'lodash/map'
import groupBy from 'lodash/groupBy'
import get from 'lodash/get'

import Data from '../../contexts/data'

import Source from '../../components/Source'
import Waterfall from './Waterfall'

const Allocation = ({ isMobile, index, fill }) => {
  return (
    <Data path="/industries">
      {/* {(data) => {
        const hi = map(groupBy(data, 'Type'), (dd) => {
          let updatedAt
          const mapped = dd.map(({ Item, Percentage, Updated }) => {
            if (Updated) {
              updatedAt = Updated
            }
            return {
              x: Item,
              p: +Percentage.replace('%', ''),
              label: Percentage,
            }
          })
          return {
            updatedAt,
            data: mapped
          }
        })
        return (
          <>
            <Waterfall data={get(hi, [index, 'data'])} isMobile={isMobile} fill={fill} />
            <Source>資料來源：施羅德投資，截止至{get(hi, [index, 'updatedAt'])}。</Source>
          </>
        )
      }} */}
    </Data>
  );
};

export default Allocation;
