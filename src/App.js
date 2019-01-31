import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { getData } from "./components/quiz";
import Header from "./components/Header";
import Modal1 from "./components/Modal1";
import About from "./components/About";

class App extends Component {
  state = {
    quiz: getData(),
    evaluate: "",
    userAnswers: [],
    id: [],
    modalOpen: false,
    truth1: "???"
  };
  ///check the Answer.......
  handleAnswer = (q, e) => {
    console.log(q.id);
    this.setState({
      userAnswers: e.concat({ id: q.id })
    });

    if (q.correct !== e) {
      this.setState({
        modalOpen: true,
        evaluate: <h4>{q.explanation}</h4>,
        truth1: "False"
      });
    } else {
      this.setState({
        modalOpen: true,
        evaluate: "correct",
        truth1: "True"
      });
    }
  };
  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };
  getColor1 = () => {
    return this.props.modalContent === "correct"
      ? "badge badge-pill bg-primary"
      : "badge badge-pill bg-danger";
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <switch>
            <Route
              exact
              path="/"
              render={props => (
                <form>
                  <span className="badge badge-pill bg-danger">
                    {this.state.truth1}
                  </span>
                  <hr />
                  {this.state.quiz.map(q => (
                    <div key={q.id}>
                      <h1 className="text-info primary">{q.question}</h1>
                      <img src={q.image} />

                      <hr />
                      {q.choices.map(a => (
                        <label key={a} className="text-success">
                          <input
                            type="checkbox"
                            onClick={() => this.handleAnswer(q, a)}
                            ref="check_me"
                          />{" "}
                          {a}
                        </label>
                      ))}
                      <br />
                      <form>
                        <button
                          className="btn-danger btn-sm"
                          reset={() => this.reset(q)}
                        >
                          Reset
                        </button>
                      </form>

                      <hr />
                    </div>
                  ))}
                  <form>
                    <button className="btn-primary btn-sm">Result</button>
                  </form>
                  <Modal1
                    toggleModalHandler={this.toggleModal}
                    modalOpen={this.state.modalOpen}
                    modalContent={this.state.evaluate}
                  />
                </form>
              )}
            />
            <Route path="/about" component={About} />
          </switch>
        </div>
      </BrowserRouter>
    );
  }
}
const style3 = {
  fontSize: "25px",
  borderColor: "black",
  borderWidth: "1"
};

export default App;
