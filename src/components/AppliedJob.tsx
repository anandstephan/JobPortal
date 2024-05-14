import { Container, Row, Col, Card, Button } from "react-bootstrap";

import "./JobList.css"; // Import CSS file for custom styles

import { useSelector } from "react-redux";

import { usePDF } from "react-to-pdf";

const AppliedJob = () => {
  const jobs = useSelector((s) => s.global.jobList);
  console.log("JOOOOBS", jobs);

  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  return (
    <div className="job-list-container">
      <Container>
        <h1>Your Applied Jobs</h1>
        <Row className="g-4">
          {jobs
            .filter((job) => job.status === true)
            .map((job: any) => (
              <Col key={job.id} id={job.id} sm={12}>
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
      </Container>
    </div>
  );
};

export default AppliedJob;
