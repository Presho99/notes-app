import React, { useState } from 'react'
import "../index.css"
import Popup from './Popup'

function Mood() {
    // popup open or not state
    const [isOpen, setIsOpen] = useState(false)

    
    return (
        <div className='mood'>
            <h2 className='mood-title'>Today I feel:</h2>
            <div className='moods'>
                <div className='mood-itself'>
                  
                    <img src="../images/excited.png" onClick={()=> setIsOpen(true)} />
                </div>
                <div className='mood-itself'>
                   
                    <img src="../images/happy.png" onClick={()=> setIsOpen(true)} />
                </div>
                <div className='mood-itself'>
                
                    <img src="../images/confident.png" onClick={()=> setIsOpen(true)} />
                </div>
                <div className='mood-itself'>
                  
                    <img src="../images/calm.png" onClick={()=> setIsOpen(true)} />
                </div>
                
                <div className='mood-itself'>
                    
                    <img src="../images/depressed.png" onClick={()=> setIsOpen(true)} />
                </div>
                <div className='mood-itself'>
                    
                    <img src="../images/annoyed.png" onClick={()=> setIsOpen(true)} />
                </div>
                <div className='mood-itself'>
                   
                    <img src="../images/angry.png" onClick={()=> setIsOpen(true)} />
                </div>
                <Popup trigger={isOpen} setTrigger={setIsOpen}>

                    <div className='prompt'>
                        <h2>Wanna write about it?</h2>
                        <div className='prompt-buttons'>
                            <button>Yes</button>
                            <button onClick={()=> setIsOpen(false)}>Later</button>
                        </div>
                    </div>



                </Popup>
            </div>

        </div>
    )
}

export default Mood