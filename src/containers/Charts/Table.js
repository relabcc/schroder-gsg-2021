import React, { useCallback } from 'react';

import Box from '../../components/Box'
import { responsive } from '../../components/ThemeProvider/theme'

const Table = ({ nowData, thAlign, tbodyAlign, fontSize = '1.143em', bg = 'bgGreen', noMobile }) => {
  const getStripBg = useCallback((i) => i % 2 ? 'lightGray' : 'white', [])
  const getResponsive = useCallback((mobile, desk) => noMobile ? desk : responsive(mobile, desk), [noMobile])
  return (
    <Box is="table" fontSize={fontSize}>
      <Box is="thead">
        <Box is="tr">
          {nowData.th.map((h, i) => (
            <Box
              is="th"
              color={getResponsive(i ? 'black' : 'white', 'white')}
              bg={getResponsive(i ? getStripBg(i + 1) : bg, bg)}
              px="0.5em"
              py="1em"
              textAlign={getResponsive('center', thAlign ? thAlign : i ? 'right' : 'left')}
              whiteSpace="pre-wrap"
              fontWeight="bold"
              key={i}
            >
              {h}
            </Box>
          ))}
        </Box>
      </Box>
      {nowData.tbody.map((h, i) => (
        <Box is="tbody" key={i}>
          <Box is="tr">
            {h.map((n, k) => (
              <Box
                whiteSpace="pre-wrap"
                is="td"
                px="0.5em"
                py="1em"
                bg={getResponsive(k ? getStripBg(k + 1) : bg, getStripBg(i))}
                color={getResponsive(k ? 'black' : 'white', 'black')}
                textAlign={getResponsive('center', tbodyAlign ? tbodyAlign : k ? 'right' : 'left')}
                key={k}
              >
                {n}
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Table;
