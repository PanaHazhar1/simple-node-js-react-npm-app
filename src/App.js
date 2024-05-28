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
        { title: 'Task 1', description: 'Description for task 1' },
        { title: 'Task 2', description: 'Description for task 2' },
        { title: 'Task 3', description: 'Description for task 3' }
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
          <h2>Task List</h2>
          <div className="task-list">
            {this.state.tasks.map((task, index) => (
              <div key={index} className="task">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
