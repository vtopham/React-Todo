import React from 'react';
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"
import "./components/Todo.css"

const toDos = [
  {
    task: "organize garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "bake cookies",
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      toDoList: toDos
    }
  }

  toggleCheck = itemId => {
    this.setState({
      toDoList: this.state.toDoList.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed //if the item matches, return a new copy of item with opposite item
          }
        }
        return item //otherwise, just return the item
      })
    })
  }
  
  
  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>

        <TodoList 
          toggleCheck = {this.toggleCheck}
          toDoList = {this.state.toDoList}/>
        <TodoForm />
      </div>
    );
  }
}

export default App;
