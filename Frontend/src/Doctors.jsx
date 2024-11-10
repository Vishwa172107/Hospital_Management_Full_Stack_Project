import React, { useState } from 'react';
import DoctorCard from './Doctor';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export function Doctors({ doctors }){
    return(
        <Container className="my-5">
      <h1 className="text-center mb-5 text-primary">Meet Our Doctors</h1>
      <Row>
        {doctors.map((doctor, index) => (
          <Col key={index} lg={3} md={4} sm={6} className="d-flex justify-content-center mb-4">
            <DoctorCard
            id = {doctor._id}
              name={doctor.name}
              photo={doctor.photo}
              speciality={doctor.speciality}
              rating={doctor.rating}
            />
          </Col>
        ))}
      </Row>
    </Container>
    )
}