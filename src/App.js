import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import DisplayTask from "./components/DisplayTask"

class App extends React.Component {

  state = {
    categoryDisplay: "",
    newTask: "",
    chooseCategory: "Code",
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ]
  }


  handleClick =(event) => {
    event.target.innerText === "All" ? 
    this.setState({categoryDisplay: ""}) :
    this.setState({categoryDisplay: event.target.innerText})
  }

  handleDelete  = (deleteTask) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task !== deleteTask)
    })
  }

  handleAddTask = (e) => {
    e.preventDefault()
    debugger
    let newTask = {text: this.state.newTask, category: this.state.chooseCategory}
    this.setState({
      tasks: [...this.state.tasks, newTask], 
      newTask: ""
    })
  }

  render() {
    let filterTasks = this.state.tasks.filter(task => task.category.includes(this.state.categoryDisplay))
    return (
      <div className="App">
        <h2>My tasks</h2>
        <div className='categories'>
          <h5>Category filters</h5>
          {CATEGORIES.map(category => <button onClick={this.handleClick}>{category}</button>)}
        </div>
        <div className="tasks">
          <h5>Tasks</h5>
          <form class="new-task-form">
            <input onChange={(e) => this.setState({newTask: e.target.value})} placeholder="New task details" type="text" value={this.state.newTask}></input>
              <select onChange={(e) => this.setState({chooseCategory: e.target.value})}>
                <option>Code</option>
                <option>Food</option>
                <option>Money</option>
                <option>Misc</option>
              </select>
            <input onClick={this.handleAddTask} type="submit" value="Add task"></input>
          </form>

          {filterTasks.map((task,i) => <DisplayTask key={i} task={task} handleDelete={this.handleDelete}/>)}
        </div>
      </div>
    );
  }
}


export default App;
