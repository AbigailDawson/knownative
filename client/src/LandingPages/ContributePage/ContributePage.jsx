import { useState } from 'react';
import LandingPageNav from '../components/LandingPageHeader/LandingPageNav';
import LandingPageFooter from '../components/LandingPageFooter/LandingPageFooter';
import './ContributePage.scss';
import contributorData from './contributordata';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
const { coreContributors, pastCoreContributors } = contributorData;

export default function ContributePage() {
  const [show, setShow] = useState(null); // Change initial state to null

  const handleClose = () => setShow(null); // Set show to null on close
  const handleShow = (name) => setShow(name); // Set show to the contributor's name so that only that contributor's modal opens

  return (
    <>
      <div className="container">
        <LandingPageNav />
        <section className="contribute-page__intro-section">
          <div>
            <h1 className="contribute-page__header">Contribute to KnowNative</h1>
            <p className="contribute-page__body">
              There are many ways to get involved with the KnowNative project - see how below!
            </p>
          </div>
        </section>
        <section className="how-to-contribute__section">
          <div className="how-to-contribute__grid">
            <div className="how-to-contribute__grid--left">
              <h1 className='how-to-contribute__title'>How to contribute</h1>
              <p className="about-body">
                KnowNative is a community-driven project that thrives on the ideas, inspiration and
                expertise from our contributors. We&apos;re eager to collaborate with community
                members skilled in software development, UX/UI design, graphic art and illustration,
                branding, copywriting and content creation. If you have an interest in linguistics
                or language study, we invite you to join us in shaping KnowNative&apos;s
                development!
              </p>
            </div>
            <div className="how-to-contribute-right">
              <ul className='how-to-contribute__list'>
                <li className='how-to-contribute__list-item'>
                  <span className="how-to-contribute__list-item--header">Contribute to the open source project</span>
                  Software developers are welcome to contribute code to the project! Any kind of
                  contribution is meaningful, whether it&apos;s a few lines of CSS to improve some
                  styling or an entirely new feature. To contribute to the open source project,
                  follow the instructions on{' '}
                  <a
                    href="https://github.com/AbigailDawson/knownative"
                    target="_blank"
                    rel="noreferrer">
                    GitHub
                  </a>{' '}
                  to run KnowNative locally, create your own branch and submit a pull request!
                </li>
                <li className='how-to-contribute__list-item'>
                  <span className="li-header">Become a Core Contributor</span>
                  Core Contributors are involved in the long-term creative vision for the KnowNative
                  project. We work together as a team to plan and implement new features and improve
                  the app experience for our users. Core Contributors commit to participating in
                  regular team meetings and contribute to the project on a regular consistent basis.
                  If you&apos;re interested in becoming a Core Contributor, please reach out to
                  Abigail on{' '}
                  <a
                    href="https://www.linkedin.com/in/abigaildawsondev/"
                    target="_blank"
                    rel="noreferrer">
                    LinkedIn
                  </a>
                  .
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="core-contributors mt-5">
          <h1>Core Contributors</h1>
          <p className="about-body">
            Click on any of the cards below to learn more about the team!
          </p>
          <div className="row mt-5">
            {coreContributors.map((contributor) => (
              <div className="col-3" key={contributor.name}>
                <div className="core-container">
                  <Button
                    variant="light"
                    onClick={() => handleShow(contributor.name)}
                    className="btn-outline-secondary core-contributors__card p-4">
                    <img
                      src={contributor.image}
                      alt={contributor.name}
                      className="rounded-circle"
                      width="200"
                      height="200"
                    />
                    <div className="core-contributors__name mb-3 mt-4">
                      <h4>{contributor.name}</h4>
                      <p>{contributor.role}</p>
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
                              className="core-contributors__image mb-3"
                            />
                            <p>
                              <b>{contributor.role}</b>
                            </p>
                            <div className="core-contributors__links">
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
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="core-contributors mt-5">
          <h1>Past Core Contributors</h1>
          <p className="about-body">
            We appreciate everyone who has been a member of our team in the past for their important
            contributions to the project!
          </p>
          <div className="row mt-5">
            {pastCoreContributors.map((contributor) => (
              <div key={contributor.name}>
                <ul>
                  <li className="core-contributors__past">
                    <strong>{contributor.name}</strong> - {contributor.role}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </section>
        <LandingPageFooter />
      </div>
    </>
  );
}
