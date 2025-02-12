import { useState, useEffect } from 'react';
import LandingPageNav from '../components/LandingPageHeader/LandingPageNav';
import LandingPageFooter from '../components/LandingPageFooter/LandingPageFooter';
import './ContributePage.css';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as githubAPI from '../../utilities/github-api';
import contributorData from './contributordata';
import contributionData from './contributiondata';

const { contributions } = contributionData;

export default function ContributePage() {
  // State related to contribution modals
  const [show, setShow] = useState(null);
  const handleClose = () => setShow(null);
  const handleShow = (name) => setShow(name);

  // State related to pull requests table
  const [openPR, setOpenPR] = useState(null);
  const [pullRequests, setPullRequests] = useState([]);

  useEffect(() => {
    async function fetchPullRequests() {
      try {
        const data = await githubAPI.getPullRequests();
        setPullRequests(data);
      } catch (error) {
        console.error('Error fetching PRs:', error);
      }
    }
    fetchPullRequests();
  }, []);

  return (
    <>
      <div className="container">
        <LandingPageNav />
        <section className="intro">
          <h1 className="about-header">Contribute to KnowNative</h1>
          <p className="about-body">There are many ways to get involved with the KnowNative project - see how below!</p>
        </section>
        <section className="how-to-contribute">
          <h1>How to contribute</h1>
          <p className="about-body">KnowNative is a community-driven project that thrives on the ideas, inspiration, and expertise from our contributors.</p>
        </section>
        <div className="row mt-5">
            {contributions.map((contribution) => (
              <div className="col-3" key={contribution.title}>
                <div className="core-container">
                  <Button
                    variant="light"
                    onClick={() => handleShow(contribution.contributor)}
                    className="btn-outline-secondary core-contributor-card p-4">
                    <img
                      src={contribution.image}
                      alt={contribution.title}
                      width="100%"
                      height="100%"
                    />

                    <div className="contributor-name mb-3 mt-4">
                      <h4>{contribution.title}</h4>
                      <p>{contribution.contributor}</p>
                    </div>
                      <p>{contribution.caption}</p>
                  </Button>
                  <Modal
                    show={show === contribution.contributor}
                    onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                      <Modal.Title>{contribution.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="grid-example">
                      <Container>
                        <Row>
                          <Col xs={12} md={5}>
                            <img
                              src={contribution.image}
                              alt={contribution.title}
                              width="100%"
                            />  
                            {/** Find the contributor's bio and display it **/}
                            {contributorData.coreContributors.map((contributor) => {
                              if (contributor.name === contribution.contributor) {
                                return (
                                  <div key={contributor.name} className="mt-3">
                                    <p><b>Bio:</b> <span dangerouslySetInnerHTML={{ __html: contributor.bio }} /></p>
                                    {contributor.linkedin && (
                                      <p><b>LinkedIn:</b> <a href={contributor.linkedin} target="_blank" rel="noopener noreferrer">{contributor.linkedin}</a></p>
                                    )}
                                    {contributor.portfolio && (
                                      <p><b>Portfolio:</b> <a href={contributor.portfolio} target="_blank" rel="noopener noreferrer">{contributor.portfolio}</a></p>
                                    )}
                                  </div>
                                );
                              }
                              return null;
                            })}
                          </Col>
                          <Col xs={12} md={7}>
                            <div dangerouslySetInnerHTML={{ __html: contribution.description }} />
                          </Col>
                        </Row>
                      </Container>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            ))}
          </div>
        <section className="github-contributions mt-5">
          <h1>GitHub Contributions</h1>
          {pullRequests.length > 0 ? (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Contributor</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {pullRequests.map((pr) => {
                  const contributor = contributorData.coreContributors.find(c => c.github === pr.user.html_url);
                  return (
                    <>
                      <tr key={pr.id}>
                        <td>
                          <a href={pr.html_url} target="_blank" rel="noopener noreferrer">{pr.title}</a>
                        </td>
                        <td>{pr.user.login}</td>
                        <td>
                          <Button variant="info" onClick={() => setOpenPR(openPR === pr.id ? null : pr.id)}>
                            More Info
                          </Button>
                        </td>
                      </tr>
                      {openPR === pr.id && (
                      <tr>
                        <td colSpan="3">
                          <Collapse in={openPR === pr.id}>
                            <div>
                              <Container>
                                <Row>
                                  <Col xs={12} md={4}>
                                    <img src={pr.user.avatar_url} alt={pr.user.login} className="contributor-image" width="100" height="100" />
                                  </Col>
                                  <Col xs={12} md={8}>
                                    <p><b>Username:</b> {pr.user.login}</p>
                                    <p><b>GitHub Profile:</b> <a href={pr.user.html_url} target="_blank" rel="noopener noreferrer">{pr.user.html_url}</a></p>
                                    {contributor && (
                                      <>
                                        <p><b>Bio:</b> <span dangerouslySetInnerHTML={{ __html: contributor.bio }} /></p>
                                        <p><b>LinkedIn:</b> <a href={contributor.linkedin} target="_blank" rel="noopener noreferrer">{contributor.linkedin}</a></p>
                                        {contributor.portfolio && <p><b>Portfolio:</b> <a href={contributor.portfolio} target="_blank" rel="noopener noreferrer">{contributor.portfolio}</a></p>}
                                      </>
                                    )}
                                  </Col>
                                </Row>
                              </Container>
                            </div>
                          </Collapse>
                        </td>
                      </tr>
                      )}
                    </>
                  );
                })}
              </tbody>
            </Table>
          ) : (
            <p>No pull requests found.</p>
          )}
        </section>
        <LandingPageFooter />
      </div>
    </>
  );
}
