import React from "react"

//this is the todo item

const Todo = props => {
        return (
            <div
                onClick={() => props.toggleCheck(props.item.id)}
                className = {props.item.completed ? "item-complete" : ""}
                // className = {${props.item.purchased}`item-complete`}
            >
                <p>{props.item.task}</p>
            </div>
        )
    
}

export default Todo