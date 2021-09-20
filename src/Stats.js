import React from 'react'

function Stats({ numberOfThingsToDo }) {
    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Total Things To Do:</td>
                    <td>{numberOfThingsToDo}</td>    
                </tr>
                <tr>
                    <td>Total Checked Off Items:</td>
                    <td>0</td>
                </tr>
            </tbody>
        </table>
        )
}


export default Stats