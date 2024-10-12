import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CompDet1 from '../compDet1/compDet1'
import CompDet2 from '../compDet2/CompDet2';

const steps = [
  {
    label: 'Account Details',
    description: `Update your account information and settings.`,
  },
  {
    label: 'Team and College',
    description:
      'Manage your team members and add information about your college.',
  },
  {
    label: 'Professional',
    description: `Enter your professional details and career information.`,
  },
];

export default function Sidebar() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
     <div className='flex w-full justify-center'>
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 5 }}>
      <Box
        sx={{
          backgroundColor: '#fff',
          p: 3,
          height: '95%',
          borderRadius: 4,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                StepIconProps={{
                  sx: {
                    ...(activeStep === index || activeStep > index
                      ? {}
                      : {
                          backgroundColor: '#AE01FF',
                          color: '#fff',
                          borderRadius: '50%',
                          zIndex: 1,
                          width: 30,
                          height: 30,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }),
                  },
                }}
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ 
                      mr: 1, 
                      backgroundColor: '#AE01FF', 
                      '&:hover': { backgroundColor: '#9201D1' }
                    }}
                    disabled={activeStep === steps.length - 1}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ color: '#AE01FF' }}
                  >
                    Back
                  </Button>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3, mt: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button
              onClick={handleReset}
              sx={{ mt: 2, backgroundColor: '#AE01FF', color: '#fff', '&:hover': { backgroundColor: '#9201D1' } }}
            >
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </Box>

    {activeStep === 0 && (
     <CompDet1 />)}

     {activeStep === 1 && (
     <CompDet2 />)}


    </div>
  );
}
