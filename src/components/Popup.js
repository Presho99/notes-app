import React from 'react'
import "../index.css"

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-box'>
          
            {props.children}
        </div>
    </div>
  ) :  ""
}

export default Popup