import { useState } from 'react';
import contributionData from './contributiondata';
import './ContributePage.css';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const { enrichedContributions } = contributionData;

export default function ContributionCards() {
  return (
    <Container className="contributions-container">
      <h2 className="section-title">Featured Contributions</h2>
      {enrichedContributions.map((contribution) => (
        <Card key={contribution.id} className="mb-3 contribution-card">
          <Row noGutters>
            <Col md={4} className="image-container">
              <Card.Img
                variant="top"
                src={`/images/contributions/${contribution.id}.jpg`} // Image file should be named after contribution ID
                alt={contribution.title}
                className="contribution-image"
              />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title>{contribution.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">A great project to be part of!</Card.Subtitle>
                <div className="contributors">
                  <strong>Contributors:</strong>
                  {contribution.contributors.map((contributor) => (
                    <Button
                      key={contributor.id}
                      variant="link"
                      className="contributor-name"
                    >
                      {contributor.name}
                    </Button>
                  ))}
                </div>
                <Button
                  variant="outline-primary"
                  className="expand-button"
                >
                  Read More
                </Button>
                <div className="expanded-section">
                  <p>
                    This is a detailed description of {contribution.title}. Here you can explain what the project is about, why it’s important, and how people can contribute.
                  </p>                
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </Container>
  );
}
