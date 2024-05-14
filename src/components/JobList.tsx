import { Container, Row, Col, Card, Button } from "react-bootstrap";

import "./JobList.css"; // Import CSS file for custom styles
import ApplyJobModal from "./ApplyJobModal"; // Import ApplyJobModal component
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Job } from "../Redux/interface";
import { applyingJob } from "../Redux/features/GlobalSlice";
import { usePDF } from "react-to-pdf";

const JobList = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const jobs = useSelector((s) => s.global.jobList);
  const dispatch = useDispatch();

  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const handleApplyClick = (job: Job) => {
    console.log("hi", job.id);

    setSelectedJob(job);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmitForm = (formData: any) => {
    // Handle form submission here
    console.log("Form submitted with data:", formData, selectedJob);
    // dispatch(applyingJob(selectedJob));
    // For now, just close the modal
    setShowModal(false);
  };

  return (
    <div className="job-list-container">
      <Container>
        <h1 className="mb-4">Job List</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {jobs.map((job: any) => (
            <Col key={job.id} id={job.id}>
              <Card className="h-100 job-card" ref={targetRef}>
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
                  <Row>
                    <Col sm={7}>
                      {job.status ? (
                        <Button variant="secondary">Applied</Button>
                      ) : (
                        <Button
                          variant="primary"
                          onClick={() => handleApplyClick(job)}
                        >
                          Apply for Job
                        </Button>
                      )}
                    </Col>
                    <Col sm={5}>
                      <Button
                        variant="primary ml-3"
                        onClick={() => {
                          console.log("---", document.getElementById(job.id));
                          toPDF();
                        }}
                      >
                        Download
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <h1>Applied Job</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
          {jobs
            .filter((job) => job.status)
            .map((job) => (
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
                    {job.status ? (
                      <Button variant="secondary">Applied</Button>
                    ) : (
                      <Button
                        variant="primary"
                        onClick={() => handleApplyClick(job)}
                      >
                        Apply for Job
                      </Button>
                    )}
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
