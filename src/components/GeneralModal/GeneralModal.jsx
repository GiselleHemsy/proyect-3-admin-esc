import React, { cloneElement, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const GeneralModal = ({buttonText, modalTitle, modalBody, variant, selected=true}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <>
      <Button disabled={!!!selected} className="mx-1" variant={variant} onClick={handleShow}>
        {buttonText}
      </Button>

      <Modal show={show} 
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        {/* Para pasar props del modal al formulario uso clonar elemento */}
        <Modal.Body>{cloneElement(modalBody, {handleClose:handleClose})}</Modal.Body>
      </Modal>
    </>
  );
}

export default GeneralModal;