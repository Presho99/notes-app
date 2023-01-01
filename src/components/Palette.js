import React, {useState} from 'react'
import "../index.css"



function Palette() {
  const colors = [
   "#83781B" ,
   "#6D3D14",
   "#464655",
   "#7E4E60",
   "#961D4E"
  ];

  // State for the picked color
  
  const [background, setBackground] = useState("#071415")

  
  return (
    <div className='palette' style={{background: background}}>
     <div className="container">
        {colors.map((color, index) => (
          <div key={index} className="card">
            <div
              style={{
                background: color,
                filter: "brightness(85%)",
                boxShadow: color === background ? "0 0 5px #000" : ""
              }}
              className="box"
              onClick={() => setBackground(color)}
            />
          
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Palette