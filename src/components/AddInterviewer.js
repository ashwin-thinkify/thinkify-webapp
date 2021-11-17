import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import ProfileDetails from "./ProfileDetails";
import Skills from "./Skills";
import Companies from "./Companies";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    height: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["Profile", "Skills", "Companies"];

function getStepContent(step, hpc, hsc, hcc, skills, companies, profileData) {
  switch (step) {
    case 0:
      return (
        <ProfileDetails
          activeStep={step}
          handleProfileChange={hpc}
          data={profileData}
        />
      );
    case 1:
      return (
        <Skills activeStep={step} handleSkillChange={hsc} skillData={skills} />
      );
    case 2:
      return (
        <Companies
          activeStep={step}
          handleCompaniesChange={hcc}
          companyData={companies}
        />
      );
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [contact, setContact] = React.useState();
  const [email, setEmail] = React.useState();
  const [linkedInProfile, setLinkedInProfile] = React.useState();
  const [skills, setSkills] = React.useState([]);
  const [companies, setCompanies] = React.useState([]);
  const [hideContact, setHideContact] = React.useState(false);
  const [fnerror, setFnError] = React.useState(false);
  const [lnerror, setLNError] = React.useState(false);
  const [cerror, setCError] = React.useState(false);
  const [emerror, setEmError] = React.useState(false);
  const [lperror, setLPError] = React.useState(false);
  const [progress, setProgresss] = React.useState(false);
  const [responseStatus, setResponseStatus] = React.useState();

  const getErrorStatus = () => {
    if (fnerror || lnerror || cerror || emerror || lperror) return true;
    return false;
  };
  const handleProfileChange = (event) => {
    switch (event.target.name) {
      case "firstName":
        const validFirstNameRegex = RegExp(
          /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        );
        if (!validFirstNameRegex.test(event.target.value)) setFnError(true);
        else setFnError(false);
        setFirstName(event.target.value);
        break;
      case "lastName":
        const validLastNameRegex = RegExp(
          /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        );
        if (!validLastNameRegex.test(event.target.value)) setLNError(true);
        else setLNError(false);
        setLastName(event.target.value);
        break;
      case "contact":
        const validPhoneRegex = RegExp(
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        );
        if (!validPhoneRegex.test(event.target.value)) setCError(true);
        else setCError(false);
        setContact(event.target.value);
        break;
      case "email":
        const validEmailRegex = RegExp(
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );
        if (!validEmailRegex.test(event.target.value)) setEmError(true);
        else setEmError(false);
        setEmail(event.target.value);
        break;
      case "linkedin":
        const validLinkedInProfile = RegExp(
          /(ftp|http|https):\/\/?((www|\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        );
        if (!validLinkedInProfile.test(event.target.value)) setLPError(true);
        else setLPError(false);
        setLinkedInProfile(event.target.value);
        break;
      case "contactpublic":
        setHideContact(!hideContact);
        break;
    }
  };

  const handleSkillChange = (event) => {
    skills[event.target.name] = event.target.value;
  };

  const handleCompaniesChange = (event) => {
    companies[event.target.name] = event.target.value;
  };

  const handleNext = () => {
    // console.log("skills", );
    // console.log("companies", companies);
    if (activeStep === steps.length - 1) {
      console.log("skills", typeof skills);
      console.log("companies", typeof companies);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      var urlencoded = new URLSearchParams();
      urlencoded.append("name", firstName + " " + lastName);
      urlencoded.append("contact", contact);
      urlencoded.append("email", email);
      urlencoded.append("linkedinprofile", linkedInProfile);
      urlencoded.append("skills", [
        skills["skill1"],
        skills["skill2"],
        skills["skill3"],
        skills["skill4"],
      ]);
      urlencoded.append("companies", [
        companies["company1"],
        companies["company2"],
        companies["company3"],
        companies["company4"],
      ]);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };

      fetch(
        "https://recruitbay-backend.herokuapp.com/interviewers/addinterviewer",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.message === "Success") setActiveStep(activeStep + 1);
          else setResponseStatus(result.message);
        })
        .catch((error) => console.log("error", error));
    } else setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Register
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for registering with us{" "}
                  {firstName + " " + lastName + "."}
                </Typography>
                <Typography variant="subtitle1">
                  Your profile will be displayed public. You will recieve emails
                  about any further communications.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(
                  activeStep,
                  handleProfileChange,
                  handleSkillChange,
                  handleCompaniesChange,
                  skills,
                  companies,
                  [
                    { value: firstName, error: fnerror },
                    { value: lastName, error: lnerror },
                    { value: contact, error: cerror },
                    { value: email, error: emerror },
                    { value: linkedInProfile, error: lperror },
                    hideContact,
                  ]
                )}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    disabled={getErrorStatus()}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Submit" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
