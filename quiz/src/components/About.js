import React from "react";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";
import "../App.css";

class About extends React.Component {
  state = {
    question: "",
    choice1: "",
    choice2: "",
    choice3: "",
    answer: "",
    questions: []
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () =>
      console.log(this.state)
    );
  };

  onSubmit = e => {
    e.preventDefault();
    // if (this.state.question === "") {
    //   return;
    // }
    const {
      question,
      choice1,
      choice2,
      choice3,
      answer,
      questions
    } = this.state;

    let newQuestion = {
      question,
      choice1,
      choice2,
      choice3,
      answer
    };

    this.setState({
      questions: [...questions, newQuestion],
      question: "",
      choice1: "",
      choice2: "",
      choice3: "",
      answer: ""
    });
    e.target.reset();
  };
  deleteItem = (e, indexToRemove) => {
    const questions = this.state.questions.filter(
      (ele, index) => index !== indexToRemove
    );
    this.setState({ questions });
  };
  render() {
    return (
      <React.Fragment>
        <div className="col-10">
          <Form onSubmit={this.onSubmit} className="styling">
            <header style={headerStyle}>
              <header style={headerStyle} />
            </header>
            <FormGroup row>
              <Label sm={2} className="text-secondary">
                Question
              </Label>
              <Col sm={10}>
                <Input
                  onChange={this.onChange}
                  type="text"
                  name="question"
                  // value={this.state.name}
                  placeholder="Add your Questions"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2} className="text-secondary">
                Choice 1
              </Label>
              <Col sm={10}>
                <Input
                  onChange={this.onChange}
                  type="text"
                  name="choice1"
                  // id="exampleEmail"
                  placeholder="Add Choice"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2} className="text-secondary">
                Choice 2
              </Label>
              <Col sm={10}>
                <Input
                  onChange={this.onChange}
                  type="text"
                  name="choice2"
                  // id="exampleEmail"
                  placeholder="Add Choice"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2} className="text-secondary">
                Choice 3
              </Label>
              <Col sm={10}>
                <Input
                  onChange={this.onChange}
                  type="text"
                  name="choice3"
                  // id="exampleEmail"
                  placeholder="Add Choice"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2} className="text-secondary">
                Correct Answer
              </Label>
              <Col sm={10}>
                <Input
                  onChange={this.onChange}
                  type="text"
                  name="answer"
                  // id="exampleEmail"
                  placeholder="Add Answer"
                />
              </Col>
            </FormGroup>

            <button className="btn btn-secondary">Submit</button>
          </Form>
          <br />
        </div>
        {this.state.questions &&
          this.state.questions.map((q, index) => {
            return (
              <div className="card text-center col-9">
                <div className="card-header card-info">New Question</div>
                <div className="card-body">
                  <h3>question:{q.question}</h3>
                  <p className="card-text">choice1:{q.choice1}</p>
                  <p className="card-text"> choice2:{q.choice2}</p>
                  <p className="card-text">choice3:{q.choice3}</p>
                  <h5 className="card-text">answer:{q.answer}</h5>

                  <button
                    className=" btn btn-secondary text-white  btn-sm  "
                    onClick={e => this.deleteItem(e, index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
      </React.Fragment>
    );
  }
}

const headerStyle = {
  color: "#fff",
  textAlign: "center"
};

export default About;
