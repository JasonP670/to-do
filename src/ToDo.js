import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const trash = <FontAwesomeIcon icon={faTrash} />

const ToDo = ({ todo, checkItem, deleteItem }) => {
    return (
        <div className={todo.complete ? "item strike" : "item"}>
            <span className="item-check">
                <input type="checkbox" checked={todo.complete} onChange={() => checkItem(todo.id)}></input>
            </span>
            <p>{ todo.task }</p>
            <button className="item-delete" onClick={() => deleteItem(todo.id)}>{ trash }</button>
        </div>

    )
}

export default ToDo