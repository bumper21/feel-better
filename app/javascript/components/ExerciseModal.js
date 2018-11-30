import React from 'react'
import { Component } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Exercise } from '../packs/requests';

class ExerciseModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      exercise: []
    };

  }

  componentDidMount() {
    Exercise.random().then(exercise => {
      this.setState({
        exercise: {...exercise}
      })
    });
  }

  handleClose() {
    this.setState({ show: false });
    
  }

  handleShow() {
    this.setState({ show: true });
    Exercise.random().then(exercise => {
      this.setState({
        exercise: {...exercise}
      })
    })
  }

  render() {
    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Feel Better
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.exercise.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p> {this.state.exercise.body} </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ExerciseModal;