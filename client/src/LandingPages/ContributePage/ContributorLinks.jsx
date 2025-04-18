import React, { useState } from 'react';
import { Modal, Container, Row, Col } from 'react-bootstrap';

const ContributorLinks = ({ contributors }) => {
  const [show, setShow] = useState(null);
  const handleClose = () => setShow(null);
  const handleShow = (name) => setShow(name);

  return (
    <div className="contributor-links-container">
      {contributors.map((contributor, index) => (
        <React.Fragment key={`contributor-${contributor.name}-${index}`}>
          <span className="contributor-link-wrapper">
            <a
              className="contributor-name"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleShow(contributor.name);
              }}
            >
              {contributor.name}
            </a>
          </span>
          
          {index < contributors.length - 1 && (
            <span className="contributor-separator">{" "}</span>
          )}
          
          <Modal
            show={show === contributor.name}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>{contributor.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                          target="_blank"
                        >
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
                          target="_blank"
                        >
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
                          target="_blank"
                        >
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
        </React.Fragment>
      ))}
    </div>
  );
};

export default ContributorLinks;