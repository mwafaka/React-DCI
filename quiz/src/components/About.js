import React from "react";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";

class About extends React.Component {
  state = {};
  render() {
    return (
      <Form className="styling">
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
              type="text"
              // name="email"
              // id="exampleEmail"
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
              type="text"
              // name="email"
              // id="exampleEmail"
              placeholder="Add your Questions"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="text-secondary">
            Choice 2
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              // name="email"
              // id="exampleEmail"
              placeholder="Add your Questions"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="text-secondary">
            Choice 3
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              // name="email"
              // id="exampleEmail"
              placeholder="Add your Questions"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="text-secondary">
            Correct Answer
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              // name="email"
              // id="exampleEmail"
              placeholder="Add your Questions"
            />
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

const headerStyle = {
  background: "grey",
  color: "#fff",
  textAlign: "center"
};
export default About;
