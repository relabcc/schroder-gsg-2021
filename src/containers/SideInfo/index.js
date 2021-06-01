import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import { MdClose } from 'react-icons/md'

import Box from '../../components/Box'
import Button from '../../components/Button'
import { responsive } from '../../components/ThemeProvider/theme'
import useResponsive from '../../contexts/mediaQuery/useResponsive'

// import isIE from '../../components/utils/isIE'

import FundTabs from '../Fund/Tabs'

const duration = 500;
const contentSize = responsive('100vw', '75vw')

const getMenuTransitionStyles = (w, y = '-50%') => ({
  entering: { transform: `translate(-${w}, ${y})` },
  entered: { transform: `translate(-${w}, ${y})` },
  exiting: { transform: `translate(0, ${y})` },
  exited: { transform: `translate(0, ${y})` },
});

const opacityTransitionStyles = (opacity) => ({
  entering: { opacity },
  entered: { opacity, pointerEvents: 'auto' },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
});

const contentTransitionStyles = {
  entering: { transform: 'translateX(-100%)' },
  entered: { transform: 'translateX(-100%)' },
  exiting: { transform: 'translateX(0)' },
  exited: { transform: 'translateX(0)' },
};

const sections =  [
  { title: '投資組合' },
  { title: '基金績效' },
  { title: '配息紀錄' },
]

const Sideinfo = () => {
  const [open, setOpen] = useState()
  const [tab, setTab] = useState(0)
  const { getCurrentValue } = useResponsive()
  return (
    <Transition in={open} timeout={duration}>
      {transitionState => (
        <>
          <Box
            position="fixed"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="black"
            transition={`opacity ${duration}ms`}
            zOrder={5}
            pointerEvents="none"
            {...opacityTransitionStyles(0.7)[transitionState]}
            onClick={() => setOpen(false)}
          />
          <Box
            position="fixed"
            top="60%"
            transform="translate(0, -50%)"
            transition={`transform ${duration}ms`}
            right="0"
            width="2.5em"
            zOrder={5}
            bg="primary"
            color="white"
            // {...getMenuTransitionStyles(getCurrentValue(contentSize))[transitionState]}
          >
            {sections.map((s, i) => (
              <Button
                key={i}
                className="side-btn"
                data-name={`side_${s.title}`}
                textAlign="center"
                px="0.5em"
                py="1em"
                onClick={() => {
                  setOpen(i === tab ? !open : true)
                  setTab(i)
                  // window.gaTrackClick(`side_${sections[i].title}`)
                }}
                border="1px solid"
                borderColor="white"
                borderRadius="0"
                lineHeight="1.375"
              >
                {s.title}
              </Button>
            ))}
          </Box>
          <Box
            position="fixed"
            top="2em"
            right="0"
            transition={`transform ${duration}ms, opacity ${duration}ms`}
            zOrder={5}
            pointerEvents="none"
            borderRight="4px solid"
            borderRightColor="ceruleanBlue"
            {...getMenuTransitionStyles(getCurrentValue(contentSize), 0)[transitionState]}
            {...opacityTransitionStyles(1)[transitionState]}
          >
            <Button.white
              px="0.5em"
              py="0.25em"
              borderRadius={0}
              onClick={() => setOpen(false)}
              fontSize="1.5em"
            >
              <MdClose />
            </Button.white>
          </Box>
          <Box
            width={contentSize}
            position="fixed"
            top="0"
            bottom="0"
            left="100%"
            transition={`transform ${duration}ms`}
            bg="white"
            zOrder={5}
            overflowY="auto"
            {...contentTransitionStyles[transitionState]}
          >
            <Box mx="1.5em" my="2em">
              <FundTabs selectedIndex={tab} onSelect={setTab} secPt="2rem" sticky />
            </Box>
          </Box>
        </>
      )}
    </Transition>
  );
};

export default Sideinfo;
