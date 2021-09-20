import React from 'react'
import Stats from './Stats'
import RemoveChecked from './RemoveChecked'

const Header = ({ numberOfThingsToDo, deleteAll }) => {
    return (
        <header className="header">
            <Stats numberOfThingsToDo={numberOfThingsToDo}/>
            <h1>Things To Do</h1>
            <RemoveChecked deleteAll={deleteAll}/>
        </header>
        
    )
}

export default Header