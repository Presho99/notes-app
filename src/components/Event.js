import React, { useState } from 'react'
import { Calendar } from 'react-calendar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheck, faClock, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import Palette from './Palette'

function Event({addNewEvent}) {
    // state for dates
    
    const [newEvent, setNewEvent] = useState({title:"", start:"", end:"", location:"" })

    function handleInputs(e){
        setNewEvent(newEvent => ({...newEvent, [e.target.name]:e.target.value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        addNewEvent(newEvent)
        
    }
    return (
        <div className='event'>
            {/* <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div> */}
            <div className='text-center'>
                <div className='cal-event'>
                    <form className='form-event' onSubmit={handleSubmit}>
                        <input type="text" placeholder="Event Title" className='first-input' value={newEvent.title} name="title" onChange={handleInputs}/>
                        <div className='event-time'>
                            <FontAwesomeIcon icon={faClock} className="fa-clock"/>
                            <div className='set-time'>
                                <div className='set-time-start'>
                                    <label><p>Start:</p></label>
                                    <input type="time" value={newEvent.start} name="start" required onChange={handleInputs}/>
                                </div>
                                <div className='set-time-start'>
                                    <label><p>End:</p></label>
                                    <input type="time" required value={newEvent.end} name="end" onChange={handleInputs}/>
                                </div>
                                <div className='repeat'>
                                    <p className='par'>Repeat</p>
                                    <p >Never</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='location'>
                            <FontAwesomeIcon icon={faLocationDot} className="location-icon"/>
                            <input type="text" placeholder="Add location" value={newEvent.location} name="location" onChange={handleInputs}/>
                        </div>
                        <button className='event-btn'>
                            <FontAwesomeIcon icon={faCheck} className="fa-check"/>
                             <p>Save</p> 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Event