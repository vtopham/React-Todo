import React from "react"

//this lets you input into the form

class TodoForm extends React.Component {

    constructor() {
        super();
        // this.state = {
         
        // }
      }

    render() {
        return (
            <form className = "todoForm">
                <input type = "text" name = "todoInput"/>
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm