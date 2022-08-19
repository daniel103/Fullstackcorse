import React, { Component } from "react";
import Count from "./Count";

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isShown: false,
    };

    this.handleShowCount = this.handleShowCount.bind(this);
    this.updatingCount = this.updatingCount.bind(this);
  }

  handleShowCount() {
    this.setState({
      ...this.state,
      isShown: !this.state.isShown,
    });
  }

  updatingCount(value) {
    this.setState({
      ...this.state,
      count: this.state.count + value,
    });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <button onClick={this.handleShowCount}>
          {this.state.isShown ? "Hide count" : "Show count"}
        </button>
        {this.state.isShown && (
          <Count updatingCount={this.updatingCount} count={this.state.count} />
        )}
      </div>
    );
  }
}
