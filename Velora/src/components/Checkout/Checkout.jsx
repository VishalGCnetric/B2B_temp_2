import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Summary from "./Summary"; // Assuming there's a Summary component
import AddressForm from "./Address";
import PaymentForm from "./Payment";
import ShipmentComponent from "./Shipment";

const sharedClassNames = {
  relative: "relative",
  spanBlock: "block w-48  mt-2", 
  addressText: "text-center font-semibold text-black-900",
  summaryText: "text-center text-zinc-900"
};

const Step = ({ text, active }) => {
  return (
    <div className={sharedClassNames.relative}>
      <span className={`${sharedClassNames.spanBlock} ${active ? sharedClassNames.addressText : sharedClassNames.summaryText}`}>{text}</span>
    </div>
  );
};

const Steps = ({ steps, currentStep }) => {
  const progressWidth = 12.5 +(currentStep * 25);
  
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <div className="w-full bg-gray-300 h-1 mb-4">
        <div
          className="bg-black h-1"
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
      <div className="flex items-center justify-center">
        {steps.map((step, index) => (
          <Step key={index} text={step} active={index <= currentStep} />
        ))}
      </div>
    </div>
  );
};

// Define the steps for the stepper
const steps = ["Address", "Shipment", "Payment", "Summary"];

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0); // State to manage active step
  const location = useLocation(); // Get the current location
  const queryParams = new URLSearchParams(location.search); // Extract query parameters from URL
  const step = parseInt(queryParams.get('step'), 10) || 0; // Get the step from query parameter or default to 0
  const navigate = useNavigate(); // Hook for navigating to different routes

  // Effect to update the active step when the URL changes
  useEffect(() => {
    setActiveStep(step);
  }, [step]);

  // Function to handle moving to the next step
  const handleNext = () => {
    const nextStep = activeStep + 1; // Calculate the next step
    setActiveStep(nextStep); // Update the active step
    navigate(`/checkout?step=${nextStep}`); // Navigate to the next step
  };

  // Function to handle moving to the previous step
  const handleBack = () => {
    const prevStep = activeStep - 1; // Calculate the previous step
    setActiveStep(prevStep); // Update the active step
    navigate(`/checkout?step=${prevStep}`); // Navigate to the previous step
  };

  // Function to reset the stepper to the first step
  const handleReset = () => {
    setActiveStep(0); // Reset the active step to 0
    navigate('/checkout?step=0'); // Navigate to the first step
  };

  // Function to render the current step component
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <AddressForm handleNext={handleNext} />;
      case 1:
        return <ShipmentComponent handleNext={handleNext} handleBack={handleBack} />;
      case 2:
        return <PaymentForm handleNext={handleNext} handleBack={handleBack} />;
      case 3:
        return <Summary handleNext={handleNext} handleBack={handleBack} />;
      default:
        return <AddressForm handleNext={handleNext} />;
    }
  };

  return (
    <div className="pt-10 w-full bg-[#f7f1ed]  px-5 lg:px-8" >
      {/* Display the current step in the stepper */}
      <div className="w-[80%] mb-4 m-auto flex items-center justify-center">
        <Steps steps={steps} currentStep={activeStep} />
      </div>

      {/* Conditional rendering based on the active step */}
      {renderStepContent(activeStep)}

      {/* Navigation buttons */}
      {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          variant="contained"
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={activeStep === steps.length - 1 ? handleReset : handleNext}
        >
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button> */}
      {/* </Box> */}
    </div>
  );
}
