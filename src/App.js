import React, { useState, useEffect } from 'react';
import PersonalInfo from './components/PersonalInfo';
import AddressInfo from './components/AddressInfo';
import Confirmation from './components/Confirmation';
// import { Container, Button, Stepper, Step, StepLabel } from '@material-ui/core';
import { Container, Button, Stepper, Step, StepLabel } from '@mui/material';

const getSteps = () => {
  return ['Personal Information', 'Address Information', 'Confirmation'];
};

const getStepContent = (step, formData, setFormData, handleNext, handleBack, errors, validate) => {
  switch (step) {
    case 0:
      return <PersonalInfo formData={formData} setFormData={setFormData} handleNext={handleNext} errors={errors} validate={validate} />;
    case 1:
      return <AddressInfo formData={formData} setFormData={setFormData} handleNext={handleNext} handleBack={handleBack} errors={errors} validate={validate} />;
    case 2:
      return <Confirmation formData={formData} handleBack={handleBack} handleSubmit={handleNext} />;
    default:
      return 'Unknown step';
  }
};

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });
  const [errors, setErrors] = useState({});
  const steps = getSteps();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleNext = () => {
    if (validateForm()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    switch (activeStep) {
      case 0:
        if (!formData.name) {
          valid = false;
          newErrors.name = 'Name is required';
        }
        if (!formData.email) {
          valid = false;
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          valid = false;
          newErrors.email = 'Email address is invalid';
        }
        if (!formData.phone) {
          valid = false;
          newErrors.phone = 'Phone number is required';
        }
        break;
      case 1:
        if (!formData.address1) {
          valid = false;
          newErrors.address1 = 'Address Line 1 is required';
        }
        if (!formData.city) {
          valid = false;
          newErrors.city = 'City is required';
        }
        if (!formData.state) {
          valid = false;
          newErrors.state = 'State is required';
        }
        if (!formData.zip) {
          valid = false;
          newErrors.zip = 'Zip Code is required';
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <h1>All steps completed</h1>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep, formData, setFormData, handleNext, handleBack, errors, validateForm)}
            <div>
              {activeStep !== 0 && (
                <Button onClick={handleBack}>
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}

export default App;
