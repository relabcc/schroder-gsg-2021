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
        fontSize: 10,
        fontFamily: 'inherit',
      },
    }
  },
  line: {
    style: {
      data: {
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
      axis: {
        stroke: 'transparent'
      },
    },
  }
})

const CleanText = ({ children, x, y, style }) => (
  <text x={x} y={y} style={style}>
    {children}
  </text>
)

const barWidhth = 14

const Bar = ({ data, isMobile, max, colors }) => {
  return (
    <VictoryChart
      theme={chartTheme}
      domain={{ y: [0, max + 10] }}
      width={isMobile ? 500 : 1000}
      height={450}
      containerComponent={<VictoryContainer />}
      padding={{
        top: isMobile ? 50 : 10,
        left: isMobile ? 70 : 100,
        bottom: isMobile ? 0 : 70,
        right: 40,
      }}
    >
      <VictoryGroup
        horizontal
        offset={barWidhth + 1}
        style={{ data: { width: barWidhth } }}
      >
        {data.map((d, i) => (
          <VictoryBar
            data={d}
            style={{
              data: {
                fill: colors[i],
                stroke: theme.colors.darkGreen,
              },
              labels: {
                fill: colors[i],
              },
            }}
            key={i}
          />
        ))}
      </VictoryGroup>
      <VictoryAxis
        style={{
          grid: {
            fill: 'transparent',
            stroke: theme.colors.textGreen,
            strokeWidth: 1,
            strokeDasharray: '2, 5',
          }
        }}
        dependentAxis
      />
      <VictoryAxis
        style={{
          grid: {
            fill: 'transparent',
            strokeWidth: 0,
            strokeDasharray: '2, 5',
          }
        }}
      />
    </VictoryChart>
  )
}

export default withIE(Bar);
