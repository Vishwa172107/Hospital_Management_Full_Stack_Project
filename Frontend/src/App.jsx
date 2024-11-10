// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HospitalNavbar from './nav';
import Home from './Home';
import BookAppointment from './Book';
import Footer from './Footer';
import ContactUs from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Doctors } from './Doctors';

function App() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3535/doctors-data")
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.error("Error fetching Doctors", error));
  }, []);

  const timeSlots = ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM'];

  return (
    <Router>
      <div>
        <HospitalNavbar doctors={doctors} />
        <Routes>
          <Route path="/" element={<Home doctors={doctors} />} />
          <Route path="/find-doctor" element={<Doctors doctors={doctors} />} />
          <Route path="/book/:doctorId" element={<BookAppointment doctors={doctors} timeSlots={timeSlots} />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

