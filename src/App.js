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
      this.setState({ modalOpen: true, evaluate: "correct" });
    }
  };
  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <form onSubmit={this.o}>
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
                <hr />
              </div>
            ))}
          </form>
          <Modal1
            toggleModalHandler={this.toggleModal}
            modalOpen={this.state.modalOpen}
            modalContent={this.state.evaluate}
          />

          <switch>
            <Route exact path="/" />

            <Route path="/about" component={About} />
          </switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
