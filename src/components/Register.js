// src/components/Register.js

import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

const Register = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    creditCardNumber: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/register', user);
      console.log(response.data);
      // Redirect to login page or show success message
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Phone Number"
          name="phoneNumber"
          value={user.phoneNumber}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Address"
          name="address"
          value={user.address}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Credit Card Number"
          name="creditCardNumber"
          value={user.creditCardNumber}
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </form>
    </Container>
  );
};

export default Register;