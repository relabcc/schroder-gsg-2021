import React, { useState, useMemo, createRef, useEffect } from 'react'
import { useMeasure } from "react-use";

import Box from './Box'
import Flex from './Flex'
import Image from './Image'
import Text from './Text'
import { responsive } from './ThemeProvider/theme'

const Module = ({ content, logoWidth, vertical, leftWidth, ...props }) => {
  const refs = useMemo(() => content.map(() => createRef()), [content]);
  const [maxHeight, setMaxHeight] = useState()
  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      let maxH = 0
      for (let entry of entries) {
        if (entry.contentBoxSize) {
          // Firefox implements `contentBoxSize` as a single content rect, rather than an array
          const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
          // console.log(contentBoxSize.blockSize)
          maxH = Math.max(maxH, contentBoxSize.blockSize)
        } else {
          console.log(entry)
        }
      }
      setMaxHeight(maxH)
    });
    refs.forEach(r => resizeObserver.observe(r.current))
    return () => refs.forEach(r => resizeObserver.unobserve(r.current))
  }, [refs])
  return (
    <Flex
      mx={responsive(0, '-1em')}
      alignItems={responsive('center', 'flex-start')}
      mt={responsive('2em', '1.25em')}
      flexDirection={responsive('column', vertical ? 'column' : 'row')}
      {...props}
    >
      {content.map(({ src, title, label, text }, k, { length }) => (
        <Flex
          mx="1em"
          mt={responsive('1em', 0)}
          pb={responsive('0.5em', '1em')}
          alignItems="center"
          flexDirection={responsive('row', 'column')}
          width={responsive(1, vertical ? 1 : 1 / length)}
          height="100%"
          key={k}
        >
            {/* <Text.SubTitle textAlign="center" whiteSpace={responsive('auto', 'pre-wrap')}>{title}</Text.SubTitle> */}
          <Box
            width={logoWidth || (length < 4 ? responsive('6.428em', '70%') : responsive('6.428em', 'auto'))}
            pr={responsive('2em', 0)}
            px={responsive(0, '1em')}
            mt={title && "1em"}
            mx="auto"
          >
            <Image src={src} />
          </Box>
          <Box flex={1}>
            {label && (
              <Flex
                style={{ height: maxHeight }}
                my={responsive('0.5em', '1em')}
                alignItems="center"
                justifyContent={responsive('flex-start', 'center')}
              >
                <Text.SubTitle
                  ref={refs[k]}
                  whiteSpace="pre-wrap"
                  textAlign="left"
                >{label}</Text.SubTitle>
              </Flex>
              )}
              <Text>{text}</Text>
          </Box>
        </Flex>
      ))}
    </Flex>
  )
}

export default Module
