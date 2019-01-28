import React, { Component } from "react";
import "./App.css";

// class App extends Component {
//   state = {
//     first: "Hello There",
//     second: "How are you",
//     counter: 0,
//     weekDays: [
//       "Monday",
//       "Tuesday",
//       "wednesday",
//       "Thursday",
//       "Friday",
//       "saturday",
//       "Sunday"
//     ]
//   };
//   cssClass = () => {
//     return { color: "red", fontSize: "4em" };
//   };

//   //    me =()=> {
//   //   {this.state.weekDays.map(x => (
//   //     <li>{x}</li>
//   //   ))
//   // }

//   counterUp = x => {
//     this.setState({ counter: this.state.counter + x });
//   };

//   render() {
//     const arr = this.state.weekDays.map(x => <li key={x}>{x}</li>);
//     var style = {
//       color: "blue",
//       fontSize: 200
//     };
//     return (
//       <div>
//         <h1 style={this.cssClass()}>{this.state.first}</h1>
//         <h3>{this.state.second}</h3>
//         <ul>{arr}</ul>
//         <button
//           onClick={() => {
//             this.counterUp(1);
//           }}
//         >
//           +1
//         </button>
//         <button
//           onClick={() => {
//             this.counterUp(5);
//           }}
//         >
//           +5
//         </button>
//         <p style={style}>{this.state.counter}</p>
//       </div>
//     );
//   }
// }

const Result = props => {
  return (
    <div>
      <h2> Comming from Functional Component</h2>
      <h2> {props.message}</h2>
    </div>
  );
};

class Result2 extends Component {
  state = {
    myMessage: "Comming from Class Component"
  };

  changeMessage = () => {
    let newMessage =
      this.state.myMessage === "Comming from Class Component"
        ? "I got it"
        : "Comming from Class Component";
    this.setState({ myMessage: newMessage });

    this.props.handleMessage();
  };

  render() {
    return (
      <div>
        <h2>{this.state.myMessage}</h2>
        <h2> {this.props.message}</h2>
        <button
          onClick={() => {
            this.changeMessage();
          }}
        >
          Change state message
        </button>
      </div>
    );
  }
}

class App extends Component {
  state = {
    message: "hello there",
    weekDays: [
      "Monday",
      "Tuesday",
      "wednesday",
      "Thursday",
      "Friday",
      "saturday",
      "Sunday"
    ]
  };
  restore = () => {
    // let you = this.state.weekDays.splice(1, 0, "Thursday", "Tuesday");
    this.setState({
      weekDays: [
        "Monday",
        "Tuesday",
        "wednesday",
        "Thursday",
        "Friday",
        "saturday",
        "Sunday"
      ]
    });
  };
  update = () => {
    let me = this.state.weekDays.filter(a => a[0] !== "T");
    this.setState({ weekDays: me });
    console.log(me);
  };

  updateMessage = () => {
    let newMessage =
      this.state.message === "hello there" ? "Good Morning" : "hello there";
    this.setState({ message: newMessage });
  };

  render() {
    const arr = this.state.weekDays.map(x => <li key={x}>{x}</li>);
    return (
      <div className="App">
        <Result message={this.state.message} />
        <Result2
          message={this.state.message}
          age={10}
          handleMessage={this.updateMessage}
        />
        <button onClick={this.update}>Delete</button>
        <button onClick={this.restore}>Restore</button>
        <ul>{arr}</ul>
      </div>
    );
  }
}
export default App;
