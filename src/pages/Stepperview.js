import React , {useState , useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import $ from 'jquery'
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));


  
  
  function getSteps() {
    return ['Select profile image', 'personal info', 'Create an ad'];
  }


  
  
 

function Stepperview() {

    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const steps = getSteps();

    const [previewimage, setpreviewimage] = useState("")

    const isStepOptional = (step) => {
        return step === 1;
      };
    
      const isStepSkipped = (step) => {
        return skipped.has(step);
      };
    
      const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
          newSkipped = new Set(newSkipped.values());
          newSkipped.delete(activeStep);
        }
    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

      const prev = () =>{
       const url = URL.createObjectURL(document.getElementById('prof-img').files[0])
       setpreviewimage(url)
      }
    
      function Profilephoto() {

    
        return(
          <div className="col-12 text-center mb-5 mt-5">
             <div  className="d-flex justify-content-center mt-5" >
             <Avatar style={{width:160, height:160}}  alt="Haboubi amine" src={previewimage} />
             </div>
            <div  className="d-flex justify-content-center mt-3" >
            <input accept="image/*"  id="prof-img" type="file"  style={{display:'none'}} onChange={()=>{prev()}}/>
            <label htmlFor="prof-img">
              <IconButton color="primary"  aria-label="upload picture" component="span">
                <PhotoCamera style={{color:'#2DCD94'}}/>
              </IconButton>
            </label>
             </div>
            
          </div>
        )
      }
    
      function Info() {
        return(
          <div className=" col-12 text-center mb-5 mt-5 justify-content-center">
            
                <TextField className="mr-4" id="nom" label="Nom" variant="outlined" />
                <TextField className="ml-4" id="prenom" label="Prenom" variant="outlined" /><br/>
                <TextField className="mr-4 mt-4" id="tel" label="N°tel" variant="outlined" /> 
                <TextField className="ml-4 mt-4" size="medium" id="address" label="address" variant="outlined" />

              
          </div>
        )
      }
    
      function Prof() {
        return(
          <div className="col-12 text-center">
              Prof
          </div>
        )
      }
    
      function getStepContent(step) {
        switch (step) {
          case 0:
            return <Profilephoto />;
          case 1:
            return <Info />;
          case 2:
            return  <Prof />;
          default:
            return 'Unknown step';
        }
      }
   
    return (
        <div className={classes.root}>
      <Stepper  activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }

          return (
            <Step  key={label} {...stepProps}>
              <StepLabel  {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
          </div>
        ) : (
          <div className="row justify-content-center">
            {getStepContent(activeStep)}
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
    )
}

export default Stepperview
