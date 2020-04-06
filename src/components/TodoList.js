// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react"
import Todo from "./Todo"

//this renders the list and the form

const TodoList = props => {
        return (
            <div className = "todo-list">
                <h1>This is TodoList</h1>
                {props.toDoList.map(task => {
                    return (
                        <Todo key = {task.id} item = {task} toggleCheck = {props.toggleCheck} />
                    )
                })
                }
                
            </div>
        )
}

export default TodoList