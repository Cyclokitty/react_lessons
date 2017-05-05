import React, { Component } from 'react';
import Button from './Button';
import Result from './Result';
import './App.css';

class App extends Component {
  state = {
    counter: 0
  };

  incrementCounter = (incrementValue) => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + incrementValue
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React Button Clicker</h1>
        <Button incrementValue={1} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={5} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={10} onClickFunction={this.incrementCounter}/>
        <Button incrementValue={100} onClickFunction={this.incrementCounter}/>
        <Result counter={this.state.counter}/>
      </div>
    );
  }
}

export default App;
