import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div>
        <header style={headerStyle}>
          <h1>Github_finder</h1>
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
