import React from "react"

//this lets you input into the form

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
         taskName : ""
        }
    }

    handleAdd = event => {
        event.preventDefault();
        this.props.addTask(this.state.taskName)
        
    }

    handleChanges = event => {
        event.preventDefault();
        this.setState({taskName: event.target.value})
        console.log(event.target.value)
    }

    handleClear = event => {
        event.preventDefault();
        this.props.clearCompleted();
    }

    render() {
        return (
            <form className = "todoForm">
                <input onChange = {this.handleChanges} type = "text" name = "todoInput"/>
                <button onClick = {this.handleAdd}>Add Todo</button>
                <button onClick = {this.handleClear}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm