import React, { Component } from 'react';
import './Button.css';

class Button extends React.Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Go!</button>
        <h3>The count is now: {this.state.counter}</h3>
      </div>

    );
  }
};

export default Button;
