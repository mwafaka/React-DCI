import React, { Component } from "react";
export class Finder extends Component {
  state = {
    value: ""
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addUser(this.state.value);
    this.setState({ name: "" });
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
          <input
            type="text"
            name="title"
            style={{ flex: "10", padding: "5px" }}
            placeholder="Add to do ..."
            value={this.state.value}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="submit"
            className="btn"
            style={{ flex: 1 }}
          />
        </form>
      </div>
    );
  }
}

export default Finder;
