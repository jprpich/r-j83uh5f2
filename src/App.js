import React, { Component } from 'react';
import './App.css';

class App extends Component {
 
  constructor() {
    super();
    this.state = {
      length: 0
    }
  }

  handleChange(event){
    this.setState({
      length: event.target.value.length
    });
  }

  render() {
    return (
      <div className="container">
        <textarea onChange={this.handleChange.bind(this)} rows="3"></textarea>
        <div className="counter">{this.state.length}</div>
      </div>
    );
  }
}

export default App;
