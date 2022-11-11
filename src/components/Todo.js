import React, { useState } from 'react'
import Checkbox from './Checkbox'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import "../index.css"

function Todo() {
    // date variable
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    // state for items stored and state for value being entered in the input field
    const [list, setList] = useState([])
    const [item, setItem] = useState("")

    // icon state
    const [activeIcon, setActiveIcon] = useState(true)
    // function to toggle icons
    const handleIcon = (e) => {
        setActiveIcon(!activeIcon)
    }

    // show or hide form
    const [shown, setShown] = useState(false);

    // function to display form
    const handleShown = (e) => {
        setShown(c => !c)
    }

    // Push input field value to the list
    const addToList = () => {
        let tempArr = list;
        tempArr.push(item);
        setList(tempArr);
        setItem("")
    }

    // Delete an item
    const deleteItem = (index) => {
        let temp = list.filter((item, i) => i !== index)
        setList(temp)
    }


    // Todo body
    return (
        <div className='todo'>
            {/* title */}
            <div className='todo-title'>
                <h1>to-do</h1>
                <span className='title-date'>
                    {date}
                </span>
            </div>
            {/* to do list */}
            <div className='todo-list'>
                {
                    shown && (
                        <div className='list-add'>
                            <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />

                            <button className='todo-btn' onClick={addToList}>Add</button>
                        </div>
                    )
                }
                <div className='list-items'>

                    <div>{list.length > 0 && list.map((item, i) => (
                        <div className='item-itself'>
                            <Checkbox label={item}>{item} </Checkbox>
                            <FontAwesomeIcon icon={faMinus} onClick={() => deleteItem(i)} className="item-icon" />
                        </div>
                    )
                    )}</div>
                </div>
                <FontAwesomeIcon icon={activeIcon ? faPlusCircle : faMinusCircle} className="show-btn" onClick={() => {
                    handleShown();
                    handleIcon()
                }} />
            </div>
        </div>
    )
}

export default Todo