import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faPlus} />

const AddTask = ({ addItem, todoNameRef }) => {
    return ( 
        <form >
            <button 
                type="button" 
                onClick={addItem}
            > 
                { element } 
            </button>

            <input 
                ref={ todoNameRef }
                type="text"
                placeholder="Add a new item to do"
            />
        </form>
    )
}




export default AddTask