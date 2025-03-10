import React, { useState } from 'react';
import contributionData from './contributiondata';
import './ContributePage.scss';
import { Card, Container, Row, Col, Modal } from 'react-bootstrap';
import PaginationComponent from './PaginationComponent';

const { enrichedContributions } = contributionData;
const ITEMS_PER_PAGE = 5;

/**
 * ContributionCards Component
 * 
 * Displays featured project contributions with pagination,
 * mini contributor cards, and expandable images.
 * 
 * @returns {React.Component} The rendered component
 */
export default function ContributionCards() {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(enrichedContributions.length / ITEMS_PER_PAGE);

  // State for expanded project image
  const [expandedImage, setExpandedImage] = useState(null);
  
  // State for expanded contributor modal
  const [selectedContributor, setSelectedContributor] = useState(null);
  
  // Calculate the current items to display
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentContributions = enrichedContributions.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of contributions section
    const container = document.querySelector('.contributions-container');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle expanding an image
  const handleExpandImage = (imageSrc, title) => {
    setExpandedImage({ src: imageSrc, title });
  };

  // Handle closing the expanded image modal
  const handleCloseExpandedImage = () => {
    setExpandedImage(null);
  };

  // Handle showing contributor details
  const handleShowContributor = (contributor) => {
    setSelectedContributor(contributor);
  };

  // Handle closing contributor modal
  const handleCloseContributor = () => {
    setSelectedContributor(null);
  };

  // Handle image loading errors - fallback to placeholder
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevent infinite error loop
    e.target.src = "/images/contributions/imageComingSoon.png";
    
    // If the placeholder also fails, use an external placeholder
    e.target.onerror = () => {
      e.target.src = "https://via.placeholder.com/600x400/e0e0e0/333333?text=Image+Coming+Soon";
      e.target.onerror = null; // Prevent any further error handling
    };
  };

  // Handle contributor image errors
  const handleContributorImageError = (e) => {
    e.target.onerror = null; // Prevent infinite error loop
    e.target.src = "https://via.placeholder.com/50x50/e0e0e0/333333?text=Profile";
  };

  return (
    <Container className="contributions-container">
      <h2 className="section-title">Featured Contributions</h2>
      <p className="contributions-body">
        Contributors can have a major impact on the design and development direction of the project, and we greatly value the creative input and perspective of everyone who participates. Each of the projects featured below has helped the project move forward in some meaningful way. If you're interested in participating in or leading a new design initiative, new feature or other meaningful contribution, please get in touch!
      </p>
      
      {currentContributions.map((contribution) => (
        <Card key={contribution.id} className="mb-4 contribution-card">
          <Row>
            <Col md={4} className="image-container">
              <div 
                className="clickable-image-container"
                onClick={() => handleExpandImage(
                  `/images/contributions/${contribution.id}.jpg`, 
                  contribution.title
                )}
              >
                <Card.Img
                  variant="top"
                  src={`/images/contributions/${contribution.id}.jpg`}
                  alt={contribution.title}
                  className="contribution-image"
                  onError={handleImageError}
                />
              </div>
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title>{contribution.title}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">{contribution.description}</Card.Subtitle>
                
                {/* Contributors mini cards wrapper */}
                <div className="contributors-wrapper">
                  {contribution.contributors && contribution.contributors.map((contributor, index) => (
                    <div 
                      key={`${contribution.id}-${contributor.name}-${index}`} 
                      className="contributor-mini-card"
                      onClick={() => handleShowContributor(contributor)}
                    >
                      <div className="contributor-mini-image">
                        <img 
                          src={contributor.image} 
                          alt={contributor.name}
                          onError={handleContributorImageError}
                        />
                      </div>
                      <div className="contributor-mini-info">
                        <div className="contributor-mini-name">{contributor.name}</div>
                        <div className="contributor-mini-role">{contributor.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
      
      {/* Pagination */}
      {totalPages > 1 && (
        <PaginationComponent 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
      
      {/* Modal for expanded images */}
      <Modal
        show={expandedImage !== null}
        onHide={handleCloseExpandedImage}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{expandedImage?.title || ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {expandedImage && (
            <img 
              src={expandedImage.src} 
              alt={expandedImage.title || 'Project image'} 
              style={{ width: '100%', height: 'auto' }}
              onError={handleImageError}
            />
          )}
        </Modal.Body>
      </Modal>
      
      {/* Modal for contributor details */}
      <Modal
        show={selectedContributor !== null}
        onHide={handleCloseContributor}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedContributor?.name || ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedContributor && (
            <Container>
              <Row>
                <Col xs={12} md={5}>
                  <img
                    src={selectedContributor.image}
                    alt={selectedContributor.name}
                    width="100%"
                    className="contributor-image mb-3"
                    onError={handleContributorImageError}
                  />
                  <p>
                    <b>{selectedContributor.role}</b>
                  </p>
                  <div className="contributor-links">
                    {selectedContributor.linkedin && (
                      <a
                        rel="noopener noreferrer"
                        href={selectedContributor.linkedin}
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
                    {selectedContributor.github && (
                      <a
                        rel="noopener noreferrer"
                        href={selectedContributor.github}
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
                    {selectedContributor.portfolio && (
                      <a
                        rel="noopener noreferrer"
                        href={selectedContributor.portfolio}
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
                  <div dangerouslySetInnerHTML={{ __html: selectedContributor.bio }} />
                </Col>
              </Row>
            </Container>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}