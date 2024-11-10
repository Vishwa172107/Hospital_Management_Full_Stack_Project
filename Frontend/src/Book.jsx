// src/components/BookAppointment.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function BookAppointment({ doctors, timeSlots }) {
  const { doctorId } = useParams();

  const [formData, setFormData] = useState({
    patientName: '',
    patientAge: '',
    doctor: '',
    appointmentDate: '',
    slot: ''
  });

  useEffect(() => {
    if (doctorId) {
      const selectedDoctor = doctors.find(doctor => doctor._id === doctorId);
      if (selectedDoctor) {
        setFormData(prevData => ({
          ...prevData,
          doctor: selectedDoctor._id
        }));
      }
    }
    else{
      setFormData(prevData => ({
        ...prevData,
        }));
    }
  }, [doctorId, doctors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3535/appointment-form", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      console.log("Appointment booked:", result);
      const selectedDoctor = doctors.find(doc => doc._id === formData.doctor);
      alert(`Appointment booked for ${formData.patientName} with ${selectedDoctor ? selectedDoctor.name : "selected doctor"} on ${formData.appointmentDate} at ${formData.slot}`);
    } catch (error) {
      console.error("Error sending form data", error);
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Book an Appointment</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="patientName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="patientAge" className="mt-3">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your age"
                name="patientAge"
                value={formData.patientAge}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="doctor" className="mt-3">
              <Form.Label>Doctor</Form.Label>
              <Form.Control
                as="select"
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                required
              >
                <option value="">Select a doctor</option>
                {doctors.map((doctor) => (
                  <option key={doctor._id} value={doctor._id}>
                    {doctor.name} - {doctor.speciality}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="appointmentDate" className="mt-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="slot" className="mt-3">
              <Form.Label>Time Slot</Form.Label>
              <Form.Control
                as="select"
                name="slot"
                value={formData.slot}
                onChange={handleChange}
                required
              >
                <option value="">Select a time slot</option>
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot}>
                    {slot}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4 w-100">
              Book Appointment
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default BookAppointment;
