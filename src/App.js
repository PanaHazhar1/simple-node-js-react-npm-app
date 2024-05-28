import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['Item 1', 'Item 2', 'Item 3'],
      newItem: ''
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
          <ul>
            {this.state.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <input
            type="text"
            value={this.state.newItem}
            onChange={this.handleChange}
            placeholder="Add a new item"
          />
          <button onClick={this.addItem}>Add Item</button>
        </div>
      </div>
    );
  }
}

export default App;
