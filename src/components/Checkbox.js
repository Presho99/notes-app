import React, {useState} from 'react'
import "../index.css"

function Checkbox({label}) {
    const [isChecked, setIsChecked] = useState(false)
  return (
    <div className='checkbox-wrapper'>
        
        <input type="checkbox" checked={isChecked} onChange={() => setIsChecked((prev) => !prev)}/>
        <span>{label}</span> 
  
        
        
    </div>
  )
}

export default Checkbox