import React, { useState, useMemo } from 'react'
import {
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryLine,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from 'victory';
import merge from 'lodash/merge'
import subMonths from 'date-fns/subMonths'
import subYears from 'date-fns/subYears'
import startOfDay from 'date-fns/startOfDay'
import isAfter from 'date-fns/isAfter'
import format from 'date-fns/format'

import theme, { responsive } from '../../components/ThemeProvider/theme'

import Box from '../../components/Box'
import Button from '../../components/Button'

import withIE from './withIE'

const CustomLabel = ({ x, y, style = {}, textAnchor, datum }) => (
  <g>
    <text x={x} y={y} style={{ ...style, fontSize: 10 }} textAnchor={textAnchor} dy="-0.5em">{datum.x}</text>
    <text x={x} y={y} style={{ ...style, fontSize: 12, fill: theme.colors.primary }} textAnchor={textAnchor} dy="0.875em">{datum.y}</text>
  </g>
)

const chartTheme = merge({}, VictoryTheme.grayscale, {
  line: {
    style: {
      data: {
        stroke: theme.colors.bgGreen,
        strokeWidth: 2,
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

const today = startOfDay(new Date())

const views = [
  { label: '3個月', start: subMonths(today, 3) },
  { label: '6個月', start: subMonths(today, 6) },
  { label: '1年', start: subYears(today, 1) },
  { label: '2年', start: subYears(today, 2) },
  { label: '3年', start: subYears(today, 3) },
  { label: '成立至今' },
]
// const viewsLen = views.length

const dateFormat = d => format(new Date(d), 'yyyy|MM/dd').replace('|', '\n')

const LineChart = ({ data, isMobile }) => {
  const [activeView, setView] = useState(0)
  const sliceData = useMemo(() => {
    const { start } = views[activeView]
    if (!start) return data
    return data.filter(d => isAfter(new Date(d.x), start))
  }, [activeView, data])
  return (
    <>
      <Box overflowX="auto" width={1} whiteSpace="nowrap">
        {views.map((v, i) => (
          <Button.darkGreen
            key={v.label}
            onClick={() => setView(i)}
            active={i === activeView}
            borderRadius="none"
            fontSize={responsive('1em', '1.125em')}
          >
            {v.label}
          </Button.darkGreen>
        ))}
      </Box>
      <VictoryChart
        width={isMobile ? 400 : 800}
        height={isMobile ? 250 : 350}
        scale={{ x: 'time' }}
        theme={chartTheme}
        domainPadding={12}
        containerComponent={
          <VictoryVoronoiContainer />
        }
        padding={{
          top: 50,
          left: 50,
          bottom: 50,
          right: isMobile ? 20 : 50,
        }}
      >
        <VictoryAxis
          tickCount={isMobile ? 6 : 8}
          tickFormat={dateFormat}
          style={{
            tickLabels: {
              fill: theme.colors.primary,
              fontWeight: 900,
            }
          }}
        />
        <VictoryAxis
          dependentAxis
          tickCount={5}
          style={{
            grid: {
              stroke: theme.colors.lightGray,
            },
            axis: {
              stroke: 'none',
            },
          }}
        />
        <VictoryLine
          data={sliceData}
          labels="x"
          labelComponent={(
            <VictoryTooltip
              cornerRadius={0}
              flyoutWidth={70}
              flyoutHeight={35}
              flyoutStyle={{ fill: 'white', stroke: theme.colors.primary, strokeWidth: 1 }}
              dy={0}
              labelComponent={<CustomLabel />}
            />
          )}
        />
      </VictoryChart>
    </>
  )
}

export default withIE(LineChart)
