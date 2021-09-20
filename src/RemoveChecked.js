import React from 'react'

const RemoveChecked = ({ deleteAll }) => {
return (
    <div className="remove">
        <button className="remove-btn" onClick={() => deleteAll()}>Remove Checked</button>
    </div>
)}


export default RemoveChecked