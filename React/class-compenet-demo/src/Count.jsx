import React, { Component } from "react";

export default class Count extends Component {


  componentDidMount() {
    console.log("I got Mounted");
  }

  componentDidUpdate() {
    console.log("I got update");
  }

  componentWillUnmount() {
    console.log("I got Unmounted");
  }

  render() {
    const { count, updatingCount } = this.props;

    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => updatingCount(1)}>+</button>
        <button onClick={() => updatingCount(-1)}>-</button>
      </div>
    );
  }
}
