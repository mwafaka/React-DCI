import React, { Component } from "react";
import Header from "./components/Header";
import Finder from "./components/Finder";
import "./App.css";
import axios from "axios";
class App extends Component {
  state = {
    name: [],
    input: ""
  };

  addUser = username => {
    axios
      .get(
        `http://api.github.com/users/${username}?client_id=7716153ddf73a09ea237&client_secret=dcb398cb1f6af9c5d489dd345ca6d70db2d0ad86`
      )

      .then(res => {
        let userExist = false;
        if (this.state.name.length == 0) {
          this.setState({ name: [...this.state.name, res.data] });
        } else {
          for (let user of this.state.name) {
            if (user.id == res.data.id) {
              userExist = true;
            }
          }
          if (!userExist) {
            this.setState({ name: [...this.state.name, res.data] });
          } else {
            alert("this Name is token ");
          }
        }

        //if(this.state.name==res.data)

        // console.log(this.state.name);
        // console.log(res.data.id);
      });
  };

  deleteDiv = e => {
    this.setState({
      name: this.state.name.filter(a => a !== e)
    });
  };

  render() {
    return (
      <div>
        <Header />
        <Finder addUser={this.addUser} />
        <div>
          <div style={{ display: "flex" }}>
            {this.state.name.map(user => (
              <div className="card m-2" key={user.id}>
                <img
                  style={this.style}
                  className="card-img-top"
                  src={user.avatar_url}
                  alt="Card  cap"
                />
                <div className="card-body">
                  <h5 className="card-title"> Name : {user.login}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Followers : {user.followers}
                  </li>
                  <li className="list-group-item">
                    Following : {user.following}
                  </li>
                </ul>
                <button
                  onClick={() => this.deleteDiv(user)}
                  className="btn btn-primary m-2"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
