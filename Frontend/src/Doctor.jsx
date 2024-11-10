// src/components/DoctorCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function DoctorCard({ id, name, photo, speciality, rating }) {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate(`/book/${id}`);
  };

  return (
    <Card style={{ width: '18rem' }} className="shadow-sm">
      <Card.Img variant="top" src={photo} alt={`${name}'s photo`} style={{ height: '250px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Specialty: {speciality}</Card.Text>
        <Card.Text>Rating: ⭐ {rating}</Card.Text>
        <Button variant="primary" onClick={handleBookAppointment}>Book Appointment</Button>
      </Card.Body>
    </Card>
  );
}

export default DoctorCard;
