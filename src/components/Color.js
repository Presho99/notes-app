import React from 'react'
import {ColorPicker, useColor} from "react-color-palette"
import "react-color-palette/lib/css/styles.css";

function Color() {
  const [color, setColor] = useColor("hex", "#121212")
  return (
    <div className='color'>
      <ColorPicker
      width={256}
      height={120}
      color={color}
      onChange={setColor}
      hideHSV dark
      />
    </div>
  )
}

export default Color