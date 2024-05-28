import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskDescription: '',
      newTaskLink: '',
      newTaskDate: '',
      tasks: []
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

  handleLinkChange = (event, index) => {
    const newLink = event.target.value;
    this.setState(state => {
      const tasks = state.tasks.map((task, i) => {
        if (i === index) {
          task.link = newLink;
        }
        return task;
      });
      return { tasks };
    });
  };

  handleDateChange = (event, index) => {
    const newDate = event.target.value;
    this.setState(state => {
      const tasks = state.tasks.map((task, i) => {
        if (i === index) {
          task.date = newDate;
        }
        return task;
      });
      return { tasks };
    });
  };

  handleNewTaskDescriptionChange = (event) => {
    this.setState({ newTaskDescription: event.target.value });
  };

  handleNewTaskLinkChange = (event) => {
    this.setState({ newTaskLink: event.target.value });
  };

  handleNewTaskDateChange = (event) => {
    this.setState({ newTaskDate: event.target.value });
  };

  addTask = () => {
    const { tasks, newTaskDescription, newTaskLink, newTaskDate } = this.state;
    const newTaskNumber = tasks.length + 1;
    const newTask = {
      title: `Task ${newTaskNumber}`,
      description: newTaskDescription,
      link: newTaskLink,
      date: newTaskDate,
      time: new Date().toLocaleString(),
      isEditing: true
    };
    this.setState({
      tasks: [...tasks, newTask],
      newTaskDescription: '',
      newTaskLink: '',
      newTaskDate: ''
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

  deleteTask = (index) => {
    this.setState(state => {
      const tasks = state.tasks.filter((task, i) => i !== index);
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
                  <p><strong>Added at:</strong> {task.time}</p>
                  {task.date && <p><strong>Due date:</strong> {task.date}</p>}
                  {task.isEditing ? (
                    <div>
                      <input
                        type="text"
                        value={task.description}
                        onChange={(e) => this.handleDescriptionChange(e, index)}
                        className="description-input"
                      />
                      <input
                        type="text"
                        value={task.link}
                        onChange={(e) => this.handleLinkChange(e, index)}
                        placeholder="Add a link"
                        className="link-input"
                      />
                      <input
                        type="date"
                        value={task.date}
                        onChange={(e) => this.handleDateChange(e, index)}
                        className="date-input"
                      />
                      <button onClick={() => this.toggleEdit(index)} className="update-button">Update</button>
                    </div>
                  ) : (
                    <div>
                      <p>{task.description}</p>
                      {task.link && <p><a href={task.link} target="_blank" rel="noopener noreferrer">{task.link}</a></p>}
                      <button onClick={() => this.toggleEdit(index)} className="edit-button">Edit</button>
                    </div>
                  )}
                  <button onClick={() => this.deleteTask(index)} className="delete-button">Delete</button>
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
              <input
                type="text"
                value={this.state.newTaskLink}
                onChange={this.handleNewTaskLinkChange}
                placeholder="Add a link"
                className="input-field"
              />
              <input
                type="date"
                value={this.state.newTaskDate}
                onChange={this.handleNewTaskDateChange}
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
