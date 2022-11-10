import React from 'react'

function Todo() {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    return (
        <div className='todo'>
            <div className='Title'>
                <h1>to-do</h1>
                <span className='title-date'>
                    {date}
                </span>
            </div>
        </div>
    )
}

export default Todo