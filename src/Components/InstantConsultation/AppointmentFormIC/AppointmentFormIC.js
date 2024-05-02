import React, { useState } from 'react';

const AppointmentFormIC = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };

    const handleDateSelection = (date) => {
      setSelectedDate(date);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber, selectedSlot, selectedDate });
      setName('');
      setPhoneNumber('');
      setSelectedSlot(null);
      setSelectedDate('');
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Appointment Date:</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Appointment Time:</label>
          <input
            type="time"
            id="time"
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
            required
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
};

export default AppointmentFormIC;
