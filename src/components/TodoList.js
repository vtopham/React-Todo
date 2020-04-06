// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react"
import TodoForm from "./TodoForm"
import Todo from "./Todo"

//this renders the list and the form

class TodoList extends React.Component {

    constructor() {
        super();
        // this.state = {
         
        // }
      }

    render() {
        return (
            <>
                <h1>This is TodoList</h1>
                <Todo />
                <TodoForm />
            </>
        )
    }

}

export default TodoList