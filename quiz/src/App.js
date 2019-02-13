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
    modalOpen: false
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
        evaluate: <h4>{q.explanation}</h4>
      });
    } else {
      this.setState({
        modalOpen: true,
        evaluate: "correct"
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
                  <hr />
                  {this.state.quiz.map(q => (
                    <div key={q.id}>
                      <h3 className="text-secondary">{q.question}</h3>
                      <img src={q.image} />

                      <hr />
                      {q.choices.map(a => (
                        <label key={a} className="text-secondary">
                          <input
                            type="checkbox"
                            onClick={() => this.handleAnswer(q, a)}
                            ref="check_me"
                          />{" "}
                          {a}
                        </label>
                      ))}
                      <br />
                      <form />

                      <hr />
                    </div>
                  ))}
                  <form>
                    <button className=" btn btn-secondary btn-sm">
                      Result
                    </button>
                  </form>
                  <Modal1
                    toggleModalHandler={this.toggleModal}
                    modalOpen={this.state.modalOpen}
                    modalContent={this.state.evaluate}
                  />
                </form>
              )}
            />
            <hr />

            <Route path="/about" component={About} />
          </switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
