import { Modal, Button } from "react-bootstrap";
import ApplyJobForm from "./ApplyJobForm";
import { useState } from "react";

const ApplyJobModal = ({ job, showModal, onClose, onSubmit }) => {
  const [show, setShow] = useState(showModal);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  const handleSubmit = (formData) => {
    onSubmit(formData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Apply for {job.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ApplyJobForm job={job} onSubmit={handleSubmit} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ApplyJobModal;
