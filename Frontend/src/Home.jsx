import React, { useState } from 'react';
import DoctorCard from './Doctor';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Home({ doctors }) {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const contact = await fetch("https://hospital-management-full-stack-project.onrender.com/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });
      
      if (contact.ok) {
        alert(`Thank you, ${contactData.name}. Your message has been received!`);
        setContactData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        alert("There was an issue submitting your message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Container className="my-5">
        <h1 className="text-center mb-5 text-primary">Meet Our Doctors</h1>
        <Row>
          {doctors.map((doctor, index) => (
            <Col key={index} lg={3} md={4} sm={6} className="d-flex justify-content-center mb-4">
              <DoctorCard
                id={doctor._id}
                name={doctor.name}
                photo={doctor.photo}
                speciality={doctor.speciality}
                rating={doctor.rating}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <h2 className="text-center mb-4">Contact Us</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={contactData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={contactData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mt-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your message"
                  name="message"
                  value={contactData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-4 w-100">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
