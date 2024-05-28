import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['Item 1', 'Item 2', 'Item 3'],
      newItem: '',
      tasks: [
        { title: 'Task 1', description: 'Description for task 1', isEditing: false },
        { title: 'Task 2', description: 'Description for task 2', isEditing: false },
        { title: 'Task 3', description: 'Description for task 3', isEditing: false }
      ]
    };
  }

  handleChange = (event) => {
    this.setState({ newItem: event.target.value });
  };

  addItem = () => {
    this.setState(state => ({
      items: [...state.items, state.newItem],
      newItem: ''
    }));
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
          <section className="item-section">
            <h2>Item List</h2>
            <ul className="item-list">
              {this.state.items.map((item, index) => (
                <li key={index} className="item">{item}</li>
              ))}
            </ul>
            <input
              type="text"
              value={this.state.newItem}
              onChange={this.handleChange}
              placeholder="Add a new item"
              className="input-field"
            />
            <button onClick={this.addItem} className="add-button">Add Item</button>
          </section>
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
          </section>
        </div>
      </div>
    );
  }
}

export default App;
