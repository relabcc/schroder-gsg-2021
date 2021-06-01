import React from 'react';
import useFetch  from 'use-http'
import isFunction from 'lodash/isFunction'

import Box from '../../components/Box'
import Loading from '../../components/Loading'

const Data = ({ path, children }) => {
  const { loading, error, data = [] } = useFetch(path, null, []) // onMount
  if (error) console.error(error)

  return (
    <Box position="relative">
      {error && 'Error!'}
      {loading && (
        <Box.fullAbs bg="rgba(255,255,255,0.5)">
          <Box.absCenter><Loading color="prussianBlue" /></Box.absCenter>
        </Box.fullAbs>
      )}
      {isFunction(children) ? children(data) : children}
    </Box>
  )
};

export default Data;
