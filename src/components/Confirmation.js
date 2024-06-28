import React from 'react';
import { Typography, List, ListItem, ListItemText, Grid } from '@mui/material';

const Confirmation = ({ formData, handleBack, handleSubmit }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Review your details</Typography>
      </Grid>
      <Grid item xs={12}>
        <List>
          <ListItem>
            <ListItemText primary="Name" secondary={formData.name} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={formData.email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Phone" secondary={formData.phone} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Address Line 1" secondary={formData.address1} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Address Line 2" secondary={formData.address2} />
          </ListItem>
          <ListItem>
            <ListItemText primary="City" secondary={formData.city} />
          </ListItem>
          <ListItem>
            <ListItemText primary="State" secondary={formData.state} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Zip Code" secondary={formData.zip} />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default Confirmation;
