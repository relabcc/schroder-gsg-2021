import React, { useEffect, useRef } from 'react';

const Video = () => {
  const ref = useRef()
  useEffect(() => {
    ref.current.appendChild(window.__video)
  }, [])
  return (
    <div ref={ref} />
  )
}

export default Video;
