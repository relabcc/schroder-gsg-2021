import React, { useMemo } from 'react';
import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
  VictoryLine,
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
        fill: theme.colors.lime,
        stroke: theme.colors.lime,
        strokeWidth: 2,
      },
      labels: {
        fontWeight: 700,
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

const Waterfall = ({ data, isMobile, fill = 'lime' }) => {
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
      horizontal={isMobile}
      width={isMobile ? 400 : 800}
      height={isMobile ? 650: 350}
      containerComponent={<VictoryContainer />}
      padding={{
        top: isMobile ? 50 : 10,
        left: isMobile ? 70 : 50,
        bottom: isMobile ? 0 : 70,
        right: 50,
      }}
    >
      <VictoryAxis
        dependentAxis
        tickValues={range(isMobile ? 25 : 0, 101, 25)}
        style={{
          grid: {
            stroke: theme.colors.lightGray,
          },
          axis: {
            stroke: 'none',
          },
        }}
        orientation={isMobile && 'top'}
        offsetY={50}
      />
      {wData.map((d, i) => i ? (
        <VictoryLine
          key={i}
          labelComponent={<g />}
          data={[
            isMobile ? d : wData[i - 1],
            merge({}, isMobile ? wData[i - 1] : d, { y: isMobile ? d.y : wData[i - 1].y }),
          ]}
        />
      ) : null)}
      <VictoryBar
        barRatio={0.5}
        data={wData}
        style={{
          data: {
            fill: ({ datum }) => datum.p < 0 ? theme.colors.mandy : get(theme.colors, fill, fill),
            stroke: ({ datum }) => datum.p < 0 ? theme.colors.mandy : get(theme.colors, fill, fill),
          },
        }}
      />
      <VictoryAxis
        style={{
          tickLabels: {
            fill: theme.colors.prussianBlue,
            fontWeight: 900,
          }
        }}
        tickLabelComponent={<LineBreakText maxLength={4} dy={isMobile ? 4 : 12} verticalCenter={isMobile} fillFront />}
      />
      <CleanText x={isMobile ? 70 : 20} y={isMobile ? 36 : 12}>(%)</CleanText>
    </VictoryChart>
  )
}

export default withIE(Waterfall);
