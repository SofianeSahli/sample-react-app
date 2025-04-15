import React, { useState } from 'react';

const FormSample = () => {
  // State variables for form fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // State variables for error messages
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  // Validation functions
  const validateName = () => {
    if (!name) {
      setNameError('Name is required');
      return false;
    }
    setNameError('');
    return true;
  };

  const validatePhone = () => {
    if (!phone) {
      setPhoneError('Phone number is required');
      return false;
    }
    if (phone.length < 8) {
      setPhoneError('Phone number must be at least 8 digits');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      setEmailError('Email is required');
      return false;
    }
    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email');
      return false;
    }
    setEmailError('');
    return true;
  };

  // Handle form submission
  const handleSubmit = (event : any) => {
    event.preventDefault();

    const isNameValid = validateName();
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();

    if (isNameValid && isPhoneValid && isEmailValid) {
      alert('Form submitted successfully!');
      // You can now process the form data, e.g., send it to an API
    }
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={validateName}
          />
          {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={validatePhone}
          />
          {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormSample;
