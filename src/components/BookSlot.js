import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
  },
}));
export default function BookSlot(props) {
  const classes = useStyles();

  const [fname, setFname] = React.useState();
  const [interviewerId] = React.useState(props.iID);
  const [candidateEmailId, setCandidateEmailId] = React.useState();
  const [date, setDate] = React.useState(new Date());
  const [progress, setProgress] = React.useState(false);
  const [bookingStatus, setBookingStatus] = React.useState();
  const [error, setError] = React.useState();
  const [emailError, setEmailError] = React.useState();
  const [dateError, setDateError] = React.useState();

  const handleEmailChange = (event) => {
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    if (!validEmailRegex.test(event.target.value)) {
      setEmailError(true);
      setError(true);
    } else {
      setError(false);
      setEmailError(false);
    }
    setCandidateEmailId(event.target.value);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleSubmit = () => {
    if (candidateEmailId === undefined || date === undefined) {
      setError("Multiple fields are missing!");
    } else {
      setProgress(true);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      var urlencoded = new URLSearchParams();
      urlencoded.append("intervieweremail", interviewerId);
      urlencoded.append("candidateEmail", candidateEmailId);
      urlencoded.append("bookingdate", date);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
        // mode: "no-cors",
      };

      fetch(
        "https://recruitbay-backend.herokuapp.com/bookings/addbooking",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          setProgress(false);
          setBookingStatus(result.message);
          console.log(result);
        })
        .catch((error) => console.log("error", error));
    }
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Book Slot
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            required
            id="candidateemail"
            name="candidateemail"
            label="Candidate Email"
            error={emailError}
            fullWidth
            onChange={handleEmailChange}
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          {/* <TextField
            disablePast
            minDate={new Date()}
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            error={dateError}
            fullWidth
            onChange={handleDateChange}
            InputLabelProps={{
              shrink: true,
            }}
          /> */}
          <MuiPickersUtilsProvider width="100%" utils={DateFnsUtils}>
            <KeyboardDatePicker
              fullWidth
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker"
              label="Next Appointment"
              value={date}
              disablePast
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={error}
            // className={classes.button}
          >
            Submit
          </Button>
        </Grid>
        <Grid item xs={6}>
          {progress ? <CircularProgress size={20} /> : null}
          {bookingStatus === "Success"
            ? "Booking confirmed!, you will recieve emails about any further communication."
            : null}
        </Grid>
        <Grid item xs={12}>
          <Typography>{error}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
