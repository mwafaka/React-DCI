import React from "react";
import "../App.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Modal1 extends React.Component {
  getColor = () => {
    return this.props.modalContent === "correct"
      ? "bg-info primary"
      : " body-danger";
  };
  render() {
    return (
      <div>
        <Modal
          centered
          isOpen={this.props.modalOpen}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Your Answer is
            {this.props.modalContent === "correct" ? " Correct" : " Wrong"}{" "}
          </ModalHeader>
          <ModalBody className={this.getColor()}>
            {this.props.modalContent}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.toggleModalHandler}>
              Ok
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Modal1;
