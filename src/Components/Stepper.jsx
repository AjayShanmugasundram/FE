import React from 'react'
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Box from '@mui/material/Box';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label:"sn",
    imgPath:
      "https://gos3.ibcdn.com/bms-lp-1516256333.gif",
  },
  {
    label: "Bird",
    imgPath:
      "https://in.bmscdn.com/offers/tncbanner/rbl-bank-younique-credit-card-offer-rblyouc520.jpg?15122021173244",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://yc.cldmlk.com/2nde9tr9eny7gc52vzfh7jt3j8/1638984946361_spider_man_no_way_home_banner_hd_by_andrewvm_deu7no3-fullview.jpg",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://in.bmscdn.com/offers/tncbanner/icici-bank-buy-one-get-one-on-select-debit-cards-icicor0813.jpg",
  },
];
export default function Stepper() {
 const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
    /////////----------------------------->stepper<----------------------------------////

  return (
  
    <Box sx={{ maxWidth: "100%", flexGrow: 3,}}>
      
    
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: "block",
                  maxWidth: "100%",
                  overflow: "hidden",
                  width: "100%",
              
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
      <MobileStepper
      sx={{  background:"#202020" ,  boxShadow: "0 6px 18px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.)"
    }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{backgroundColor:" background: linear-gradient(90deg, #efd5ff 0%, #515ada 100%)"}}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
        }
      />
    </Box>

  )
}
