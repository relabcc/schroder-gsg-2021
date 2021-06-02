import React, { useMemo } from 'react';
import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
  VictoryGroup,
  VictoryContainer,
} from 'victory';
import merge from 'lodash/merge'
import get from 'lodash/get'
import range from 'lodash/range';

import theme from '../../components/ThemeProvider/theme'

import LineBreakText from './LineBreakText'

import withIE from './withIE'

const chartTheme = merge({}, VictoryTheme.grayscale, {
  bar: {
    style: {
      data: {
        strokeWidth: 2,
      },
      labels: {
        fontWeight: 700,
        fontSize: 8,
        fontFamily: 'inherit',
      },
    }
  },
  line: {
    style: {
      data: {
        stroke: theme.colors.lightGray,
        strokeWidth: 1,
        strokeDasharray: '10, 5',
      }
    }
  },
  axis: {
    style: {
      axisLabel: {
        fontFamily: 'inherit',
      },
      tickLabels: {
        fontFamily: 'inherit',
      },
    }
  }
})

const CleanText = ({ children, x, y, style }) => (
  <text x={x} y={y} style={style}>
    {children}
  </text>
)

const Bar = ({ data, isMobile, fill = 'lime' }) => {
  const wData = useMemo(() => {
    if (!data) return []
    const mapped = data.reduce((res, d, index) => [
      ...res,
      {
        ...d,
        y0: index && (res[index - 1].y0 + res[index - 1].p),
        y: index ? (res[index - 1].y + d.p) : d.p,
      }
    ], [])
    return isMobile ? [...mapped].reverse() : mapped
  }, [data, isMobile])
  return (
    <VictoryChart
      theme={chartTheme}
      domain={{y: [0, 100]}}
      domainPadding={30}
      // width={isMobile ? 400 : 800}
      // height={isMobile ? 650: 350}
      containerComponent={<VictoryContainer />}
      padding={{
        // top: isMobile ? 50 : 10,
        // left: isMobile ? 70 : 50,
        // bottom: isMobile ? 0 : 70,
        // right: 50,
      }}
    >
      <VictoryGroup
        horizontal
        offset={12}
        style={{ data: { width: 12 } }}
        // colorScale={["darkGreen", "textGreen"]}
      >
        {data.map((d, i) => (
          <VictoryBar
            data={d}
            style={{ data: { fill: i ? theme.colors.darkGreen : theme.colors.textGreen, stroke: 'transparent' } }}
            key={i}
          />
        ))}
      </VictoryGroup>
    </VictoryChart>
  )
}

export default withIE(Bar);
