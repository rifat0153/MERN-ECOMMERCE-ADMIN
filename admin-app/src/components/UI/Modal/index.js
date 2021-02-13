import { Modal } from 'react-bootstrap';
import React from 'react'
import { Button } from 'react-bootstrap';

/**
* @author
* @function 
**/

const NewModal = (props) => {
  return(
    <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
   )

 }

export default NewModal;