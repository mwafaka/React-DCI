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
    if ((this.state.question = "")) {
      return;
    }
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

  render() {
    return (
      <React.Fragment>
        <Form onSubmit={this.onSubmit} className="styling">
          <header style={headerStyle}>
            <h1>Add your Questions</h1>

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

          <button>Submit</button>
        </Form>
        <br />

        {this.state.questions &&
          this.state.questions.map(q => {
            return (
              <div className="container">
                <ol className="text-white">
                  <li>question:{q.question}</li>
                  <li>choice1:{q.choice1}</li>
                  <li>choice2:{q.choice2}</li>
                  <li>choice3:{q.choice3}</li>
                  <li>answer:{q.answer}</li>
                </ol>
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
