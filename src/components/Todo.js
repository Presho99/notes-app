import React, { useState } from 'react'
import Checkbox from './Checkbox'



function Todo() {
    // date variable
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    // state for items stored and state for value being entered in the input field
    const [list, setList] = useState([])
    const [item, setItem] = useState("")
    // checked or
    const [isChecked, setIsChecked] = useState(false)

    // Push input field value to the list
    const addToList = () => {
        let tempArr = list;
        tempArr.push(item);
        setList(tempArr);
        setItem("")
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
                <div className='list-add'>
                <input type="text" value={item} onChange={(e) => setItem(e.target.value)} />
                
                <button className='todo-btn' onClick={addToList}>Add</button>
                </div>
                <div className='list-items'>
                    
                        <div>{list.length > 0 && list.map((item) => <Checkbox label={item}>{item} </Checkbox>)}</div>    
                     
                </div>
              


               
            </div>
        </div>
    )
}

export default Todo