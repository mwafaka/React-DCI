import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class Header extends Component {
  // style = {
  //   backgroundColor: "grey",
  //   color: "#ffffff",
  //   margin: "auto",
  //   fontSize: "50px",
  //   fontFamily: "Arial, Helvetica, sans-serif",
  //   height: "100px",
  //   padding: "20px 0 0 "
  // };

  render() {
    return (
      <div>
        <header style={headerStyle}>
          <h1>Quiz</h1>

          <header style={headerStyle}>
            <Link style={headerStyle} to="/">
              Home
            </Link>{" "}
            |{" "}
            <Link style={headerStyle} to="/about">
              Add Que
            </Link>
          </header>
        </header>
      </div>
    );
  }
}
const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

export default Header;
