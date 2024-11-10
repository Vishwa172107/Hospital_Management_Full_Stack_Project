// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light text-center py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>About Us</h5>
            <p>Leading healthcare provider with trusted doctors.</p>
          </Col>
          <Col md={6}>
            <h5>Contact Us</h5>
            <p>info@hospital.com | +1 123 456 7890</p>
            <div>
              <a href="https://www.instagram.com" className="me-3">Instagram</a>
              <a href="https://www.linkedin.com">LinkedIn</a>
            </div>
          </Col>
        </Row>
        <p className="mt-3">© 2024 Hospital Name. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
