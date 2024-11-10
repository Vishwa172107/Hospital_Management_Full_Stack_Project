import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomNavbar({ doctors }) {
  // Construct the Book Appointment link only if there is a doctor available
  const appointmentLink = doctors && doctors[0] ? `/book/${doctors[0]._id}` : "/find-doctor";

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Nav.Link as={Link} to="/" className="nav-link">
          <Navbar.Brand className="d-flex align-items-center">
            <img
              src="https://media.istockphoto.com/id/1624291952/vector/medical-health-logo-design-illustration.jpg?s=612x612&w=0&k=20&c=RdOq1SRcWwS_12_c5Zg2_QOUz1GD-YwGvfRodtOPN5w="
              alt="Hospital Logo"
              style={{ width: '50px', marginRight: '10px' }}
            />
            <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#007bff' }}>
              Health Hospitals
            </span>
          </Navbar.Brand>
        </Nav.Link>
        
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/find-doctor" className="nav-link">
              Find a Doctor
            </Nav.Link>
            <Nav.Link as={Link} to={appointmentLink} className="nav-link">
              Book an Appointment
            </Nav.Link>
            <Nav.Link as={Link} to="/contact-us" className="nav-link">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
