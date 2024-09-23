import React, { useState } from 'react'
import useMeasure from 'react-use-measure'
import { useSpring, animated } from '@react-spring/web'

import load from './load.module.css'

export default function Loading() {
  const [open, toggle] = useState(false)
  const [ref, { width }] = useMeasure()
  const props = useSpring({ width: open ? width : 0 })

  return (
    <div className={load.container}>
      <div ref={ref} className={load.main} onClick={() => toggle(!open)}>
        <animated.div className={load.fill} style={props} />
        <animated.div className={load.content}>{props.width.to(x => 100)}</animated.div>
      </div>
    </div>
  )
}
