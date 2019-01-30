import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export class Header extends Component {
  style = {
    backgroundColor: "grey",
    color: "#ffffff",
    margin: "auto",
    fontSize: "50px",
    fontFamily: "Arial, Helvetica, sans-serif",
    height: "100px",
    padding: "20px 0 0 "
  };

  render() {
    return (
      <div>
        <header style={headerStyle}>
          <h1>Quiz</h1>
          <Link style={headerStyle} to="/">
            Home
          </Link>{" "}
          |{" "}
          <Link to="/about" style={headerStyle}>
            Create Quiz
          </Link>
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
