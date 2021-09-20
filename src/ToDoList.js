import React from 'react'
import { v4 as uuidv4} from 'uuid'

import ToDo from './ToDo'





const ToDoList = ({ toDoList, checkItem, deleteItem }) => {
    return (
        <div>
            {toDoList.map(todo => {
                let key = uuidv4()
                return (
                    <ToDo todo={todo} checkItem={checkItem} deleteItem={deleteItem} key={key}/>
                )
            })}
            
        </div>

    )}


export default ToDoList