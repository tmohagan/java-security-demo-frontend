// src/components/Profile.js

import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState({
    email: '',
    phoneNumber: '',
    address: '',
    creditCardNumber: ''
  });

  useEffect(() => {
    // Fetch user data from the backend
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/users/current');
        setUser(response.data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/users/${user.email}`, user);
      console.log('User updated:', response.data);
      // Show success message
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Profile
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
          disabled
        />
        <TextField
          fullWidth
          margin="normal"
          label="Phone Number"
          name="phoneNumber"
          value={user.phoneNumber}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Address"
          name="address"
          value={user.address}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Credit Card Number"
          name="creditCardNumber"
          value={user.creditCardNumber}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Update Profile
        </Button>
      </form>
    </Container>
  );
};

export default Profile;