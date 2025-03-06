import { useState } from 'react';
import contributionData from './contributiondata';
import './ContributePage.css';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';

const { enrichedContributions } = contributionData;

export default function ContributionCards() {

  // State related to contributor modals
  const [show, setShow] = useState(null);
  const handleClose = () => setShow(null);
  const handleShow = (name) => setShow(name);

  return (
    <Container className="contributions-container">
      <h2 className="section-title">Featured Contributions</h2>
      <p className="contributions-body">Contributors can have a major impact on the design and development direction of the project, and we greatly value the creative input and perspective of everyone who participates. Each of the projects featured below has helped the project move forward in some meaningful way. If you're interested in participating in or leading a new design initiative, new feature or other meaningul contribution, please get in touch!</p>
      {enrichedContributions.map((contribution) => (
        <Card key={contribution.id} className="mb-3 contribution-card">
          <Row noGutters>
            <Col md={4} className="image-container">
              <Card.Img
                variant="top"
                src={`/images/contributions/${contribution.id}.png`} // Image file should be named after contribution ID
                alt={contribution.title}
                className="contribution-image"
              />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title>{contribution.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{contribution.description}</Card.Subtitle>
                <div className="contributors">
                  {contribution.contributors.map((contributor) => (
                    <>
                    <Button
                    variant="light"
                    onClick={() => handleShow(contributor.name)}
                    className="btn-secondary core-contributor-card p-4">
                      <div>
                    <img
                      src={contributor.image}
                      alt={contributor.name}
                      className="rounded-circle core-contributor-circle me-3"
                      width="200"
                      height="200"
                    />
                    </div>
                    <div className="">
                      <h4 className="contributor-name">{contributor.name}</h4>
                      <p className="contributor-role">{contributor.role}</p>
                    </div>
                  </Button>
                  <Modal
                    show={show === contributor.name}
                    onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                      <Modal.Title>{contributor.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="grid-example">
                      <Container>
                        <Row>
                          <Col xs={12} md={5}>
                            <img
                              src={contributor.image}
                              alt={contributor.name}
                              width="100%"
                              className="contributor-image mb-3"
                            />
                            <p>
                              <b>{contributor.role}</b>
                            </p>
                            <div className="contributor-links">
                              {contributor.linkedin && (
                                <a
                                  rel="noopener noreferrer"
                                  href={contributor.linkedin}
                                  target="_blank">
                                  <img
                                    src="/images/linkedin-icon.png"
                                    width="32"
                                    height="32"
                                    alt="LinkedIn"
                                  />
                                </a>
                              )}
                              {contributor.github && (
                                <a
                                  rel="noopener noreferrer"
                                  href={contributor.github}
                                  target="_blank">
                                  <img
                                    src="/images/github-icon.png"
                                    width="32"
                                    height="32"
                                    alt="Github"
                                  />
                                </a>
                              )}
                              {contributor.portfolio && (
                                <a
                                  rel="noopener noreferrer"
                                  href={contributor.portfolio}
                                  target="_blank">
                                  <img
                                    src="/images/portfolio-icon.png"
                                    width="32"
                                    height="32"
                                    alt="WWW Icon"
                                  />
                                </a>
                              )}
                            </div>
                          </Col>
                          <Col xs={12} md={7}>
                            <div dangerouslySetInnerHTML={{ __html: contributor.bio }} />
                          </Col>
                        </Row>
                      </Container>
                    </Modal.Body>
                  </Modal>
                  </>
                  ))}
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </Container>
  );
}
