import React from "react";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";
import "../App.css";

class About extends React.Component {
  state = {
    question: "",
    choice1: "",
    choice2: "",
    choice3: "",
    answer: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value }, () =>
      console.log(this.state)
    );
  };

  onSubmit = e => {
    e.preventDefault();
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
        </Form>
        <br />
        <div>
          <h4 style={style1}>Question : {this.state.question}</h4>
          <h4 style={style1}>Choice 1 :{this.state.choice1}</h4>
          <h4 style={style1}> Choice 2 :{this.state.choice2}</h4>
          <h4 style={style1}>Choice 3 :{this.state.choice3}</h4>
          <h4 style={style1}> Correct Answer :{this.state.answer}</h4>
        </div>
      </React.Fragment>
    );
  }
}
const style1 = {
  color: "white",
  fontSize: "15px",
  textInline: "block"
};
const headerStyle = {
  color: "#fff",
  textAlign: "center"
};

export default About;
