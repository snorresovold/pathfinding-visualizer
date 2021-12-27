import React from 'react'

function Node({col, row} : {col: any, row: any})
    {
    return (
        <div className='node' id={`node-${row}-${col}`}>
            <p>sus</p>
        </div>
    )
}

export default Node;
