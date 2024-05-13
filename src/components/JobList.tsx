import { Container, Row, Col, Card, Button } from "react-bootstrap";
import jobs from "../data/jobData";
import "./JobList.css"; // Import CSS file for custom styles
import ApplyJobModal from "./ApplyJobModal"; // Import ApplyJobModal component
import { useState } from "react";

const JobList = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleApplyClick = (job: any) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmitForm = (formData: any) => {
    // Handle form submission here
    console.log("Form submitted with data:", formData);
    // For now, just close the modal
    setShowModal(false);
  };

  return (
    <div className="job-list-container">
      <Container>
        <h1 className="mb-4">Job List</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {jobs.map((job) => (
            <Col key={job.id}>
              <Card className="h-100 job-card">
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="company-logo-container">
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="company-logo"
                      />
                    </div>
                    <div>
                      <Card.Title className="mb-1">{job.title}</Card.Title>
                      <Card.Subtitle className="text-muted mb-2">
                        {job.company}
                      </Card.Subtitle>
                    </div>
                  </div>
                  <Card.Text className="mb-3">{job.description}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleApplyClick(job)}
                  >
                    Apply for Job
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {showModal && (
        <ApplyJobModal
          job={selectedJob}
          showModal={showModal}
          onClose={handleCloseModal}
          onSubmit={handleSubmitForm}
        />
      )}
    </div>
  );
};

export default JobList;
