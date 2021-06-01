import React from 'react';
import { VictoryPie } from 'victory';

const Pie = ({ data, isMobile}) => {
  return (
    <VictoryPie
      data={data}
      style={{
        labels: {
          fontFamily: 'inherit',
        },
      }}
      width={isMobile ? 600 : 800}
      height={isMobile ? 500 : 400}
      innerRadius={isMobile ? 120 : 100}
      labels={({ datum }) => `${datum.x} ${datum.y}%`}
    />
  )
}

export default Pie;
