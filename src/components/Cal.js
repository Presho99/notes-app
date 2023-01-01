import React from 'react'
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Calendar } from 'react-calendar'
import Event from './Event'

import "../index.css"



function Calevent({title, start, end, location}) {
  return (
    <div className='cal-right-event'>
      <p className='time'>{start} - {end}</p>
      <h3>{title}</h3>
      <p className='location'>{location}</p>
    </div>

  )
}

function Cal() {
  // state for dates
  const [date, setDate] = useState(new Date())
  const [showEvent, setShowEvent] = useState(true)
  const [events, setEvents] = useState({})

  const dateString = date.toDateString()
  const dayEvents = events[dateString] || []

  
function addNewEvent(newEvent){
  setEvents(events => ({
    ...events, 
    [dateString]: [...dayEvents, newEvent]
}))
setShowEvent(true)
}
console.log(events)

  return (
    <div className='calendar'>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      {showEvent ? <div className='text-center'>
        <div className='cal-dates'>
          <div className='cal-dates-left'>
            <h3>{date.toDateString().slice(3, 8)}</h3>
            <h1>{date.toDateString().slice(7, 10)}</h1>
          </div>
          <div className='cal-dates-right'>
            <h3>{date.toDateString().slice(0, 4)}</h3>
            <p className='rightevent'>0 events</p>
            <div className='cal-right-line'></div>
           {dayEvents.map((event, idx) => {
             return(
               <Calevent title={event.title} 
               start={event.start}
               end ={event.end}
               location={event.location}/>
             )
           } )}

          </div>
          <div className='add-event' onClick={() => setShowEvent(false)}>+</div>
        </div>

      </div> : <Event addNewEvent={addNewEvent}/>}
    </div>
  )
}

export default Cal