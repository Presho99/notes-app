import React from 'react'
import {useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Calendar } from 'react-calendar'

import "../index.css"

function Cal() {
  // state for dates
  const [date, setDate] = useState(new Date())
  return (
    <div className='calendar'>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date}/>
      </div>
      <div className='text-center'>
        <div className='cal-dates'>
          <div className='cal-dates-left'>
          {date.toDateString().slice(3,10)}
          </div>
        <div className='cal-dates-right'>
        {date.toDateString().slice(0, 4)}

        </div>
 
        </div>
       
      </div>
    </div>
  )
}

export default Cal