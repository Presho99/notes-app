import React, { useState, useEffect } from 'react'
import "../index.css"

function Affirmations() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://dulce-affirmations-api.herokuapp.com/affirmation`)
            .then(response => response.json())
            .then((usefulData) => {
                console.log(usefulData)
                setLoading(false)
                setData(usefulData)
            })
            .catch((e) => {
                console.error(`An error occured: ${e}`)
            })
    }, [])
    return (
        <div className='affirmation'>
            <h2>Today's affirmation</h2>
            <div className='affirmation-box'>
                {loading && <p>Loading...</p>}
                {!loading && data.map((info) => {
                    return(
                        <p className='single'>{info.phrase}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default Affirmations