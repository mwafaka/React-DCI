import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    Number: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    output: []
  };
  ///remove function
  remove = e => {
    this.setState({
      output: this.state.output.concat(e),

      Number: this.state.Number.filter(a => a !== e)
    });
  };
  ///restore function
  restore = e => {
    this.setState({
      Number: this.state.Number.concat(e),
      output: this.state.output.filter(b => b !== e)
    });
  };
  render() {
    var style = {
      fontSize: "20px",
      backgroundColor: "grey",
      margin: "12px",
      borderRadius: "50%",
      padding: "15px"
    };
    let arr = this.state.Number.map(x => (
      <span onClick={() => this.remove(x)} style={style} key={x}>
        {x}
      </span>
    ));
    let arr2 = this.state.output.map(b => (
      <span onClick={() => this.restore(b)} style={style} key={b}>
        {b}
      </span>
    ));
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>welcome to React</p>
          </header>
        </div>
        <div>{arr}</div>
        <br />
        <div>{arr2}</div>
      </React.Fragment>
    );
  }
}

export default App;
