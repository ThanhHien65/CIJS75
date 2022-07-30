import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import {Button,Modal} from 'react-bootstrap';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
const TvShow = () => {
  const [isOpen, setOpen] = useState(false);
  const [centredModal, setCentredModal] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const toggleShow = () => setCentredModal(!centredModal);
  const showw = () =>{
    return(
      <h1 onClick={toggleShow} style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // width: '80%',
      }}>test</h1>
    )
  }
  
  return (
    <div>
      {/* <React.Fragment>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="3Zibb6lVCRw"
          onClose={() => setOpen(false)}
        />
        </React.Fragment> */}
        {/* <button className="btn-primary" onClick={toggleShow}>
          VIEW DEMO
        </button> */}
        <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
      
    </div>
  );
};

export default TvShow;
