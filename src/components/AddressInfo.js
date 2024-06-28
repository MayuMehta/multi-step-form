import React from 'react';
// import { TextField, Grid } from '@material-ui/core';
import { Grid, TextField } from '@mui/material';


const AddressInfo = ({ formData, setFormData, handleNext, handleBack, errors, validate }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Address Line 1"
          name="address1"
          value={formData.address1}
          onChange={handleChange}
          error={!!errors.address1}
          helperText={errors.address1}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Address Line 2"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          error={!!errors.city}
          helperText={errors.city}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
          error={!!errors.state}
          helperText={errors.state}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Zip Code"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          error={!!errors.zip}
          helperText={errors.zip}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default AddressInfo;
