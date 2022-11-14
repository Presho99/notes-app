import React, { useState } from 'react'
import { Calendar } from 'react-calendar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCheck, faClock, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import Palette from './Palette'

function Event() {
    // state for dates
    const [date, setDate] = useState(new Date())
    return (
        <div className='event'>
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div>
            <div className='text-center'>
                <div className='cal-event'>
                    <form className='form-event'>
                        <input type="text" placeholder="Event Title"/>
                        <div className='event-time'>
                            <FontAwesomeIcon icon={faClock} className="fa-clock"/>
                            <div className='set-time'>
                                <div className='set-time-start'>
                                    <label>Start:</label>
                                    <input type="time" required/>
                                </div>
                                <div className='set-time-start'>
                                    <label>End:</label>
                                    <input type="time" required/>
                                </div>
                                <div className='repeat'>
                                    <p>Repeat</p>
                                    <p>Never</p>
                                </div>
                            </div>
                        </div>
                        <Palette/>
                        <div className='location'>
                            <FontAwesomeIcon icon={faLocationDot}/>
                            <input type="text" placeholder="Add location"/>
                        </div>
                        <button className='event-btn'>
                            <FontAwesomeIcon icon={faCheck}/>
                             Save 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Event