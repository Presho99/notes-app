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
                    <h3>Excited</h3>
                    <img src="../images/excited.png" onClick={()=> setIsOpen(true)} />
                </div>
                <div className='mood-itself'>
                    <h3>Happy</h3>
                    <img src="../images/happy.png" onClick={()=> setIsOpen(true)} />
                </div>
                <div className='mood-itself'>
                    <h3>Confident</h3>
                    <img src="../images/confident.png" onClick={()=> setIsOpen(true)} />
                </div>
                <div className='mood-itself'>
                    <h3>Calm</h3>
                    <img src="../images/calm.png" onClick={()=> setIsOpen(true)} />
                </div>
                <div className='mood-itself'>
                    <h3>Sad</h3>
                    <img src="../images/sad.png" onClick={()=> setIsOpen(true)} />
                </div>
                <div className='mood-itself'>
                    <h3>Depressed</h3>
                    <img src="../images/depressed.png" onClick={()=> setIsOpen(true)} />
                </div>
                <div className='mood-itself'>
                    <h3>Annoyed</h3>
                    <img src="../images/annoyed.png" onClick={()=> setIsOpen(true)} />
                </div>
                <div className='mood-itself'>
                    <h3>Angry</h3>
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