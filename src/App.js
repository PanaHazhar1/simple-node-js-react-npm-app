import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskDescription: '',
      tasks: [
        { title: 'Task 1', description: 'Description for task 1', isEditing: false },
        { title: 'Task 2', description: 'Description for task 2', isEditing: false },
        { title: 'Task 3', description: 'Description for task 3', isEditing: false }
      ]
    };
  }

  handleDescriptionChange = (event, index) => {
    const newDescription = event.target.value;
    this.setState(state => {
      const tasks = state.tasks.map((task, i) => {
        if (i === index) {
          task.description = newDescription;
        }
        return task;
      });
      return { tasks };
    });
  };

  handleNewTaskDescriptionChange = (event) => {
    this.setState({ newTaskDescription: event.target.value });
  };

  addTask = () => {
    const { tasks, newTaskDescription } = this.state;
    const newTaskNumber = tasks.length + 1;
    const newTask = {
      title: `Task ${newTaskNumber}`,
      description: newTaskDescription,
      isEditing: true
    };
    this.setState({
      tasks: [...tasks, newTask],
      newTaskDescription: ''
    });
  };

  toggleEdit = (index) => {
    this.setState(state => {
      const tasks = state.tasks.map((task, i) => {
        if (i === index) {
          task.isEditing = !task.isEditing;
        }
        return task;
      });
      return { tasks };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App-content">
          <section className="task-section">
            <h2>Task List</h2>
            <div className="task-list">
              {this.state.tasks.map((task, index) => (
                <div key={index} className="task">
                  <h3>{task.title}</h3>
                  {task.isEditing ? (
                    <div>
                      <input
                        type="text"
                        value={task.description}
                        onChange={(e) => this.handleDescriptionChange(e, index)}
                        className="description-input"
                      />
                      <button onClick={() => this.toggleEdit(index)} className="save-button">Save</button>
                    </div>
                  ) : (
                    <div>
                      <p>{task.description}</p>
                      <button onClick={() => this.toggleEdit(index)} className="edit-button">Edit</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="add-task">
              <input
                type="text"
                value={this.state.newTaskDescription}
                onChange={this.handleNewTaskDescriptionChange}
                placeholder="New task description"
                className="input-field"
              />
              <button onClick={this.addTask} className="add-button">Add Task</button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
